(() => {
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  };

  // Spanish strings. English is the HTML itself, captured on load.
  const ES = {
    skip: 'Ir al contenido',
    'nav.work': 'Proyectos', 'nav.experience': 'Experiencia', 'nav.about': 'Sobre mí', 'nav.contact': 'Contacto',
    themeToggle: 'Cambiar modo oscuro',
    'hero.eyebrow': 'Desarrollador Full Stack · Analista de Datos',
    'hero.lead': 'Construye sistemas web orientados a datos, desde la arquitectura del backend hasta los dashboards que ayudan a decidir. Desarrolla software en producción desde 2022.',
    'hero.ctaWork': 'Ver proyectos', 'hero.ctaCv': 'Descargar CV',
    'hero.status': 'Disponible para prácticas y puestos junior', 'hero.location': 'Hidalgo, México',
    'num.since': 'Desarrollando software profesionalmente desde',
    'num.load': 'Espectadores simultáneos en la prueba de carga de TERA',
    'num.roles': 'Puestos en desarrollo, datos y liderazgo',
    'num.degrees': 'Ingenierías en curso',
    'work.eyebrow': 'Proyectos destacados', 'work.all': 'Todos los repositorios',
    'cat.fullstack': 'Full Stack · Evento real', 'cat.client': 'Cliente · CopoRyte Services',
    'cat.data': 'Datos · Analítica', 'cat.app': 'App web · Universidad',
    'cat.interactive': 'Interactivo · Universidad',
    'p.tera': 'Plataforma con la que se operó de principio a fin un torneo de robótica de seis categorías en el ITSOEH: registro de equipos con importación desde Excel, validación de pagos, accesos por rol para jueces y administradores, sorteo de llaves sin enfrentamientos repetidos y resultados en vivo.',
    'p.tera.f1': 'Probada con 600 espectadores simultáneos y 12 jueces capturando resultados a la vez',
    'p.tera.f2': 'Enfrentamientos únicos garantizados por un sorteo con backtracking y una restricción en la base de datos',
    'p.tera.f3': 'Credenciales cargadas desde variables de entorno, nunca desde el código',
    'p.micuenta': 'Backend de punto de venta para restaurantes con soporte para varias sucursales: menús y categorías, mesas, comensales, órdenes en vivo, autenticación JWT y recuperación de cuenta por correo, documentado en Swagger.',
    'p.beqando': 'Plataforma de quinielas deportivas con causa. Los usuarios entran a quinielas de partidos reales, pagan con Stripe y generan donaciones para beneficiarios, con tabla de posiciones y códigos de descuento.',
    'p.leads.t': 'Dashboard de Leads',
    'p.leads': 'Dashboard integral para la dirección de un cliente, con proyecciones, simulación presupuestal, seguimiento de KPIs, insights automáticos y modelos de predicción mensual, alimentado de forma continua por Windsor AI.',
    'p.ordify': 'Sistema de gestión para restaurantes con roles por PIN para administrador, mesero, chef y barista, manejo de mesas y pedidos, y colas separadas para cocina y barra.',
    'p.museum.t': 'Museo Virtual',
    'p.museum': 'Museo interactivo sobre la obra del pintor Bayron Gálvez, con cuadros animados, salas temáticas, filtros y un cuestionario final.',
    'cta.repo': 'Ver repositorio', 'cta.private': 'Repositorio privado del cliente',
    'cta.confidential': 'Trabajo confidencial para cliente', 'cta.demo': 'Demo en vivo', 'cta.code': 'Código',
    'exp.eyebrow': 'Experiencia',
    'exp.ibm.when': 'Nov 2026 — Actualidad',
    'exp.ibm': 'Representa a IBM Z y la tecnología mainframe en el campus: organiza talleres y watch parties y acompaña a estudiantes en la plataforma IBM Z Xplore. Cuenta con la insignia IBM Z Xplore Concepts.',
    'exp.data.when': 'Abr 2024 — Nov 2025',
    'exp.data.t': 'Desarrollador y Analista de Datos', 'exp.data.org': 'CopoRyte Services · Freelance',
    'exp.data': 'Diseñó y construyó un dashboard de leads para la dirección de un cliente, con proyecciones, simulación presupuestal y seguimiento de KPIs. Estructuró la arquitectura de datos con filtros dinámicos, cálculos predictivos, comparativos históricos y validaciones automáticas, integrada con Windsor AI.',
    'exp.fs.when': 'Ene 2022 — Mar 2024',
    'exp.fs.t': 'Desarrollador Full Stack',
    'exp.fs': 'Desarrolló y mantuvo plataformas web para clientes, diseñó interfaces responsivas y formularios conectados a bases de datos, y coordinó al equipo full stack en planeación, reparto de tareas y control de entregas. Reconocido por desempeño destacado.',
    'exp.adm.when': 'Jul 2021 — Dic 2021',
    'exp.adm.t': 'Administrador General',
    'exp.adm': 'Elaboró balances de ingresos y egresos, gestionó contratos y documentación administrativa, y negoció cotizaciones con proveedores.',
    'about.eyebrow': 'Sobre mí', 'about.alt': 'Retrato de Alex Calva',
    'about.p1': 'Alex Calva es desarrollador de software de Hidalgo, México. Empezó como desarrollador full stack en plataformas para restaurantes y quinielas con causa, y después se enfocó en datos, donde diseñó dashboards con proyecciones y modelos predictivos.',
    'about.p2': 'Estudia dos ingenierías, Tecnologías de la Información y Comunicaciones en el ITSOEH y Datos e Inteligencia Artificial en el IEU, y representa a IBM Z en su campus como Student Ambassador.',
    'sk.lang': 'Lenguajes', 'sk.data': 'Datos', 'sk.tools': 'Herramientas', 'sk.spoken': 'Idiomas',
    'sk.spoken.v': 'Español (nativo) · Inglés (C1)',
    'edu.eyebrow': 'Formación',
    'edu.itsoeh': 'Ingeniería en Tecnologías de la Información y Comunicaciones',
    'edu.ieu': 'Ingeniería en Datos e Inteligencia Artificial',
    'edu.cbtis': 'Técnico en Programación',
    'cert.eyebrow': 'Certificaciones',
    'focus.eyebrow': 'Enfoque actual',
    'focus.k1': 'Estudiando', 'focus.v1': 'Machine learning aplicado',
    'focus.k2': 'Comunidad', 'focus.v2': 'Talleres de IBM Z en el ITSOEH',
    'focus.k3': 'Busca', 'focus.v3': 'Prácticas y puestos junior en software, datos e IA',
    'contact.eyebrow': 'Contacto',
    'contact.title': 'Construyamos algo útil.',
    'contact.lead': 'Disponible para prácticas, puestos junior y proyectos freelance de desarrollo de software y datos.',
    'footer.top': 'Volver arriba ↑',
  };

  const nodes = [...document.querySelectorAll('[data-i18n]')];
  const EN = {};
  nodes.forEach((n) => { EN[n.dataset.i18n] = n.innerHTML; });
  const ariaNodes = [...document.querySelectorAll('[data-i18n-aria]')];
  ariaNodes.forEach((n) => { EN[n.dataset.i18nAria] = n.getAttribute('aria-label'); });
  const altNodes = [...document.querySelectorAll('[data-i18n-alt]')];
  altNodes.forEach((n) => { EN[n.dataset.i18nAlt] = n.getAttribute('alt'); });
  const titles = { en: document.title, es: 'Alex Calva — Desarrollador Full Stack y Analista de Datos' };

  function setLang(lang) {
    const dict = lang === 'es' ? ES : EN;
    nodes.forEach((n) => { const v = dict[n.dataset.i18n]; if (v != null) n.innerHTML = v; });
    ariaNodes.forEach((n) => { const v = dict[n.dataset.i18nAria]; if (v) n.setAttribute('aria-label', v); });
    altNodes.forEach((n) => { const v = dict[n.dataset.i18nAlt]; if (v) n.setAttribute('alt', v); });
    document.documentElement.lang = lang;
    document.title = titles[lang];
    document.querySelectorAll('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    store.set('lang', lang);
  }

  document.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));
  const saved = store.get('lang');
  const initial = saved === 'es' ? 'es' : 'en';
  if (initial !== 'en') setLang(initial);

  // Theme
  const root = document.documentElement;
  document.querySelector('.theme').addEventListener('click', () => {
    const current = root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    store.set('theme', next);
  });

  // Year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Reveal on scroll
  const targets = document.querySelectorAll('.card, .tl, .num, .list li, .focus, .about__grid');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach((t) => t.classList.add('reveal'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    targets.forEach((t) => io.observe(t));
  }
})();
