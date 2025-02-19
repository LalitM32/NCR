import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] }
  }
};

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full bg-gray-900 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-[#0A0A0A]/90 to-[#0A0A0A]/90" />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("https://photodrive.starshinebrands.com/wp-content/uploads/2025/02/Untitled-1.png")`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-24 h-screen">
        <div className="flex flex-col justify-center h-full pt-20">
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center space-x-2 bg-blue-950/30 border border-blue-800/20 rounded-full px-4 py-1 w-fit mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-blue-400 text-sm font-medium">Expert CA Services</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
          >
            Your Trusted Partner in 
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"> Financial Success </span>
          </motion.h1>
          
          {/* Description */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Comprehensive chartered accountancy services delivering excellence in taxation, 
            audit, and financial advisory. Your success is our priority.
          </motion.p>

          {/* CTA Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4 mt-8"
          >
            <Link to="/contact-us" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg 
                             flex items-center gap-2 transition-all duration-300 transform hover:translate-x-1">
              Contact us
              <ArrowRight className="w-4 h-4" />
            </Link>
            
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-sm tracking-widest font-light">EXPLORE</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </div>
  );
}