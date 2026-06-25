// ══════════════════════════════════════════════════════════
//  CONFIGURACIÓN ← TODO LO QUE TENÉS QUE EDITAR ESTÁ ACÁ
// ══════════════════════════════════════════════════════════

// 🔑 Contraseña para entrar a los regalos
const MAIN_PASSWORD = "futuro"; // ← cambiá esto

// 🤖 API Key de Google Gemini
const GEMINI_API_KEY = "AQ.Ab8RN6KnKYvz6m-DaqyZYljGw6ZFM3vPOWX0SlTchTjBD1l0eg";

// ──────────────────────────────────────────────────────────
// 🖼️ DESAFÍO 1 — Imagen IA + texto
// src: ruta a la imagen generada con IA (ej: "fotos/punta-cana.jpg")
// texto: lo que aparece debajo de la imagen
// ──────────────────────────────────────────────────────────
const DESAFIO_IMAGEN = {
  src: null, // ← reemplazá con "fotos/punta-cana.jpg" cuando tengas la imagen
  titulo: "Punta Cana, 2027",
  texto: `Este lugar todavía no existe en nuestra historia. Pero va a existir.
Hace tiempo que hablamos de este viaje, de caminar juntos por esa playa, de ese atardecer que todavía no vimos pero que ya siento como nuestro.
No sé exactamente cuándo va a pasar. Pero sé que va a pasar. Y cuando pase, nos vamos a acordar de este momento — vos, leyendo esto, sin saber todavía todo lo que nos espera.`
};

// ──────────────────────────────────────────────────────────
// ✅ DESAFÍO 2 — To Do List del futuro
// Cada item tiene un emoji, un texto, y opcionalmente una fecha aproximada
// ──────────────────────────────────────────────────────────
const TODO_ITEMS = [
  { emoji: "✈️", texto: "Viajar juntos por primera vez solos", fecha: "2027" },
  { emoji: "🏖️", texto: "Ver un atardecer en el mar", fecha: null },
  { emoji: "🍝", texto: "Cocinar algo complicado y que salga bien (o mal)", fecha: null },
  { emoji: "🎬", texto: "Hacer una noche de películas con cine en casa de verdad", fecha: null },
  { emoji: "🏕️", texto: "Acampar bajo las estrellas", fecha: null },
  { emoji: "🎂", texto: "Sorprenderte en tu cumpleaños de una forma que no esperás", fecha: "cada año" },
  { emoji: "📸", texto: "Tener una sesión de fotos juntos", fecha: null },
  { emoji: "🌍", texto: "Perdernos en una ciudad que no conocemos ninguno de los dos", fecha: null },
];

// ──────────────────────────────────────────────────────────
// 📝 DESAFÍO 3 — Carta para el futuro
// Se muestra entre el To Do y el minijuego
// ──────────────────────────────────────────────────────────
const CARTA_FUTURO = {
  titulo: "Para vos, en 5 años",
  subtitulo: "22 de junio de 2031",
  parrafos: [
    "Hola. Espero que estés bien. Espero que estemos bien.",
    "Cuando escribí esto, todavía éramos dos personas tratando de entender qué quería decir construir algo juntos. No sabíamos exactamente a dónde íbamos, pero sabíamos que queríamos ir al mismo lugar.",
    "Imagino que a esta altura ya cumplimos un montón de las cosas de esa lista. Imagino que viajamos, que nos peleamos y nos arreglamos, que nos sorprendimos el uno al otro más de una vez.",
    "Lo que sí sé con certeza es esto: elegirte fue la mejor decisión que tomé. Y si en este momento, leyendo esto, todavía sentís algo parecido a lo que yo siento hoy — entonces lo logramos.",
    "Con todo mi amor, siempre."
  ],
  firma: "— El vos del pasado ❤️"
};

// ──────────────────────────────────────────────────────────
// 🎮 DESAFÍO 4 — Minijuego: construí nuestro futuro
// Preguntas con opciones, al final la IA genera el texto
// ──────────────────────────────────────────────────────────
const FUTURO_QUESTIONS = [
  {
    id: "perro",
    pregunta: "¿Qué perro vamos a tener?",
    placeholder: "Raza, nombre, los dos juntos eligiendo mal..."
  },
  {
    id: "hijos",
    pregunta: "¿Cuántos hijos vamos a tener?",
    placeholder: "Dos, ninguno, los que vengan..."
  },
  {
    id: "donde",
    pregunta: "¿Dónde vamos a vivir?",
    placeholder: "En Mendoza, afuera del país, en el campo..."
  },
  {
    id: "luna",
    pregunta: "¿Cómo va a ser nuestra luna de miel?",
    placeholder: "Destino, plan, si es que llegamos a organizarla..."
  },
  {
    id: "comida",
    pregunta: "¿Qué comida te voy a cocinar?",
    placeholder: "El plato que siempre vas a pedir..."
  },
  {
    id: "hobby",
    pregunta: "¿Cuál va a ser nuestro hobby juntos preferido?",
    placeholder: "Algo que los dos disfruten o toleren..."
  },
  {
    id: "lugar",
    pregunta: "¿Cuál va a ser nuestro lugar de comida preferido?",
    placeholder: "El lugar al que siempre volvemos..."
  }
];

// ──────────────────────────────────────────────────────────
// 🔒 DESAFÍO 5 — Sobre sellado
// Se desbloquea el 22 de junio de 2027
// contenido: lo que aparece cuando se abra (podés completarlo después)
// ──────────────────────────────────────────────────────────
const SOBRE_SELLADO = {
  unlockDate: "2027-06-22",
  contenido: `
    <p>Si estás leyendo esto, pasó un año entero desde que te di este regalo.</p>
    <p>Acá va a ir algo especial — todavía lo estoy pensando. Pero cuando llegue el momento, va a valer la pena haber esperado.</p>
  `
  // ← Completá esto cuando falte poco para la fecha
};

// ──────────────────────────────────────────────────────────
// 🎁 REGALOS
// Tipos: "available", "date", "password", "surprise"
// ──────────────────────────────────────────────────────────
const GIFTS = [
  {
    id: "gift-1",
    type: "available",
    icon: "💌",
    name: "El primer regalo",
    hint: "Esto es tuyo desde hoy.",
    content: `<p>Acá va el contenido del primer regalo inmediato — completar.</p>`
  },
  {
    id: "gift-2",
    type: "date",
    icon: "🏔️",
    name: "El escape perfecto",
    hint: "Un fin de semana para los dos, lejos de todo.",
    unlockDate: "2025-12-21",
    content: `<p>Descripción de la escapada — completar cuando toque.</p>`
  },
  {
    id: "gift-3",
    type: "password",
    icon: "🍽️",
    name: "Una noche especial",
    hint: "Cuando yo te diga, te paso la clave.",
    unlockPassword: "cena2025",
    content: `<p>Descripción de la cena sorpresa — completar cuando toque.</p>`
  },
  {
    id: "gift-4",
    type: "date",
    icon: "☀️",
    name: "El regalo del verano",
    hint: "Cuando llegue el calor, aparece algo para los dos.",
    unlockDate: "2025-12-21",
    content: `<p>Contenido del regalo de verano — completar.</p>`
  },
  {
    id: "gift-5",
    type: "surprise",
    icon: "🎊",
    name: "???",
    hint: "Este se desbloquea solo. No sé cuándo. Esperalo."
  },
  {
    id: "gift-6",
    type: "date",
    icon: "🌸",
    name: "Regalo por definir",
    hint: "Algo lindo está en camino.",
    unlockDate: "2026-03-20",
    content: `<p>Contenido por definir.</p>`
  }
];

// ──────────────────────────────────────────────────────────
// 📸 MURO DE FOTOS
// Agregá una entrada cada vez que cumplan un regalo
// { src: "fotos/foto.jpg", caption: "Texto", date: "enero 2026" }
// ──────────────────────────────────────────────────────────
const WALL_PHOTOS = [
  // { src: "fotos/foto1.jpg", caption: "Primera vez que lo cumplimos ✨", date: "enero 2026" },
];


// ══════════════════════════════════════════════════════════
//  LÓGICA — no toques nada de acá para abajo
// ══════════════════════════════════════════════════════════

// Estado de los desafíos
let currentStep = 0;
const TOTAL_STEPS = 5;
let futuroAnswers = {};
let dragSrcIndex = null;

// ── NAVEGACIÓN ENTRE PANTALLAS ──
function goTo(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
  window.scrollTo(0, 0);
}

// ── NAVEGACIÓN ENTRE PASOS DE DESAFÍOS ──
function goToStep(n) {
  document.querySelectorAll('.challenge-step').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('step-' + n);
  if (el) el.classList.add('active');
  currentStep = n;
  updateDots();
  window.scrollTo(0, 0);

  // Inicializar pasos especiales
  if (n === 4) initSobre();
}

function updateDots() {
  document.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.remove('active', 'done');
    if (i < currentStep) d.classList.add('done');
    if (i === currentStep) d.classList.add('active');
  });
}

// ── PASO 0: IMAGEN IA ──
function initImagen() {
  const container = document.getElementById('imagen-container');
  const img = DESAFIO_IMAGEN.src
    ? `<img src="${DESAFIO_IMAGEN.src}" alt="${DESAFIO_IMAGEN.titulo}" style="width:100%;border-radius:12px;margin-bottom:1.2rem;display:block;">`
    : `<div style="width:100%;aspect-ratio:16/9;background:var(--rose-light);border-radius:12px;display:flex;align-items:center;justify-content:center;margin-bottom:1.2rem;color:var(--rose);font-size:3rem;">🏖️</div>`;

  container.innerHTML = `
    ${img}
    <h3 style="font-family:'Playfair Display',serif;font-size:1.3rem;margin-bottom:0.8rem;color:var(--ink)">${DESAFIO_IMAGEN.titulo}</h3>
    ${DESAFIO_IMAGEN.texto.split('\n').map(p => p.trim() ? `<p style="font-size:0.95rem;line-height:1.8;color:var(--ink-soft);margin-bottom:0.8rem">${p.trim()}</p>` : '').join('')}
  `;
}

// ── PASO 1: TODO LIST ──
function initTodo() {
  const container = document.getElementById('todo-container');
  container.innerHTML = TODO_ITEMS.map((item, i) => `
    <div class="todo-item" id="todo-${i}" onclick="toggleTodo(${i})">
      <span class="todo-check">○</span>
      <span class="todo-emoji">${item.emoji}</span>
      <span class="todo-text">${item.texto}${item.fecha ? `<span class="todo-fecha"> — ${item.fecha}</span>` : ''}</span>
    </div>
  `).join('');
}

function toggleTodo(i) {
  const item = document.getElementById('todo-' + i);
  item.classList.toggle('checked');
  const check = item.querySelector('.todo-check');
  check.textContent = item.classList.contains('checked') ? '✓' : '○';
}

// ── PASO 2: CARTA FUTURO ──
function initCarta() {
  const container = document.getElementById('carta-container');
  container.innerHTML = `
    <div class="carta-paper">
      <p style="font-size:0.8rem;color:var(--rose);letter-spacing:0.1em;text-transform:uppercase;margin-bottom:1rem">${CARTA_FUTURO.subtitulo}</p>
      ${CARTA_FUTURO.parrafos.map(p => `<p>${p}</p>`).join('')}
      <p class="carta-firma">${CARTA_FUTURO.firma}</p>
    </div>
  `;
}

// ── PASO 3: MINIJUEGO FUTURO CON IA ──
function initFuturo() {
  futuroAnswers = {};
  renderFuturoQuestion(0);
}

function renderFuturoQuestion(index) {
  const container = document.getElementById('futuro-container');
  if (index >= FUTURO_QUESTIONS.length) {
    renderFuturoLoading();
    callGemini();
    return;
  }

  const q = FUTURO_QUESTIONS[index];
  const pct = (index / FUTURO_QUESTIONS.length) * 100;

  container.innerHTML = `
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
    <p class="quiz-counter">Pregunta ${index + 1} de ${FUTURO_QUESTIONS.length}</p>
    <p class="quiz-question">${q.pregunta}</p>
    <div class="futuro-input-wrap">
      <input
        type="text"
        class="futuro-input"
        id="futuro-input-${index}"
        placeholder="${q.placeholder || 'Escribí lo que quieras...'}"
        autocomplete="off"
      >
      <button class="btn btn-primary" id="futuro-btn" style="margin-top:0.8rem;width:100%" onclick="submitFuturo('${q.id}', ${index})">
        Siguiente →
      </button>
    </div>
    <p class="futuro-input-error" id="futuro-error" style="display:none;color:#a32d2d;font-size:0.85rem;margin-top:0.4rem">
      Escribí algo antes de continuar 😊
    </p>
  `;

  // Foco automático y envío con Enter
  const input = document.getElementById('futuro-input-' + index);
  input.focus();
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') submitFuturo(q.id, index);
  });
}

function submitFuturo(id, index) {
  const input = document.getElementById('futuro-input-' + index);
  const val = input.value.trim();
  if (!val) {
    document.getElementById('futuro-error').style.display = 'block';
    input.focus();
    return;
  }
  futuroAnswers[id] = val;
  renderFuturoQuestion(index + 1);
}

function renderFuturoLoading() {
  document.getElementById('futuro-container').innerHTML = `
    <div style="text-align:center;padding:3rem 1rem">
      <div class="ai-spinner"></div>
      <p style="color:var(--ink-soft);margin-top:1rem;font-size:0.95rem">La IA está construyendo su futuro...</p>
    </div>
  `;
}

async function callGemini() {
  const answers = futuroAnswers;
  const ideas = [
    "Va a seguir obligándolo a ver películas románticas aunque él proteste.",
    "Él la va a seguir obligando a ver películas de culto, largas y complejas, y ella va a fingir que le gustan.",
    "Van a hacer smash burgers en casa y van a quedar mejor que en cualquier lugar.",
    `Van a visitar todos los lugares de comida de ${answers.lugar || 'su ciudad'}.`,
    "Él la va a esperar con la comida hecha, pero ya no va a ser volviendo de la facultad sino del trabajo de kinesióloga.",
    "Ella lo va a seguir abrazando cada vez que le dé error el código.",
    "Va a acompañarlo a ver partidos de Boca y del Manchester City, aunque no entienda el offside."
  ];

  // Elegir 3 ideas al azar para que el texto varíe cada vez
  const ideasElegidas = ideas.sort(() => Math.random() - 0.5).slice(0, 3);

  const prompt = `Sos un narrador que describe el futuro de una pareja joven. Escribí un texto de 4-5 párrafos en segunda persona dirigido a ella, usando estas respuestas que dio:

- Perro: ${answers.perro || 'no especificó'}
- Hijos: ${answers.hijos || 'no especificó'}
- Dónde van a vivir: ${answers.donde || 'no especificó'}
- Luna de miel: ${answers.luna || 'no especificó'}
- Comida que él le cocina: ${answers.comida || 'no especificó'}
- Hobby juntos: ${answers.hobby || 'no especificó'}
- Lugar de comida favorito: ${answers.lugar || 'no especificó'}

Incorporá de forma natural y sin forzar estas situaciones reales de la pareja (no las copies literal, reescribilas con contexto):
${ideasElegidas.map((idea, i) => `${i + 1}. ${idea}`).join('\n')}

El tono tiene que ser divertido e ingenioso, no romántico ni poético. Usá las respuestas de ella de manera concreta. Nada de frases genéricas de amor. Sin asteriscos ni markdown, solo párrafos de texto plano separados por saltos de línea.`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );

    const data = await response.json();
    const texto = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';

    if (!texto) throw new Error('Respuesta vacía');

    renderFuturoResult(texto);
  } catch (err) {
    document.getElementById('futuro-container').innerHTML = `
      <div class="quiz-feedback wrong" style="display:block">
        Hubo un error conectando con la IA. Revisá la API key en script.js.
      </div>
      <div class="mt-3 text-center">
        <button class="btn btn-secondary" onclick="initFuturo()">Reintentar</button>
      </div>
    `;
  }
}

function renderFuturoResult(texto) {
  const parrafos = texto.split('\n').filter(p => p.trim());
  document.getElementById('futuro-container').innerHTML = `
    <div class="carta-paper" style="margin-bottom:1.5rem">
      <p style="font-size:0.75rem;color:var(--rose);letter-spacing:0.1em;text-transform:uppercase;margin-bottom:1rem">Tu futuro, según la IA ✨</p>
      ${parrafos.map(p => `<p style="font-size:0.95rem">${p}</p>`).join('')}
    </div>
    <div class="text-center">
      <button class="btn btn-primary" onclick="goToStep(4)">Último desafío →</button>
    </div>
  `;
}

// ── PASO 4: SOBRE SELLADO ──
function initSobre() {
  const unlockDate = new Date(SOBRE_SELLADO.unlockDate + 'T00:00:00');
  const now = new Date();
  const container = document.getElementById('sobre-container');

  if (now >= unlockDate) {
    // Desbloqueado
    container.innerHTML = `
      <div class="sobre-card sobre-open">
        <div style="font-size:3rem;margin-bottom:1rem">💌</div>
        <h3 style="font-family:'Playfair Display',serif;font-size:1.3rem;margin-bottom:1rem">El sobre se abrió</h3>
        <div class="gift-content">${SOBRE_SELLADO.contenido}</div>
      </div>
      <div class="mt-3 text-center">
        <button class="btn btn-gold" onclick="finalizarDesafios()">Ir a los regalos 🎁</button>
      </div>
    `;
  } else {
    // Bloqueado con cuenta regresiva
    container.innerHTML = `
      <div class="sobre-card">
        <div style="font-size:3rem;margin-bottom:1rem">🔒</div>
        <h3 style="font-family:'Playfair Display',serif;font-size:1.2rem;margin-bottom:0.5rem;color:var(--ink)">Abrí esto en un año</h3>
        <p style="font-size:0.9rem;color:var(--ink-soft);margin-bottom:1.5rem">Este sobre está sellado hasta el ${formatDate(SOBRE_SELLADO.unlockDate)}. Vas a tener que esperar.</p>
        <div class="countdown-grid" id="countdown-grid"></div>
        <p style="font-size:0.8rem;color:var(--locked);margin-top:1rem">La ansiedad forma parte del regalo.</p>
      </div>
      <div class="mt-3 text-center">
        <button class="btn btn-gold" onclick="finalizarDesafios()">Ir a los regalos 🎁</button>
      </div>
    `;
    updateCountdown(unlockDate);
    setInterval(() => updateCountdown(unlockDate), 1000);
  }
}

function updateCountdown(unlockDate) {
  const now = new Date();
  const diff = unlockDate - now;
  if (diff <= 0) { initSobre(); return; }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  const grid = document.getElementById('countdown-grid');
  if (!grid) return;
  grid.innerHTML = [
    { val: days, label: 'días' },
    { val: hours, label: 'horas' },
    { val: mins, label: 'min' },
    { val: secs, label: 'seg' }
  ].map(u => `
    <div class="countdown-unit">
      <span class="countdown-val">${String(u.val).padStart(2, '0')}</span>
      <span class="countdown-label">${u.label}</span>
    </div>
  `).join('');
}

function finalizarDesafios() {
  goTo('screen-password');
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
      extraHtml = `<p style="font-size:0.8rem;color:var(--locked);margin-top:0.5rem">Aparece solo cuando sea el momento.</p>`;
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
  initImagen();
  initTodo();
  initCarta();
});
