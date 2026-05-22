"use client";

import { useState } from "react";
import type { ContactFieldConfig, LeadData } from "@/types/assistant";

interface Props {
  fields: ContactFieldConfig[];
  onSubmit: (data: Partial<LeadData>) => void;
  isSubmitting?: boolean;
}

type FormErrors = Partial<Record<keyof LeadData, string>>;

/** Multi-field contact capture form rendered at the bottom of the chat */
export default function ContactForm({ fields, onSubmit, isSubmitting }: Props) {
  const [values, setValues] = useState<Partial<Record<keyof LeadData, string>>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof LeadData, boolean>>>({});

  function validate(): FormErrors {
    const errs: FormErrors = {};
    for (const field of fields) {
      const val = (values[field.key] ?? "").trim();
      if (field.required && !val) {
        errs[field.key] = `${field.label} es requerido`;
        continue;
      }
      if (val && field.validationPattern && !field.validationPattern.test(val)) {
        errs[field.key] = field.validationMessage ?? "Formato inválido";
      }
    }
    return errs;
  }

  function handleChange(key: keyof LeadData, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (touched[key]) {
      // Re-validate on change once user has touched the field
      const field = fields.find((f) => f.key === key);
      if (!field) return;
      const val = value.trim();
      const err =
        field.required && !val
          ? `${field.label} es requerido`
          : val && field.validationPattern && !field.validationPattern.test(val)
          ? field.validationMessage ?? "Formato inválido"
          : undefined;
      setErrors((prev) => ({ ...prev, [key]: err }));
    }
  }

  function handleBlur(key: keyof LeadData) {
    setTouched((prev) => ({ ...prev, [key]: true }));
    const field = fields.find((f) => f.key === key);
    if (!field) return;
    const val = (values[key] ?? "").trim();
    const err =
      field.required && !val
        ? `${field.label} es requerido`
        : val && field.validationPattern && !field.validationPattern.test(val)
        ? field.validationMessage ?? "Formato inválido"
        : undefined;
    setErrors((prev) => ({ ...prev, [key]: err }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Mark all as touched
    const allTouched = Object.fromEntries(
      fields.map((f) => [f.key, true])
    ) as Partial<Record<keyof LeadData, boolean>>;
    setTouched(allTouched);

    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).filter((k) => errs[k as keyof LeadData]).length > 0) return;

    const payload = Object.fromEntries(
      fields.map((f) => [f.key, (values[f.key] ?? "").trim()])
    ) as Partial<LeadData>;
    onSubmit(payload);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 pt-1">
      {fields.map((field) => {
        const hasError = touched[field.key] && errors[field.key];
        return (
          <div key={String(field.key)} className="flex flex-col gap-1">
            <label
              htmlFor={`assistant-field-${String(field.key)}`}
              className="text-xs text-[#8a8a8a] font-medium"
            >
              {field.label}
              {!field.required && (
                <span className="ml-1 text-[10px] text-[#555]">(opcional)</span>
              )}
            </label>
            <input
              id={`assistant-field-${String(field.key)}`}
              type={field.type}
              inputMode={field.type === "tel" ? "numeric" : undefined}
              placeholder={field.placeholder}
              value={values[field.key] ?? ""}
              onChange={(e) => handleChange(field.key, e.target.value)}
              onBlur={() => handleBlur(field.key)}
              autoComplete={
                field.type === "email"
                  ? "email"
                  : field.type === "tel"
                  ? "tel"
                  : "name"
              }
              className={[
                "bg-[#141414] border rounded-xl px-3.5 py-2.5 text-sm text-white",
                "placeholder-[#555] focus:outline-none transition-colors",
                hasError
                  ? "border-red-500/60 focus:border-red-500"
                  : "border-white/10 focus:border-[#c9a96e]",
              ].join(" ")}
            />
            {hasError && (
              <p className="text-xs text-red-400" role="alert">
                {errors[field.key]}
              </p>
            )}
          </div>
        );
      })}

      <button
        type="submit"
        disabled={isSubmitting}
        className={[
          "mt-1 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-150",
          "bg-gradient-to-r from-[#c9a96e] to-[#b8914a] text-black",
          "hover:opacity-90 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e]",
          isSubmitting ? "opacity-60 cursor-not-allowed" : "",
        ].join(" ")}
      >
        {isSubmitting ? "Enviando..." : "Confirmar →"}
      </button>
    </form>
  );
}
