export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  location: string;
  width: number;
  height: number;
}

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "/images/gallery/garden-morning.jpg", alt: "Morning light in the medicinal garden", category: "Garden", location: "Medicinal Garden", width: 800, height: 600 },
  { id: "g2", src: "/images/gallery/room-deluxe.jpg", alt: "AC Deluxe Room interior", category: "Rooms", location: "AC Deluxe Room", width: 800, height: 1000 },
  { id: "g3", src: "/images/gallery/pool-aerial.jpg", alt: "Natural outdoor pool from above", category: "Pool", location: "Pool Area", width: 800, height: 500 },
  { id: "g4", src: "/images/gallery/patnem-sunset.jpg", alt: "Sunset at Patnem Beach", category: "Nearby Beaches", location: "Patnem Beach", width: 800, height: 600 },
  { id: "g5", src: "/images/gallery/food-thali.jpg", alt: "Fresh Goan thali served in the garden", category: "Food", location: "Garden Dining", width: 800, height: 800 },
  { id: "g6", src: "/images/gallery/sunset-golden.jpg", alt: "Golden hour from the garden", category: "Sunsets", location: "Garden", width: 800, height: 500 },
  { id: "g7", src: "/images/gallery/corridor-green.jpg", alt: "Open corridor surrounded by green", category: "Garden", location: "Main Corridor", width: 600, height: 900 },
  { id: "g8", src: "/images/gallery/talpona-dawn.jpg", alt: "Dawn at Talpona Beach", category: "Nearby Beaches", location: "Talpona Beach", width: 800, height: 600 },
  { id: "g9", src: "/images/gallery/bathroom-natural.jpg", alt: "Natural stone bathroom", category: "Rooms", location: "Garden Suite", width: 600, height: 800 },
  { id: "g10", src: "/images/gallery/breakfast-spread.jpg", alt: "Continental breakfast spread", category: "Food", location: "Dining Area", width: 800, height: 600 },
  { id: "g11", src: "/images/gallery/palolem-bay.jpg", alt: "Aerial view of Palolem Bay", category: "Nearby Beaches", location: "Palolem Beach", width: 800, height: 500 },
  { id: "g12", src: "/images/gallery/night-sky.jpg", alt: "Starry night from the garden", category: "Sunsets", location: "Garden", width: 800, height: 600 },
];

export const galleryCategories = ["All", "Rooms", "Garden", "Pool", "Nearby Beaches", "Food", "Sunsets"];
