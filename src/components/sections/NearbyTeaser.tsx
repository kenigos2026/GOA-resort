"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const nearbyTiles = [
  {
    name: "Cotigao Sanctuary",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
  },
  {
    name: "Patnem Beach",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
  },
  {
    name: "Talpona Beach",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80",
  },
  {
    name: "Agonda Beach",
    image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=600&q=80",
  },
  {
    name: "Palolem Beach",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600&q=80",
  },
];

export default function NearbyTeaser() {
  return (
    <section className="py-20 lg:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-warm-gold mb-4 block">
            Explore the Area
          </span>
          <h2 className="font-cormorant font-semibold text-display-sm text-deep-forest">
            Your Backyard is Beautiful
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
          {nearbyTiles.map((tile, i) => (
            <motion.div
              key={tile.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={tile.image}
                alt={tile.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-cormorant text-lg font-semibold text-white group-hover:text-warm-gold transition-colors">
                  {tile.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            href="/nearby"
            className="inline-flex items-center gap-2 text-verdant font-medium hover:text-warm-gold transition-colors"
          >
            Explore the Area
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
