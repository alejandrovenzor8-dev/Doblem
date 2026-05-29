import fs from "fs";
import path from "path";

/**
 * Reads the actual image files from public/gallery/propiedades/{folder}/
 * and returns their public URL paths, sorted numerically.
 * Server-only — uses the Node.js `fs` module.
 */
export function getPropertyImages(galleryFolder: string): string[] {
  const dir = path.join(
    process.cwd(),
    "public",
    "gallery",
    "propiedades",
    galleryFolder
  );

  try {
    const files = fs.readdirSync(dir);
    return files
      .filter((f) => /\.(jpg|jpeg|png|webp|avif)$/i.test(f))
      .sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)?.[0] ?? "0", 10);
        const numB = parseInt(b.match(/\d+/)?.[0] ?? "0", 10);
        return numA - numB;
      })
      .map((f) => `/gallery/propiedades/${galleryFolder}/${f}`);
  } catch {
    return [];
  }
}

/**
 * Returns a map of { galleryFolder → images[] } for all properties
 * that have a galleryFolder defined.
 */
export function getAllPropertyImages(
  folders: Array<{ id: string; galleryFolder?: string }>
): Record<string, string[]> {
  const result: Record<string, string[]> = {};
  for (const { id, galleryFolder } of folders) {
    if (galleryFolder) {
      result[id] = getPropertyImages(galleryFolder);
    }
  }
  return result;
}
