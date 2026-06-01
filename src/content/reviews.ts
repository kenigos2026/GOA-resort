export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  platform: string;
  stayType: string;
}

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Priya Sharma",
    location: "Mumbai, India",
    rating: 5,
    text: "Excellent service, spotless room and the most comfy bed ever. The garden is magical — we spent hours just sitting among the medicinal plants. The hosts made us feel like family.",
    date: "March 2025",
    platform: "Google",
    stayType: "Couple",
  },
  {
    id: "r2",
    name: "Marco & Sophie",
    location: "Berlin, Germany",
    rating: 5,
    text: "The food served was yummy and the staff was very good. We loved the morning yoga in the garden and the bird watching walk. This is the real Goa — peaceful, green, and authentic.",
    date: "February 2025",
    platform: "Airbnb",
    stayType: "Honeymooners",
  },
  {
    id: "r3",
    name: "Arjun Menon",
    location: "Bangalore, India",
    rating: 5,
    text: "Perfect nesting place surrounded by green lawn and medicinal plants. I came here to work remotely and ended up extending my stay by a week. The WiFi is great and the vibe is unmatched.",
    date: "January 2025",
    platform: "Google",
    stayType: "Digital Nomad",
  },
  {
    id: "r4",
    name: "Sarah & Tom",
    location: "London, UK",
    rating: 4,
    text: "A hidden gem in South Goa. The natural pool is refreshing and the location near Cotigao Sanctuary is unbeatable. We saw giant squirrels on our morning walk! Highly recommend for nature lovers.",
    date: "December 2024",
    platform: "TripAdvisor",
    stayType: "Family",
  },
  {
    id: "r5",
    name: "Ananya Reddy",
    location: "Hyderabad, India",
    rating: 5,
    text: "The most peaceful stay we've had in Goa. No loud music, no crowds — just birdsong, garden views, and incredible home-cooked food. The Goan fish curry is a must-try!",
    date: "November 2024",
    platform: "MakeMyTrip",
    stayType: "Friends",
  },
  {
    id: "r6",
    name: "David Chen",
    location: "Singapore",
    rating: 5,
    text: "We've stayed at many resorts in India, but Nature's Harmony is something special. The eco-garden concept is genuine, the staff is warm, and the location between forest and beach is perfect.",
    date: "October 2024",
    platform: "Google",
    stayType: "Couple",
  },
];

export const trustBadges = [
  { platform: "Google", rating: 4.7, reviews: 187, url: "#" },
  { platform: "MakeMyTrip", rating: 4.1, reviews: 94, url: "#" },
  { platform: "Airbnb", rating: 4.8, reviews: 52, url: "#" },
  { platform: "TripAdvisor", rating: 4.6, reviews: 73, url: "#" },
];
