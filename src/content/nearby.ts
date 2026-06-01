export interface NearbyPlace {
  id: string;
  name: string;
  distance: string;
  description: string;
  whatToDo: string[];
  image: string;
  category: string;
  mapQuery: string;
}

export const nearbyPlaces: NearbyPlace[] = [
  {
    id: "cotigao-sanctuary",
    name: "Cotigao Wildlife Sanctuary",
    distance: "5 min drive",
    description: "Goa's most pristine forest sanctuary. Home to Indian bison, giant squirrels, and over 200 bird species. Dense canopy trails and a 25m watchtower.",
    whatToDo: ["Nature trekking", "Bird watching", "Watchtower visit", "Butterfly spotting"],
    image: "/images/nearby/cotigao.jpg",
    category: "Nature",
    mapQuery: "Cotigao+Wildlife+Sanctuary+Goa",
  },
  {
    id: "patnem-beach",
    name: "Patnem Beach",
    distance: "155 m (2 min walk)",
    description: "A calm, family-friendly beach with soft sand and gentle waves. Lined with cozy shacks serving fresh seafood. Perfect for swimming and sunset walks.",
    whatToDo: ["Swimming", "Sunset walks", "Beach shacks", "Yoga on the beach"],
    image: "/images/nearby/patnem.jpg",
    category: "Beach",
    mapQuery: "Patnem+Beach+Canacona+Goa",
  },
  {
    id: "talpona-beach",
    name: "Talpona Beach",
    distance: "152 m (2 min walk)",
    description: "One of South Goa's most secluded and pristine beaches. Golden sands, dramatic cliffs, and almost no crowds. A hidden gem for solitude seekers.",
    whatToDo: ["Solitude walks", "Photography", "Cliff views", "Tide pooling"],
    image: "/images/nearby/talpona.jpg",
    category: "Beach",
    mapQuery: "Talpona+Beach+Canacona+Goa",
  },
  {
    id: "palolem-beach",
    name: "Palolem Beach",
    distance: "10 min drive",
    description: "A vibrant crescent-shaped bay with colorful shacks, kayaking, and a lively but relaxed atmosphere. One of Goa's most photographed beaches.",
    whatToDo: ["Kayaking", "Dolphin spotting", "Silhouette island walk", "Fresh seafood"],
    image: "/images/nearby/palolem.jpg",
    category: "Beach",
    mapQuery: "Palolem+Beach+Goa",
  },
  {
    id: "agonda-beach",
    name: "Agonda Beach",
    distance: "15 min drive",
    description: "A serene turtle-nesting beach with golden sands and zero commercialization. Watch olive ridley turtles nest during season (Nov–Feb).",
    whatToDo: ["Turtle nesting (seasonal)", "Long walks", "Beach meditation", "Sunset viewing"],
    image: "/images/nearby/agonda.jpg",
    category: "Beach",
    mapQuery: "Agonda+Beach+Goa",
  },
  {
    id: "loliem-station",
    name: "Loliem Railway Station",
    distance: "Nearby",
    description: "A scenic heritage station on the Konkan Railway. Watch trains wind through the Western Ghats. A photographer's delight.",
    whatToDo: ["Heritage photography", "Train watching", "Konkan Railway experience"],
    image: "/images/nearby/loliem.jpg",
    category: "Heritage",
    mapQuery: "Loliem+Railway+Station+Goa",
  },
  {
    id: "dabolim-airport",
    name: "Dabolim Airport (GOI)",
    distance: "60 km / 90 min taxi",
    description: "Goa's main airport with domestic and international connections. Pre-paid taxis and private transfers available to Canacona.",
    whatToDo: ["Arrival/Departure", "Pre-paid taxi", "Car rental"],
    image: "/images/nearby/airport.jpg",
    category: "Transport",
    mapQuery: "Dabolim+Airport+Goa",
  },
];

export const propertyAddress = {
  full: "X4M5+G72, Hathipaul, Poinguinim, Forest Gate, Canacona, Goa 403702",
  coordinates: { lat: 15.0049, lng: 74.0420 },
  phone: "072760 72726",
  whatsapp: "917276072726",
  instagram: "@harmony_natures",
  facebook: "facebook.com/HNature",
};
