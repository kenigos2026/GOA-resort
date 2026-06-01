import { Metadata } from "next";
import { MapPin, Navigation, Car, Plane, Train } from "lucide-react";
import { nearbyPlaces, propertyAddress } from "@/content/nearby";

export const metadata: Metadata = {
  title: "Nearby Places | Nature's Harmony, South Goa",
  description:
    "Cotigao Wildlife Sanctuary, Patnem Beach, Talpona Beach, Palolem, Agonda. Discover what's near Nature's Harmony in South Goa.",
};

export default function NearbyPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-forest/60 to-deep-forest/80 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80')",
          }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-warm-gold mb-3 block">
            Explore
          </span>
          <h1 className="font-cormorant font-semibold text-display-md text-white">
            The Best of South Goa,
            <br />
            At Your Doorstep
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Map */}
        <div className="mb-16 rounded-3xl overflow-hidden luxury-shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.5!2d74.042!3d15.0049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDAwJzE3LjYiTiA3NMKwMDInMzEuMiJF!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nature's Harmony location map"
          />
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {nearbyPlaces.map((place) => (
            <div
              key={place.id}
              className="group bg-white rounded-3xl overflow-hidden luxury-shadow hover:luxury-shadow-lg transition-all duration-600"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-800"
                  style={{
                    background:
                      "linear-gradient(135deg, #C5CFC0 0%, #A8B5A0 100%)",
                  }}
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-ivory/90 backdrop-blur-sm rounded-full">
                  <span className="font-mono text-xs text-deep-forest">
                    {place.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-cormorant text-xl font-semibold text-deep-forest">
                    {place.name}
                  </h3>
                  <span className="text-xs text-warm-gold font-mono whitespace-nowrap ml-2">
                    {place.distance}
                  </span>
                </div>
                <p className="text-sm text-warm-stone leading-relaxed mb-4">
                  {place.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {place.whatToDo.map((todo) => (
                    <span
                      key={todo}
                      className="px-2.5 py-1 bg-forest-mist rounded-full text-xs text-warm-stone"
                    >
                      {todo}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Getting Here */}
        <div className="bg-forest-mist rounded-3xl p-8 lg:p-12">
          <h2 className="font-cormorant text-3xl font-semibold text-deep-forest text-center mb-10">
            Getting Here
          </h2>

          <div className="max-w-2xl mx-auto mb-10">
            <div className="flex items-start gap-4 mb-6">
              <MapPin size={20} className="text-verdant mt-1 shrink-0" />
              <div>
                <p className="font-medium text-deep-forest">Address</p>
                <p className="text-warm-stone">{propertyAddress.full}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center">
              <Plane size={28} className="mx-auto text-verdant mb-3" />
              <h3 className="font-cormorant text-lg font-semibold text-deep-forest mb-1">
                By Air
              </h3>
              <p className="text-sm text-warm-stone">
                Dabolim Airport (GOI) — 60 km, ~90 min by taxi
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <Train size={28} className="mx-auto text-verdant mb-3" />
              <h3 className="font-cormorant text-lg font-semibold text-deep-forest mb-1">
                By Train
              </h3>
              <p className="text-sm text-warm-stone">
                Canacona Railway Station — 5 km. Konkan Railway route.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <Car size={28} className="mx-auto text-verdant mb-3" />
              <h3 className="font-cormorant text-lg font-semibold text-deep-forest mb-1">
                By Road
              </h3>
              <p className="text-sm text-warm-stone">
                Well connected via NH66. Self-drive and rental cars available.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(propertyAddress.full)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-verdant text-white font-medium rounded-full hover:bg-verdant-dark transition-colors"
            >
              <Navigation size={16} />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
