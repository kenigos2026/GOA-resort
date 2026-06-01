export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price?: number;
  isSpecial?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export const mealTimes = [
  { id: "breakfast", name: "Breakfast", icon: "sunrise", time: "7:00 – 10:00 AM", description: "Start your day with fresh, locally sourced breakfast options" },
  { id: "lunch", name: "Lunch", icon: "sun", time: "12:00 – 3:00 PM", description: "Hearty meals featuring Goan and Indian flavors" },
  { id: "snacks", name: "Evening Snacks", icon: "coffee", time: "4:00 – 6:00 PM", description: "Light bites and beverages as the sun begins to set" },
  { id: "dinner", name: "Dinner", icon: "moon", time: "7:00 – 10:00 PM", description: "A candlelit garden dining experience under the stars" },
];

export const menuCategories: MenuCategory[] = [
  {
    id: "north-indian",
    name: "North Indian Thali",
    description: "Complete meals with dal, sabzi, roti, rice, salad, and dessert",
    items: [
      { id: "n1", name: "Veg Thali", description: "Dal tadka, seasonal sabzi, 4 rotis, rice, salad, papad, gulab jamun", price: 250 },
      { id: "n2", name: "Non-Veg Thali", description: "Chicken curry, dal, 4 rotis, rice, salad, egg curry", price: 350 },
      { id: "n3", name: "Paneer Special Thali", description: "Paneer butter masala, dal makhani, 4 rotis, rice, raita", price: 300 },
    ],
  },
  {
    id: "south-indian",
    name: "South Indian Breakfast",
    description: "Authentic South Indian flavors to start your morning",
    items: [
      { id: "s1", name: "Masala Dosa", description: "Crispy dosa with spiced potato filling, sambar, chutney", price: 150 },
      { id: "s2", name: "Idli Sambar (4 pcs)", description: "Steamed rice cakes with coconut chutney and sambar", price: 120 },
      { id: "s3", name: "Uttapam", description: "Thick rice pancake with onions, tomatoes, and chilies", price: 140 },
      { id: "s4", name: "Pongal", description: "Creamy rice and moong dal with ghee and cashews", price: 130 },
    ],
  },
  {
    id: "continental",
    name: "Continental Breakfast",
    description: "Light and fresh options for a European-style morning",
    items: [
      { id: "c1", name: "Eggs Your Way", description: "Scrambled, fried, or poached with toast and butler", price: 180 },
      { id: "c2", name: "Pancakes with Honey", description: "Fluffy pancakes drizzled with local Goan honey", price: 200 },
      { id: "c3", name: "Fresh Fruit Bowl", description: "Seasonal tropical fruits with yogurt and granola", price: 180 },
      { id: "c4", name: "Toast & Jam", description: "Multigrain toast with homemade jams and butter", price: 100 },
    ],
  },
  {
    id: "beverages",
    name: "Fresh Juice & Beverages",
    description: "Refreshing drinks made with local ingredients",
    items: [
      { id: "b1", name: "Fresh Lime Soda", description: "Sweet or salted, with fresh Goan limes", price: 80 },
      { id: "b2", name: "Tender Coconut", description: "Chilled, straight from the tree", price: 100 },
      { id: "b3", name: "Fresh Fruit Juice", description: "Mango, pineapple, watermelon (seasonal)", price: 120 },
      { id: "b4", name: "Masala Chai", description: "Traditional spiced tea with Goan ginger", price: 60 },
      { id: "b5", name: "Filter Coffee", description: "Strong South Indian filter coffee", price: 80 },
    ],
  },
  {
    id: "chefs-special",
    name: "Chef's Recommendation",
    description: "Rotating daily specials from our kitchen",
    items: [
      { id: "cs1", name: "Goan Fish Curry Rice", description: "The classic Goan comfort meal with fresh catch of the day", price: 350, isSpecial: true },
      { id: "cs2", name: "Prawn Balchão", description: "Tangy Goan prawn pickle-style curry with steamed rice", price: 400, isSpecial: true },
      { id: "cs3", name: "Vegetable Xacuti", description: "Rich Goan coconut-based curry with mixed vegetables", price: 280, isSpecial: true },
    ],
  },
];
