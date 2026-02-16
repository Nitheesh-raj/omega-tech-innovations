import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhoCanJoin from "@/components/WhoCanJoin";
import TrainingModes from "@/components/TrainingModes";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyChooseUs />
        <FeaturedCourses />
        <WhoCanJoin />
        <TrainingModes />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
