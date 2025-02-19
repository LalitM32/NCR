import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Building2, Users, Calendar, DollarSign, MapPin, ArrowRight, ChevronRight } from "lucide-react";
import { useEffect } from "react";

export default function SuccessStories() {
  const successStories = [
    {
      title: "Manufacturing Company Turnaround",
      location: "Delhi NCR",
      image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3",
      description: "Successfully restructured tax strategy and financial operations, resulting in 40% tax savings.",
      category: "Tax Advisory",
      year: "2023",
      stats: [
        { icon: DollarSign, value: "₹2.5Cr", label: "Tax Saved" },
        { icon: Calendar, value: "6", label: "Months" },
        { icon: Users, value: "200+", label: "Employees" },
        { icon: Building2, value: "3", label: "Facilities" }
      ]
    },
    {
      title: "E-commerce Business Scale-up",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3",
      description: "Provided comprehensive financial advisory and compliance support during rapid growth phase.",
      category: "Business Advisory",
      stats: [
        { icon: DollarSign, value: "₹50Cr+", label: "Revenue" },
        { icon: Calendar, value: "12", label: "Months" },
        { icon: Users, value: "50+", label: "Team Size" },
        { icon: Building2, value: "2", label: "Offices" }
      ]
    }
  ];

  const serviceCategories = [
    {
      name: "Tax Advisory",
      count: 150,
      description: "Strategic tax planning and compliance solutions"
    },
    {
      name: "Audit Services",
      count: 200,
      description: "Comprehensive audit and assurance services"
    },
    {
      name: "Business Advisory",
      count: 80,
      description: "Strategic growth and financial consulting"
    },
    {
      name: "GST Services",
      count: 300,
      description: "Complete GST compliance and advisory"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full bg-gray-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3" 
            alt="Success Stories"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
          <div className="flex flex-col justify-center h-full pt-20">
            <motion.span 
              className="text-[#4299E1] text-sm font-medium tracking-wider mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              SUCCESS STORIES
            </motion.span>

            <motion.h1 
              className="text-white text-4xl md:text-5xl lg:text-6xl font-playfair font-bold max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Client Success Stories
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      {successStories.map((story, index) => (
        <section key={story.title} className="w-full bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <motion.img
                  src={story.image}
                  alt={story.title}
                  className="rounded-2xl shadow-xl w-full"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                />
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <motion.span 
                  className="font-roboto text-[14px] font-medium tracking-[0.2em] uppercase text-[#4181DA] block mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {story.category}
                </motion.span>

                <motion.h2 
                  className="font-playfair text-[32px] md:text-[38px] text-gray-900 font-bold leading-tight mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {story.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="font-roboto text-gray-600 mb-8"
                >
                  {story.description}
                </motion.p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {story.stats.map((stat, idx) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-gray-50 p-4 rounded-lg"
                    >
                      <stat.icon className="w-6 h-6 text-[#4181DA] mb-2" />
                      <div className="font-bold text-xl text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Service Categories Overview */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
          <motion.h2 
            className="text-center font-playfair text-[32px] md:text-[38px] text-gray-900 font-bold mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Impact Across Services
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <div className="text-3xl font-bold text-[#4181DA] mb-4">
                  {category.count}+
                </div>
                <p className="text-gray-600">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 