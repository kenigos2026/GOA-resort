export function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(" ");
}

export function formatPrice(price: number, currency: string = "₹"): string {
  return `${currency}${price.toLocaleString("en-IN")}`;
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getWhatsAppLink(phone: string, message?: string): string {
  const base = `https://wa.me/${phone}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}

export const defaultWhatsAppMessage =
  "Hi! I'd like to inquire about booking a stay at Nature's Harmony. Could you please share availability and rates?";
