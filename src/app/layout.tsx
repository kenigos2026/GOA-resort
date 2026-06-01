import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, Inter, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { lodgingSchema } from "@/lib/schema";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Nature's Harmony | Eco-Garden Stay Near Cotigao Sanctuary, South Goa",
  description:
    "A private garden homestay near Cotigao Wildlife Sanctuary. From ₹827/night. AC rooms, natural pool, 3 beaches within 5 km. 4.7★ on Google.",
  keywords: [
    "Goa resort",
    "South Goa hotel",
    "eco resort Goa",
    "Canacona stay",
    "Cotigao sanctuary hotel",
    "boutique hotel Goa",
    "nature stay Goa",
    "garden homestay",
  ],
  openGraph: {
    title: "Nature's Harmony | Eco-Garden Stay Near Cotigao Sanctuary",
    description:
      "A private garden homestay near Cotigao Wildlife Sanctuary, South Goa. From ₹827/night.",
    type: "website",
    locale: "en_IN",
    siteName: "Nature's Harmony",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nature's Harmony | South Goa",
    description:
      "A private garden homestay near Cotigao Wildlife Sanctuary. From ₹827/night.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(lodgingSchema),
          }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${lora.variable} ${inter.variable} ${dmMono.variable} antialiased bg-ivory text-deep-forest`}
      >
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
