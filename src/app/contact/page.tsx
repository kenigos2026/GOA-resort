"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Phone,
  MapPin,
  Globe,
  Send,
  MessageSquare,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { propertyAddress } from "@/content/nearby";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  contact: z.string().min(5, "Phone or email required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-forest/60 to-deep-forest/80 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80')",
          }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-warm-gold mb-3 block">
            Contact
          </span>
          <h1 className="font-cormorant font-semibold text-display-md text-white">
            We&apos;re Here. In the Forest.
            <br />
            Waiting For You.
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-cormorant text-3xl font-semibold text-deep-forest mb-8">
              Get in Touch
            </h2>

            <div className="space-y-6 mb-12">
              <a
                href={`tel:${propertyAddress.phone.replace(/\s/g, "")}`}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-verdant/10 flex items-center justify-center shrink-0 group-hover:bg-verdant/20 transition-colors">
                  <Phone size={20} className="text-verdant" />
                </div>
                <div>
                  <p className="text-sm text-warm-stone">Phone / WhatsApp</p>
                  <p className="font-medium text-deep-forest text-lg">
                    {propertyAddress.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-verdant/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-verdant" />
                </div>
                <div>
                  <p className="text-sm text-warm-stone">Address</p>
                  <p className="font-medium text-deep-forest">
                    {propertyAddress.full}
                  </p>
                </div>
              </div>

              <a
                href={`https://instagram.com/${propertyAddress.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-terracotta/10 flex items-center justify-center shrink-0 group-hover:bg-terracotta/20 transition-colors">
                  <Globe size={20} className="text-terracotta" />
                </div>
                <div>
                  <p className="text-sm text-warm-stone">Instagram</p>
                  <p className="font-medium text-deep-forest">
                    {propertyAddress.instagram}
                  </p>
                </div>
              </a>

              <a
                href={`https://${propertyAddress.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-warm-gold/10 flex items-center justify-center shrink-0 group-hover:bg-warm-gold/20 transition-colors">
                  <Globe size={20} className="text-warm-gold" />
                </div>
                <div>
                  <p className="text-sm text-warm-stone">Facebook</p>
                  <p className="font-medium text-deep-forest">
                    {propertyAddress.facebook}
                  </p>
                </div>
              </a>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden luxury-shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.5!2d74.042!3d15.0049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDAwJzE3LjYiTiA3NMKwMDInMzEuMiJF!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nature's Harmony location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-forest-mist rounded-3xl p-12 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-verdant/10 flex items-center justify-center">
                  <Check size={40} className="text-verdant" />
                </div>
                <h2 className="font-cormorant text-3xl font-semibold text-deep-forest mb-4">
                  Message Sent!
                </h2>
                <p className="text-warm-stone max-w-md">
                  We&apos;ll get back to you within a few hours. For instant
                  response, call us on WhatsApp.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-verdant text-sm font-medium hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <div className="bg-white rounded-3xl p-8 lg:p-10 luxury-shadow">
                <h2 className="font-cormorant text-2xl font-semibold text-deep-forest mb-2">
                  Send Us a Message
                </h2>
                <p className="text-sm text-warm-stone mb-8">
                  Questions about availability, group bookings, or special
                  occasions? We&apos;d love to hear from you.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-deep-forest mb-2">
                      Your Name *
                    </label>
                    <input
                      {...register("name")}
                      className="w-full px-4 py-3 border border-sage-light/50 rounded-xl focus:outline-none focus:border-verdant transition-colors"
                      placeholder="Full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-terracotta">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-deep-forest mb-2">
                      Phone or Email *
                    </label>
                    <input
                      {...register("contact")}
                      className="w-full px-4 py-3 border border-sage-light/50 rounded-xl focus:outline-none focus:border-verdant transition-colors"
                      placeholder="Phone number or email"
                    />
                    {errors.contact && (
                      <p className="mt-1 text-xs text-terracotta">
                        {errors.contact.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-deep-forest mb-2">
                      <MessageSquare size={14} className="inline mr-1" />
                      Message *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className="w-full px-4 py-3 border border-sage-light/50 rounded-xl focus:outline-none focus:border-verdant transition-colors resize-none"
                      placeholder="Tell us about your travel plans, room preferences, or any questions..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-terracotta">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-verdant text-white font-medium rounded-full hover:bg-verdant-dark transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
