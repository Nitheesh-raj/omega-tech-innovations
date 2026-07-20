import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollProvider from "@/components/ScrollProvider";
import SpaceBackground from "@/components/SpaceBackground";
import LoadingScreen from "@/components/LoadingScreen";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import Internship from "./pages/Internship";
import Placement from "./pages/Placement";
import AboutUs from "./pages/AboutUs";
import Consultancy from "./pages/Consultancy";
import ContactUs from "./pages/ContactUs";
import DigitalSolutions from "./pages/DigitalSolutions";
import DiplomaCourses from "./pages/DiplomaCourses";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LoadingScreen />
      <SpaceBackground />
      <ScrollProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/partnership-institutions" element={<Consultancy />} />
            <Route path="/placement" element={<Placement />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/digital-solutions" element={<DigitalSolutions />} />
            <Route path="/diploma-courses" element={<DiplomaCourses />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ScrollProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

