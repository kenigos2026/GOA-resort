"use client";

import { motion } from "framer-motion";
import { Globe, Heart, ExternalLink } from "lucide-react";

const instagramPosts = [
  {
    id: "ig1",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80",
    likes: 142,
    date: "2 days ago",
  },
  {
    id: "ig2",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
    likes: 238,
    date: "1 week ago",
  },
  {
    id: "ig3",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80",
    likes: 189,
    date: "2 weeks ago",
  },
  {
    id: "ig4",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&q=80",
    likes: 312,
    date: "3 weeks ago",
  },
  {
    id: "ig5",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=80",
    likes: 276,
    date: "1 month ago",
  },
  {
    id: "ig6",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80",
    likes: 198,
    date: "1 month ago",
  },
];

export default function InstagramSection() {
  return (
    <section className="py-20 lg:py-32 bg-forest-mist">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-warm-gold mb-4 block">
            <Globe size={14} className="inline mr-2" />
            @harmony_natures
          </span>
          <h2 className="font-cormorant font-semibold text-display-sm text-deep-forest">
            Follow Our Journey
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4"
        >
          {instagramPosts.map((post) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/harmony_natures"
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, scale: 0.96 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-square rounded-2xl overflow-hidden"
            >
              <img
                src={post.image}
                alt="Instagram post"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-800"
              />
              <div className="absolute inset-0 bg-deep-forest/0 group-hover:bg-deep-forest/50 transition-colors duration-600 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-center text-white">
                  <Heart size={20} className="mx-auto mb-1" />
                  <span className="text-xs">{post.likes}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://instagram.com/harmony_natures"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-sage text-deep-forest text-sm font-medium rounded-full hover:bg-verdant hover:text-white hover:border-verdant transition-all duration-600"
          >
            <Globe size={16} />
            Follow us on Instagram
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
