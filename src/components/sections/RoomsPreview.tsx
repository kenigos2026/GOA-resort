"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Wifi, Tv, Wind, Droplets, Shirt, Refrigerator, Flower2, BedDouble } from "lucide-react";
import { rooms } from "@/content/rooms";
import { formatPrice } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  wind: Wind as React.ComponentType<{ size?: number; className?: string }>,
  "bed-double": BedDouble as React.ComponentType<{ size?: number; className?: string }>,
  droplets: Droplets as React.ComponentType<{ size?: number; className?: string }>,
  wifi: Wifi as React.ComponentType<{ size?: number; className?: string }>,
  tv: Tv as React.ComponentType<{ size?: number; className?: string }>,
  refrigerator: Refrigerator as React.ComponentType<{ size?: number; className?: string }>,
  shirt: Shirt as React.ComponentType<{ size?: number; className?: string }>,
  "flower-2": Flower2 as React.ComponentType<{ size?: number; className?: string }>,
};

export default function RoomsPreviewSection() {
  const featuredRooms = rooms.filter((r) => r.featured);

  return (
    <section className="py-20 lg:py-32 bg-forest-mist">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-warm-gold mb-4 block">
            Rooms & Stays
          </span>
          <h2 className="font-cormorant font-semibold text-display-sm text-deep-forest">
            Your Home in the Forest
          </h2>
          <p className="mt-4 text-lg text-warm-stone max-w-xl mx-auto">
            Thoughtfully designed spaces that blend comfort with nature.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {featuredRooms.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group bg-white rounded-3xl overflow-hidden luxury-shadow hover:luxury-shadow-lg transition-all duration-600"
            >
              {/* Image */}
              <div className="relative h-72 lg:h-80 overflow-hidden">
                <img
                  src={room.images[0].src}
                  alt={room.images[0].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  style={{
                    background:
                      "linear-gradient(135deg, #C5CFC0 0%, #A8B5A0 100%)",
                  }}
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-ivory/90 backdrop-blur-sm rounded-full">
                  <span className="font-mono text-xs tracking-wider text-deep-forest">
                    {room.size}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-cormorant text-2xl font-semibold text-deep-forest">
                      {room.name}
                    </h3>
                    <p className="text-sm text-warm-stone mt-1">
                      {room.bedType} • Up to {room.maxGuests} guests
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-cormorant text-2xl font-semibold text-warm-gold">
                      {formatPrice(room.pricePerNight)}
                    </span>
                    <span className="text-xs text-warm-stone block">/night</span>
                  </div>
                </div>

                <p className="text-warm-stone text-sm leading-relaxed mb-6">
                  {room.description}
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.slice(0, 5).map((a) => {
                    const Icon = iconMap[a.icon];
                    return (
                      <span
                        key={a.label}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-forest-mist rounded-full text-xs text-warm-stone"
                      >
                        {Icon && <Icon size={12} />}
                        {a.label}
                      </span>
                    );
                  })}
                  {room.amenities.length > 5 && (
                    <span className="inline-flex items-center px-3 py-1.5 bg-forest-mist rounded-full text-xs text-warm-stone">
                      +{room.amenities.length - 5} more
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <Link
                    href={`/rooms#${room.slug}`}
                    className="flex-1 py-3 bg-verdant text-white text-center text-sm font-medium rounded-full hover:bg-verdant-dark transition-colors"
                  >
                    View Room →
                  </Link>
                  <Link
                    href="/book"
                    className="px-6 py-3 border border-verdant text-verdant text-sm font-medium rounded-full hover:bg-verdant hover:text-white transition-colors"
                  >
                    Book
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
