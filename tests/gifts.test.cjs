const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const script = fs.readFileSync(path.join(__dirname, '..', 'script.js'), 'utf8');

function createElement() {
  const classes = new Set();
  return {
    innerHTML: '', textContent: '', value: '', src: '', hidden: false,
    style: {}, children: [],
    set className(value) {
      classes.clear();
      value.split(/\s+/).filter(Boolean).forEach(name => classes.add(name));
    },
    get className() { return [...classes].join(' '); },
    classList: {
      add(...names) { names.forEach(name => classes.add(name)); },
      remove(...names) { names.forEach(name => classes.delete(name)); },
      contains(name) { return classes.has(name); },
      toggle(name, force) {
        const add = force === undefined ? !classes.has(name) : force;
        if (add) classes.add(name); else classes.delete(name);
        return add;
      },
    },
    appendChild(child) { this.children.push(child); },
  };
}

function loadPage(now = '2026-11-16T12:00:00') {
  const elements = new Map();
  const pending = [];
  const document = {
    getElementById(id) {
      if (!elements.has(id)) elements.set(id, createElement());
      return elements.get(id);
    },
    createElement,
    querySelectorAll() { return []; },
    addEventListener() {},
  };
  const context = vm.createContext({
    document,
    window: { scrollTo() {} },
    Date: class extends Date {
      constructor(...args) { super(...(args.length ? args : [now])); }
    },
    requestAnimationFrame(callback) { callback(); },
    setTimeout(callback) { pending.push(callback); },
    setInterval() {},
  });
  vm.runInContext(script, context);
  return {
    context, document,
    evaluate(source) { return vm.runInContext(source, context); },
    flushTimers() { while (pending.length) pending.shift()(); },
    cards() {
      const grid = document.getElementById('gifts-grid');
      grid.children = [];
      context.renderGifts();
      return grid.children;
    },
  };
}

test('future date gifts stay locked and summer has no opening control', () => {
  const page = loadPage();
  const cards = page.cards();
  assert.ok(cards[0].classList.contains('locked'));
  assert.match(cards[0].innerHTML, /mini-countdown-gift-carta/);
  assert.match(cards[0].innerHTML, /disabled/);
  assert.ok(cards[4].classList.contains('locked'));
  assert.match(cards[4].innerHTML, /Se abre en verano/);
  assert.doesNotMatch(cards[4].innerHTML, /<button/);
});

test('wall gift unlocks only when four photos have been added', () => {
  const page = loadPage();
  assert.ok(page.cards()[5].classList.contains('locked'));
  page.evaluate('WALL_PHOTOS.push({}, {}, {})');
  assert.ok(page.cards()[5].classList.contains('locked'));
  page.evaluate('WALL_PHOTOS.push({})');
  const card = page.cards()[5];
  assert.ok(!card.classList.contains('locked'));
  assert.match(card.innerHTML, />Abrir<\/button>/);
});

test('password gift rejects an incorrect password and opens its images with the right one', () => {
  const page = loadPage();
  const card = page.cards()[2];
  const input = page.document.getElementById('pw-gift-noche');
  input.closest = () => card;
  input.value = 'incorrecta';
  page.evaluate("unlockWithPassword('gift-noche', GIFTS[2].unlockPassword)");
  assert.equal(page.document.getElementById('pw-err-gift-noche').style.display, 'block');
  assert.ok(card.classList.contains('locked'));
  assert.ok(!page.document.getElementById('giftFlyerOverlay').classList.contains('flyer-overlay--visible'));
  page.evaluate("document.getElementById('pw-gift-noche').value = GIFTS[2].unlockPassword.toUpperCase()");
  page.evaluate("unlockWithPassword('gift-noche', GIFTS[2].unlockPassword)");
  assert.ok(!card.classList.contains('locked'));
  assert.equal(page.document.getElementById('giftFlyerImg').src, 'assets/noche_1.webp');
  assert.equal(page.document.getElementById('giftFlyerCounter').textContent, '1 / 3');
});

test('single image invitation supports opening, zoom and closing', () => {
  const page = loadPage();
  page.context.openGiftFlyer('Una invitación', 'noche_1.webp');
  page.flushTimers();
  const overlay = page.document.getElementById('giftFlyerOverlay');
  assert.equal(page.document.getElementById('giftFlyerImg').src, 'assets/noche_1.webp');
  assert.equal(page.document.getElementById('giftFlyerTitle').textContent, 'Una invitación');
  assert.equal(page.document.getElementById('giftFlyerCounter').textContent, '');
  assert.ok(overlay.classList.contains('flyer-single'));
  assert.ok(overlay.classList.contains('flyer-overlay--open'));
  page.context.toggleFlyerZoom();
  assert.ok(overlay.classList.contains('flyer-overlay--zoomed'));
  page.context.closeGiftFlyer();
  page.flushTimers();
  assert.ok(!overlay.classList.contains('flyer-overlay--visible'));
  assert.ok(!overlay.classList.contains('flyer-overlay--zoomed'));
});

test('multiple image invitation keeps navigation and wraps in both directions', () => {
  const page = loadPage();
  page.context.openGiftFlyer('Una invitación', ['noche_1.webp', 'noche_2.webp']);
  const overlay = page.document.getElementById('giftFlyerOverlay');
  assert.ok(!overlay.classList.contains('flyer-single'));
  page.context.flyerNav(1);
  page.flushTimers();
  assert.equal(page.document.getElementById('giftFlyerImg').src, 'assets/noche_2.webp');
  assert.equal(page.document.getElementById('giftFlyerCounter').textContent, '2 / 2');
  page.context.flyerNav(1);
  page.flushTimers();
  assert.equal(page.document.getElementById('giftFlyerImg').src, 'assets/noche_1.webp');
  page.context.flyerNav(-1);
  page.flushTimers();
  assert.equal(page.document.getElementById('giftFlyerImg').src, 'assets/noche_2.webp');
});

test('spring gift opens its invitation image with the exact title and description', () => {
  const page = loadPage();
  const card = page.cards()[3];
  assert.ok(!card.classList.contains('locked'));
  assert.match(card.innerHTML, /<h3 class="gift-name">¿Preparada para perder\?<\/h3>/);
  assert.match(card.innerHTML, /<p class="gift-hint">De la Wii a la realidad<\/p>/);
  const opening = card.innerHTML.match(/onclick="([^"]+)"[^>]*>Abrir<\/button>/);
  assert.ok(opening, 'spring gift must have an enabled opening button');
  page.evaluate(opening[1]);
  page.flushTimers();
  const overlay = page.document.getElementById('giftFlyerOverlay');
  const message = page.document.getElementById('giftFlyerMessage');
  assert.ok(overlay.classList.contains('flyer-overlay--open'));
  assert.equal(page.document.getElementById('giftFlyerTitle').textContent, '¿Preparada para perder?');
  assert.equal(message.hidden, true);
  assert.equal(message.textContent, '');
  const image = page.document.getElementById('giftFlyerImg');
  assert.equal(image.hidden, false);
  assert.equal(image.src, 'assets/primavera.png');
  const imageBytes = fs.readFileSync(path.join(__dirname, '..', image.src));
  assert.equal(imageBytes.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
  assert.ok(overlay.classList.contains('flyer-single'));
  assert.ok(!overlay.classList.contains('flyer-text'));
  page.context.toggleFlyerZoom();
  assert.ok(overlay.classList.contains('flyer-overlay--zoomed'));
  page.context.closeGiftFlyer();
  page.flushTimers();
  assert.ok(!overlay.classList.contains('flyer-overlay--visible'));
  assert.ok(!overlay.classList.contains('flyer-overlay--zoomed'));
});

test('spring opening respects the original date boundary', () => {
  const before = loadPage('2026-09-21T23:59:59').cards()[3];
  assert.ok(before.classList.contains('locked'));
  assert.match(before.innerHTML, /disabled/);
  assert.doesNotMatch(before.innerHTML, /onclick=/);

  const atDate = loadPage('2026-09-22T00:00:00').cards()[3];
  assert.ok(!atDate.classList.contains('locked'));
  assert.match(atDate.innerHTML, /onclick="openGift\('gift-primavera'\)"/);
  assert.doesNotMatch(atDate.innerHTML, /disabled|password-unlock-form/);
});

test('opening another gift after spring restores its image gallery', () => {
  const page = loadPage();
  const card = page.cards()[2];
  page.context.openGift('gift-primavera');
  page.context.closeGiftFlyer();
  page.flushTimers();

  const input = page.document.getElementById('pw-gift-noche');
  input.closest = () => card;
  page.evaluate("document.getElementById('pw-gift-noche').value = GIFTS[2].unlockPassword");
  page.evaluate("unlockWithPassword('gift-noche', GIFTS[2].unlockPassword)");
  page.flushTimers();
  const overlay = page.document.getElementById('giftFlyerOverlay');
  assert.equal(page.document.getElementById('giftFlyerImg').src, 'assets/noche_1.webp');
  assert.equal(page.document.getElementById('giftFlyerTitle').textContent, 'Una noche especial');
  assert.equal(page.document.getElementById('giftFlyerCounter').textContent, '1 / 3');
  assert.equal(page.document.getElementById('giftFlyerMessage').hidden, true);
  assert.ok(!overlay.classList.contains('flyer-single'));
  assert.ok(!overlay.classList.contains('flyer-text'));
  assert.ok(overlay.classList.contains('flyer-overlay--open'));
});

test('switching between text, multiple images and spring resets content and navigation', () => {
  const page = loadPage();
  const overlay = page.document.getElementById('giftFlyerOverlay');
  const message = page.document.getElementById('giftFlyerMessage');
  const image = page.document.getElementById('giftFlyerImg');
  page.context.openGiftFlyer('Un mensaje', undefined, 'Una invitación de texto.');
  assert.ok(overlay.classList.contains('flyer-text'));
  page.context.closeGiftFlyer();
  page.flushTimers();

  page.context.openGiftFlyer('Fotos', ['noche_1.webp', 'noche_2.webp']);
  assert.equal(message.hidden, true);
  assert.equal(message.textContent, '');
  assert.equal(image.hidden, false);
  assert.ok(!overlay.classList.contains('flyer-text'));
  assert.ok(!overlay.classList.contains('flyer-single'));
  assert.equal(page.document.getElementById('giftFlyerCounter').textContent, '1 / 2');
  page.context.closeGiftFlyer();
  page.flushTimers();

  page.context.openGift('gift-primavera');
  assert.equal(message.hidden, true);
  assert.equal(message.textContent, '');
  assert.equal(image.hidden, false);
  assert.equal(image.src, 'assets/primavera.png');
  assert.ok(!overlay.classList.contains('flyer-text'));
  assert.equal(page.document.getElementById('giftFlyerCounter').textContent, '');
  assert.ok(overlay.classList.contains('flyer-single'));
  page.context.flyerNav(1);
  page.flushTimers();
  assert.equal(page.document.getElementById('giftFlyerCounter').textContent, '');
});

test('invitation text is displayed literally without inserting HTML', () => {
  const page = loadPage();
  const text = '<em>Una sorpresa</em>\nNos vemos pronto.';
  page.context.openGiftFlyer('Mensaje', undefined, text);
  const message = page.document.getElementById('giftFlyerMessage');
  assert.equal(message.textContent, text);
  assert.equal(message.innerHTML, '');
  assert.equal(message.hidden, false);
});
