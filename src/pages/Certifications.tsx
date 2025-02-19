import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Shield, Award, CheckCircle2, Download, ArrowRight } from "lucide-react";
import { useEffect } from "react";

export default function Certifications() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certifications = [
    {
      banner: "https://saariga.co.in/wp-content/uploads/2024/03/Screenshot-2020-03-28-at-1_55_08.png",
        title: "Startup India Recognition",
        category: "Quality Management",
        description: "Certified by the Department of Industrial Policy & Promotion (DIPP) as a recognized startup for innovation and contribution to national development.",
        issuer: "Ministry of Commerce & Industry, Government of India",
        validUntil: "Valid for 7 years from incorporation (27/07/2018)"
    },
    {
      banner: "https://saariga.co.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-02-at-11.25.07-AM-2-e1712293337238-1024x754.jpeg",
      title: "Empowering India Awards 2021",
      category: "Engineering EPC",
      description: "Certificate of Appreciation presented to M/s Saariga Constructions Pvt. Ltd. in recognition of their accomplishments and contribution to empowering India.",
      issuer: "GALLITY COUNCIL",
      validUntil: "N/A"
    },
    {
      banner: "https://saariga.co.in/wp-content/uploads/2024/03/Screenshot-2020-03-28-at-2_02_47.png",
      title: "Udyog Aadhaar Memorandum",
      category: "Enterprise Registration",
      description: "Registration details for Saariga Constructions Private Limited under the Udyog Aadhaar Memorandum, including enterprise type, location, and major activities.",
      issuer: "Government of India",
      validUntil: "N/A"
    },
    {
      banner: "https://saariga.co.in/wp-content/uploads/2024/03/PWD_MP_Registration_page-0001-725x1024.jpg", // Replace with actual URL
      title: "Registration Certificate under Punjab Shops and Commercial Establishments Act, 1993",
      category: "Business Registration",
      description: "Registration certificate for Saariga Constructions Private Limited under the Punjab Shops and Commercial Establishments Act, 1993, detailing the establishment's business nature and employee information.",
      issuer: "Government of Punjab",
      validUntil: "31st day of [year]"
    },
  ];

  const accreditations = [
    {
      title: "Dubai Expo 2020 Participation",
      image: "https://www.expo2020dubai.com/-/media/image.png",
      description: "Acknowledged by Invest India for participation in Dubai Expo 2020, showcasing engineering and construction capabilities.",
      achievements: [
        "Global Collaboration: Represented India's construction and infrastructure sector at one of the world's largest expos."
      ]
    },
    {
      title: "Empowering India Award 2021",
      image: "https://saariga.co.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-02-at-11.25.07-AM-2-e1712293337238-1024x754.jpeg",
      description: "Certificate of Appreciation in the 'Engineering EPC' category for contributions to national infrastructure development.",
      achievements: [
        "Founding Member Status: Acknowledged as a key player in India's infrastructure growth.",
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full bg-gray-800">
        <div className="absolute inset-0">
          <img
            src="https://saariga.co.in/wp-content/uploads/2024/03/WhatsApp-Image-2021-12-21-at-10.51.42-AM-1024x576.jpeg" 
            alt="Certifications and Standards"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
          <div className="flex flex-col justify-center h-full pt-20">
            <motion.span 
              className="text-[#4299E1] text-sm font-medium tracking-wider mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              CERTIFICATIONS
            </motion.span>

            <motion.h1 
              className="text-white text-4xl md:text-5xl lg:text-6xl font-playfair font-bold max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Our Commitment to Excellence
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span 
              className="font-roboto text-[14px] font-medium tracking-[0.2em] uppercase text-[#4181DA] block mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              INDUSTRY STANDARDS
            </motion.span>
            
            <motion.h2 
              className="font-playfair text-[32px] md:text-[38px] text-gray-900 font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              International Certifications
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <img src={cert.banner} alt={`${cert.title} Banner`} className="w-full h-40 object-cover" />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-[#4181DA]/10 text-[#4181DA] rounded-full text-sm font-medium mb-4">
                    {cert.category}
                  </span>
                  <h3 className="font-playfair text-xl font-bold text-gray-900 mb-4">
                    {cert.title}
                  </h3>
                  <p className="font-roboto text-gray-600 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                  <div className="border-t border-gray-200 pt-4 space-y-2">
                    <p className="font-roboto text-sm text-gray-600">
                      <span className="font-medium">Issuer:</span> {cert.issuer}
                    </p>
                    <p className="font-roboto text-sm text-gray-600">
                      <span className="font-medium">Valid Until:</span> {cert.validUntil}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 