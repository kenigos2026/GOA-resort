export const lodgingSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Nature's Harmony",
  description:
    "A private garden homestay near Cotigao Wildlife Sanctuary, South Goa. AC rooms, natural pool, 3 beaches within 5 km.",
  url: "https://naturesharmony.in",
  telephone: "+917276072726",
  address: {
    "@type": "PostalAddress",
    streetAddress: "X4M5+G72, Hathipaul, Poinguinim, Forest Gate",
    addressLocality: "Canacona",
    addressRegion: "Goa",
    postalCode: "403702",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 15.0049,
    longitude: 74.042,
  },
  priceRange: "₹827 - ₹1500",
  starRating: {
    "@type": "Rating",
    ratingValue: "4.7",
    bestRating: "5",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "187",
    bestRating: "5",
  },
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Air Conditioning",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "WiFi",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Swimming Pool",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Garden",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Restaurant",
      value: true,
    },
  ],
  image: [
    "https://naturesharmony.in/images/hero.jpg",
    "https://naturesharmony.in/images/garden.jpg",
    "https://naturesharmony.in/images/room.jpg",
  ],
  sameAs: [
    "https://www.instagram.com/harmony_natures",
    "https://www.facebook.com/HNature",
  ],
};
