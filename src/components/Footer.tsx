import Link from "next/link";
import { Globe2, Share2, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Propiedades", href: "/propiedades" },
  { label: "Portafolio", href: "/portafolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

const servicios = [
  { label: "Diseño y Construcción", href: "/servicios" },
  { label: "Obra Pública y Privada", href: "/servicios" },
  { label: "Remodelaciones", href: "/servicios" },
  { label: "Desarrollo Inmobiliario", href: "/propiedades" },
  { label: "Cotización", href: "/cotizacion" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & description */}
          <div>
            <Link href="/" className="flex flex-col leading-none mb-4">
              <span
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-playfair, serif)" }}
              >
                Doble<span className="text-[#c9a96e]">M</span>
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#c9a96e] mt-0.5">
                Diseño y Construcción
              </span>
            </Link>
            <p className="text-[#8a8a8a] text-sm leading-relaxed mb-6">
              Empresa especializada en diseño arquitectónico, construcción y desarrollo de inmuebles premium en Chihuahua, México. Desde 2017.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-[#c9a96e] transition-colors"
                aria-label="Instagram"
              >
                <Globe2 size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-[#c9a96e] transition-colors"
                aria-label="Facebook"
              >
                <Share2 size={16} />
              </a>
              <a
                href="https://wa.me/526142243474"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm tracking-widest uppercase">
              Navegación
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[#8a8a8a] text-sm hover:text-[#c9a96e] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm tracking-widest uppercase">
              Servicios
            </h3>
            <ul className="space-y-3">
              {servicios.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-[#8a8a8a] text-sm hover:text-[#c9a96e] transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm tracking-widest uppercase">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#c9a96e] mt-0.5 flex-shrink-0" />
                <span className="text-[#8a8a8a] text-sm">
                  Chihuahua, Chihuahua, México
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#c9a96e] flex-shrink-0" />
                <a
                  href="tel:+526142243474"
                  className="text-[#8a8a8a] text-sm hover:text-[#c9a96e] transition-colors"
                >
                  +52 614 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#c9a96e] flex-shrink-0" />
                <a
                  href="mailto:info@doblem.mx"
                  className="text-[#8a8a8a] text-sm hover:text-[#c9a96e] transition-colors"
                >
                  info@doblem.mx
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-4 text-[#4a4a4a] text-xs">
          <p>© {new Date().getFullYear()} DobleM Diseño y Construcción. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#c9a96e] transition-colors">
              Aviso de Privacidad
            </Link>
            <Link href="#" className="hover:text-[#c9a96e] transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
