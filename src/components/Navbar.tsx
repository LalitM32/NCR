import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Financial Planning", path: "/landmark-project" },
    { name: "Our Expertise", path: "/our-expertise" },
    { name: "Certifications", path: "/certifications" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link 
              to="/"
              className={`text-2xl font-bold tracking-tight ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              NCR Consulting
              <span className="text-blue-500">.</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationLinks.map((item) => (
                <Link 
                  key={item.name}
                  to={item.path}
                  className={`relative group text-[15px] font-medium transition-colors duration-300
                    ${isScrolled ? "text-gray-800" : "text-white"}
                    ${location.pathname === item.path ? "text-blue-500" : ""}
                  `}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300
                    ${location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"}
                  `} />
                </Link>
              ))}
              <Link 
                to="/contact-us"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg 
                         transition-all duration-300 text-sm font-medium shadow-lg shadow-blue-500/20"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "tween" }}
          >
            <div className="flex flex-col h-full">
              {/* Mobile Navigation Links */}
              <div className="flex-1 pt-24 px-6 overflow-y-auto">
                <div className="space-y-1">
                  {navigationLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block py-4 text-[15px] font-medium transition-colors
                        ${location.pathname === item.path 
                          ? "text-blue-600 bg-blue-50 rounded-lg px-4" 
                          : "text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-lg px-4"
                        }
                      `}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <Link 
                  to="/contact-us"
                  className="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg 
                           transition-all duration-300 text-sm font-medium flex items-center justify-center"
                >
                  Contact Us
                </Link>
              </div>

              {/* Quick Contact Info */}
              <div className="border-t border-gray-100 p-6 space-y-4 bg-gray-50">
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">+91-120-4567890</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">info@ncrconsulting.in</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Sector 62, Noida</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}