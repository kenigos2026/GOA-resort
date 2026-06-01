export interface Experience {
  id: string;
  name: string;
  duration: string;
  distance: string;
  description: string;
  image: string;
  category: string;
}

export const experiences: Experience[] = [
  {
    id: "cotigao-trek",
    name: "Cotigao Wildlife Sanctuary Trek",
    duration: "7:00 AM – 5:30 PM",
    distance: "5 min from property",
    description: "Trek through Goa's most pristine forest. Spot Indian bison, giant squirrels, and over 200 bird species. Our naturalist guide knows every trail and hidden waterfall.",
    image: "/images/experiences/cotigao.jpg",
    category: "Adventure",
  },
  {
    id: "beach-hopping",
    name: "Beach Hopping — Patnem, Talpona, Palolem",
    duration: "Full Day",
    distance: "2 min – 10 min",
    description: "Three stunning beaches, each with its own personality. Patnem for calm family time, Talpona for pristine seclusion, Palolem for vibrant crescent-bay energy.",
    image: "/images/experiences/beach-hopping.jpg",
    category: "Beach",
  },
  {
    id: "morning-yoga",
    name: "Morning Yoga in the Garden",
    duration: "6:30 AM – 7:30 AM",
    distance: "In the garden",
    description: "Start your day with gentle yoga surrounded by medicinal plants and birdsong. Mats provided. Suitable for all levels. The garden air makes every breath count.",
    image: "/images/experiences/yoga.jpg",
    category: "Wellness",
  },
  {
    id: "sunset-agonda",
    name: "Sunset at Agonda Beach",
    duration: "4:30 PM – 7:00 PM",
    distance: "15 min drive",
    description: "Watch the sun melt into the Arabian Sea from one of South Goa's most serene beaches. A turtle nesting site with golden sands and zero crowds.",
    image: "/images/experiences/agonda-sunset.jpg",
    category: "Beach",
  },
  {
    id: "bird-watching",
    name: "Bird Watching — Medicinal Plant Garden Walk",
    duration: "6:00 AM – 7:30 AM",
    distance: "In the property",
    description: "Our garden is home to over 40 bird species. Walk with our nature guide through medicinal plants while spotting Malabar whistlers, sunbirds, and paradise flycatchers.",
    image: "/images/experiences/birdwatching.jpg",
    category: "Nature",
  },
  {
    id: "village-market",
    name: "Local Village Market Tour",
    duration: "8:00 AM – 11:00 AM",
    distance: "10 min drive",
    description: "Experience authentic Goan village life. Fresh produce, local spices, handmade crafts, and the famous Goan poi bread. A sensory journey into local culture.",
    image: "/images/experiences/market.jpg",
    category: "Culture",
  },
  {
    id: "waterfall-trip",
    name: "Waterfall Day Trip (Monsoon Season)",
    duration: "Full Day",
    distance: "45 min drive",
    description: "Visit the spectacular Tambdi Surla waterfall and the ancient Mahadev Temple. Best experienced during monsoon when the forest comes alive. Includes packed lunch.",
    image: "/images/experiences/waterfall.jpg",
    category: "Adventure",
  },
  {
    id: "kayaking",
    name: "Kayaking & Water Sports at Palolem",
    duration: "9:00 AM – 12:00 PM",
    distance: "10 min drive",
    description: "Paddle through Palolem's calm crescent bay. Kayaks, paddleboards, and snorkeling gear available. Spot dolphins if you're lucky!",
    image: "/images/experiences/kayaking.jpg",
    category: "Adventure",
  },
];
