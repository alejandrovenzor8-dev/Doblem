/**
 * 📱 WhatsApp Button Premium con Animaciones
 * 
 * Versión mejorada del botón de WhatsApp con animaciones elegantes
 */

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { TIMING, EASING } from "@/lib/animation-config";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  position?: "bottom-right" | "bottom-left";
  showTooltip?: boolean;
}

export default function WhatsAppButtonPremium({
  phoneNumber = "5216141234567",
  message = "Hola, me interesa obtener más información",
  position = "bottom-right",
  showTooltip = true,
}: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
  };

  return (
    <>
      {/* Botón principal */}
      <motion.div
        className={`fixed ${positionClasses[position]} z-50`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 1, // Aparece después de que carga la página
          duration: TIMING.slow,
          ease: EASING.entrance,
        }}
      >
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && isHovered && (
            <motion.div
              initial={{ opacity: 0, x: position === "bottom-right" ? 10 : -10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: position === "bottom-right" ? 10 : -10, scale: 0.9 }}
              transition={{ duration: TIMING.fast }}
              className={`absolute ${
                position === "bottom-right" ? "right-full mr-4" : "left-full ml-4"
              } top-1/2 -translate-y-1/2 px-4 py-2 bg-white rounded-lg shadow-xl whitespace-nowrap`}
            >
              <div className="text-sm font-semibold text-gray-800">
                ¿Necesitas ayuda?
              </div>
              <div className="text-xs text-gray-600">
                Chatea con nosotros
              </div>
              
              {/* Arrow */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 ${
                  position === "bottom-right" ? "right-0 translate-x-full" : "left-0 -translate-x-full"
                } w-0 h-0 border-y-8 border-y-transparent ${
                  position === "bottom-right" 
                    ? "border-l-8 border-l-white" 
                    : "border-r-8 border-r-white"
                }`}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulso de fondo */}
        <motion.div
          className="absolute inset-0 bg-[#25D366] rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Botón */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: TIMING.fast, ease: EASING.premium }}
          className="relative w-16 h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-shadow"
        >
          <motion.div
            animate={{ rotate: isHovered ? 10 : 0 }}
            transition={{ duration: TIMING.fast }}
          >
            <MessageCircle className="text-white" size={28} />
          </motion.div>

          {/* Badge de notificación (opcional) */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
          >
            1
          </motion.div>
        </motion.a>
      </motion.div>

      {/* Mini chat widget (opcional - expandible) */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`fixed ${
              position === "bottom-right" 
                ? "bottom-24 right-6" 
                : "bottom-24 left-6"
            } w-80 bg-white rounded-2xl shadow-2xl overflow-hidden z-40`}
          >
            {/* Header */}
            <div className="bg-[#25D366] p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">DobleM</div>
                    <div className="text-xs text-white/80">En línea</div>
                  </div>
                </div>
                <button
                  onClick={() => setShowMessage(false)}
                  className="text-white/80 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Message */}
            <div className="p-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-100 rounded-lg p-3 text-sm"
              >
                👋 ¡Hola! ¿En qué podemos ayudarte hoy?
              </motion.div>

              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 block w-full py-3 bg-[#25D366] text-white text-center font-semibold rounded-lg hover:bg-[#22c55e] transition-colors"
              >
                Iniciar chat
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
