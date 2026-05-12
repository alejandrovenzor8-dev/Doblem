"use client";

import { useState } from "react";
import { properties } from "@/data/properties";

export default function ComparadorPage() {
  const [selected, setSelected] = useState<(string | null)[]>([null, null, null]);

  const handleSelect = (index: number, id: string) => {
    const updated = [...selected];
    updated[index] = id === "" ? null : id;
    setSelected(updated);
  };

  const selectedProps = selected.map((id) =>
    id ? properties.find((p) => p.id === id) ?? null : null
  );

  const rows = [
    { label: "Precio", key: "price" },
    { label: "Área (m²)", key: "area" },
    { label: "Habitaciones", key: "bedrooms" },
    { label: "Baños", key: "bathrooms" },
    { label: "Tipo", key: "type" },
    { label: "Estado", key: "status" },
    { label: "Ubicación", key: "location" },
  ] as const;

  type RowKey = (typeof rows)[number]["key"];

  const formatValue = (key: RowKey, val: unknown): string => {
    if (val === null || val === undefined) return "—";
    if (key === "bedrooms" || key === "bathrooms") {
      return (val as number) === 0 ? "N/A" : String(val);
    }
    if (key === "status") {
      const map: Record<string, string> = {
        disponible: "Disponible",
        vendido: "Vendido",
        en_proceso: "En Proceso",
      };
      return map[val as string] ?? String(val);
    }
    return String(val);
  };

  const hasAny = selectedProps.some(Boolean);

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-40 pb-20 px-4 md:px-8 lg:px-16 text-white"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a2744 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c9a96e] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Herramienta
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Comparador de Propiedades
          </h1>
          <p className="text-white/60 mt-4 text-lg">
            Selecciona hasta 3 propiedades para compararlas lado a lado.
          </p>
        </div>
      </section>

      {/* Selectors */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[0, 1, 2].map((i) => (
              <div key={i}>
                <label className="block text-sm font-semibold text-[#4a4a4a] mb-2">
                  Propiedad {i + 1}
                </label>
                <select
                  value={selected[i] ?? ""}
                  onChange={(e) => handleSelect(i, e.target.value)}
                  className="w-full border border-[#d4d4d4] bg-white rounded-lg px-4 py-3 text-[#1a1a1a] focus:outline-none focus:border-[#c9a96e]"
                >
                  <option value="">— Seleccionar —</option>
                  {properties.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title}
                    </option>
                  ))}
                </select>
                {selectedProps[i] && (
                  <div
                    className="mt-4 h-32 rounded-lg"
                    style={{ background: selectedProps[i]!.gradient }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          {hasAny && (
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden shadow-md">
                <thead>
                  <tr className="bg-[#1a1a1a] text-white">
                    <th className="py-4 px-6 text-left text-sm">Característica</th>
                    {selectedProps.map((p, i) => (
                      <th key={i} className="py-4 px-6 text-left text-sm">
                        {p ? p.title : `Propiedad ${i + 1}`}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, ri) => (
                    <tr
                      key={row.key}
                      className={ri % 2 === 0 ? "bg-white" : "bg-[#f5f0e8]"}
                    >
                      <td className="py-4 px-6 text-sm font-semibold text-[#4a4a4a]">
                        {row.label}
                      </td>
                      {selectedProps.map((p, i) => (
                        <td key={i} className="py-4 px-6 text-sm text-[#1a1a1a]">
                          {p ? formatValue(row.key, p[row.key]) : "—"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
