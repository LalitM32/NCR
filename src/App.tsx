import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurExpertise from "./pages/OurExpertise";
import LandmarkProject from "./pages/LandmarkProject";
import Certifications from "./pages/Certifications";
import BackToTopButton from './components/BackToTopButton';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/our-expertise" element={<OurExpertise />} />
          <Route path="/landmark-project" element={<LandmarkProject />} />
          <Route path="/certifications" element={<Certifications />} />
          {/* Catch all route for 404s */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
      <BackToTopButton />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
