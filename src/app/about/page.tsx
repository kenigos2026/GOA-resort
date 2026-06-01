import { Metadata } from "next";
import { Leaf, Heart, TreePine, Star, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Nature's Harmony, South Goa",
  description:
    "Learn about Nature's Harmony — an eco-garden boutique homestay in South Goa near Cotigao Wildlife Sanctuary.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end pb-16 overflow-hidden">
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
            About Us
          </span>
          <h1 className="font-cormorant font-semibold text-display-md text-white">
            A Place Where Time
            <br />
            Slows Down
          </h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        {/* Our Story */}
        <div className="mb-20">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-warm-gold mb-4 block">
            Our Story
          </span>
          <h2 className="font-cormorant text-3xl lg:text-4xl font-semibold text-deep-forest mb-8">
            A love letter to South Goa
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="font-cormorant text-2xl italic text-verdant mb-8 leading-relaxed">
              &ldquo;Nature&apos;s Harmony was born from a belief that South
              Goa&apos;s most authentic beauty lies beyond the beaches — in the
              quiet forests, the village lanes, and the medicinal gardens that
              most visitors never see.&rdquo;
            </p>
            <p className="text-warm-stone leading-relaxed mb-6">
              What started as a family home surrounded by two acres of
              medicinal plants and flowering trees has grown into something we&apos;re
              deeply proud of: a place where travelers from India and around the
              world come to feel what we feel every morning when we step into the
              garden — pure, unbothered peace.
            </p>
            <p className="text-warm-stone leading-relaxed mb-6">
              We&apos;re not a resort. We&apos;re not a hotel. We&apos;re a home that
              opens its doors to those who understand that the best Goa
              experience isn&apos;t found in a nightclub — it&apos;s found in the sound
              of a Malabar whistler at dawn, the smell of wet earth after the
              first monsoon rain, and a home-cooked Goan fish curry served under
              a canopy of stars.
            </p>
            <p className="text-warm-stone leading-relaxed">
              Welcome to Nature&apos;s Harmony. We&apos;ve been waiting for you.
            </p>
          </div>
        </div>

        {/* Why We're Different */}
        <div className="mb-20">
          <h2 className="font-cormorant text-3xl font-semibold text-deep-forest text-center mb-12">
            Why We Are Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-forest-mist rounded-3xl p-8 text-center">
              <Leaf size={36} className="mx-auto text-verdant mb-4" />
              <h3 className="font-cormorant text-xl font-semibold text-deep-forest mb-3">
                Eco-Garden, Not A Concrete Box
              </h3>
              <p className="text-sm text-warm-stone leading-relaxed">
                Two acres of living medicinal garden surround every room.
                We grow what we cook. We compost what we waste. Every stay
                supports our eco-initiatives.
              </p>
            </div>
            <div className="bg-forest-mist rounded-3xl p-8 text-center">
              <Heart size={36} className="mx-auto text-terracotta mb-4" />
              <h3 className="font-cormorant text-xl font-semibold text-deep-forest mb-3">
                Intimate — Only for Those Who Truly Seek Peace
              </h3>
              <p className="text-sm text-warm-stone leading-relaxed">
                We keep our property intentionally small. No tour groups, no
                party crowds, no loud music. Just genuine people seeking genuine
                calm.
              </p>
            </div>
            <div className="bg-forest-mist rounded-3xl p-8 text-center">
              <TreePine size={36} className="mx-auto text-verdant mb-4" />
              <h3 className="font-cormorant text-xl font-semibold text-deep-forest mb-3">
                Forest Gate Location
              </h3>
              <p className="text-sm text-warm-stone leading-relaxed">
                Walk to wildlife at Cotigao Sanctuary in five minutes. Run
                to Patnem Beach in two. We&apos;re at the intersection of forest and
                sea.
              </p>
            </div>
          </div>
        </div>

        {/* Awards & Features */}
        <div className="bg-warm-gold/5 rounded-3xl p-8 lg:p-12 text-center">
          <h2 className="font-cormorant text-2xl font-semibold text-deep-forest mb-8">
            Recognition & Features
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <Star size={20} className="text-warm-gold fill-warm-gold" />
              <span className="text-sm font-medium text-deep-forest">
                4.7 on Google (187 Reviews)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={20} className="text-verdant" />
              <span className="text-sm text-warm-stone">Listed on Airbnb</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={20} className="text-verdant" />
              <span className="text-sm text-warm-stone">MakeMyTrip Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={20} className="text-verdant" />
              <span className="text-sm text-warm-stone">Agoda Partner</span>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mt-20">
          <h2 className="font-cormorant text-3xl font-semibold text-deep-forest text-center mb-12">
            Meet The Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh",
                role: "Host & Naturalist",
                bio: "Knows every trail in Cotigao and every bird by its call. Your guide to the forest.",
              },
              {
                name: "Meera",
                role: "Chef & Garden Keeper",
                bio: "Grows the medicinal plants and cooks the meals. Her Goan fish curry is legendary.",
              },
              {
                name: "Suresh",
                role: "Caretaker",
                bio: "Ensures everything runs like clockwork. From room maintenance to arranging taxis.",
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-sage-light/30 flex items-center justify-center">
                  <span className="font-cormorant text-3xl font-semibold text-verdant">
                    {member.name[0]}
                  </span>
                </div>
                <h3 className="font-cormorant text-xl font-semibold text-deep-forest">
                  {member.name}
                </h3>
                <p className="font-mono text-xs tracking-wider text-warm-gold mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-warm-stone">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
