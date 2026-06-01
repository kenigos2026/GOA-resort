"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages, galleryCategories } from "@/content/gallery";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const nextImage = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-forest/60 to-deep-forest/80 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80')",
          }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-warm-gold mb-3 block">
            Gallery
          </span>
          <h1 className="font-cormorant font-semibold text-display-md text-white">
            A Picture of Peace
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-400 ${
                activeFilter === cat
                  ? "bg-verdant text-white"
                  : "bg-forest-mist text-warm-stone hover:bg-sage-light/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <LayoutGroup>
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((image, i) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="group relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover group-hover:scale-103 transition-transform duration-800"
                  style={{
                    background:
                      "linear-gradient(135deg, #C5CFC0 0%, #A8B5A0 100%)",
                  }}
                />
                <div className="absolute inset-0 bg-deep-forest/0 group-hover:bg-deep-forest/40 transition-colors duration-600 flex items-end p-4">
                  <span className="text-white font-cormorant text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    {image.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </LayoutGroup>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[100] bg-deep-forest/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
            >
              <X size={28} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 text-white/70 hover:text-white p-2"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 text-white/70 hover:text-white p-2"
            >
              <ChevronRight size={32} />
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white font-cormorant text-lg">
                {filtered[lightboxIndex].location}
              </p>
              <p className="text-white/50 text-sm">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
