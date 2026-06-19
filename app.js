const roomId =
  new URLSearchParams(window.location.search).get("room") || "viaje-amigos";
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
      "La opción más votada. Ruta circular con costa, Cartago, oasis, desierto, ksour bereberes y ruinas romanas.",
    metrics: [
      ["Vuelos", "250-267 € ida/vuelta directos"],
      ["Coche", "212 € total mostrado"],
      ["Ejemplo hoteles", "171-246 € total mostrado"],
      ["Coste visible p.p.", "378-420 € + alojamiento pendiente"],
    ],
    scores: {
      Votos: 5,
      Ruta: 5,
      Precio: 3,
      Logística: 4,
    },
    strengths: [
      "Ganó la votación y tiene una ruta muy variada.",
      "Vuelos directos a Túnez desde Madrid o Barcelona en las capturas.",
      "Combina costa, patrimonio romano y desierto sin cambiar de país.",
    ],
    watchouts: [
      "Hay dos tramos largos de coche, alrededor de 420 km.",
      "Conviene confirmar si el vuelo elegido encaja con la ventana final.",
      "Faltan precios de alojamiento para parte de la ruta.",
    ],
    route: [
      {
        step: "1",
        places: ["Túnez", "Cartago", "Sidi Bou Said", "Hammamet"],
        distance: "~90 km",
        drive: "Túnez-Cartago 20 min · Cartago-Sidi Bou Said 15 min · Sidi Bou Said-Hammamet 1 h 10 min",
        highlights: ["Medina de Túnez", "Ruinas de Cartago", "Paseo marítimo de Hammamet"],
      },
      {
        step: "2",
        places: ["Hammamet", "Kairuán", "Tozeur"],
        distance: "~420 km",
        drive: "Hammamet-Kairuán 1 h 10 min · Kairuán-Tozeur 4 h 45 min",
        highlights: ["Gran Mezquita", "Medina de Kairuán", "Llegada a Tozeur"],
      },
      {
        step: "3",
        places: ["Tozeur", "Chebika", "Tamerza", "Mides"],
        distance: "~150 km",
        drive: "Tozeur-Chebika 1 h · Chebika-Tamerza 20 min · Tamerza-Mides 20 min · regreso a Tozeur 1 h 15 min",
        highlights: ["Oasis de montaña", "Cañones", "Escenarios de Star Wars cerca de Nefta"],
      },
      {
        step: "4",
        places: ["Tozeur", "Chott el Jerid", "Douz"],
        distance: "~130 km",
        drive: "Tozeur-Chott el Jerid 30 min · Chott el Jerid-Douz 1 h 30 min",
        highlights: ["Lago salado", "Atardecer en dunas", "Camello o quad"],
      },
      {
        step: "5",
        places: ["Douz", "Matmata", "Tataouine"],
        distance: "~250 km",
        drive: "Douz-Matmata 1 h 30 min · Matmata-Tataouine 2 h 30 min",
        highlights: ["Casas trogloditas", "Hotel Sidi Driss", "Ksour bereberes"],
      },
      {
        step: "6",
        places: ["Tataouine", "Ksar Ouled Soltane", "Ksar Hadada", "Chenini", "Douiret"],
        distance: "~120 km",
        drive: "Tataouine-Ksar Ouled Soltane 30 min · Ksar Hadada-Chenini 35 min · Chenini-Douiret 25 min · regreso 35 min",
        highlights: ["Arquitectura bereber", "Pueblos de montaña", "Miradores del sur"],
      },
      {
        step: "7",
        places: ["Tataouine", "El Jem", "Susa"],
        distance: "~420 km",
        drive: "Tataouine-El Jem 4 h 45 min · El Jem-Susa 1 h",
        highlights: ["Anfiteatro de El Jem", "Medina de Susa", "Paseo marítimo"],
      },
      {
        step: "8",
        places: ["Susa", "Dougga", "Túnez"],
        distance: "~250 km",
        drive: "Susa-Dougga 3 h · Dougga-Túnez 1 h 45 min",
        highlights: ["Dougga", "Regreso a Túnez capital"],
      },
    ],
    docs: [
      {
        label: "Documento de Túnez",
        url: "https://docs.google.com/document/d/1bdz8sYsJINO-V1JgpHRWvi00SPM5x2KoIun5HRl8jq4/edit?tab=t.0#heading=h.l87ww4avsxeu",
      },
      photoCredits.tunez,
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
      "La alternativa más barata en las capturas. Propone Transilvania o una ruta híbrida con Moldavia.",
    metrics: [
      ["Vuelos", "100-120 € + maleta"],
      ["Coche", "10-16 € total mostrado"],
      ["Ejemplo hoteles", "177-219 € total mostrado"],
      ["Coste visible p.p.", "162-198 € + maleta y alojamiento pendiente"],
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
      "Transfăgărășan depende del tiempo y puede requerir ruta alternativa.",
      "El precio de coche de la captura parece excepcionalmente bajo: conviene verificar condiciones.",
      "La opción Moldavia mete más horas de conducción y frontera.",
    ],
    route: [
      {
        step: "1",
        places: ["Bucarest"],
        distance: "Tramos urbanos",
        drive: "Traslados urbanos cortos",
        highlights: ["Lipscani", "Palacio del Parlamento", "Ateneo Rumano"],
      },
      {
        step: "2",
        places: ["Bucarest", "Sinaia", "Brașov"],
        distance: "180 km",
        drive: "Bucarest-Sinaia 1 h 50 min · Sinaia-Brașov 1 h",
        highlights: ["Castillo de Peleș", "Monasterio de Sinaia", "Castillo de Bran"],
      },
      {
        step: "3",
        places: ["Brașov", "Râșnov"],
        distance: "Excursión local",
        drive: "Brașov-Râșnov 25 min · regreso 25 min",
        highlights: ["Plaza del Consejo", "Iglesia Negra", "Mirador de Tampa"],
      },
      {
        step: "4",
        places: ["Brașov", "Viscri", "Sighișoara"],
        distance: "120 km",
        drive: "Brașov-Viscri 1 h 35 min · Viscri-Sighișoara 45 min",
        highlights: ["Viscri UNESCO", "Torre del Reloj", "Murallas medievales"],
      },
      {
        step: "5",
        places: ["Sighișoara", "Biertan", "Sibiu"],
        distance: "100 km",
        drive: "Sighișoara-Biertan 30 min · Biertan-Sibiu 1 h 20 min",
        highlights: ["Iglesia fortificada", "Piața Mare", "Puente de las Mentiras"],
      },
      {
        step: "6",
        places: ["Sibiu", "Transfăgărășan", "Lago Bâlea", "Curtea de Argeș"],
        distance: "~200 km",
        drive: "Sibiu-Lago Bâlea 1 h 30 min · Lago Bâlea-Curtea de Argeș 2 h",
        highlights: ["Cascada Bâlea", "Lago Bâlea", "Miradores"],
      },
      {
        step: "7",
        places: ["Curtea de Argeș", "Bucarest"],
        distance: "150 km",
        drive: "Curtea de Argeș-Bucarest 2 h",
        highlights: ["Monasterio de Curtea de Argeș", "Regreso a Bucarest"],
      },
      {
        step: "8",
        places: ["Bucarest", "Iași", "Chisináu", "Orheiul Vechi"],
        distance: "Extensión opcional",
        drive: "Bucarest-Iași 6 h · Iași-Chisináu 3 h · Chisináu-Orheiul Vechi 1 h",
        highlights: ["Palacio de la Cultura", "Chisináu", "Bodegas y monasterios"],
      },
    ],
    docs: [
      {
        label: "Documento de Rumanía",
        url: "https://docs.google.com/document/d/1YvNUpZA3JFGWjA8nRak7Yf7-TmT4Bgr4x7ivAhgrRhk/edit?tab=t.0#heading=h.ofo0au7jzj5u",
      },
      photoCredits.rumania,
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
      "La ruta más espectacular. Svaneti, Kazbegi, Tiflis y Kakheti, con opción de añadir Armenia.",
    metrics: [
      ["Vuelos", "212 € MAD / 239 € BCN"],
      ["Equipaje", "85 € carry-on bundle"],
      ["Coche", "282 € total mostrado"],
      ["Ejemplo hoteles", "269-330 € total mostrado"],
      ["Coste visible p.p.", "396-443 € sin equipaje, 481-528 € con equipaje"],
    ],
    scores: {
      Votos: 3,
      Ruta: 5,
      Precio: 3,
      Logística: 3,
    },
    strengths: [
      "Paisaje muy potente, especialmente Svaneti y Kazbegi.",
      "Los vuelos visibles mantienen precio competitivo frente a la ruta.",
      "Permite una primera visita completa sin cruzar fronteras.",
    ],
    watchouts: [
      "Necesita margen real para no ir corriendo.",
      "La opción Armenia requiere confirmar permiso de cruce con el coche.",
      "Más distancia y más montaña: conviene dejar margen por carreteras y clima.",
    ],
    route: [
      {
        step: "1",
        places: ["Kutaisi", "Gelati", "Cueva Prometheus"],
        distance: "Excursión local",
        drive: "Kutaisi-Gelati 20 min · Gelati-Cueva Prometheus 45 min · regreso a Kutaisi 25 min",
        highlights: ["Monasterio de Gelati", "Cueva Prometheus", "Centro de Kutaisi"],
      },
      {
        step: "2",
        places: ["Kutaisi", "Mestia", "Ushguli"],
        distance: "Ruta de montaña",
        drive: "Kutaisi-Mestia 5 h 30 min · Mestia-Ushguli 2 h 30 min",
        highlights: ["Svaneti", "Ushguli", "Vistas del Cáucaso"],
      },
      {
        step: "3",
        places: ["Mestia", "Zugdidi", "Kutaisi"],
        distance: "Tramo de enlace",
        drive: "Mestia-Zugdidi 3 h · Zugdidi-Kutaisi 2 h",
        highlights: ["Carretera de Svaneti", "Paradas panorámicas"],
      },
      {
        step: "4",
        places: ["Kutaisi", "Ananuri", "Gudauri", "Kazbegi"],
        distance: "Ruta escénica",
        drive: "Kutaisi-Ananuri 4 h · Ananuri-Gudauri 1 h · Gudauri-Kazbegi 45 min",
        highlights: ["Fortaleza de Ananuri", "Carretera Militar Georgiana", "Montañas de Kazbegi"],
      },
      {
        step: "5",
        places: ["Kazbegi", "Gergeti", "Valle de Truso", "Juta"],
        distance: "Excursiones locales",
        drive: "Kazbegi-Gergeti 20 min · Kazbegi-Truso 45 min · Kazbegi-Juta 45 min",
        highlights: ["Iglesia de Gergeti", "Valle de Truso", "Juta"],
      },
      {
        step: "6",
        places: ["Kazbegi", "Tiflis"],
        distance: "Regreso a ciudad",
        drive: "Kazbegi-Tiflis 3 h",
        highlights: ["Casco antiguo", "Baños de azufre", "Fortaleza Narikala"],
      },
      {
        step: "7",
        places: ["Tiflis", "Sighnaghi", "Kakheti"],
        distance: "Zona de vino",
        drive: "Tiflis-Sighnaghi 1 h 45 min · Sighnaghi-Telavi 1 h 30 min",
        highlights: ["Sighnaghi", "Bodegas qvevri", "Paisaje de Kakheti"],
      },
      {
        step: "8",
        places: ["Kakheti", "Kutaisi"],
        distance: "Cierre de ruta",
        drive: "Kakheti-Kutaisi 4 h 30 min",
        highlights: ["Regreso a Kutaisi", "Últimas paradas según vuelo"],
      },
    ],
    docs: [
      {
        label: "Documento de Georgia",
        url: "https://docs.google.com/document/d/1-wCtRXhf5Ll0glQ0EbYTTlH8D-6TgCGInBvuXxtsTVQ/edit?tab=t.0#heading=h.f0brqrajdowo",
      },
      photoCredits.georgia,
    ],
  },
];

const placeQueries = {
  Túnez: "Tunis medina Tunisia",
  Cartago: "Carthage Tunisia ruins",
  "Sidi Bou Said": "Sidi Bou Said Tunisia",
  Hammamet: "Hammamet Tunisia",
  Kairuán: "Kairouan Tunisia mosque",
  Tozeur: "Tozeur Tunisia oasis",
  Chebika: "Chebika oasis Tunisia",
  Tamerza: "Tamerza Tunisia",
  Mides: "Mides canyon Tunisia",
  "Chott el Jerid": "Chott el Djerid Tunisia",
  Douz: "Douz Tunisia Sahara",
  Matmata: "Matmata Tunisia",
  Tataouine: "Tataouine Tunisia ksar",
  "Ksar Ouled Soltane": "Ksar Ouled Soltane",
  "Ksar Hadada": "Ksar Hadada Tunisia",
  Chenini: "Chenini Tunisia",
  Douiret: "Douiret Tunisia",
  "El Jem": "El Djem amphitheatre Tunisia",
  Susa: "Sousse Tunisia medina",
  Dougga: "Dougga Tunisia",
  Bucarest: "Bucharest Romania old town",
  Sinaia: "Peles Castle Sinaia Romania",
  Brașov: "Brasov Romania",
  Râșnov: "Rasnov Citadel Romania",
  Viscri: "Viscri Romania",
  Sighișoara: "Sighisoara Romania",
  Biertan: "Biertan Romania fortified church",
  Sibiu: "Sibiu Romania",
  Transfăgărășan: "Transfagarasan Romania",
  "Lago Bâlea": "Balea Lake Romania",
  "Curtea de Argeș": "Curtea de Arges Romania",
  Iași: "Iasi Romania Palace of Culture",
  Chisináu: "Chisinau Moldova",
  "Orheiul Vechi": "Orheiul Vechi Moldova",
  Kutaisi: "Kutaisi Georgia",
  Gelati: "Gelati Monastery Georgia",
  "Cueva Prometheus": "Prometheus Cave Georgia",
  Mestia: "Mestia Georgia Svaneti",
  Ushguli: "Ushguli Georgia",
  Zugdidi: "Zugdidi Georgia",
  Ananuri: "Ananuri Fortress Georgia",
  Gudauri: "Gudauri Georgia",
  Kazbegi: "Kazbegi Georgia",
  Gergeti: "Gergeti Trinity Church Georgia",
  "Valle de Truso": "Truso Valley Georgia",
  Juta: "Juta Georgia",
  Tiflis: "Tbilisi Georgia old town",
  Sighnaghi: "Sighnaghi Georgia",
  Kakheti: "Kakheti Georgia vineyard",
};

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

function renderPlaceToken(place) {
  const query = placeQueries[place] || place;
  return `
    <span class="place-token" tabindex="0" data-place="${escapeHtml(place)}" data-query="${escapeHtml(query)}">
      ${escapeHtml(place)}
      <span class="place-popover" role="tooltip" data-preview-panel>
        <span class="place-popover__status">Cargando imágenes...</span>
      </span>
    </span>
  `;
}

function renderPlaceTrail(places) {
  return places
    .map((place) => renderPlaceToken(place))
    .join('<span class="route-arrow" aria-hidden="true">→</span>');
}

function renderHighlight(item) {
  return placeQueries[item] ? renderPlaceToken(item) : escapeHtml(item);
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
                  (route) => `
                    <div class="route-day">
                      <span class="route-day__day">${route.step}</span>
                      <div>
                        <h5>${renderPlaceTrail(route.places)}</h5>
                        <p class="route-meta">
                          <span>${route.distance}</span>
                          <span><i data-lucide="car-front" aria-hidden="true"></i>${route.drive}</span>
                        </p>
                        <ul>
                          ${route.highlights.map((item) => `<li>${renderHighlight(item)}</li>`).join("")}
                        </ul>
                      </div>
                    </div>
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

const placeImageCache = new Map();

function cleanFileTitle(title) {
  return title.replace(/^File:/, "").replace(/\.[a-z0-9]+$/i, "").replace(/[_-]+/g, " ");
}

async function fetchPlaceImages(query) {
  if (placeImageCache.has(query)) {
    return placeImageCache.get(query);
  }

  const params = new URLSearchParams({
    action: "query",
    format: "json",
    origin: "*",
    generator: "search",
    gsrnamespace: "6",
    gsrlimit: "8",
    gsrsearch: query,
    prop: "imageinfo",
    iiprop: "url|mime",
    iiurlwidth: "420",
  });
  const request = fetch(`https://commons.wikimedia.org/w/api.php?${params.toString()}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("No se pudieron cargar imágenes");
      }
      return response.json();
    })
    .then((data) =>
      Object.values(data.query?.pages || {})
        .map((page) => {
          const imageInfo = page.imageinfo?.[0];
          return {
            title: cleanFileTitle(page.title || "Imagen"),
            src: imageInfo?.thumburl || imageInfo?.url,
            href: imageInfo?.descriptionurl || imageInfo?.url,
            mime: imageInfo?.mime || "",
          };
        })
        .filter((image) => image.src && image.mime.startsWith("image/") && image.mime !== "image/svg+xml")
        .slice(0, 4),
    );

  placeImageCache.set(query, request);
  return request;
}

function renderPlacePreview(token, images) {
  const panel = token.querySelector("[data-preview-panel]");
  const place = token.dataset.place;

  if (!images.length) {
    panel.innerHTML = `
      <span class="place-popover__status">Sin imágenes rápidas para ${escapeHtml(place)}.</span>
      <a class="place-popover__link" href="https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=${encodeURIComponent(
        token.dataset.query,
      )}" target="_blank" rel="noreferrer">Buscar en Wikimedia Commons</a>
    `;
    return;
  }

  panel.innerHTML = `
    <span class="place-popover__title">${escapeHtml(place)}</span>
    <span class="place-popover__grid">
      ${images
        .map(
          (image) => `
            <a class="place-image" href="${escapeHtml(image.href)}" target="_blank" rel="noreferrer">
              <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.title)}" loading="lazy" />
              <span>${escapeHtml(image.title)}</span>
            </a>
          `,
        )
        .join("")}
    </span>
    <span class="place-popover__source">Imágenes de Wikimedia Commons</span>
  `;
}

function loadPlacePreview(token) {
  if (token.dataset.previewState === "loaded" || token.dataset.previewState === "loading") {
    return;
  }

  const panel = token.querySelector("[data-preview-panel]");
  token.dataset.previewState = "loading";
  panel.innerHTML = '<span class="place-popover__status">Cargando imágenes...</span>';

  fetchPlaceImages(token.dataset.query)
    .then((images) => {
      token.dataset.previewState = "loaded";
      renderPlacePreview(token, images);
    })
    .catch(() => {
      token.dataset.previewState = "error";
      panel.innerHTML = `
        <span class="place-popover__status">No se pudieron cargar imágenes.</span>
        <a class="place-popover__link" href="https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=${encodeURIComponent(
          token.dataset.query,
        )}" target="_blank" rel="noreferrer">Abrir búsqueda</a>
      `;
    });
}

function setupPlacePreviews() {
  const activate = (event) => {
    const token = event.target.closest(".place-token");
    if (!token) {
      return;
    }
    loadPlacePreview(token);
  };

  document.addEventListener("mouseover", activate);
  document.addEventListener("focusin", activate);
  document.addEventListener("touchstart", activate, { passive: true });
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
renderDetails();
setupPlacePreviews();
setupCopyLink();
initNotes();
refreshIcons();
