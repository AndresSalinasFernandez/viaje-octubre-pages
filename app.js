const roomId =
  new URLSearchParams(window.location.search).get("room") || "octubre-amigos-2026";
const maxVotes = 4;

const photoCredits = {
  tunez: {
    label: "Foto de Noelle Guirola en Unsplash",
    url: "https://unsplash.com/photos/white-concrete-building-near-body-of-water-during-daytime-5NqUXa6pZDM",
  },
  rumania: {
    label: "Foto de XAVIER PHOTOGRAPHY en Unsplash",
    url: "https://unsplash.com/photos/an-aerial-view-of-a-castle-in-the-middle-of-a-forest-wfp5zxwc9Yk",
  },
  georgia: {
    label: "Foto de Nick Night en Unsplash",
    url: "https://unsplash.com/photos/gergeti-trinity-church-nestled-in-caucasus-mountains-under-clouds-xWt6N4KuojI",
  },
};

const destinations = [
  {
    id: "tunez",
    name: "Túnez",
    votes: 4,
    status: "Ganador actual",
    image:
      "https://images.unsplash.com/photo-1607869861980-da5f9b8b4969?q=80&w=1200&auto=format&fit=crop",
    summary:
      "La opción más votada. Ruta circular de 7-8 días con costa, Cartago, oasis, desierto, ksour bereberes y ruinas romanas.",
    metrics: [
      ["Duración", "7-8 días"],
      ["Vuelos", "250-267 € ida/vuelta directos"],
      ["Coche", "212 € / 7 días"],
      ["Hoteles visibles", "171-246 € / 3 noches, 3 personas"],
      ["Coste visible p.p.", "378-420 € + noches restantes"],
    ],
    scores: {
      Votos: 5,
      Ruta: 5,
      Precio: 3,
      Logística: 4,
    },
    strengths: [
      "Ganó la votación y tiene ruta muy variada para una semana.",
      "Vuelos directos a Túnez desde Madrid o Barcelona en las capturas.",
      "Octubre encaja bien por clima y evita el calor fuerte del Sáhara.",
    ],
    watchouts: [
      "Hay dos jornadas largas de coche, alrededor de 420 km.",
      "La captura Madrid sale el 25 de octubre, fuera de la ventana ideal.",
      "Faltan precios de alojamiento para varias noches de ruta.",
    ],
    route: [
      ["1", "Túnez - Cartago - Sidi Bou Said - Hammamet", "~90 km", ["Medina de Túnez", "Ruinas de Cartago", "Sidi Bou Said", "Noche en Hammamet"]],
      ["2", "Hammamet - Kairuán - Tozeur", "~420 km", ["Gran Mezquita", "Medina de Kairuán", "Llegada a Tozeur"]],
      ["3", "Tozeur y oasis de montaña", "~150 km", ["Chebika", "Tamerza", "Mides", "Opcional Star Wars cerca de Nefta"]],
      ["4", "Tozeur - Chott el Jerid - Douz", "~130 km", ["Lago salado", "Atardecer en dunas", "Camello o quad"]],
      ["5", "Douz - Matmata - Tataouine", "~250 km", ["Casas trogloditas", "Hotel Sidi Driss", "Ksour bereberes"]],
      ["6", "Tataouine y los ksour", "~120 km", ["Ksar Ouled Soltane", "Ksar Hadada", "Chenini", "Douiret"]],
      ["7", "Tataouine - El Jem - Susa", "~420 km", ["Anfiteatro de El Jem", "Medina de Susa", "Paseo marítimo"]],
      ["8", "Susa - Dougga - Túnez", "~250 km", ["Dougga", "Regreso a Túnez capital"]],
    ],
    docs: [
      {
        label: "Documento de Túnez",
        url: "https://docs.google.com/document/d/1bdz8sYsJINO-V1JgpHRWvi00SPM5x2KoIun5HRl8jq4/edit?tab=t.0#heading=h.l87ww4avsxeu",
      },
      photoCredits.tunez,
    ],
    shots: [
      ["assets/doc-shots/tunez-01.png", "Vuelo BCN-TUN directo, 267 €"],
      ["assets/doc-shots/tunez-02.png", "Vuelo MAD-TUN directo, 25 oct - 1 nov, 250 €"],
      ["assets/doc-shots/tunez-03.png", "Coche Hyundai Grand i10, 212 € / 7 días"],
      ["assets/doc-shots/tunez-04.png", "Hoteles en Túnez capital, 171-246 € / 3 noches"],
      ["assets/doc-shots/tunez-05.png", "Mapa de ruta 7-8 días en Túnez"],
    ],
  },
  {
    id: "rumania",
    name: "Rumanía",
    votes: 3,
    status: "Segunda opción",
    image:
      "https://images.unsplash.com/photo-1680003210401-08fa173ee905?q=80&w=1200&auto=format&fit=crop",
    summary:
      "La alternativa más barata en las capturas. Propone Transilvania o una ruta híbrida con Moldavia para 8-9 días.",
    metrics: [
      ["Duración", "8-9 días"],
      ["Vuelos", "100-120 € + maleta"],
      ["Coche", "10-16 € / 10 días en capturas"],
      ["Hoteles visibles", "177-219 € / 3 noches, 3 personas"],
      ["Coste visible p.p.", "162-198 € + maleta y noches restantes"],
    ],
    scores: {
      Votos: 4,
      Ruta: 4,
      Precio: 5,
      Logística: 4,
    },
    strengths: [
      "La opción con mejor precio visible y muchas conexiones desde MAD o BCN.",
      "Castillos, ciudades medievales y montaña en un recorrido bastante compacto.",
      "Tiene una versión más original añadiendo Moldavia y bodegas.",
    ],
    watchouts: [
      "Transfăgărășan suele estar abierta de junio a octubre, pero depende del tiempo.",
      "El precio de coche de la captura parece excepcionalmente bajo: conviene verificar condiciones.",
      "La opción Moldavia mete más horas de conducción y frontera.",
    ],
    route: [
      ["1", "Bucarest", "Llegada", ["Lipscani", "Palacio del Parlamento", "Ateneo Rumano"]],
      ["2", "Bucarest - Sinaia - Brașov", "180 km / 3 h", ["Castillo de Peleș", "Monasterio de Sinaia", "Castillo de Bran"]],
      ["3", "Brașov", "Base local", ["Plaza del Consejo", "Iglesia Negra", "Mirador de Tampa"]],
      ["4", "Brașov - Viscri - Sighișoara", "120 km", ["Viscri UNESCO", "Torre del Reloj", "Murallas medievales"]],
      ["5", "Sighișoara - Biertan - Sibiu", "100 km", ["Iglesia fortificada", "Piața Mare", "Puente de las Mentiras"]],
      ["6", "Sibiu - Transfăgărășan", "~200 km", ["Cascada Bâlea", "Lago Bâlea", "Miradores"]],
      ["7", "Curtea de Argeș - Bucarest", "150 km", ["Monasterio de Curtea de Argeș"]],
      ["8-9", "Bucarest o extensión Moldavia", "Flexible", ["Relax", "Palacio de Mogosoaia", "Iași y Chisináu si se elige híbrida"]],
    ],
    docs: [
      {
        label: "Documento de Rumanía",
        url: "https://docs.google.com/document/d/1YvNUpZA3JFGWjA8nRak7Yf7-TmT4Bgr4x7ivAhgrRhk/edit?tab=t.0#heading=h.ofo0au7jzj5u",
      },
      photoCredits.rumania,
    ],
    shots: [
      ["assets/doc-shots/rumania-01.png", "Coches en Bucarest, 10-16 € / 10 días"],
      ["assets/doc-shots/rumania-02.png", "Hoteles en Bucarest, 177-219 € / 3 noches"],
      ["assets/doc-shots/rumania-03.png", "Mapa de Rumanía y opción Rumanía + Moldavia"],
    ],
  },
  {
    id: "georgia",
    name: "Georgia",
    votes: 2,
    status: "Más aventurera",
    image:
      "https://images.unsplash.com/photo-1761760701075-e9a438acd8c6?q=80&w=1200&auto=format&fit=crop",
    summary:
      "La ruta más espectacular y de 10 días. Svaneti, Kazbegi, Tiflis y Kakheti, con opción de añadir Armenia.",
    metrics: [
      ["Duración", "10 días"],
      ["Vuelos", "212 € MAD / 239 € BCN"],
      ["Equipaje", "85 € carry-on bundle"],
      ["Coche", "282 € / 10 días"],
      ["Hoteles visibles", "269-330 € / 5 noches, 3 personas"],
      ["Coste visible p.p.", "396-443 € sin equipaje, 481-528 € con equipaje"],
    ],
    scores: {
      Votos: 3,
      Ruta: 5,
      Precio: 3,
      Logística: 3,
    },
    strengths: [
      "Paisaje muy potente en octubre, especialmente Svaneti y Kazbegi.",
      "El ejemplo de vuelos encaja perfecto: 10-20 de octubre.",
      "Permite una primera visita completa sin cruzar fronteras.",
    ],
    watchouts: [
      "Necesita 10 días reales para no ir corriendo.",
      "La opción Armenia requiere confirmar permiso de cruce con el coche.",
      "Más distancia y más montaña: conviene dejar margen por carreteras y clima.",
    ],
    route: [
      ["1", "Kutaisi", "Llegada", ["Monasterio de Gelati", "Cueva Prometheus", "Noche en Kutaisi"]],
      ["2-3", "Mestia y Svaneti", "Ruta de montaña", ["Mestia", "Ushguli", "Colores otoñales"]],
      ["4", "Regreso hacia Kutaisi o Zugdidi", "Jornada de enlace", ["Paradas panorámicas"]],
      ["5-6", "Kazbegi", "Stepantsminda", ["Iglesia de Gergeti", "Valle de Truso o Juta", "Carretera Militar Georgiana"]],
      ["7-8", "Tiflis", "Ciudad", ["Casco antiguo", "Baños de azufre", "Fortaleza Narikala"]],
      ["9", "Kakheti", "Vino", ["Sighnaghi", "Bodegas qvevri", "Vendimia si cuadra temprano"]],
      ["10", "Regreso a Kutaisi", "3-4 h desde Kakheti", ["Vuelo de vuelta"]],
    ],
    docs: [
      {
        label: "Documento de Georgia",
        url: "https://docs.google.com/document/d/1-wCtRXhf5Ll0glQ0EbYTTlH8D-6TgCGInBvuXxtsTVQ/edit?tab=t.0#heading=h.f0brqrajdowo",
      },
      photoCredits.georgia,
    ],
    shots: [
      ["assets/doc-shots/georgia-01.png", "Carry-on bundle, 85 €"],
      ["assets/doc-shots/georgia-02.png", "Vuelo MAD-KUT, 10-20 oct, 212 €"],
      ["assets/doc-shots/georgia-03.png", "Vuelo BCN-KUT, 239 €"],
      ["assets/doc-shots/georgia-04.png", "Coche Kia Picanto, 282 € / 10 días"],
      ["assets/doc-shots/georgia-05.png", "Mapa Georgia sola o Georgia + Armenia"],
      ["assets/doc-shots/georgia-06.png", "Hoteles en Tiflis, 269-330 € / 5 noches"],
    ],
  },
];

const suggestedDates = [
  {
    tag: "Temprano",
    title: "3-11 octubre",
    body: "Buena ventana para ruta de 8-9 días y deja margen si suben precios.",
  },
  {
    tag: "Encaja Georgia",
    title: "10-20 octubre",
    body: "Ya aparece en capturas de Georgia y permite 10 días completos.",
  },
  {
    tag: "Última ideal",
    title: "17-24 octubre",
    body: "Sirve para una ruta de 7-8 días sin pasar del día 24.",
  },
  {
    tag: "Fuera ideal",
    title: "25 octubre - 1 noviembre",
    body: "Aparece en Túnez desde Madrid, pero empieza justo después del límite ideal.",
  },
];

const escapeHtml = (value) =>
  String(value ?? "").replace(/[&<>"']/g, (character) => {
    const replacements = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return replacements[character];
  });

function renderVoteBars() {
  const voteBars = document.querySelector("#vote-bars");
  voteBars.innerHTML = destinations
    .map((destination) => {
      const width = `${Math.round((destination.votes / maxVotes) * 100)}%`;
      return `
        <div class="vote-row">
          <div class="vote-row__head">
            <span>${destination.name}</span>
            <span>${destination.votes} votos</span>
          </div>
          <div class="vote-track">
            <div class="vote-fill vote-fill--${destination.id}" style="width: ${width}"></div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderDestinationGrid() {
  const grid = document.querySelector("#destination-grid");

  grid.innerHTML = destinations
    .map(
      (destination) => `
        <article class="destination-card">
          <img class="destination-card__image" src="${destination.image}" alt="${destination.name}" />
          <div class="destination-card__body">
            <div class="destination-card__top">
              <p class="eyebrow">${destination.votes} votos</p>
              <span class="status-chip ${
                destination.id === "georgia" ? "status-chip--watch" : ""
              }">${destination.status}</span>
            </div>
            <h3>${destination.name}</h3>
            <p class="destination-card__summary">${destination.summary}</p>
            <dl class="metrics">
              ${destination.metrics
                .slice(0, 5)
                .map(
                  ([label, value]) => `
                    <div class="metric">
                      <dt>${label}</dt>
                      <dd>${value}</dd>
                    </div>
                  `,
                )
                .join("")}
            </dl>
            <div class="score-list">
              ${Object.entries(destination.scores)
                .map(
                  ([label, score]) => `
                    <div class="score-row">
                      <span>${label}</span>
                      <span class="score-track">
                        <span class="score-fill" style="width: ${score * 20}%"></span>
                      </span>
                      <span>${score}/5</span>
                    </div>
                  `,
                )
                .join("")}
            </div>
            <a class="button button--ghost" href="#${destination.id}-detail">
              <i data-lucide="route" aria-hidden="true"></i>
              Ver ruta
            </a>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderCalendar() {
  const calendar = document.querySelector("#calendar");
  const weekdays = ["L", "M", "X", "J", "V", "S", "D"];
  const firstDay = new Date(2026, 9, 1);
  const leadingBlanks = (firstDay.getDay() + 6) % 7;
  const cells = weekdays.map((day) => `<div class="calendar__weekday">${day}</div>`);

  for (let index = 0; index < leadingBlanks; index += 1) {
    cells.push('<div class="calendar__day is-empty" aria-hidden="true"></div>');
  }

  for (let day = 1; day <= 31; day += 1) {
    const classes = ["calendar__day"];
    let note = "";

    if (day >= 3 && day <= 24) {
      classes.push("is-ideal");
    }

    if (day >= 10 && day <= 20) {
      classes.push("is-georgia");
      note = day === 10 ? "Georgia ida" : day === 20 ? "Georgia vuelta" : "";
    }

    if (day === 25) {
      classes.push("is-edge");
      note = "Túnez MAD";
    }

    cells.push(`
      <div class="${classes.join(" ")}">
        <span>${day}</span>
        ${note ? `<span class="calendar__note">${note}</span>` : ""}
      </div>
    `);
  }

  calendar.innerHTML = cells.join("");

  document.querySelector("#date-picks").innerHTML = suggestedDates
    .map(
      (item) => `
        <div class="date-pick">
          <span class="date-pick__tag">${item.tag}</span>
          <strong>${item.title}</strong>
          <p>${item.body}</p>
        </div>
      `,
    )
    .join("");
}

function renderDetails() {
  const stack = document.querySelector("#detail-stack");

  stack.innerHTML = destinations
    .map(
      (destination) => `
        <article class="destination-detail" id="${destination.id}-detail">
          <div class="detail-header">
            <img src="${destination.image}" alt="${destination.name}" />
            <div class="detail-copy">
              <p class="eyebrow">${destination.status}</p>
              <h3>${destination.name}</h3>
              <p class="detail-lede">${destination.summary}</p>
              <div class="tag-row">
                ${destination.metrics.map(([label, value]) => `<span class="tag">${label}: ${value}</span>`).join("")}
              </div>
              <div class="detail-actions">
                ${destination.docs
                  .map(
                    (doc) => `
                      <a class="button button--ghost" href="${doc.url}" target="_blank" rel="noreferrer">
                        <i data-lucide="external-link" aria-hidden="true"></i>
                        ${doc.label}
                      </a>
                    `,
                  )
                  .join("")}
              </div>
            </div>
          </div>

          <div class="insight-grid">
            <div class="insight-block">
              <h4>Puntos fuertes</h4>
              <ul>
                ${destination.strengths.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
            <div class="insight-block">
              <h4>Para confirmar</h4>
              <ul>
                ${destination.watchouts.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </div>

          <div class="route-block">
            <h4>Ruta propuesta</h4>
            <div class="route-list">
              ${destination.route
                .map(
                  ([day, title, meta, highlights]) => `
                    <div class="route-day">
                      <span class="route-day__day">${day}</span>
                      <div>
                        <h5>${title}</h5>
                        <p>${meta}</p>
                        <ul>
                          ${highlights.map((item) => `<li>${item}</li>`).join("")}
                        </ul>
                      </div>
                    </div>
                  `,
                )
                .join("")}
            </div>
          </div>

          <div class="shots-block">
            <h4>Capturas del documento</h4>
            <div class="shot-gallery">
              ${destination.shots
                .map(
                  ([src, caption]) => `
                    <button class="shot-button" type="button" data-shot="${src}" data-caption="${escapeHtml(caption)}">
                      <img src="${src}" alt="${escapeHtml(caption)}" loading="lazy" />
                      <span>${caption}</span>
                    </button>
                  `,
                )
                .join("")}
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function setupImageDialog() {
  const dialog = document.querySelector("#image-dialog");
  const dialogImage = document.querySelector("#dialog-image");
  const caption = document.querySelector("#dialog-caption");

  document.addEventListener("click", (event) => {
    const shotButton = event.target.closest("[data-shot]");
    if (shotButton) {
      dialogImage.src = shotButton.dataset.shot;
      dialogImage.alt = shotButton.dataset.caption;
      caption.textContent = shotButton.dataset.caption;
      dialog.showModal();
    }

    if (event.target.closest("[data-close-dialog]")) {
      dialog.close();
    }
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
}

function setupCopyLink() {
  const button = document.querySelector("[data-copy-link]");
  if (!button) return;

  button.addEventListener("click", async () => {
    const original = button.innerHTML;
    const shareUrl = new URL(window.location.href);
    shareUrl.searchParams.set("room", roomId);

    try {
      await navigator.clipboard.writeText(shareUrl.toString());
      button.innerHTML = '<i data-lucide="check" aria-hidden="true"></i> Enlace copiado';
      refreshIcons();
      window.setTimeout(() => {
        button.innerHTML = original;
        refreshIcons();
      }, 1800);
    } catch {
      window.prompt("Copia este enlace", shareUrl.toString());
    }
  });
}

let notes = [];
let noteTransport = {
  add: (note) => addLocalNote(note),
  export: () => notes,
};
let localChannel = null;
let localPresenceTimer = null;
let presenceMap = new Map();

const clientIdKey = "tripClientId";
const authorKey = "tripAuthor";
const noteStorageKey = `tripNotes:${roomId}`;
const clientId =
  window.localStorage.getItem(clientIdKey) ||
  (window.crypto?.randomUUID ? window.crypto.randomUUID() : `${Date.now()}-${Math.random()}`);
window.localStorage.setItem(clientIdKey, clientId);

function getAuthor() {
  return document.querySelector("#note-author").value;
}

function getTopic() {
  return document.querySelector("#note-topic").value;
}

function toDate(value) {
  if (!value) return null;
  if (typeof value.toDate === "function") return value.toDate();
  if (typeof value === "number") return new Date(value);
  if (typeof value === "string") return new Date(value);
  return null;
}

function formatDate(value) {
  const date = toDate(value);
  if (!date || Number.isNaN(date.getTime())) return "Ahora";
  return new Intl.DateTimeFormat("es-ES", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function setSyncStatus(kind, label) {
  const status = document.querySelector("#sync-status");
  status.className = `sync-pill is-${kind}`;
  status.innerHTML = `<span class="sync-dot"></span>${label}`;
}

function renderNotes() {
  const list = document.querySelector("#notes-list");
  const sorted = [...notes].sort((a, b) => {
    const aDate = toDate(a.createdAt)?.getTime() || a.clientCreatedAt || 0;
    const bDate = toDate(b.createdAt)?.getTime() || b.clientCreatedAt || 0;
    return bDate - aDate;
  });

  if (!sorted.length) {
    list.innerHTML = '<div class="empty-notes">Todavía no hay notas en esta sala.</div>';
    return;
  }

  list.innerHTML = sorted
    .map(
      (note) => `
        <article class="note-card">
          <div class="note-meta">
            <span><strong>${escapeHtml(note.author)}</strong> - ${formatDate(
              note.createdAt || note.clientCreatedAt,
            )}</span>
            <span class="topic-chip">${escapeHtml(note.topic)}</span>
          </div>
          <p>${escapeHtml(note.text).replace(/\n/g, "<br />")}</p>
        </article>
      `,
    )
    .join("");
}

function localNotes() {
  try {
    return JSON.parse(window.localStorage.getItem(noteStorageKey) || "[]");
  } catch {
    return [];
  }
}

function saveLocalNotes(nextNotes) {
  window.localStorage.setItem(noteStorageKey, JSON.stringify(nextNotes));
}

function addLocalNote(note) {
  const nextNote = {
    ...note,
    id: window.crypto?.randomUUID ? window.crypto.randomUUID() : `${Date.now()}`,
    createdAt: Date.now(),
    clientCreatedAt: Date.now(),
  };
  notes = [nextNote, ...localNotes()].slice(0, 100);
  saveLocalNotes(notes);
  localChannel?.postMessage({ type: "notes", notes });
  renderNotes();
}

function renderPresence() {
  const list = document.querySelector("#presence-list");
  const now = Date.now();
  const active = [...presenceMap.values()].filter((entry) => now - entry.lastSeen < 90000);

  if (!active.length) {
    list.innerHTML = '<span class="avatar-pill">Solo tú</span>';
    return;
  }

  list.innerHTML = active
    .sort((a, b) => a.name.localeCompare(b.name, "es"))
    .map((entry) => `<span class="avatar-pill">${escapeHtml(entry.name)}</span>`)
    .join("");
}

function announceLocalPresence() {
  const payload = {
    id: clientId,
    name: getAuthor(),
    lastSeen: Date.now(),
  };
  presenceMap.set(clientId, payload);
  localChannel?.postMessage({ type: "presence", payload });
  renderPresence();
}

function setupLocalNotes(reason = "Modo local") {
  notes = localNotes();
  setSyncStatus("local", `${reason} - sala ${roomId}`);
  renderNotes();

  if ("BroadcastChannel" in window) {
    localChannel = new BroadcastChannel(`trip-room:${roomId}`);
    localChannel.onmessage = (event) => {
      if (event.data?.type === "notes") {
        notes = event.data.notes;
        saveLocalNotes(notes);
        renderNotes();
      }

      if (event.data?.type === "presence") {
        presenceMap.set(event.data.payload.id, event.data.payload);
        renderPresence();
      }
    };
  }

  window.addEventListener("storage", (event) => {
    if (event.key === noteStorageKey) {
      notes = localNotes();
      renderNotes();
    }
  });

  noteTransport = {
    add: addLocalNote,
    export: () => localNotes(),
  };

  announceLocalPresence();
  window.clearInterval(localPresenceTimer);
  localPresenceTimer = window.setInterval(announceLocalPresence, 20000);
}

function isFirebaseConfigured() {
  const config = window.TRIP_FIREBASE_CONFIG || {};
  return Boolean(config.apiKey && config.projectId && config.appId);
}

async function setupFirebaseNotes() {
  const config = window.TRIP_FIREBASE_CONFIG;
  const firebaseApp = await import(
    "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"
  );
  const firestore = await import(
    "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"
  );

  const app = firebaseApp.initializeApp(config);
  const db = firestore.getFirestore(app);
  const notesRef = firestore.collection(db, "tripRooms", roomId, "notes");
  const presenceRef = firestore.collection(db, "tripRooms", roomId, "presence");
  const presenceDoc = firestore.doc(presenceRef, clientId);
  const notesQuery = firestore.query(
    notesRef,
    firestore.orderBy("createdAt", "desc"),
    firestore.limit(100),
  );

  setSyncStatus("live", `Firebase en vivo - sala ${roomId}`);

  firestore.onSnapshot(notesQuery, (snapshot) => {
    notes = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    renderNotes();
  });

  firestore.onSnapshot(presenceRef, (snapshot) => {
    const now = Date.now();
    presenceMap = new Map();
    snapshot.docs.forEach((doc) => {
      const data = doc.data();
      const lastSeen = toDate(data.lastSeen)?.getTime() || 0;
      if (now - lastSeen < 90000) {
        presenceMap.set(doc.id, {
          id: doc.id,
          name: data.name || "Invitado",
          lastSeen,
        });
      }
    });
    renderPresence();
  });

  async function touchPresence() {
    await firestore.setDoc(
      presenceDoc,
      {
        name: getAuthor(),
        lastSeen: firestore.serverTimestamp(),
      },
      { merge: true },
    );
  }

  await touchPresence();
  window.setInterval(touchPresence, 20000);
  window.addEventListener("beforeunload", () => {
    firestore.deleteDoc(presenceDoc);
  });

  noteTransport = {
    add: (note) =>
      firestore.addDoc(notesRef, {
        ...note,
        createdAt: firestore.serverTimestamp(),
        clientCreatedAt: Date.now(),
      }),
    export: () => notes,
  };
}

function setupNoteForm() {
  const form = document.querySelector("#note-form");
  const authorSelect = document.querySelector("#note-author");
  const savedAuthor = window.localStorage.getItem(authorKey);
  if (savedAuthor) {
    authorSelect.value = savedAuthor;
  }

  authorSelect.addEventListener("change", () => {
    window.localStorage.setItem(authorKey, authorSelect.value);
    announceLocalPresence();
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const text = document.querySelector("#note-text").value.trim();
    if (!text) return;

    const note = {
      author: getAuthor(),
      topic: getTopic(),
      text,
      roomId,
      clientId,
      clientCreatedAt: Date.now(),
    };

    await noteTransport.add(note);
    form.reset();
    authorSelect.value = window.localStorage.getItem(authorKey) || getAuthor();
    document.querySelector("#note-topic").value = "General";
    document.querySelector("#note-text").focus();
  });

  document.querySelector("[data-export-notes]").addEventListener("click", () => {
    const exported = noteTransport.export();
    const lines = exported
      .map((note) => {
        const when = formatDate(note.createdAt || note.clientCreatedAt);
        return `[${when}] ${note.author} (${note.topic}): ${note.text}`;
      })
      .join("\n");
    const blob = new Blob([lines || "Sin notas todavía."], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `notas-viaje-${roomId}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  });
}

async function initNotes() {
  setupNoteForm();

  if (!isFirebaseConfigured()) {
    setupLocalNotes("Modo local");
    return;
  }

  try {
    await setupFirebaseNotes();
  } catch (error) {
    console.error(error);
    setupLocalNotes("Firebase no disponible");
    setSyncStatus("error", `Firebase no disponible - sala ${roomId}`);
  }
}

function refreshIcons() {
  window.lucide?.createIcons();
}

renderVoteBars();
renderDestinationGrid();
renderCalendar();
renderDetails();
setupImageDialog();
setupCopyLink();
initNotes();
refreshIcons();
