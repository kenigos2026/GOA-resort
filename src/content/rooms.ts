export interface Room {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  pricePerNight: number;
  currency: string;
  maxGuests: number;
  bedType: string;
  size: string;
  amenities: { icon: string; label: string }[];
  images: { src: string; alt: string }[];
  featured: boolean;
}

export const rooms: Room[] = [
  {
    id: "ac-deluxe",
    name: "AC Deluxe Room",
    slug: "ac-deluxe",
    description: "Spacious king-bed room with garden views and modern comforts",
    longDescription: "Our AC Deluxe Room wraps you in comfort with a plush king-sized bed, climate control, and views of our medicinal garden. The open corridor design lets the morning breeze and birdsong drift in naturally. Perfect for couples and solo travelers seeking a peaceful retreat.",
    pricePerNight: 827,
    currency: "₹",
    maxGuests: 2,
    bedType: "King Size",
    size: "280 sq ft",
    amenities: [
      { icon: "wind", label: "Air Conditioning" },
      { icon: "bed-double", label: "King Bed" },
      { icon: "droplets", label: "Hot Water 24×7" },
      { icon: "wifi", label: "Complimentary WiFi" },
      { icon: "tv", label: "Flat Screen TV" },
      { icon: "refrigerator", label: "Mini Fridge" },
      { icon: "shirt", label: "Wardrobe" },
      { icon: "sun", label: "Garden View" },
    ],
    images: [
      { src: "/images/rooms/deluxe-1.jpg", alt: "AC Deluxe Room - King bed with garden view" },
      { src: "/images/rooms/deluxe-2.jpg", alt: "AC Deluxe Room - Bathroom" },
      { src: "/images/rooms/deluxe-3.jpg", alt: "AC Deluxe Room - Balcony view" },
      { src: "/images/rooms/deluxe-4.jpg", alt: "AC Deluxe Room - Evening ambiance" },
    ],
    featured: true,
  },
  {
    id: "garden-suite",
    name: "Garden Suite",
    slug: "garden-suite",
    description: "Premium suite nestled in the heart of our medicinal garden",
    longDescription: "The Garden Suite is our most intimate offering — a private sanctuary surrounded by medicinal plants and flowering trees. Wake up to the sound of birds, enjoy your morning coffee on the private sit-out, and feel the forest air wrap around you. Ideal for honeymooners and wellness travelers.",
    pricePerNight: 1200,
    currency: "₹",
    maxGuests: 2,
    bedType: "King Size",
    size: "380 sq ft",
    amenities: [
      { icon: "wind", label: "Air Conditioning" },
      { icon: "bed-double", label: "King Bed" },
      { icon: "droplets", label: "Hot Water 24×7" },
      { icon: "wifi", label: "Complimentary WiFi" },
      { icon: "tv", label: "Flat Screen TV" },
      { icon: "refrigerator", label: "Mini Fridge" },
      { icon: "shirt", label: "Wardrobe" },
      { icon: "flower-2", label: "Private Garden Sit-out" },
    ],
    images: [
      { src: "/images/rooms/suite-1.jpg", alt: "Garden Suite - Bedroom" },
      { src: "/images/rooms/suite-2.jpg", alt: "Garden Suite - Private sit-out" },
      { src: "/images/rooms/suite-3.jpg", alt: "Garden Suite - Garden view" },
      { src: "/images/rooms/suite-4.jpg", alt: "Garden Suite - Bathroom" },
    ],
    featured: true,
  },
];

export const policies = [
  {
    title: "Check-in & Check-out",
    content: "Check-in: 1:00 PM | Check-out: 11:00 AM. Early check-in and late check-out available on request, subject to availability.",
  },
  {
    title: "Meal Ordering Policy",
    content: "All meals must be pre-ordered at least 4 hours in advance. We prepare everything fresh using locally sourced ingredients. Inform us of any dietary requirements when ordering.",
  },
  {
    title: "Cancellation Policy",
    content: "Free cancellation up to 48 hours before check-in. Cancellations within 48 hours will be charged for the first night. No-shows will be charged the full booking amount.",
  },
  {
    title: "Pet Policy",
    content: "We love animals! Pets are welcome with prior notice. A small cleaning fee of ₹200 per stay applies. Please ensure your pet is well-behaved around our garden wildlife.",
  },
  {
    title: "Extra Bed Policy",
    content: "Extra beds are available at ₹300 per night. Maximum one extra room per room. Please request at the time of booking.",
  },
];
