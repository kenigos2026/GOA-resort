import { Metadata } from "next";
import { Phone, Sunrise, Sun, Coffee, Moon } from "lucide-react";
import { mealTimes, menuCategories } from "@/content/menu";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Dining | Nature's Harmony, South Goa",
  description:
    "Fresh, home-cooked meals at Nature's Harmony. North Indian, South Indian, Continental. Pre-order breakfast, lunch, snacks, dinner.",
};

const mealIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  sunrise: Sunrise as React.ComponentType<{ size?: number; className?: string }>,
  sun: Sun as React.ComponentType<{ size?: number; className?: string }>,
  coffee: Coffee as React.ComponentType<{ size?: number; className?: string }>,
  moon: Moon as React.ComponentType<{ size?: number; className?: string }>,
};

export default function DiningPage() {
  const orderUrl = getWhatsAppLink(
    "917276072726",
    "Hi! I'd like to pre-order meals for my stay at Nature's Harmony."
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
              "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80')",
          }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-warm-gold mb-3 block">
            Dining
          </span>
          <h1 className="font-cormorant font-semibold text-display-md text-white">
            Meals Made With Love,
            <br />
            Served In The Garden
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* How It Works */}
        <div className="text-center mb-16">
          <p className="text-lg text-warm-stone max-w-xl mx-auto">
            Pre-order meals before your visit. All dishes freshly prepared
            with locally sourced ingredients.
          </p>
        </div>

        {/* Meal Times */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {mealTimes.map((meal) => {
            const Icon = mealIcons[meal.icon] || Sunrise;
            return (
              <div
                key={meal.id}
                className="bg-forest-mist rounded-3xl p-6 text-center"
              >
                <Icon size={32} className="mx-auto text-verdant mb-3" />
                <h3 className="font-cormorant text-xl font-semibold text-deep-forest">
                  {meal.name}
                </h3>
                <p className="font-mono text-xs text-warm-gold mt-1 mb-2">
                  {meal.time}
                </p>
                <p className="text-sm text-warm-stone">{meal.description}</p>
                <a
                  href={orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-sm text-verdant font-medium hover:text-warm-gold transition-colors"
                >
                  <Phone size={14} />
                  Order via WhatsApp
                </a>
              </div>
            );
          })}
        </div>

        {/* Menu */}
        <h2 className="font-cormorant text-3xl font-semibold text-deep-forest text-center mb-12">
          Our Menu
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {menuCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-3xl overflow-hidden luxury-shadow">
              <div className="p-6 lg:p-8 border-b border-sage-light/20">
                <h3 className="font-cormorant text-2xl font-semibold text-deep-forest">
                  {category.name}
                </h3>
                <p className="text-sm text-warm-stone mt-1">
                  {category.description}
                </p>
              </div>
              <div className="divide-y divide-sage-light/20">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start justify-between p-6 lg:px-8"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-deep-forest">
                          {item.name}
                        </h4>
                        {item.isSpecial && (
                          <span className="px-2 py-0.5 bg-warm-gold/10 text-warm-gold text-xs rounded-full">
                            Chef&apos;s Pick
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-warm-stone mt-1">
                        {item.description}
                      </p>
                    </div>
                    {item.price && (
                      <span className="font-cormorant text-lg font-semibold text-warm-gold ml-4 shrink-0">
                        ₹{item.price}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Eat in the Garden */}
        <div className="mt-20 relative rounded-3xl overflow-hidden">
          <div className="aspect-[21/9]">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80"
              alt="Dining in the garden"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-deep-forest/80 to-deep-forest/40 flex items-center">
            <div className="p-8 lg:p-16 max-w-lg">
              <p className="font-cormorant text-2xl lg:text-3xl italic text-white leading-relaxed">
                &ldquo;There is something about a meal surrounded by medicinal
                plants and birdsong&rdquo;
              </p>
              <p className="mt-4 text-warm-gold font-mono text-xs tracking-wider">
                — THE NATURE&apos;S HARMONY KITCHEN
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
