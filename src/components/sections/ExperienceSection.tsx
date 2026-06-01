"use client";

import { motion } from "framer-motion";
import { FadeInLeft, FadeInRight } from "@/components/ui/AnimatedSection";

const experienceBlocks = [
  {
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    title: "Wake up to birdsong and green",
    description:
      "Our open corridor rooms wrap around a living garden of medicinal plants. Morning light filters through the canopy as the forest comes alive around you. This is not a hotel — it's a home in the woods.",
    imageLeft: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80",
    title: "A natural pool. A sky full of stars.",
    description:
      "Our outdoor pool is surrounded by greenery — no concrete, no chlorine smell. Just cool, fresh water under the open sky. At night, the stars reflect on the surface like scattered diamonds.",
    imageLeft: false,
  },
  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    title: "Three beaches. Five minutes away.",
    description:
      "Patnem, Talpona, and Palolem — each with its own personality. Walk to Patnem in two minutes, drive to Palolem in ten. Your Goa story has three chapters, and they're all within reach.",
    imageLeft: true,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-warm-gold mb-4 block">
            The Experience
          </span>
          <h2 className="font-cormorant font-semibold text-display-sm text-deep-forest">
            More than a stay.
            <br />
            A feeling you carry home.
          </h2>
        </motion.div>

        <div className="space-y-20 lg:space-y-32">
          {experienceBlocks.map((block, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center`}
            >
              {block.imageLeft ? (
                <>
                  <FadeInLeft>
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                      <img
                        src={block.image}
                        alt={block.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                      />
                    </div>
                  </FadeInLeft>
                  <FadeInRight>
                    <div className="lg:pl-8">
                      <h3 className="font-cormorant text-3xl lg:text-4xl font-semibold text-deep-forest mb-4">
                        {block.title}
                      </h3>
                      <p className="text-warm-stone text-lg leading-relaxed">
                        {block.description}
                      </p>
                    </div>
                  </FadeInRight>
                </>
              ) : (
                <>
                  <FadeInLeft className="order-2 lg:order-1">
                    <div className="lg:pr-8">
                      <h3 className="font-cormorant text-3xl lg:text-4xl font-semibold text-deep-forest mb-4">
                        {block.title}
                      </h3>
                      <p className="text-warm-stone text-lg leading-relaxed">
                        {block.description}
                      </p>
                    </div>
                  </FadeInLeft>
                  <FadeInRight className="order-1 lg:order-2">
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                      <img
                        src={block.image}
                        alt={block.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                      />
                    </div>
                  </FadeInRight>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
