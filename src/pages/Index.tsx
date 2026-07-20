import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Accreditations from "@/components/Accreditations";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedCourses from "@/components/FeaturedCourses";
import InteractiveRoadmap from "@/components/InteractiveRoadmap";
import WhoCanJoin from "@/components/WhoCanJoin";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import TrainingModes from "@/components/TrainingModes";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navbar />
      <main>
        <HeroSection />
        <Accreditations />
        <AboutSection />
        <WhyChooseUs />
        <FeaturedCourses />
        <InteractiveRoadmap />
        <WhoCanJoin />
        <TestimonialCarousel />
        <TrainingModes />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

