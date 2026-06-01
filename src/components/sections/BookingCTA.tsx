"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const platforms = [
  "MakeMyTrip",
  "Goibibo",
  "Agoda",
  "Airbnb",
  "TripAdvisor",
];

export default function BookingCTASection() {
  return (
    <section className="py-20 lg:py-32 bg-forest-mist relative overflow-hidden">
      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-cormorant font-semibold text-display-sm text-deep-forest">
            Ready to Find Your Peace?
          </h2>
          <p className="mt-4 text-lg text-warm-stone max-w-xl mx-auto">
            Starting from ₹827/night. Breakfast, lunch, evening snacks &
            dinner available on order.
          </p>

          <div className="mt-10">
            <Link
              href="/book"
              className="inline-block px-10 py-4 bg-verdant text-white text-lg font-medium rounded-full hover:bg-verdant-dark transition-all duration-600 hover:shadow-lg hover:shadow-verdant/20"
            >
              Check Availability
            </Link>
          </div>

          <div className="mt-10">
            <p className="text-xs text-warm-stone mb-4">
              Also available on
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {platforms.map((p) => (
                <span
                  key={p}
                  className="px-4 py-2 text-xs text-warm-stone/60 border border-sage-light/40 rounded-full"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
