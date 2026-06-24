// ══════════════════════════════════════════════════════════
//  CONFIGURACIÓN ← TODO LO QUE TENÉS QUE EDITAR ESTÁ ACÁ
// ══════════════════════════════════════════════════════════

// 🔑 Contraseña principal para abrir el cofre
const MAIN_PASSWORD = "futuro"; // ← cambiá esto

// ──────────────────────────────────────────────────────────
// 📝 PREGUNTAS DEL QUIZ
// correct: índice de la respuesta correcta (0 = primera opción)
// ──────────────────────────────────────────────────────────
const QUIZ_QUESTIONS = [
  {
    question: "¿En qué lugar nos conocimos?",
    options: ["En la facultad", "Por Instagram", "En una fiesta", "Por amigos en común"],
    correct: 0,
    feedback_correct: "¡Exacto! 🥰",
    feedback_wrong: "Casi… acordate mejor."
  },
  {
    question: "¿Cuál es mi canción favorita de todos los tiempos?",
    options: ["Opción A", "Opción B", "Opción C", "Opción D"],
    correct: 0,
    feedback_correct: "Bien! ✨",
    feedback_wrong: "Hmm, no era esa."
  },
  {
    question: "¿Cuál fue el primer lugar al que fuimos juntos?",
    options: ["Opción A", "Opción B", "Opción C", "Opción D"],
    correct: 0,
    feedback_correct: "Sí! Lo recordás 💫",
    feedback_wrong: "No, esa no fue."
  },
  {
    question: "¿Cuándo fue nuestra primera cita?",
    options: ["Opción A", "Opción B", "Opción C", "Opción D"],
    correct: 0,
    feedback_correct: "¡Claro que sí! 🌸",
    feedback_wrong: "Fijate bien en el calendario."
  },
  {
    question: "¿Cuál es mi comida favorita?",
    options: ["Opción A", "Opción B", "Opción C", "Opción D"],
    correct: 0,
    feedback_correct: "Me conocés bien 😊",
    feedback_wrong: "¡Me conocés poco!"
  }
];

// ──────────────────────────────────────────────────────────
// 📸 FOTOS DEL MINIJUEGO
// El orden correcto es el orden en que las ponés acá (índice 0 = más antigua)
// src: ruta a la foto (ej: "fotos/foto1.jpg") o null para placeholder
// label: nombre del momento que aparece en la tarjeta
// hint: pista para ayudarla a ordenarlas
// ──────────────────────────────────────────────────────────
const SORT_PHOTOS = [
  { src: null, label: "📷 Foto 1", hint: "Pista del primer momento" },
  { src: null, label: "📷 Foto 2", hint: "Pista del segundo momento" },
  { src: null, label: "📷 Foto 3", hint: "Pista del tercer momento" },
  { src: null, label: "📷 Foto 4", hint: "Pista del cuarto momento" },
  { src: null, label: "📷 Foto 5", hint: "Pista del quinto momento" }
];

// ──────────────────────────────────────────────────────────
// 🎁 REGALOS
//
// Tipos disponibles:
//   "available"  → ya disponible, se ve el contenido
//   "date"       → se desbloquea en una fecha (formato "YYYY-MM-DD")
//   "password"   → se desbloquea con una contraseña secreta que vos le das
//   "surprise"   → bloqueado hasta que vos lo cambies a "available"
//
// content: el HTML que aparece cuando se desbloquea (podés poner texto, links, etc)
// ──────────────────────────────────────────────────────────
const GIFTS = [
  {
    id: "gift-1",
    type: "available",
    icon: "💌",
    name: "El primer regalo",
    hint: "Esto es tuyo desde hoy. No necesitás esperar nada.",
    content: `
      <p>Acá va el texto de tu primer regalo. Puede ser una carta, una promesa, una playlist, lo que quieras.</p>
    `
  },
  {
    id: "gift-2",
    type: "date",
    icon: "🏔️",
    name: "El escape perfecto",
    hint: "Un fin de semana para los dos, lejos de todo. Las montañas nos esperan.",
    unlockDate: "2025-12-21",
    content: `<p>Descripción del regalo de Potrerillos o Chacras — completar cuando toque.</p>`
  },
  {
    id: "gift-3",
    type: "password",
    icon: "🍽️",
    name: "Una noche especial",
    hint: "Cuando yo te diga que es el momento, te voy a dar la clave.",
    unlockPassword: "cena2025",
    content: `<p>Descripción de la cena sorpresa — completar cuando toque.</p>`
  },
  {
    id: "gift-4",
    type: "date",
    icon: "☀️",
    name: "El regalo del verano",
    hint: "Cuando llegue el calor, va a aparecer algo para los dos.",
    unlockDate: "2025-12-21",
    content: `<p>Contenido del regalo de verano — completar cuando toque.</p>`
  },
  {
    id: "gift-5",
    type: "surprise",
    icon: "🎊",
    name: "???",
    hint: "Este se va a desbloquear solo. No sé cuándo. Esperalo."
    // Cuando quieras desbloquearlo: cambiá type a "available" y agregá content
  },
  {
    id: "gift-6",
    type: "date",
    icon: "🌸",
    name: "Regalo por definir",
    hint: "Algo lindo está en camino. Todavía lo estoy armando.",
    unlockDate: "2026-03-20",
    content: `<p>Contenido por definir.</p>`
  }
];

// ──────────────────────────────────────────────────────────
// 📸 MURO DE FOTOS
// Empezá con el array vacío. Cuando cumplan un regalo,
// agregá una entrada acá y volvé a subir el archivo.
//
// Formato de cada foto:
//   { src: "fotos/nombre.jpg", caption: "Lo que quieras escribir", date: "enero 2026" }
// ──────────────────────────────────────────────────────────
const WALL_PHOTOS = [
  // Ejemplo (descomentá y completá cuando tengas fotos):
  // { src: "fotos/foto1.jpg", caption: "La primera vez que lo cumplimos ✨", date: "enero 2026" },
];


// ══════════════════════════════════════════════════════════
//  LÓGICA — no necesitás tocar nada de acá para abajo
// ══════════════════════════════════════════════════════════

let quizIndex = 0;
let quizAnswered = false;
let sortOrder = [];
let correctSortOrder = [];
let dragSrcIndex = null;

// ── NAVEGACIÓN ──
function goTo(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
  window.scrollTo(0, 0);
}

function goToGifts() {
  goTo('screen-password');
}

function nextChallenge(n) {
  document.querySelectorAll('#screen-challenges .tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.remove('active', 'done');
    if (i < n) d.classList.add('done');
    if (i === n) d.classList.add('active');
  });
  const el = document.getElementById('challenge-' + n) || document.getElementById('challenge-done');
  if (el) el.classList.add('active');
  window.scrollTo(0, 0);
  if (n === 2) initSortGame();
}

function showPasswordReveal() {
  try { localStorage.setItem('challenges_done', '1'); } catch(e) {}
  document.querySelectorAll('#screen-challenges .tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.dot').forEach(d => { d.classList.remove('active'); d.classList.add('done'); });
  document.getElementById('challenge-done').classList.add('active');
  document.getElementById('revealed-password').textContent = MAIN_PASSWORD;
  window.scrollTo(0, 0);
}

// ── QUIZ ──
function initQuiz() {
  quizIndex = 0;
  renderQuestion();
}

function renderQuestion() {
  const q = QUIZ_QUESTIONS[quizIndex];
  const pct = (quizIndex / QUIZ_QUESTIONS.length) * 100;
  document.getElementById('quiz-progress').style.width = pct + '%';
  quizAnswered = false;

  document.getElementById('quiz-container').innerHTML = `
    <p class="quiz-counter">Pregunta ${quizIndex + 1} de ${QUIZ_QUESTIONS.length}</p>
    <p class="quiz-question">${q.question}</p>
    <div class="options">
      ${q.options.map((opt, i) => `
        <div class="option" onclick="selectOption(${i})" id="opt-${i}">${opt}</div>
      `).join('')}
    </div>
    <div class="quiz-feedback" id="quiz-feedback"></div>
  `;
}

function selectOption(index) {
  if (quizAnswered) return;
  quizAnswered = true;
  const q = QUIZ_QUESTIONS[quizIndex];
  const feedback = document.getElementById('quiz-feedback');
  const opts = document.querySelectorAll('.option');

  opts[q.correct].classList.add('correct');
  if (index !== q.correct) opts[index].classList.add('wrong');

  feedback.textContent = index === q.correct ? q.feedback_correct : q.feedback_wrong;
  feedback.className = 'quiz-feedback ' + (index === q.correct ? 'correct' : 'wrong');

  setTimeout(() => {
    quizIndex++;
    if (quizIndex < QUIZ_QUESTIONS.length) {
      renderQuestion();
    } else {
      document.getElementById('quiz-progress').style.width = '100%';
      document.getElementById('quiz-container').innerHTML = `
        <div class="password-reveal" style="margin-top:1rem;">
          <p>¡Pasaste el quiz! 🎉</p>
          <p style="font-size:0.85rem;opacity:0.6;margin-bottom:1.2rem">Ahora viene el último desafío.</p>
        </div>
        <div class="mt-3 text-center">
          <button class="btn btn-primary" onclick="nextChallenge(2)">Siguiente desafío →</button>
        </div>
      `;
    }
  }, 1200);
}

// ── MINIJUEGO ──
function initSortGame() {
  correctSortOrder = SORT_PHOTOS.map((_, i) => i);
  sortOrder = [...correctSortOrder].sort(() => Math.random() - 0.5);
  renderSortArea();
}

function renderSortArea() {
  const area = document.getElementById('sort-area');
  area.innerHTML = '';
  sortOrder.forEach((photoIdx, position) => {
    const p = SORT_PHOTOS[photoIdx];
    const div = document.createElement('div');
    div.className = 'sort-photo';
    div.draggable = true;
    div.dataset.index = photoIdx;
    div.dataset.position = position;
    div.innerHTML = `
      ${p.src ? `<img src="${p.src}" alt="${p.label}">` : `<div class="sort-photo-placeholder">📷</div>`}
      <div class="sort-photo-info">
        <div class="sort-photo-label">${p.label}</div>
        <div class="sort-photo-hint">${p.hint}</div>
      </div>
      <span class="drag-handle">⠿</span>
    `;
    div.addEventListener('dragstart', onDragStart);
    div.addEventListener('dragover', onDragOver);
    div.addEventListener('drop', onDrop);
    div.addEventListener('dragend', onDragEnd);
    area.appendChild(div);
  });
  const fb = document.getElementById('order-feedback');
  fb.className = 'quiz-feedback';
  fb.style.display = 'none';
}

function onDragStart(e) {
  dragSrcIndex = parseInt(e.currentTarget.dataset.position);
  e.currentTarget.classList.add('dragging');
}
function onDragEnd(e) { e.currentTarget.classList.remove('dragging'); }
function onDragOver(e) {
  e.preventDefault();
  document.querySelectorAll('.sort-photo').forEach(el => el.classList.remove('drag-over'));
  e.currentTarget.classList.add('drag-over');
}
function onDrop(e) {
  e.preventDefault();
  const targetIndex = parseInt(e.currentTarget.dataset.position);
  if (dragSrcIndex === null || dragSrcIndex === targetIndex) return;
  const tmp = sortOrder[dragSrcIndex];
  sortOrder[dragSrcIndex] = sortOrder[targetIndex];
  sortOrder[targetIndex] = tmp;
  dragSrcIndex = null;
  renderSortArea();
}

function checkOrder() {
  const correct = sortOrder.every((v, i) => v === correctSortOrder[i]);
  const fb = document.getElementById('order-feedback');
  if (correct) {
    fb.textContent = '¡Perfecto! Las ordenaste correctamente 🎉';
    fb.className = 'quiz-feedback correct';
    fb.style.display = 'block';
    document.getElementById('btn-check-order').style.display = 'none';
    setTimeout(() => showPasswordReveal(), 1500);
  } else {
    fb.textContent = 'Ese no es el orden… intentá de nuevo 🤔';
    fb.className = 'quiz-feedback wrong';
    fb.style.display = 'block';
  }
}

// ── PASSWORD GATE ──
function checkMainPassword() {
  const val = document.getElementById('main-password-input').value.trim().toLowerCase();
  const err = document.getElementById('main-password-error');
  if (val === MAIN_PASSWORD.toLowerCase()) {
    err.style.display = 'none';
    goTo('screen-gifts');
    renderGifts();
    renderWall();
    try { localStorage.setItem('gifts_unlocked', '1'); } catch(e) {}
  } else {
    err.style.display = 'block';
    document.getElementById('main-password-input').value = '';
  }
}

// ── REGALOS ──
function renderGifts() {
  const grid = document.getElementById('gifts-grid');
  grid.innerHTML = '';
  const now = new Date();

  GIFTS.forEach(gift => {
    let isLocked = true;
    let badgeHtml = '';
    let extraHtml = '';

    if (gift.type === 'available') {
      isLocked = false;
      badgeHtml = `<span class="gift-badge badge-available">✓ Disponible ahora</span>`;
      extraHtml = `<div class="gift-content">${gift.content}</div>`;

    } else if (gift.type === 'date') {
      const unlock = new Date(gift.unlockDate + 'T00:00:00');
      if (now >= unlock) {
        isLocked = false;
        badgeHtml = `<span class="gift-badge badge-available">✓ Desbloqueado</span>`;
        extraHtml = gift.content ? `<div class="gift-content">${gift.content}</div>` : '';
      } else {
        const days = Math.ceil((unlock - now) / (1000 * 60 * 60 * 24));
        badgeHtml = `<span class="gift-badge badge-date">📅 Se abre el ${formatDate(gift.unlockDate)}</span>`;
        extraHtml = `<p class="countdown">⏳ Faltan ${days} días</p>`;
      }

    } else if (gift.type === 'password') {
      badgeHtml = `<span class="gift-badge badge-password">🔑 Con contraseña secreta</span>`;
      extraHtml = `
        <div class="password-unlock-form">
          <input type="text" placeholder="contraseña secreta" id="pw-${gift.id}" autocomplete="off">
          <button onclick="unlockWithPassword('${gift.id}', '${gift.unlockPassword}')">Abrir</button>
        </div>
        <p id="pw-err-${gift.id}" style="font-size:0.8rem;color:#a32d2d;margin-top:4px;display:none">Contraseña incorrecta</p>
        <div id="pw-content-${gift.id}" style="display:none">${gift.content || '<p>Contenido próximamente.</p>'}</div>
      `;

    } else if (gift.type === 'surprise') {
      badgeHtml = `<span class="gift-badge badge-surprise">🎲 Sorpresa</span>`;
      extraHtml = `<p style="font-size:0.8rem;color:var(--locked);margin-top:0.5rem">Este regalo aparecerá solo cuando sea el momento.</p>`;
    }

    const card = document.createElement('div');
    card.className = 'gift-card' + (isLocked ? ' locked' : '');
    card.innerHTML = `
      <div class="gift-icon">${gift.icon}</div>
      <h3 class="gift-name">${gift.name}</h3>
      <p class="gift-hint">${gift.hint}</p>
      ${badgeHtml}
      ${extraHtml}
    `;
    grid.appendChild(card);
  });
}

function unlockWithPassword(giftId, correctPw) {
  const input = document.getElementById('pw-' + giftId);
  const err = document.getElementById('pw-err-' + giftId);
  const content = document.getElementById('pw-content-' + giftId);
  if (input.value.trim().toLowerCase() === correctPw.toLowerCase()) {
    err.style.display = 'none';
    input.closest('.password-unlock-form').style.display = 'none';
    content.style.display = 'block';
    input.closest('.gift-card').classList.remove('locked');
  } else {
    err.style.display = 'block';
    input.value = '';
  }
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  const months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  return `${d.getDate()} de ${months[d.getMonth()]} de ${d.getFullYear()}`;
}

// ── MURO DE FOTOS ──
function renderWall() {
  const grid = document.getElementById('wall-grid');
  grid.innerHTML = '';
  if (WALL_PHOTOS.length === 0) {
    grid.innerHTML = `
      <div class="wall-empty">
        <div class="wall-empty-icon">📷</div>
        <p>Todavía no hay fotos acá.</p>
        <p style="margin-top:0.3rem">Se van a ir sumando cada vez que cumplamos un regalo.</p>
      </div>
    `;
    return;
  }
  WALL_PHOTOS.forEach(photo => {
    const div = document.createElement('div');
    div.className = 'wall-photo';
    div.innerHTML = `
      <img src="${photo.src}" alt="${photo.caption}">
      <div class="wall-photo-caption">${photo.caption}<br><span style="opacity:0.7;font-size:0.7rem">${photo.date}</span></div>
    `;
    grid.appendChild(div);
  });
}

// ── TABS ──
function switchTab(tabId, btn) {
  document.querySelectorAll('#screen-gifts .tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  btn.classList.add('active');
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  initQuiz();

  try {
    const giftsUnlocked = localStorage.getItem('gifts_unlocked') === '1';
    const challengesDone = localStorage.getItem('challenges_done') === '1';

    if (giftsUnlocked) {
      // Ya entró antes a los regalos → entra directo sin pedir contraseña
      goTo('screen-gifts');
      renderGifts();
      renderWall();
    } else if (challengesDone) {
      // Completó los desafíos pero todavía no entró → va a la pantalla de contraseña
      goTo('screen-password');
    }
    // Si no hay nada guardado → muestra la portada normalmente
  } catch(e) {}
});
