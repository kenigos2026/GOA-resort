"use client";

import { motion } from "framer-motion";
import { TreePine, Star, MapPin, Waves } from "lucide-react";

const stats = [
  {
    icon: TreePine,
    value: "2 Acres",
    label: "of garden land",
  },
  {
    icon: Star,
    value: "4.7",
    label: "Google Rating (187 reviews)",
  },
  {
    icon: MapPin,
    value: "Near Cotigao",
    label: "Wildlife Sanctuary",
  },
  {
    icon: Waves,
    value: "3 Beaches",
    label: "within 5 km",
  },
];

export default function AtAGlanceStrip() {
  return (
    <section className="bg-forest-mist py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-center p-6 rounded-3xl border border-sage-light/40 hover:border-warm-gold/40 transition-all duration-600 group cursor-default"
            >
              <stat.icon
                size={28}
                className="mx-auto mb-3 text-verdant group-hover:text-warm-gold transition-colors duration-600"
              />
              <div className="font-cormorant text-2xl lg:text-3xl font-semibold text-deep-forest">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-warm-stone font-inter">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
