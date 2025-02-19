import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useEffect, useState } from "react";

export default function ContactUs() {
  const [isJoinTeam, setIsJoinTeam] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleForm = () => {
    setIsJoinTeam((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full bg-gray-800">
        <div className="absolute inset-0">
          <img
            src="https://saariga.co.in/wp-content/uploads/2024/03/WhatsApp-Image-2021-12-21-at-10.51.42-AM-1024x576.jpeg" 
            alt="Turner Construction Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-800/60" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
          <div className="flex flex-col justify-center h-full pt-20">
            <motion.span 
              className="text-[#4299E1] text-sm font-medium tracking-wider mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              GET IN TOUCH
            </motion.span>

            <motion.h1 
              className="text-white text-4xl md:text-5xl lg:text-6xl font-playfair font-bold max-w-3xl leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Building Connections, <br className="hidden lg:block" />Creating Futures
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Toggle Section */}
      <div className="flex justify-center py-8 bg-gray-50">
        <div className="flex space-x-4">
          <motion.button
            onClick={toggleForm}
            className={`flex items-center justify-center px-8 py-3 rounded-full transition-all duration-300 text-sm font-medium ${
              !isJoinTeam 
                ? "bg-[#4181DA] text-white shadow-lg"
                : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"
            }`}
            whileHover={{ y: -2 }}
          >
            <Mail className={`mr-2 w-5 h-5 ${isJoinTeam ? "hidden" : "block"}`} />
            General Inquiry
          </motion.button>
          <motion.button
            onClick={toggleForm}
            className={`flex items-center justify-center px-8 py-3 rounded-full transition-all duration-300 text-sm font-medium ${
              isJoinTeam 
                ? "bg-[#4181DA] text-white shadow-lg"
                : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"
            }`}
            whileHover={{ y: -2 }}
          >
            <Phone className={`mr-2 w-5 h-5 ${isJoinTeam ? "block" : "hidden"}`} />
            Join Our Team
          </motion.button>
        </div>
      </div>

      {/* Contact Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Conditional Form Rendering */}
            <motion.div 
              key={isJoinTeam ? 'join' : 'contact'}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:pr-12"
            >
              <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-8">
                {isJoinTeam ? "Join Our Team of Experts" : "How Can We Help You?"}
              </h2>

              <form className="space-y-6">
                {!isJoinTeam ? (
                  <>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block font-roboto text-sm font-medium text-gray-700">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#4181DA] focus:border-transparent outline-none transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block font-roboto text-sm font-medium text-gray-700">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#4181DA] focus:border-transparent outline-none transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block font-roboto text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#4181DA] focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block font-roboto text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#4181DA] focus:border-transparent outline-none transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block font-roboto text-sm font-medium text-gray-700">
                        Project Details
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#4181DA] focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-2">
                      <label className="block font-roboto text-sm font-medium text-gray-700">
                        Position Applying For
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#4181DA] focus:border-transparent outline-none transition-all"
                        placeholder="e.g., Project Manager"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block font-roboto text-sm font-medium text-gray-700">
                        Upload Resume (PDF, max 5MB)
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#4181DA] focus:border-transparent outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-[#4181DA]/10 file:text-[#4181DA] hover:file:bg-[#4181DA]/20"
                          accept=".pdf"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block font-roboto text-sm font-medium text-gray-700">
                        Cover Letter
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#4181DA] focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us why you'd be a great fit..."
                      />
                    </div>
                  </>
                )}

                <motion.button
                  type="submit"
                  className="w-full bg-[#4181DA] text-white font-roboto font-medium px-8 py-4 rounded-lg hover:bg-[#4181DA]/90 transition-colors flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isJoinTeam ? "Submit Application" : "Send Message"}
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <div className="lg:pl-12">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm">
                <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-8">
                  Our Contact Details
                </h3>

                <div className="space-y-8">
                  <motion.div 
                    className="flex items-start gap-4 hover:bg-white/50 p-4 rounded-lg transition-all"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#4181DA]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#4181DA]" />
                    </div>
                    <div>
                      <h4 className="font-playfair text-lg font-semibold text-gray-900 mb-2">
                        Headquarters
                      </h4>
                      <p className="font-roboto text-gray-600 leading-relaxed">
                        Plot No. 137, Sector 16A<br/>
                        Faridabad, Haryana 121002<br/>
                        India
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-4 hover:bg-white/50 p-4 rounded-lg transition-all"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#4181DA]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#4181DA]" />
                    </div>
                    <div>
                      <h4 className="font-playfair text-lg font-semibold text-gray-900 mb-2">
                        Phone 
                      </h4>
                      <p className="font-roboto text-gray-600">
                        Landline: +91-129-4879501<br/>
                        Mobile: +91-8744004213<br/>
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-4 hover:bg-white/50 p-4 rounded-lg transition-all"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#4181DA]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#4181DA]" />
                    </div>
                    <div>
                      <h4 className="font-playfair text-lg font-semibold text-gray-900 mb-2">
                        Email & Support
                      </h4>
                      <p className="font-roboto text-gray-600">
                        General: info@saariga.net<br/>
                        Careers: careers@saariga.net<br/>
                        Support: contact@saariga.net
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-r from-[#4181DA] to-[#4299E1] rounded-xl p-8 text-white">
                <h3 className="font-playfair text-2xl font-bold mb-4">
                  Office Hours
                </h3>
                <div className="space-y-2 font-roboto">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}