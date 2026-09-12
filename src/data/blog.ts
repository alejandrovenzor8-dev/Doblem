export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogArticle = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: string;
  date: string;
  isoDate: string;
  readTime: string;
  coverImage: string;
  coverAlt: string;
  keywords: string[];
  intro: string[];
  sections: BlogSection[];
  faq: { question: string; answer: string }[];
  sources: { label: string; url: string }[];
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "cuanto-cuesta-construir-casa-chihuahua",
    title: "¿Cuánto cuesta construir una casa en Chihuahua? Guía para presupuestar",
    seoTitle: "Cuánto cuesta construir una casa en Chihuahua | Guía",
    description: "Conoce qué determina el costo de construir una casa en Chihuahua, cómo preparar un presupuesto realista y qué partidas debes contemplar antes de iniciar.",
    category: "Construcción",
    date: "12 septiembre 2026",
    isoDate: "2026-09-12",
    readTime: "9 min",
    coverImage: "/gallery/portafolio/residencia-contemporanea-01/residencia-01-01.jpg",
    coverAlt: "Residencia contemporánea construida en Chihuahua",
    keywords: ["cuánto cuesta construir una casa en Chihuahua", "costo de construcción por m2", "presupuesto de obra", "construir casa Chihuahua"],
    intro: [
      "La pregunta más frecuente antes de comenzar una vivienda es cuánto costará construirla. Una cifra aislada por metro cuadrado puede servir como referencia inicial, pero no sustituye un presupuesto elaborado con proyecto, cantidades de obra, especificaciones y condiciones reales del terreno.",
      "En Chihuahua, el clima, la disponibilidad de materiales, la ubicación del predio y el nivel de acabados pueden modificar sustancialmente la inversión. Esta guía explica cómo formar un presupuesto útil y evitar que una estimación temprana se convierta en una expectativa poco realista.",
    ],
    sections: [
      {
        heading: "Por qué no existe un precio único por metro cuadrado",
        paragraphs: [
          "Dos casas con la misma superficie pueden tener costos muy distintos. Una planta compacta suele requerir menos fachada, estructura e instalaciones que una residencia con dobles alturas, grandes claros, sótano, alberca o volúmenes complejos. También cambia el costo si se especifican cancelerías de gran formato, piedra natural, carpintería especial, climatización integral o automatización.",
          "Por eso, una cotización responsable debe indicar qué incluye: obra preliminar, cimentación, estructura, albañilerías, instalaciones, acabados, equipamiento, exteriores, honorarios, permisos e impuestos aplicables. Comparar únicamente el total por metro cuadrado puede ocultar diferencias importantes de alcance.",
        ],
      },
      {
        heading: "Las partidas que debe incluir tu presupuesto",
        paragraphs: ["El presupuesto debe organizarse por capítulos y relacionarse con planos y especificaciones. Como mínimo, conviene contemplar:"],
        bullets: [
          "Estudios previos, levantamiento, mecánica de suelos y proyecto ejecutivo.",
          "Licencias, responsivas, trámites y conexiones de servicios.",
          "Preparación del terreno, cimentación, estructura y albañilería.",
          "Instalaciones hidráulicas, sanitarias, eléctricas, gas, voz y datos.",
          "Impermeabilización, aislamiento térmico, cancelería y herrería.",
          "Pisos, recubrimientos, carpintería, cocina, baños y pintura.",
          "Climatización, iluminación, equipamiento y automatización.",
          "Banquetas, bardas, cochera, jardinería y obras exteriores.",
        ],
      },
      {
        heading: "Cómo influyen el proyecto y los acabados",
        paragraphs: [
          "El proyecto arquitectónico toma decisiones que impactan el costo durante toda la vida de la casa. Modular claros, concentrar zonas húmedas, coordinar instalaciones y definir medidas comerciales puede reducir desperdicios sin sacrificar diseño. En cambio, resolver cambios durante la obra genera demoliciones, compras urgentes y retrasos.",
          "Conviene desarrollar una matriz de acabados antes de contratar: marca o desempeño esperado, formato, color, precio objetivo y alternativa autorizada. Así se distinguen los elementos prioritarios —por ejemplo, aislamiento, ventanas o cocina— de aquellos que pueden ajustarse sin afectar el desempeño general.",
        ],
      },
      {
        heading: "Reserva para imprevistos y control de cambios",
        paragraphs: [
          "Todo proyecto debe contar con una reserva acorde con su nivel de definición y riesgo. Un proyecto ejecutivo completo reduce incertidumbre; un anteproyecto todavía deja muchas decisiones abiertas. La reserva no debe utilizarse para ampliar el alcance, sino para condiciones no visibles o variaciones justificadas.",
          "Durante la construcción, cada cambio debe documentarse con descripción, costo y efecto en el programa antes de ejecutarse. Un reporte periódico de avance físico y financiero permite saber cuánto se ha construido, cuánto se ha pagado y qué compromisos siguen pendientes.",
        ],
      },
      {
        heading: "Pasos para obtener una cotización confiable",
        paragraphs: ["Antes de comparar propuestas, procura que todos los constructores reciban la misma información y coticen el mismo alcance."],
        bullets: [
          "Define necesidades, superficie objetivo y rango de inversión.",
          "Realiza los estudios del predio y confirma restricciones urbanas.",
          "Desarrolla proyecto arquitectónico, ingenierías y especificaciones.",
          "Solicita catálogo de conceptos, cantidades, precios y programa.",
          "Aclara exclusiones, anticipos, forma de pago, garantías y proceso de cambios.",
          "Evalúa experiencia, calidad documental y capacidad de supervisión, no sólo el precio final.",
        ],
      },
      {
        heading: "Conclusión",
        paragraphs: ["El costo de construir una casa en Chihuahua se determina con información, no con una cifra genérica. Un buen proyecto ejecutivo y un presupuesto transparente permiten tomar decisiones antes de que sean costosas. En Doble M. podemos integrar diseño, presupuesto, permisos y ejecución para darte control desde la planeación hasta la entrega."],
      },
    ],
    faq: [
      { question: "¿Se puede cotizar una casa sólo con los metros cuadrados?", answer: "Se puede generar una aproximación preliminar, pero para contratar se requieren planos, ingenierías, especificaciones y cantidades de obra." },
      { question: "¿El terreno está incluido en el costo de construcción?", answer: "Normalmente no. La compra del predio, escrituración y estudios deben identificarse por separado, salvo que la propuesta indique expresamente lo contrario." },
      { question: "¿Qué ayuda más a evitar sobrecostos?", answer: "Definir el proyecto ejecutivo antes de iniciar, comparar alcances equivalentes y autorizar por escrito cada cambio con su impacto en costo y tiempo." },
    ],
    sources: [
      { label: "Municipio de Chihuahua: trámites para construir o remodelar", url: "https://www.municipiochihuahua.gob.mx/CCS/Prensa/Si_planeas_construir_o_remodelar%2C_Municipio_da_a_conocer_los_tr%C3%A1mites_que_debes_realizar" },
      { label: "CONAVI: Manual de vivienda sustentable para clima seco y semiseco", url: "https://www.gob.mx/conavi/documentos/manual-vivienda-sustentable-seco-semiseco" },
    ],
  },
  {
    slug: "licencia-construccion-chihuahua-requisitos",
    title: "Licencia de construcción en Chihuahua: requisitos y proceso",
    seoTitle: "Licencia de construcción en Chihuahua: requisitos 2026",
    description: "Guía práctica sobre la licencia de construcción en Chihuahua, documentos habituales, etapas del trámite y errores que pueden retrasar una obra.",
    category: "Trámites",
    date: "10 septiembre 2026",
    isoDate: "2026-09-10",
    readTime: "8 min",
    coverImage: "/gallery/portafolio/residencia-contemporanea-01/residencia-01-07.jpg",
    coverAlt: "Proceso de construcción residencial en Chihuahua",
    keywords: ["licencia de construcción Chihuahua", "permiso para construir Chihuahua", "requisitos construcción Municipio Chihuahua", "tramitología construcción"],
    intro: [
      "Construir, ampliar, modificar, reparar o demoler una edificación requiere revisar el trámite aplicable ante la Dirección de Desarrollo Urbano y Ecología del Municipio de Chihuahua. La licencia acredita que la obra fue autorizada conforme al proyecto y a la regulación correspondiente.",
      "Los requisitos exactos dependen del tipo, superficie y uso del inmueble. Esta guía resume el proceso para que puedas prepararte, pero la ficha municipal vigente es siempre la referencia definitiva.",
    ],
    sections: [
      { heading: "Qué es una licencia de construcción", paragraphs: ["El portal municipal la define como el documento mediante el cual se autoriza a propietarios o poseedores a construir, ampliar, modificar, reparar o demoler una edificación o instalación. No debe confundirse con la constancia de zonificación, el uso de suelo o la terminación de obra; son actos distintos que pueden formar parte del expediente."] },
      {
        heading: "Primero: confirma la viabilidad del predio",
        paragraphs: [
          "Antes de diseñar a detalle, es importante revisar ubicación, clave catastral, medidas, colindancias, uso permitido y restricciones. El régimen del fraccionamiento o condominio puede añadir lineamientos de imagen, altura, retiros y materiales, aunque su aprobación no reemplaza la autorización municipal.",
          "Si el proyecto es comercial, industrial, departamental u otro uso señalado por la autoridad, puede requerirse documentación adicional, incluida la licencia de uso de suelo. También pueden intervenir dictámenes o autorizaciones ambientales, de Protección Civil o de otras dependencias según el alcance.",
        ],
      },
      {
        heading: "Documentación que conviene preparar",
        paragraphs: ["La lista definitiva debe consultarse en la ficha del trámite correspondiente. De manera general, el expediente puede involucrar:"],
        bullets: ["Acreditación de propiedad o posesión e identificación del solicitante.", "Información catastral, predial y datos precisos del inmueble.", "Planos arquitectónicos y, cuando corresponda, estructurales e instalaciones.", "Memorias, cálculos, firmas y responsivas de profesionales acreditados.", "Constancia de zonificación o uso de suelo cuando sea aplicable.", "Comprobantes de pago y autorizaciones complementarias solicitadas."],
      },
      {
        heading: "Etapas habituales del proceso",
        paragraphs: [
          "El proceso comienza al integrar el expediente y seleccionar el trámite adecuado. La ventanilla revisa la documentación, puede emitir observaciones y, una vez solventadas, determina derechos y resolución. El Municipio cuenta además con una Ventanilla Virtual para diversos trámites, entre ellos licencia de construcción y uso de suelo.",
          "La licencia debe estar disponible durante la obra. Si cambia el proyecto, se amplía la superficie o vence la vigencia, es necesario consultar si procede una modificación o renovación. Al concluir, deben atenderse los avisos, constancias o trámites de terminación que correspondan.",
        ],
      },
      {
        heading: "Errores que suelen retrasar una autorización",
        paragraphs: ["La mejor prevención es coordinar proyecto y tramitología desde el inicio. De esta manera, una observación se resuelve en documentos y no cuando la construcción ya está en proceso."],
        bullets: ["Diseñar sin verificar restricciones y después intentar adaptar el proyecto.", "Presentar planos que no coinciden entre arquitectura, estructura e instalaciones.", "Usar medidas o datos del predio diferentes a los documentos oficiales.", "Omitir firmas, responsivas, anexos o autorizaciones complementarias.", "Iniciar trabajos antes de contar con la autorización correspondiente."],
      },
      { heading: "Conclusión", paragraphs: ["Gestionar permisos no es un paso aislado: forma parte de la planeación técnica de la obra. Doble M. ofrece tramitología y gestión de permisos para integrar expedientes consistentes y acompañar el proceso conforme a los requisitos aplicables."] },
    ],
    faq: [
      { question: "¿Toda remodelación necesita licencia?", answer: "Depende del alcance. Una modificación estructural, ampliación o intervención relevante puede requerir autorización; conviene verificar el caso directamente con el Municipio." },
      { question: "¿La aprobación del fraccionamiento sustituye la licencia municipal?", answer: "No. Son revisiones diferentes y puede ser necesario cumplir ambas." },
      { question: "¿Puedo iniciar mientras se resuelve el trámite?", answer: "No es recomendable. Debes contar con las autorizaciones aplicables antes de ejecutar los trabajos sujetos a licencia." },
    ],
    sources: [
      { label: "Municipio de Chihuahua: ficha de Licencia de Construcción", url: "https://tramitesenlineacuu.mpiochih.gob.mx/web/fichaAsunto.do?asas_ide_asu=2444&op=23&opcion=0" },
      { label: "Municipio de Chihuahua: Ventanilla Virtual", url: "https://www.municipiochihuahua.gob.mx/CCS/Prensa/Recuerda_que_puedes_realizar_tus_tr%C3%A1mites_municipales_de_manera_digital_gracias_a_la_ventanilla_virtual_" },
    ],
  },
  {
    slug: "comprar-casa-preventa-chihuahua",
    title: "Comprar una casa en preventa en Chihuahua: lista de verificación",
    seoTitle: "Comprar casa en preventa en Chihuahua: guía completa",
    description: "Qué revisar antes de comprar una casa en preventa en Chihuahua: permisos, contrato, proyecto, garantías, pagos, entrega y escrituración.",
    category: "Compra",
    date: "8 septiembre 2026",
    isoDate: "2026-09-08",
    readTime: "10 min",
    coverImage: "/gallery/propiedades/san-charbel/SCH12.png",
    coverAlt: "Residencia premium en preventa en Chihuahua",
    keywords: ["comprar casa en preventa Chihuahua", "preventa inmobiliaria", "qué revisar antes de comprar casa", "casas nuevas Chihuahua"],
    intro: [
      "Comprar en preventa permite elegir una propiedad antes de que concluya la construcción y, en ciertos proyectos, personalizar decisiones. También implica evaluar documentos, alcance y tiempos con más cuidado porque el inmueble terminado aún no puede inspeccionarse por completo.",
      "Profeco establece información que el proveedor debe presentar al consumidor. Convertimos esos puntos en una lista práctica para revisar la operación con calma y acompañamiento profesional.",
    ],
    sections: [
      { heading: "1. Identifica al vendedor y la situación del inmueble", paragraphs: ["Verifica quién es propietario, quién comercializa y quién construye. Solicita documentos que acrediten la propiedad y pregunta si existen gravámenes; Profeco señala que, de existir, deben quedar cancelados al firmar la escritura. Confirma además domicilio, medios de contacto y antecedentes del proveedor."] },
      {
        heading: "2. Revisa proyecto, permisos y especificaciones",
        paragraphs: ["En preventa, el proveedor debe mostrar el proyecto ejecutivo, la maqueta o representación del inmueble y las autorizaciones, licencias o permisos de construcción. La información debe describir terreno, superficie construida, estructura, instalaciones, acabados, estacionamientos, áreas comunes y servicios."],
        bullets: ["Planos arquitectónicos, estructurales y de instalaciones.", "Memoria o catálogo de materiales y acabados con marcas o calidades equivalentes.", "Superficies privativas, comunes y de terreno claramente diferenciadas.", "Equipamiento incluido y elementos mostrados sólo con fines ilustrativos.", "Fecha o etapa de entrega y condiciones para una eventual prórroga."],
      },
      {
        heading: "3. Lee el contrato antes de entregar dinero",
        paragraphs: [
          "Profeco recomienda comprobar que el contrato de adhesión esté registrado y consultar su número en el Registro Público de Contratos de Adhesión. El documento debe reflejar lo ofrecido en publicidad y conversaciones; una promesa importante debe quedar por escrito.",
          "Revisa precio total, calendario de pagos, gastos no incluidos, penas para ambas partes, causales de cancelación, proceso de devolución, garantía, modificaciones permitidas y condiciones de escrituración. Si alguna cláusula no es clara, solicita explicación y asesoría independiente antes de firmar.",
        ],
      },
      { heading: "4. Calcula la inversión total, no sólo el precio", paragraphs: ["Además del precio anunciado pueden existir gastos de escrituración, impuestos, avalúo, apertura de crédito, investigación, administración, equipamiento o cuotas de condominio. Solicita una relación por escrito y prepara distintos escenarios si utilizarás crédito. La capacidad de pago debe considerar mensualidad, seguros, mantenimiento y otros compromisos de largo plazo."] },
      { heading: "5. Documenta la entrega y la garantía", paragraphs: ["Antes de recibir, realiza una inspección con planos y especificaciones. Registra por escrito pendientes en acabados, equipos e instalaciones, responsables y fechas de corrección. Conserva contrato, comprobantes, publicidad, planos, garantías y acta de entrega. No firmes conformidad sobre elementos que todavía no has podido verificar."] },
      {
        heading: "Señales de una preventa bien estructurada",
        paragraphs: ["Una residencia de alto valor debe ofrecer la misma calidad en su documentación que en su arquitectura. En Doble M. presentamos cada proyecto con información clara para que el comprador pueda evaluar su patrimonio de manera informada."],
        bullets: ["Información técnica y comercial congruente.", "Permisos y propiedad verificables.", "Contrato registrado, legible y equilibrado.", "Especificaciones detalladas y proceso formal para cambios.", "Calendario de avance y comunicación documentada.", "Claridad sobre entrega, escrituración, garantías y servicio posterior."],
      },
    ],
    faq: [
      { question: "¿Qué debe mostrar el desarrollador en una preventa?", answer: "Entre otros elementos, proyecto ejecutivo, autorizaciones y permisos, características del inmueble, planos, opciones de pago y condiciones de escrituración." },
      { question: "¿Cómo reviso el contrato de adhesión?", answer: "Solicita su número de registro y consúltalo en el Registro Público de Contratos de Adhesión de Profeco." },
      { question: "¿El precio anunciado incluye escrituración?", answer: "No necesariamente. Pide por escrito el detalle de gastos distintos al precio, como impuestos, avalúo, escrituración y cargos de crédito." },
    ],
    sources: [
      { label: "Profeco: orientación para adquirir vivienda y crédito", url: "https://www.gob.mx/profeco/prensa/si-estas-pensando-en-adquirir-un-credito-de-vivienda-la-profeco-te-dice-que-debes-tener-en-cuenta" },
      { label: "Profeco: ¿Quieres comprar una casa o un departamento?", url: "https://www.gob.mx/profeco/documentos/quieres-comprar-una-casa-o-un-departamento" },
    ],
  },
  {
    slug: "plusvalia-inmobiliaria-chihuahua",
    title: "Plusvalía inmobiliaria en Chihuahua: qué es y cómo evaluar una zona",
    seoTitle: "Plusvalía inmobiliaria en Chihuahua: guía para invertir",
    description: "Aprende qué factores influyen en la plusvalía de una propiedad en Chihuahua y cómo analizar ubicación, proyecto, servicios y riesgos antes de invertir.",
    category: "Inversión",
    date: "5 septiembre 2026",
    isoDate: "2026-09-05",
    readTime: "8 min",
    coverImage: "/gallery/portafolio/residencia-contemporanea-02/residencia-02-01.jpg",
    coverAlt: "Vivienda contemporánea como inversión inmobiliaria en Chihuahua",
    keywords: ["plusvalía Chihuahua", "invertir en bienes raíces Chihuahua", "zonas con plusvalía Chihuahua", "valor de una propiedad"],
    intro: [
      "La plusvalía es el aumento del valor de un inmueble a través del tiempo. No es una ganancia garantizada ni depende sólo de que una zona sea popular: resulta de la combinación entre suelo, accesibilidad, servicios, demanda, calidad urbana, regulación y condiciones del propio inmueble.",
      "El Índice SHF permite observar la evolución de precios de vivienda adquirida con crédito hipotecario, pero una decisión concreta necesita análisis a nivel de colonia, calle y propiedad.",
    ],
    sections: [
      {
        heading: "Los factores que más influyen",
        paragraphs: ["Una buena ubicación no corrige por sí sola problemas legales, estructurales o de distribución. Del mismo modo, una casa excelente puede perder atractivo si el entorno carece de servicios o accesos suficientes."],
        bullets: ["Conectividad actual y proyectos viales verificables.", "Acceso a escuelas, salud, comercio, empleo y espacios recreativos.", "Disponibilidad y calidad de agua, energía, drenaje y telecomunicaciones.", "Seguridad, mantenimiento urbano y calidad del espacio público.", "Oferta disponible, demanda real y velocidad de comercialización.", "Uso de suelo, densidad permitida y desarrollo futuro del entorno.", "Calidad arquitectónica, estado de conservación y eficiencia operativa."],
      },
      {
        heading: "Cómo analizar una zona en Chihuahua",
        paragraphs: ["Visita la zona en distintos horarios y días. Mide tiempos reales de traslado, ruido, iluminación, tráfico y actividad. Recorre servicios cotidianos y pregunta por cuotas, disponibilidad de agua, mantenimiento y obras previstas.", "Distingue anuncios de planes autorizados. Una nueva vialidad o desarrollo puede beneficiar la conectividad, pero también aumentar tráfico o cambiar densidades. Consulta fuentes municipales y documentos del proyecto antes de incorporar esas expectativas a tu decisión."],
      },
      { heading: "Compara propiedades realmente comparables", paragraphs: ["Para estimar valor, compara inmuebles del mismo sector con superficie, antigüedad, estado, estacionamiento y nivel de acabados semejantes. El precio publicado no siempre es el precio de cierre. Un avalúo profesional considera características físicas y referencias de mercado con mayor rigor."] },
      {
        heading: "Plusvalía no es lo mismo que rendimiento",
        paragraphs: ["La plusvalía se materializa normalmente al vender. El rendimiento por renta proviene del flujo periódico y debe calcularse después de vacancia, mantenimiento, administración, impuestos, seguros y reparaciones. Un inmueble puede apreciarse y generar poco flujo, o tener buen flujo con apreciación moderada.", "También debes incluir los costos de entrada y salida: escrituración, financiamiento, adecuaciones, comercialización e impuestos aplicables. La inversión se evalúa con el resultado neto y el horizonte previsto, no sólo con el porcentaje de aumento del precio."],
      },
      {
        heading: "Indicadores de una propiedad que conserva valor",
        paragraphs: ["La calidad del inmueble completa el análisis de la ubicación."],
        bullets: ["Documentación completa y situación jurídica clara.", "Distribución funcional que admite distintas etapas de vida.", "Buena iluminación, ventilación, aislamiento y calidad constructiva.", "Mantenimiento razonable y materiales durables.", "Estacionamiento, almacenamiento y espacios exteriores útiles.", "Diseño coherente con el mercado objetivo de la zona."],
      },
      { heading: "Conclusión", paragraphs: ["La plusvalía se estudia, no se promete. Una decisión sólida combina datos públicos, comparables, revisión urbana, avalúo y análisis técnico del inmueble. Si buscas una residencia premium en Chihuahua, Doble M. puede ayudarte a evaluar tanto la calidad del proyecto como su contexto patrimonial."] },
    ],
    faq: [
      { question: "¿Se puede garantizar la plusvalía?", answer: "No. Se pueden analizar factores favorables y riesgos, pero el valor futuro depende del mercado y de condiciones que pueden cambiar." },
      { question: "¿Una zona nueva siempre tiene más plusvalía?", answer: "No necesariamente. Deben revisarse demanda, servicios, conectividad, regulación, calidad urbana y oferta futura." },
      { question: "¿Qué documento ayuda a conocer el valor actual?", answer: "Un avalúo profesional aporta una estimación técnica; para inversión conviene complementarlo con comparables y costos netos de la operación." },
    ],
    sources: [
      { label: "Sociedad Hipotecaria Federal: Índice SHF de Precios de la Vivienda 2025-2026", url: "https://www.gob.mx/shf/documentos/indice-shf-de-precios-de-la-vivienda-en-mexico-2025-a-2026" },
      { label: "Profeco: aspectos de ubicación, estado físico y situación legal", url: "https://www.gob.mx/profeco/documentos/antes-de-comprar-casa-usada-informate" },
    ],
  },
  {
    slug: "diseno-bioclimatico-chihuahua-clima-seco",
    title: "Diseño bioclimático en Chihuahua: una casa preparada para clima seco",
    seoTitle: "Diseño bioclimático en Chihuahua para clima seco",
    description: "Estrategias de orientación, sombra, aislamiento, ventilación y vegetación para diseñar viviendas confortables y eficientes en el clima de Chihuahua.",
    category: "Arquitectura",
    date: "2 septiembre 2026",
    isoDate: "2026-09-02",
    readTime: "9 min",
    coverImage: "/gallery/propiedades/RCL_1/RCL12.jpg",
    coverAlt: "Arquitectura residencial adaptada al clima de Chihuahua",
    keywords: ["diseño bioclimático Chihuahua", "casa para clima seco", "aislamiento térmico vivienda", "arquitectura sustentable Chihuahua"],
    intro: [
      "Chihuahua exige una arquitectura que responda a radiación solar intensa, ambiente seco y variaciones importantes de temperatura. El diseño bioclimático utiliza la orientación, la forma, la envolvente y el paisaje para mejorar el confort antes de depender de equipos mecánicos.",
      "CONAVI dispone de estrategias y un manual específico para vivienda en clima seco y semiseco. Sus principios deben adaptarse al sitio mediante análisis de asoleamiento, vientos, uso y presupuesto.",
    ],
    sections: [
      { heading: "Empieza por orientar correctamente", paragraphs: ["La orientación define cuánta radiación recibe cada fachada y en qué horario. Las fachadas este y oeste suelen recibir sol de ángulo bajo, más difícil de controlar sólo con aleros. Ubicar y dimensionar ventanas con base en el asoleamiento permite aprovechar iluminación natural sin convertir el interior en una carga térmica excesiva."] },
      { heading: "Control solar exterior", paragraphs: ["Es preferible detener el calor antes de que atraviese el vidrio. Aleros, celosías, pórticos, remetimientos y vegetación pueden dar sombra según orientación y temporada. El diseño debe calcularse para no oscurecer innecesariamente la vivienda ni bloquear ganancias solares útiles en invierno."] },
      { heading: "Una envolvente continua y bien aislada", paragraphs: ["Muros, techos, ventanas y puertas forman la envolvente térmica. El aislamiento funciona mejor cuando es continuo y se coordinan puentes térmicos, sellos y encuentros. En techos, expuestos muchas horas al sol, especificar aislamiento e impermeabilización como un sistema es especialmente importante.", "La ventana no se elige sólo por apariencia: tamaño, orientación, tipo de vidrio, marco, hermeticidad y protección exterior trabajan juntos. Una gran superficie acristalada sin estrategia puede aumentar consumo y generar zonas incómodas junto al vidrio."] },
      { heading: "Ventilación, patios y paisaje", paragraphs: ["La ventilación natural debe responder a horarios y condiciones exteriores; abrir cuando el aire exterior está más caliente no siempre mejora el confort. Los patios pueden crear espacios protegidos, llevar luz al centro de la planta y apoyar ventilación. CONAVI recomienda incorporar vegetación en patios para clima muy seco, pues ayuda a controlar radiación y viento."] },
      { heading: "Agua y vegetación con criterio local", paragraphs: ["Un jardín bioclimático no necesita depender de un consumo excesivo de agua. Seleccionar especies adecuadas, agruparlas por necesidad, mejorar suelo, usar riego eficiente y diseñar sombras útiles permite que el paisaje contribuya al microclima. La captación o reúso sólo debe implementarse con instalaciones y mantenimiento apropiados."] },
      { heading: "Integra arquitectura y climatización", paragraphs: ["El diseño pasivo reduce cargas, pero no elimina automáticamente la necesidad de climatización. El equipo debe dimensionarse después de definir envolvente, ventanas, ocupación y orientación. Sobredimensionar puede elevar inversión y reducir eficiencia o confort.", "La mejor solución se obtiene coordinando arquitectura, estructura e instalaciones desde el proyecto ejecutivo. Así, las decisiones estéticas también aportan sombra, hermeticidad, mantenimiento y desempeño."] },
      { heading: "Conclusión", paragraphs: ["Una casa bioclimática no tiene un estilo obligatorio: es una vivienda diseñada con conocimiento de su lugar. En Doble M. integramos orientación, materialidad, iluminación, paisaje y sistemas para crear residencias contemporáneas confortables en el clima de Chihuahua."] },
    ],
    faq: [
      { question: "¿El diseño bioclimático encarece una casa?", answer: "No necesariamente. Muchas decisiones —orientación, distribución y tamaño de vanos— son más efectivas cuando se toman temprano y pueden evitar correcciones o equipos excesivos." },
      { question: "¿Cuál es el elemento más importante?", answer: "No hay uno aislado. Orientación, sombra, aislamiento, hermeticidad, ventanas y operación deben funcionar como sistema." },
      { question: "¿Una casa bioclimática necesita aire acondicionado?", answer: "Puede necesitarlo según clima, uso y nivel de confort esperado, pero un buen diseño puede reducir las cargas y mejorar su desempeño." },
    ],
    sources: [
      { label: "CONAVI: estrategias de diseño arquitectónico bioclimático", url: "https://siesco.conavi.gob.mx/Siesco/Documentos" },
      { label: "CONAVI: Manual de vivienda sustentable seco-semiseco", url: "https://www.gob.mx/conavi/documentos/manual-vivienda-sustentable-seco-semiseco" },
    ],
  },
  {
    slug: "remodelar-casa-aumentar-valor",
    title: "Cómo remodelar una casa para aumentar su valor sin desperdiciar presupuesto",
    seoTitle: "Cómo remodelar una casa para aumentar su valor",
    description: "Prioriza una remodelación rentable: diagnóstico, instalaciones, distribución, cocina, baños, eficiencia, fachada y documentación para proteger tu inversión.",
    category: "Remodelación",
    date: "30 agosto 2026",
    isoDate: "2026-08-30",
    readTime: "9 min",
    coverImage: "/gallery/portafolio/acabados-residenciales/acabados-01.jpg",
    coverAlt: "Acabados residenciales en un proyecto de remodelación",
    keywords: ["cómo aumentar el valor de una casa", "remodelar casa", "remodelaciones que aumentan plusvalía", "remodelación Chihuahua"],
    intro: [
      "Una remodelación puede mejorar comodidad, mantenimiento y atractivo comercial, pero no toda inversión se recupera al vender. El valor se protege cuando primero se resuelven riesgos técnicos y después se intervienen los espacios que más influyen en la experiencia cotidiana.",
      "La estrategia correcta depende de si planeas habitar, rentar o vender, del estado actual y del mercado al que se dirige la propiedad.",
    ],
    sections: [
      { heading: "1. Diagnostica antes de diseñar", paragraphs: ["Revisa estructura, humedad, impermeabilización, instalaciones eléctricas, hidráulicas y sanitarias, gas, techos, ventanas y climatización. Profeco recomienda inspeccionar estos elementos al evaluar vivienda usada. Ocultar una falla detrás de un acabado nuevo suele convertirla en una reparación más cara."] },
      { heading: "2. Define objetivo, usuario y límite de inversión", paragraphs: ["Una remodelación para vivir puede privilegiar necesidades personales; una destinada a venta o renta debe responder a un público más amplio. Establece presupuesto, reserva, prioridades y un límite relacionado con el valor razonable de propiedades comparables. Sobrepersonalizar puede reducir el número de compradores interesados."] },
      { heading: "3. Mejora la distribución y la luz", paragraphs: ["Eliminar circulaciones innecesarias, conectar áreas sociales, añadir almacenamiento y mejorar iluminación puede transformar la percepción sin ampliar metros. Antes de retirar muros, un especialista debe determinar si son estructurales y coordinar instalaciones. Una planta funcional suele aportar más valor que un acabado costoso en un espacio incómodo."] },
      { heading: "4. Prioriza cocina y baños con equilibrio", paragraphs: ["Cocina y baños concentran instalaciones y tienen gran peso visual. No siempre requieren demolición total: puede ser suficiente mejorar iluminación, cubiertas, herrajes, muebles, grifería o ventilación. Selecciona materiales resistentes, fáciles de mantener y coherentes con el nivel general de la propiedad."] },
      {
        heading: "5. Mejora confort y consumo",
        paragraphs: ["Estas mejoras pueden ser menos fotogénicas que un recubrimiento, pero elevan la experiencia diaria y reducen problemas posteriores."],
        bullets: ["Corrige infiltraciones de aire y sellos deteriorados.", "Evalúa aislamiento en techo y superficies expuestas.", "Usa protección solar exterior según orientación.", "Actualiza iluminación a soluciones eficientes y bien distribuidas.", "Da mantenimiento o sustituye equipos sólo con dimensionamiento adecuado.", "Repara fugas y selecciona accesorios de uso eficiente del agua."],
      },
      { heading: "6. Cuida fachada, acceso y exteriores", paragraphs: ["La primera impresión importa, pero debe partir de mantenimiento: fisuras, pintura, iluminación, puerta, numeración, cochera y paisaje. Mantén una composición coherente y evita elementos que requieran cuidados desproporcionados. Un exterior limpio y funcional prepara la expectativa para el interior."] },
      { heading: "7. Conserva permisos, planos y garantías", paragraphs: ["Verifica si la intervención requiere licencia y documenta los trabajos. Guarda planos actualizados, fichas de equipos, garantías, facturas y evidencia de instalaciones antes de cerrar muros. Esta información facilita mantenimiento y transmite confianza a un futuro comprador."] },
      { heading: "Conclusión", paragraphs: ["La remodelación que más valor genera es la que resuelve fallas, mejora funcionamiento y mantiene coherencia con la zona y el usuario. Doble M. puede ayudarte desde el diagnóstico y diseño hasta permisos, presupuesto, construcción y entrega."] },
    ],
    faq: [
      { question: "¿Qué conviene remodelar primero?", answer: "Primero seguridad, estructura, humedad e instalaciones; después distribución, confort y acabados." },
      { question: "¿Cocina y baños siempre aumentan el valor?", answer: "Pueden mejorar atractivo, pero la inversión debe guardar proporción con el estado general y el mercado de la propiedad." },
      { question: "¿Necesito permiso para remodelar?", answer: "Depende del tipo de intervención. Ampliaciones, cambios estructurales y otros trabajos pueden requerir autorización municipal." },
    ],
    sources: [
      { label: "Profeco: antes de comprar casa usada, infórmate", url: "https://www.gob.mx/profeco/documentos/antes-de-comprar-casa-usada-informate" },
      { label: "Municipio de Chihuahua: trámites para construir o remodelar", url: "https://www.municipiochihuahua.gob.mx/CCS/Prensa/Si_planeas_construir_o_remodelar%2C_Municipio_da_a_conocer_los_tr%C3%A1mites_que_debes_realizar" },
    ],
  },
];

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
