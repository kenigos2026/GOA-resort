import HeroSection from "@/components/sections/HeroSection";
import AtAGlanceStrip from "@/components/sections/AtAGlanceStrip";
import ExperienceSection from "@/components/sections/ExperienceSection";
import RoomsPreviewSection from "@/components/sections/RoomsPreview";
import ReviewsSection from "@/components/sections/ReviewsSection";
import NearbyTeaser from "@/components/sections/NearbyTeaser";
import InstagramSection from "@/components/sections/InstagramSection";
import BookingCTASection from "@/components/sections/BookingCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AtAGlanceStrip />
      <ExperienceSection />
      <RoomsPreviewSection />
      <ReviewsSection />
      <NearbyTeaser />
      <InstagramSection />
      <BookingCTASection />
    </>
  );
}
