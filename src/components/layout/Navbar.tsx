"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/experiences", label: "Experiences" },
  { href: "/gallery", label: "Gallery" },
  { href: "/dining", label: "Dining" },
  { href: "/nearby", label: "Nearby" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-600",
          scrolled
            ? "bg-ivory/95 backdrop-blur-md luxury-shadow"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-verdant/10 flex items-center justify-center group-hover:bg-verdant/20 transition-colors duration-600">
                <span className="text-verdant font-cormorant text-xl font-semibold">
                  N
                </span>
              </div>
              <div className="flex flex-col">
                <span
                  className={cn(
                    "font-cormorant text-xl font-semibold leading-tight transition-colors duration-600",
                    scrolled ? "text-deep-forest" : "text-white"
                  )}
                >
                  Nature&apos;s Harmony
                </span>
                <span
                  className={cn(
                    "font-mono text-[10px] tracking-[0.2em] uppercase transition-colors duration-600",
                    scrolled ? "text-warm-stone" : "text-white/70"
                  )}
                >
                  South Goa
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-inter transition-colors duration-600 gold-border-hover pb-1",
                    scrolled
                      ? "text-deep-forest hover:text-verdant"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/book"
                className="ml-4 px-6 py-2.5 bg-warm-gold text-white text-sm font-medium rounded-full hover:bg-warm-gold-light transition-colors duration-600"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                scrolled ? "text-deep-forest" : "text-white"
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-ivory pt-24 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-lg font-cormorant text-deep-forest hover:text-verdant transition-colors border-b border-sage-light/30"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-6 flex flex-col gap-4"
              >
                <Link
                  href="/book"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 bg-verdant text-white text-center font-medium rounded-2xl"
                >
                  Book Your Stay
                </Link>
                <a
                  href="tel:+917276072726"
                  className="flex items-center justify-center gap-2 py-3 text-warm-stone"
                >
                  <Phone size={18} />
                  072760 72726
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center justify-center gap-6 mt-8 mb-12"
              >
                <a
                  href="https://instagram.com/harmony_natures"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-forest-mist text-deep-forest"
                >
                  <Globe size={20} />
                </a>
                <a
                  href="https://facebook.com/HNature"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-forest-mist text-deep-forest"
                >
                  <Globe size={20} />
                </a>
                <a
                  href="tel:+917276072726"
                  className="p-3 rounded-full bg-forest-mist text-deep-forest"
                >
                  <Phone size={20} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
