import { Metadata } from "next";
import Link from "next/link";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { experiences } from "@/content/experiences";

export const metadata: Metadata = {
  title: "Experiences & Activities | Nature's Harmony, South Goa",
  description:
    "Cotigao Wildlife Sanctuary trek, beach hopping, yoga, bird watching, kayaking. Discover South Goa's best experiences from Nature's Harmony.",
};

export default function ExperiencesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-forest/60 to-deep-forest/80 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80')",
          }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-warm-gold mb-3 block">
            Experiences
          </span>
          <h1 className="font-cormorant font-semibold text-display-md text-white">
            Your Goa Story
            <br />
            Starts Here
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <p className="text-lg text-warm-stone max-w-2xl mx-auto text-center mb-16">
          From pristine forest treks to secluded beaches, every day at
          Nature&apos;s Harmony is a new chapter. Here&apos;s what awaits you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group bg-white rounded-3xl overflow-hidden luxury-shadow hover:luxury-shadow-lg transition-all duration-600"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-800"
                  style={{
                    background:
                      "linear-gradient(135deg, #C5CFC0 0%, #A8B5A0 100%)",
                  }}
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-ivory/90 backdrop-blur-sm rounded-full">
                  <span className="font-mono text-xs text-deep-forest">
                    {exp.category}
                  </span>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="font-cormorant text-2xl font-semibold text-deep-forest mb-3">
                  {exp.name}
                </h3>
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-warm-stone">
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-verdant" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-verdant" />
                    {exp.distance}
                  </span>
                </div>
                <p className="text-warm-stone text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-verdant text-sm font-medium hover:text-warm-gold transition-colors"
                >
                  Inquire About This
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
