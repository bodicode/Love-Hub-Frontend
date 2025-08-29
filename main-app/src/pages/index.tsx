import CategoryBar from "@/components/home/CategoryBar";
import CoupleHero from "@/components/home/CoupleHero";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import SpecialsSlider from "@/components/home/SpecialsSlider";
import TeamSection from "@/components/home/TeamSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <HeroSection />
      <CategoryBar />
      <SpecialsSlider />
      <CoupleHero />
      <TeamSection />
      <Footer />
    </div>
  );
}
