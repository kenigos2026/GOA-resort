"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { reviews } from "@/content/reviews";

export default function ReviewsSection() {
  const controls = useAnimation();
  const indexRef = useRef(0);

  useEffect(() => {
    const timer = setInterval(async () => {
      indexRef.current = (indexRef.current + 1) % reviews.length;
      await controls.start({ opacity: 0, y: 20, transition: { duration: 0.3 } });
      await controls.start({ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } });
    }, 6000);
    return () => clearInterval(timer);
  }, [controls]);

  const currentReview = reviews[indexRef.current];

  return (
    <section className="py-20 lg:py-32 bg-ivory">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-warm-gold mb-4 block">
            Guest Voices
          </span>
          <h2 className="font-cormorant font-semibold text-display-sm text-deep-forest">
            In Their Own Words
          </h2>
        </motion.div>

        <motion.div animate={controls} initial={{ opacity: 1, y: 0 }}>
          <Quote size={48} className="mx-auto text-verdant/20 mb-6" />
          <p className="font-cormorant text-2xl lg:text-3xl italic text-deep-forest leading-relaxed mb-8">
            &ldquo;{currentReview.text}&rdquo;
          </p>
          <div className="flex items-center justify-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < currentReview.rating
                    ? "text-warm-gold fill-warm-gold"
                    : "text-sage"
                }
              />
            ))}
          </div>
          <p className="text-sm text-warm-stone">
            <span className="font-medium text-deep-forest">
              {currentReview.name}
            </span>{" "}
            • {currentReview.location} • {currentReview.platform}
          </p>
        </motion.div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 inline-flex items-center gap-2 px-6 py-3 bg-forest-mist rounded-full"
        >
          <Star size={18} className="text-warm-gold fill-warm-gold" />
          <span className="text-sm font-medium text-deep-forest">
            4.7 on Google
          </span>
          <span className="text-sm text-warm-stone">(187 Reviews)</span>
        </motion.div>
      </div>
    </section>
  );
}
