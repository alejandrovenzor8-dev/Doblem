export interface Property {
  id: string;
  title: string;
  price: string;
  priceNum: number;
  location: string;
  type: "casa" | "departamento" | "terreno";
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  features: string[];
  amenities: string[];
  status: "disponible" | "vendido" | "en_proceso" | "pre_venta";
  gradient: string;
  galleryFolder?: string;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Residencia Contemporánea de Lujo",
    price: "$7,150,000 MXN",
    priceNum: 7150000,
    location: "Asturias Residencial, Chihuahua",
    type: "casa",
    bedrooms: 3,
    bathrooms: 3,
    area: 273,
    description:
      "Residencia contemporánea de lujo en Asturias Residencial, con 220.50 m² de terreno y 273.58 m² de construcción. Diseño moderno, amplitud y acabados premium en cada detalle, ubicada en una de las zonas con mayor plusvalía y crecimiento residencial de Chihuahua. Una propiedad diseñada para elevar tu estilo de vida.",
    features: [
      "Recámara principal con baño completo, amplio vestidor y balcón privado",
      "2 recámaras secundarias con vestidor cada una",
      "Espacios diseñados para brindar privacidad y confort",
      "Cocina-comedor con distribución funcional y elegante",
      "Acogedora estancia familiar en planta alta",
      "Cochera para 2 vehículos",
      "Moderna iluminación que realza cada espacio del hogar",
      "Arquitectura contemporánea con acabados premium",
    ],
    amenities: [
      "Balcón privado",
      "Vestidor",
      "Cochera",
      "Estancia familiar",
    ],
    status: "disponible",
    gradient: "linear-gradient(135deg, #1a2744 0%, #2d4a7a 50%, #c9a96e 100%)",
    galleryFolder: "RCL_1",
  },
  {
    id: "2",
    title: "Residencia Bosque Real",
    price: "$9,795,000 MXN",
    priceNum: 9795000,
    location: "Bosque Real, Chihuahua",
    type: "casa",
    bedrooms: 4,
    bathrooms: 3,
    area: 358,
    description:
      "Residencia contemporánea de alto impacto en Bosque Real, con 298.58 m² de terreno y 358.93 m² de construcción. Arquitectura, amplitud y sofisticación en cada espacio. Disponible en preventa exclusiva.",
    features: [
      "Recámara en planta baja con baño completo y vestidor",
      "Recámara principal con terraza privada, baño completo y vestidor",
      "4 recámaras en total",
      "Impresionante doble altura en acceso",
      "Cocina con alacena integrada y conexión a áreas sociales",
      "Sala, comedor y estancia familiar de amplia convivencia",
      "Lavandería independiente",
      "Cochera amplia",
    ],
    amenities: [
      "Terraza privada",
      "Vestidor",
      "Cochera",
      "Estancia familiar",
      "Lavandería",
    ],
    status: "pre_venta",
    gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #8b7355 100%)",
    galleryFolder: "ptc",
  },
  {
    id: "4",
    title: "Bosques del Valle IV",
    price: "$8,790,000 MXN",
    priceNum: 8790000,
    location: "Corredor Residencial Valles, Chihuahua",
    type: "casa",
    bedrooms: 4,
    bathrooms: 4,
    area: 319,
    description:
      "Residencia contemporánea de lujo en preventa exclusiva, con 257.40 m² de terreno y 319.10 m² de construcción. Concebida para quienes buscan arquitectura contemporánea, amplitud y una distribución que privilegia la comodidad sin renunciar a la elegancia. Ubicada en el exclusivo corredor residencial Valles.",
    features: [
      "Recámara en planta baja con baño completo y vestidor, ideal para visitas o familiares",
      "Recámara principal con terraza privada, amplio vestidor y baño completo",
      "4 recámaras, todas con baño completo y vestidor, brindando privacidad y confort",
      "Cocina y comedor de concepto abierto con integración elegante y funcional",
      "Estancia familiar en planta alta para compartir momentos inolvidables",
      "Área de lavandería independiente",
      "Patio interior que aporta iluminación natural y conecta armónicamente los espacios",
      "Acabados de alto nivel en perfecta armonía con la arquitectura",
    ],
    amenities: [
      "Terraza privada",
      "Vestidor",
      "Patio interior",
      "Estancia familiar",
      "Lavandería",
    ],
    status: "pre_venta",
    gradient: "linear-gradient(135deg, #1a1410 0%, #3a2e1f 50%, #c9a96e 100%)",
    galleryFolder: "BV4",
  },
  {
    id: "5",
    title: "Residencia Paseo del Valle",
    price: "$14,950,000 MXN",
    priceNum: 14950000,
    location: "Paseo de la Loma, Chihuahua",
    type: "casa",
    bedrooms: 4,
    bathrooms: 4,
    area: 356,
    description:
      "Residencia contemporánea de lujo en Paseo del Valle, con 290.04 m² de terreno y 356.51 m² de construcción. Ubicada en Paseo de la Loma, uno de los sectores con mayor crecimiento y plusvalía de la ciudad. Su arquitectura contemporánea, acabados premium y distribución ofrecen amplitud, privacidad y confort: una residencia donde el diseño, la exclusividad y la plusvalía se convierten en un patrimonio para toda la vida.",
    features: [
      "4 amplias recámaras",
      "Recámara en planta baja con baño y vestidor",
      "Recámara principal con balcón privado, baño y amplio vestidor",
      "2 recámaras secundarias con baño y vestidor",
      "Doble altura en sala y comedor",
      "Cocina con amplia alacena",
      "Estancia familiar en planta alta",
      "Elegante vestíbulo de acceso",
    ],
    amenities: [
      "Balcón privado",
      "Vestidores",
      "Doble altura",
      "Amplia alacena",
      "Estancia familiar",
      "Vestíbulo",
    ],
    status: "pre_venta",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #c9a96e 100%)",
    galleryFolder: "paseo-del-valle",
  },
  {
    id: "6",
    title: "Residencia Cumbres de Dominion",
    price: "$9,695,000 MXN",
    priceNum: 9695000,
    location: "Cumbres de Dominion, Chihuahua",
    type: "casa",
    bedrooms: 4,
    bathrooms: 4,
    area: 315,
    description:
      "Residencia contemporánea de lujo en preventa, con 275 m² de terreno y 315.65 m² de construcción. Arquitectura contemporánea, amplitud y elegancia en perfecta armonía, con acabados premium, distribución inteligente y detalles cuidadosamente seleccionados para ofrecer confort, privacidad y un estilo de vida excepcional.",
    features: [
      "4 recámaras, todas con baño completo",
      "Recámara principal con amplio vestidor",
      "Imponente estancia con doble altura",
      "Espacios iluminados que brindan una extraordinaria sensación de amplitud",
      "Cocina y comedor de concepto abierto, diseñados para disfrutar y compartir",
      "Alberca climatizada, ideal para disfrutar durante todo el año",
      "Área de lavandería independiente",
      "Amplia cochera",
    ],
    amenities: [
      "Alberca climatizada",
      "Doble altura",
      "Vestidor",
      "Cocina abierta",
      "Cochera",
      "Lavandería",
    ],
    status: "pre_venta",
    gradient: "linear-gradient(135deg, #1a2e2e 0%, #2d5a5a 50%, #c9a96e 100%)",
    galleryFolder: "CDD",
  },
  {
    id: "7",
    title: "Residencia de Autor San Charbel",
    price: "$22,950,000 MXN",
    priceNum: 22950000,
    location: "Vistas de San Charbel, Chihuahua",
    type: "casa",
    bedrooms: 4,
    bathrooms: 4,
    area: 468,
    description:
      "Residencia de autor de lujo contemporáneo en preventa exclusiva, con 401 m² de terreno y 467.553 m² de construcción. Concebida como un patrimonio excepcional donde la arquitectura, la tecnología y los materiales de la más alta calidad crean una experiencia de vida incomparable. Cada espacio privilegia la amplitud, la iluminación natural, la privacidad y el confort absoluto. Una residencia donde el lujo no se presume; se vive, diseñada para trascender generaciones.",
    features: [
      "4 exclusivas suites, cada una con baño completo y amplio vestidor",
      "Master Suite con generoso vestidor y baño tipo spa",
      "Oficina privada",
      "Salón multifuncional para family room, sala de cine, gimnasio o quinta recámara",
      "Cocina de alta gama con electrodomésticos de prestigio internacional",
      "Cubiertas de granito o cuarzo y acabados premium",
      "Sistema integral de climatización con 3 unidades paquete",
      "Aislamiento térmico de alto desempeño con poliuretano",
      "Cochera para 3 vehículos",
    ],
    amenities: [
      "Alberca climatizada",
      "Cascada e hidromasaje",
      "Terraza social con asador",
      "Sonido ambiental exterior",
      "Jardín privado",
      "Riego automatizado",
      "Oficina",
      "Baño tipo spa",
    ],
    status: "pre_venta",
    gradient: "linear-gradient(135deg, #17130f 0%, #3b2d20 50%, #c9a96e 100%)",
    galleryFolder: "san-charbel",
  },
];
