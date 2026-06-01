"use client";

import Link from "next/link";
import {
  Phone,
  MapPin,
  Globe,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-deep-forest text-white/80 relative">
      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-warm-gold text-white flex items-center justify-center hover:bg-warm-gold-light transition-colors luxury-shadow-lg"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-verdant/20 flex items-center justify-center">
                <span className="text-verdant font-cormorant text-xl font-semibold">
                  N
                </span>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl font-semibold text-white">
                  Nature&apos;s Harmony
                </h3>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/50">
                  South Goa
                </p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Your private garden sanctuary near Cotigao Wildlife Sanctuary.
              Where nature holds you still.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/harmony_natures"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-verdant transition-colors"
                aria-label="Instagram"
              >
                <Globe size={18} />
              </a>
              <a
                href="https://facebook.com/HNature"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-verdant transition-colors"
                aria-label="Facebook"
              >
                <Globe size={18} />
              </a>
              <a
                href="tel:+917****2726"
                className="p-2.5 rounded-full bg-white/10 hover:bg-verdant transition-colors"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cormorant text-lg font-semibold text-white mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/rooms", label: "Rooms & Stays" },
                { href: "/experiences", label: "Experiences" },
                { href: "/gallery", label: "Gallery" },
                { href: "/dining", label: "Dining" },
                { href: "/nearby", label: "Nearby Places" },
                { href: "/about", label: "About Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-warm-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cormorant text-lg font-semibold text-white mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+917****2726"
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-warm-gold transition-colors"
                >
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  072760 72726
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/60">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  <span>
                    X4M5+G72, Hathipaul, Poinguinim,
                    <br />
                    Forest Gate, Canacona,
                    <br />
                    Goa 403702
                  </span>
                </div>
              </li>
              <li>
                <a
                  href="https://instagram.com/harmony_natures"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-warm-gold transition-colors"
                >
                  <Globe size={16} className="mt-0.5 shrink-0" />
                  @harmony_natures
                </a>
              </li>
            </ul>
          </div>

          {/* Booking Platforms */}
          <div>
            <h4 className="font-cormorant text-lg font-semibold text-white mb-6">
              Book On
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                "MakeMyTrip",
                "Goibibo",
                "Agoda",
                "Airbnb",
                "TripAdvisor",
              ].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="px-3 py-2 text-xs text-center text-white/50 border border-white/10 rounded-lg hover:border-verdant hover:text-verdant transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
            <Link
              href="/book"
              className="mt-6 inline-block px-6 py-3 bg-verdant text-white text-sm font-medium rounded-full hover:bg-verdant-dark transition-colors"
            >
              Book Direct
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Nature&apos;s Harmony. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-white/40 hover:text-white/60 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/40 hover:text-white/60 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
