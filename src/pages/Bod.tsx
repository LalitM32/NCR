import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { MapPin, CheckCircle, Users, Building2, Globe2, Award, ArrowRight } from "lucide-react";

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Leadership Section */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium tracking-wider uppercase mb-4">
              Our Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet The Team Behind Our Success
            </h2>
            <p className="text-lg text-gray-600">
              Dedicated professionals driving innovation and excellence
            </p>
          </motion.div>

          {/* Team Members */}
          <div className="space-y-16 md:space-y-24">
            {/* Ms. Neha Singh */}
            <motion.div 
              className="group flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-full md:w-2/5 lg:w-1/3">
                <div className="relative rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src="https://saariga.co.in/wp-content/uploads/2024/03/GEN_0895-1536x1351.jpg"
                    alt="Ms. Neha Singh"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="w-full md:w-3/5 lg:w-2/3 md:pt-8">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Ms. Neha Singh</h3>
                    <div className="h-px flex-1 bg-gray-200" />
                  </div>
                  <h4 className="text-xl text-blue-600 font-semibold mb-6">Director & Chief Operating Officer</h4>
                  <div className="prose prose-lg text-gray-600">
                    <p className="leading-relaxed">
                      An MBA Graduate from Symbiosis, Pune, specializing in Marketing & Human Resource, Ms. Singh brings over 15 years of comprehensive experience to our leadership team. Her expertise spans:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 text-gray-700">
                      {[
                        "Operations & Quality Management",
                        "Project & Process Excellence",
                        "Organizational Development",
                        "Brand Management",
                        "Corporate Customer Relations",
                        "Compliance & Licensing"
                      ].map((skill, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-600 rounded-full" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 text-gray-700">
                      As the backbone of SCPL, she brings a results-driven approach to leadership, combining strategic vision with operational excellence.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mr. Shobhit Bansal */}
            <motion.div 
              className="group flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-full md:w-2/5 lg:w-1/3">
                <div className="relative rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src="https://saariga.co.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-06-at-12.15.54-PM.jpeg"
                    alt="Mr. Shobhit Bansal"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="w-full md:w-3/5 lg:w-2/3 md:pt-8">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Mr. Shobhit Bansal</h3>
                    <div className="h-px flex-1 bg-gray-200" />
                  </div>
                  <h4 className="text-xl text-blue-600 font-semibold mb-6">Human Resource Manager</h4>
                  <div className="prose prose-lg text-gray-600">
                    <p className="leading-relaxed">
                      An experienced & dynamic professional with a strong foundation in Finance. He is an M.B.A (with specialization in Finance & Marketing) Graduate from Vidya College (Meerut). He has excellent exposure to managing finance & business, possessing outstanding leadership, mathematical & communication skills. His management experience and thorough understanding of business principles and practices, coupled with organizational & multi-tasking skills, makes him a capable business person. He is a visionary.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}