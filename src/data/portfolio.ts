export const portfolioCategories = [
  "Todos",
  "Asturias",
  "Residencial",
  "Interiorismo",
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

export interface PortfolioItem {
  id: string;
  name: string;
  category: Exclude<PortfolioCategory, "Todos">;
  detail: string;
  location: string;
  image: string;
  href?: string;
}

function numberedCollection(
  count: number,
  createItem: (index: number) => PortfolioItem,
) {
  return Array.from({ length: count }, (_, index) => createItem(index + 1));
}

const asturias = numberedCollection(28, (index) => ({
  id: `asturias-${index}`,
  name: "Asturias Residencial",
  category: "Asturias",
  detail: "Arquitectura contemporánea · 273.58 m² de construcción",
  location: "Chihuahua",
  image: `/gallery/propiedades/RCL_1/RCL${index}.jpg`,
  href: "/propiedades/1",
}));

const acabados = numberedCollection(12, (index) => ({
  id: `acabados-${index}`,
  name: "Detalles de proyecto residencial",
  category: "Interiorismo",
  detail: "Carpintería, iluminación y acabados",
  location: "Chihuahua",
  image: `/gallery/portafolio/acabados-residenciales/acabados-${String(index).padStart(2, "0")}.jpg`,
}));

const residencia01 = numberedCollection(19, (index) => ({
  id: `residencia-01-${index}`,
  name: "Residencia contemporánea",
  category: "Residencial",
  detail: "Arquitectura e interiores",
  location: "Chihuahua",
  image: `/gallery/portafolio/residencia-contemporanea-01/residencia-01-${String(index).padStart(2, "0")}.jpg`,
}));

const residencia02 = numberedCollection(19, (index) => ({
  id: `residencia-02-${index}`,
  name: "Residencia contemporánea",
  category: "Residencial",
  detail: "Diseño, ejecución y acabados",
  location: "Chihuahua",
  image: `/gallery/portafolio/residencia-contemporanea-02/residencia-02-${String(index).padStart(2, "0")}.jpg`,
}));

function interleave(collections: PortfolioItem[][]) {
  const result: PortfolioItem[] = [];
  const longest = Math.max(...collections.map((collection) => collection.length));

  for (let index = 0; index < longest; index += 1) {
    for (const collection of collections) {
      if (collection[index]) result.push(collection[index]);
    }
  }

  return result;
}

export const portfolioItems = interleave([
  asturias,
  residencia01,
  acabados,
  residencia02,
]);

export const featuredPortfolioItems = [
  asturias[0],
  residencia01[0],
  acabados[4],
  residencia02[0],
  asturias[8],
  residencia01[5],
];
