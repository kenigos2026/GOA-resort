import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Check, Phone } from "lucide-react";
import { rooms, policies } from "@/content/rooms";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Rooms & Stays | Nature's Harmony, South Goa",
  description:
    "AC Deluxe Room and Garden Suite at Nature's Harmony. From ₹827/night. King bed, AC, WiFi, garden views.",
};

export default function RoomsPage() {
  const whatsappUrl = getWhatsAppLink(
    "917276072726",
    "Hi! I'd like to book a room at Nature's Harmony. Please share availability."
  );

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-forest/60 to-deep-forest/80 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80')",
          }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-warm-gold mb-3 block">
            Rooms & Stays
          </span>
          <h1 className="font-cormorant font-semibold text-display-md text-white">
            Rest Like You&apos;ve Never
            <br />
            Rested Before
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Room Cards */}
        <div className="space-y-20">
          {rooms.map((room) => (
            <div
              key={room.id}
              id={room.slug}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start"
            >
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden aspect-[4/3]">
                  <img
                    src={room.images[0].src}
                    alt={room.images[0].alt}
                    className="w-full h-full object-cover"
                    style={{
                      background:
                        "linear-gradient(135deg, #C5CFC0 0%, #A8B5A0 100%)",
                    }}
                  />
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {room.images.slice(1).map((img, i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden aspect-square"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover"
                        style={{
                          background:
                            "linear-gradient(135deg, #C5CFC0 0%, #A8B5A0 100%)",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Room Details */}
              <div className="lg:sticky lg:top-28">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={14} className="text-warm-gold" />
                  <span className="font-mono text-xs tracking-wider text-warm-gold">
                    SOUTH GOA
                  </span>
                </div>
                <h2 className="font-cormorant text-3xl lg:text-4xl font-semibold text-deep-forest mb-2">
                  {room.name}
                </h2>
                <p className="text-warm-stone mb-6">{room.description}</p>
                <p className="text-warm-stone leading-relaxed mb-8">
                  {room.longDescription}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-8 pb-8 border-b border-sage-light/40">
                  <span className="font-cormorant text-4xl font-semibold text-warm-gold">
                    ₹{room.pricePerNight.toLocaleString("en-IN")}
                  </span>
                  <span className="text-warm-stone">/night</span>
                </div>

                {/* Room Info */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-forest-mist rounded-2xl">
                    <span className="text-xs text-warm-stone block">Bed</span>
                    <span className="font-medium text-deep-forest">
                      {room.bedType}
                    </span>
                  </div>
                  <div className="p-4 bg-forest-mist rounded-2xl">
                    <span className="text-xs text-warm-stone block">Size</span>
                    <span className="font-medium text-deep-forest">
                      {room.size}
                    </span>
                  </div>
                  <div className="p-4 bg-forest-mist rounded-2xl">
                    <span className="text-xs text-warm-stone block">
                      Max Guests
                    </span>
                    <span className="font-medium text-deep-forest">
                      {room.maxGuests}
                    </span>
                  </div>
                  <div className="p-4 bg-forest-mist rounded-2xl">
                    <span className="text-xs text-warm-stone block">
                      Meals
                    </span>
                    <span className="font-medium text-deep-forest">
                      On Order
                    </span>
                  </div>
                </div>

                {/* Amenities */}
                <h3 className="font-cormorant text-xl font-semibold text-deep-forest mb-4">
                  Amenities
                </h3>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {room.amenities.map((a) => (
                    <div key={a.label} className="flex items-center gap-2">
                      <Check size={16} className="text-verdant shrink-0" />
                      <span className="text-sm text-warm-stone">{a.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex gap-4">
                  <Link
                    href="/book"
                    className="flex-1 py-4 bg-verdant text-white text-center font-medium rounded-full hover:bg-verdant-dark transition-colors"
                  >
                    Book This Room
                  </Link>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-4 border border-verdant text-verdant font-medium rounded-full hover:bg-verdant hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Phone size={16} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Policies */}
        <div className="mt-20 pt-16 border-t border-sage-light/30">
          <h2 className="font-cormorant text-3xl font-semibold text-deep-forest mb-10 text-center">
            Policies
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {policies.map((policy) => (
              <details
                key={policy.title}
                className="group bg-forest-mist rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-medium text-deep-forest">
                    {policy.title}
                  </span>
                  <span className="text-verdant group-open:rotate-180 transition-transform">
                    ▾
                  </span>
                </summary>
                <div className="px-6 pb-6 text-warm-stone text-sm leading-relaxed">
                  {policy.content}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Platform CTA */}
        <div className="mt-20 text-center p-10 bg-warm-gold/5 rounded-3xl">
          <h3 className="font-cormorant text-2xl font-semibold text-deep-forest mb-3">
            Also Available On
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            {["MakeMyTrip", "Goibibo", "Agoda", "Airbnb", "TripAdvisor"].map(
              (p) => (
                <Link
                  key={p}
                  href="/book"
                  className="px-6 py-3 bg-white rounded-full text-sm text-deep-forest luxury-shadow hover:luxury-shadow-lg transition-all"
                >
                  {p}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
