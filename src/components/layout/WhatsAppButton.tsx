"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink, defaultWhatsAppMessage } from "@/lib/utils";

export default function WhatsAppButton() {
  const whatsappUrl = getWhatsAppLink("917276072726", defaultWhatsAppMessage);

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Book via WhatsApp"
    >
      <div className="relative">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        <div className="relative flex items-center gap-2 px-5 py-3 bg-green-500 text-white rounded-full luxury-shadow-lg hover:bg-green-600 transition-colors">
          <MessageCircle size={22} />
          <span className="text-sm font-medium hidden sm:inline max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-600 whitespace-nowrap">
            Book via WhatsApp
          </span>
        </div>
      </div>
    </motion.a>
  );
}
