"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  CalendarDays,
  Users,
  BedDouble,
  UtensilsCrossed,
  MessageSquare,
  Phone,
  MapPin,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { rooms } from "@/content/rooms";

const bookingSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  checkIn: z.string().min(1, "Check-in date required"),
  checkOut: z.string().min(1, "Check-out date required"),
  guests: z.string().min(1, "Required"),
  room: z.string().min(1, "Required"),
  meals: z.string().optional(),
  requests: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const platforms = [
  { name: "MakeMyTrip", url: "#" },
  { name: "Goibibo", url: "#" },
  { name: "Agoda", url: "#" },
  { name: "Airbnb", url: "#" },
  { name: "TripAdvisor", url: "#" },
];

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async () => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] flex items-end pb-16 overflow-hidden">
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
            Reservations
          </span>
          <h1 className="font-cormorant font-semibold text-display-md text-white">
            Reserve Your Stay
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-forest-mist rounded-3xl p-12 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-verdant/10 flex items-center justify-center">
                  <Check size={40} className="text-verdant" />
                </div>
                <h2 className="font-cormorant text-3xl font-semibold text-deep-forest mb-4">
                  Booking Request Sent!
                </h2>
                <p className="text-warm-stone max-w-md mx-auto">
                  We&apos;ll confirm your reservation within 2 hours via WhatsApp or
                  Email. Thank you for choosing Nature&apos;s Harmony!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-verdant text-sm font-medium hover:underline"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white rounded-3xl p-8 lg:p-10 luxury-shadow"
              >
                <h2 className="font-cormorant text-2xl font-semibold text-deep-forest mb-8">
                  Booking Inquiry
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-deep-forest mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register("fullName")}
                      className="w-full px-4 py-3 border border-sage-light/50 rounded-xl focus:outline-none focus:border-verdant transition-colors"
                      placeholder="Your full name"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-terracotta">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-deep-forest mb-2">
                      Email *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full px-4 py-3 border border-sage-light/50 rounded-xl focus:outline-none focus:border-verdant transition-colors"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-terracotta">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-deep-forest mb-2">
                      Phone (WhatsApp preferred) *
                    </label>
                    <input
                      {...register("phone")}
                      className="w-full px-4 py-3 border border-sage-light/50 rounded-xl focus:outline-none focus:border-verdant transition-colors"
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-terracotta">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-sm font-medium text-deep-forest mb-2">
                      <Users size={14} className="inline mr-1" />
                      Number of Guests *
                    </label>
                    <select
                      {...register("guests")}
                      className="w-full px-4 py-3 border border-sage-light/50 rounded-xl focus:outline-none focus:border-verdant transition-colors bg-white"
                    >
                      <option value="">Select</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                    </select>
                  </div>

                  {/* Check-in */}
                  <div>
                    <label className="block text-sm font-medium text-deep-forest mb-2">
                      <CalendarDays size={14} className="inline mr-1" />
                      Check-in Date *
                    </label>
                    <input
                      {...register("checkIn")}
                      type="date"
                      className="w-full px-4 py-3 border border-sage-light/50 rounded-xl focus:outline-none focus:border-verdant transition-colors"
                    />
                    {errors.checkIn && (
                      <p className="mt-1 text-xs text-terracotta">
                        {errors.checkIn.message}
                      </p>
                    )}
                  </div>

                  {/* Check-out */}
                  <div>
                    <label className="block text-sm font-medium text-deep-forest mb-2">
                      <CalendarDays size={14} className="inline mr-1" />
                      Check-out Date *
                    </label>
                    <input
                      {...register("checkOut")}
                      type="date"
                      className="w-full px-4 py-3 border border-sage-light/50 rounded-xl focus:outline-none focus:border-verdant transition-colors"
                    />
                    {errors.checkOut && (
                      <p className="mt-1 text-xs text-terracotta">
                        {errors.checkOut.message}
                      </p>
                    )}
                  </div>

                  {/* Room */}
                  <div>
                    <label className="block text-sm font-medium text-deep-forest mb-2">
                      <BedDouble size={14} className="inline mr-1" />
                      Room Preference *
                    </label>
                    <select
                      {...register("room")}
                      className="w-full px-4 py-3 border border-sage-light/50 rounded-xl focus:outline-none focus:border-verdant transition-colors bg-white"
                    >
                      <option value="">Select room</option>
                      {rooms.map((room) => (
                        <option key={room.id} value={room.id}>
                          {room.name} — from ₹{room.pricePerNight}/night
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Meals */}
                  <div>
                    <label className="block text-sm font-medium text-deep-forest mb-2">
                      <UtensilsCrossed size={14} className="inline mr-1" />
                      Meal Requirements
                    </label>
                    <select
                      {...register("meals")}
                      className="w-full px-4 py-3 border border-sage-light/50 rounded-xl focus:outline-none focus:border-verdant transition-colors bg-white"
                    >
                      <option value="">Select</option>
                      <option value="breakfast">Breakfast Only</option>
                      <option value="all-meals">All Meals (B/L/D/Snacks)</option>
                      <option value="vegetarian">Vegetarian Only</option>
                      <option value="none">No Meals</option>
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-deep-forest mb-2">
                    <MessageSquare size={14} className="inline mr-1" />
                    Special Requests / Occasion
                  </label>
                  <textarea
                    {...register("requests")}
                    rows={4}
                    className="w-full px-4 py-3 border border-sage-light/50 rounded-xl focus:outline-none focus:border-verdant transition-colors resize-none"
                    placeholder="Anniversary, dietary needs, early check-in, etc."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-8 w-full py-4 bg-verdant text-white font-medium rounded-full hover:bg-verdant-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send My Booking Request"}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar — Platforms */}
          <div>
            <div className="bg-forest-mist rounded-3xl p-8 lg:sticky lg:top-28">
              <h3 className="font-cormorant text-2xl font-semibold text-deep-forest mb-3">
                Or Book Instantly Online
              </h3>
              <p className="text-sm text-warm-stone mb-8">
                Check real-time availability and instant confirmation on these
                platforms.
              </p>
              <div className="space-y-4">
                {platforms.map((p) => (
                  <a
                    key={p.name}
                    href={p.url}
                    className="flex items-center justify-between p-4 bg-white rounded-2xl luxury-shadow hover:luxury-shadow-lg transition-all group"
                  >
                    <span className="font-medium text-deep-forest">
                      {p.name}
                    </span>
                    <span className="text-xs text-verdant opacity-0 group-hover:opacity-100 transition-opacity">
                      Check Availability →
                    </span>
                  </a>
                ))}
              </div>

              <hr className="my-8 border-sage-light/30" />

              <h3 className="font-cormorant text-xl font-semibold text-deep-forest mb-4">
                Quick Contact
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+917****2726"
                  className="flex items-center gap-3 text-sm text-warm-stone hover:text-verdant transition-colors"
                >
                  <Phone size={16} />
                  072760 72726
                </a>
                <div className="flex items-start gap-3 text-sm text-warm-stone">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  <span>X4M5+G72, Hathipaul, Poinguinim, Canacona, Goa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
