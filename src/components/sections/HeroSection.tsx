"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-forest/60 via-deep-forest/40 to-deep-forest/70 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center animate-ken-burns"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80')",
        }}
      />

      {/* Grain overlay */}
      <div className="absolute inset-0 z-[11] opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <MapPin size={14} className="text-warm-gold" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-white/80">
              Canacona • South Goa • India
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-cormorant font-semibold text-display-lg text-white leading-[1.05]"
          >
            Where Nature Holds
            <br />
            <span className="text-warm-gold">You Still</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg md:text-xl text-white/80 font-inter max-w-xl mx-auto"
          >
            A private garden sanctuary near Cotigao Wildlife Sanctuary.
            <br className="hidden md:block" />
            Peace, birdsong, and three beaches within five minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/book"
              className="px-8 py-4 bg-warm-gold text-white font-medium rounded-full hover:bg-warm-gold-light transition-all duration-600 hover:shadow-lg hover:shadow-warm-gold/20"
            >
              Book Your Stay
            </Link>
            <Link
              href="#experience"
              className="px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-600 backdrop-blur-sm"
            >
              Explore the Property
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/50">
            Scroll
          </span>
          <ChevronDown size={20} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
