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
    title: "Residencia Contemporánea Asturias",
    price: "$7,150,000 MXN",
    priceNum: 7150000,
    location: "Fraccionamiento Asturias Residencial, Chihuahua",
    type: "casa",
    bedrooms: 3,
    bathrooms: 3,
    area: 273,
    description:
      "Residencia contemporánea de lujo en Asturias Residencial, con 220.50 m² de terreno y 273.58 m² de construcción. Diseño moderno, amplitud y acabados premium en cada detalle, ubicada en una de las zonas con mayor plusvalía y crecimiento residencial de Chihuahua.",
    features: [
      "Recámara principal con baño completo y balcón privado",
      "Amplio vestidor en recámara principal",
      "2 recámaras secundarias con vestidor",
      "Cocina-comedor con distribución funcional y elegante",
      "Acogedora estancia familiar en planta alta",
      "Cochera para 2 vehículos",
      "Moderna iluminación premium",
      "Arquitectura contemporánea con acabados de lujo",
    ],
    amenities: [
      "Balcón privado",
      "Vestidor",
      "Cochera",
      "Estancia familiar",
    ],
    status: "pre_venta",
    gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #8b7355 100%)",
    galleryFolder: "ptc",
  },
  {
    id: "3",
    title: "Casa Moderna Cerro Grande",
    price: "$3,200,000 MXN",
    priceNum: 3200000,
    location: "Fraccionamiento Cerro Grande, Chihuahua",
    type: "casa",
    bedrooms: 3,
    bathrooms: 2,
    area: 240,
    description:
      "Casa de arquitectura minimalista con grandes ventanales y abundante luz natural. Diseñada para quienes buscan confort y modernidad en un entorno privilegiado.",
    features: [
      "Ventanales piso a techo",
      "Cocina abierta tipo isla",
      "Estudio privado",
      "Garage para 2 autos",
      "Jardín trasero",
      "Sistema de calefacción central",
      "Clósets en todos los cuartos",
    ],
    amenities: ["Jardín", "Garage", "Estudio", "Bodega"],
    status: "disponible",
    gradient: "linear-gradient(135deg, #2a1a0e 0%, #5c3a1e 50%, #c9a96e 100%)",
  },
  {
    id: "4",
    title: "Terreno Residencial El Prado",
    price: "$1,800,000 MXN",
    priceNum: 1800000,
    location: "El Prado, Chihuahua",
    type: "terreno",
    bedrooms: 0,
    bathrooms: 0,
    area: 600,
    description:
      "Terreno plano en esquina dentro de fraccionamiento cerrado con todos los servicios. Ideal para construir la residencia de tus sueños con la firma DobleM.",
    features: [
      "Terreno en esquina",
      "Todos los servicios",
      "Fraccionamiento cerrado",
      "Escrituras en orden",
      "Uso de suelo habitacional",
      "Acceso pavimentado",
    ],
    amenities: ["Fraccionamiento cerrado", "Servicios completos", "Seguridad"],
    status: "disponible",
    gradient: "linear-gradient(135deg, #1a3a1a 0%, #2d5a2d 50%, #8bc34a 100%)",
  },
  {
    id: "5",
    title: "Residencia Premium San Felipe",
    price: "$5,800,000 MXN",
    priceNum: 5800000,
    location: "Colonia San Felipe, Chihuahua",
    type: "casa",
    bedrooms: 5,
    bathrooms: 4,
    area: 450,
    description:
      "Imponente residencia colonial contemporánea con sala de cine, bar, y amenidades de resort. Una obra maestra del diseño y la construcción DobleM.",
    features: [
      "Sala de cine privada",
      "Bar equipado",
      "Biblioteca/estudio",
      "Recámara principal con sala privada",
      "Cocina gourmet",
      "Garage para 4 autos",
      "Casa de visitas",
      "Canchas deportivas",
    ],
    amenities: [
      "Alberca",
      "Sala de cine",
      "Bar",
      "Canchas",
      "Casa de visitas",
      "Garage",
    ],
    status: "en_proceso",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #c9a96e 100%)",
  },
  {
    id: "6",
    title: "Departamento Loft Centro",
    price: "$2,100,000 MXN",
    priceNum: 2100000,
    location: "Centro Histórico, Chihuahua",
    type: "departamento",
    bedrooms: 2,
    bathrooms: 2,
    area: 130,
    description:
      "Moderno loft en el corazón del Centro Histórico, completamente remodelado con materiales de primera. Ideal para inversión o residencia urbana de lujo.",
    features: [
      "Doble altura en sala",
      "Techos de 4 metros",
      "Ventanas arqueadas históricas",
      "Cocina equipada",
      "Balcón privado",
      "1 cajón de estacionamiento",
    ],
    amenities: ["Balcón", "Estacionamiento", "Bodega", "Lobby"],
    status: "vendido",
    gradient: "linear-gradient(135deg, #2e1a1a 0%, #5a2d2d 50%, #c9a96e 100%)",
  },
];
