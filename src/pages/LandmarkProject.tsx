import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Building2, Users, Calendar, DollarSign, MapPin, ArrowRight, ChevronRight } from "lucide-react";
import { useEffect } from "react";

export default function LandmarkProject() {
  const featuredProjects = [
    {
      title: "World Trade Center",
      location: "New York, NY",
      image: "/wtc-project.jpg",
      description: "A symbol of resilience and architectural innovation, standing at 1,776 feet tall.",
      category: "Commercial",
      year: "2014",
      stats: [
        { icon: Building2, value: "104", label: "Floors" },
        { icon: Calendar, value: "8", label: "Years" },
        { icon: Users, value: "12K+", label: "Workers" },
        { icon: DollarSign, value: "3.9B", label: "Value" }
      ]
    },
    {
      title: "Burj Khalifa",
      location: "Dubai, UAE",
      image: "/burj-project.jpg",
      description: "The world's tallest building, pushing the boundaries of engineering and design.",
      category: "Mixed-Use",
      stats: [
        { icon: Building2, value: "163", label: "Floors" },
        { icon: Calendar, value: "6", label: "Years" },
        { icon: Users, value: "15K+", label: "Workers" },
        { icon: DollarSign, value: "1.5B", label: "Value" }
      ]
    }
  ];

  const projectCategories = [
    {
      name: "Commercial",
      count: 45,
      image: "/commercial-category.jpg",
      description: "State-of-the-art office buildings and retail spaces"
    },
    {
      name: "Residential",
      count: 38,
      image: "/residential-category.jpg",
      description: "Luxury apartments and housing developments"
    },
    {
      name: "Infrastructure",
      count: 27,
      image: "/infrastructure-category.jpg",
      description: "Bridges, highways, and public works"
    },
    {
      name: "Healthcare",
      count: 23,
      image: "/healthcare-category.jpg",
      description: "Hospitals and medical facilities"
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
            src="https://saariga.co.in/wp-content/uploads/2024/03/WhatsApp-Image-2021-12-21-at-10.51.42-AM-1024x576.jpeg" 
            alt="Certifications and Standards"
            className="w-full h-full object-cover"
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
              LANDMARK PROJECTS
            </motion.span>

            <motion.h1 
              className="text-white text-4xl md:text-5xl lg:text-6xl font-playfair font-bold max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Shaping Skylines Around the World
            </motion.h1>
          </div>
        </div>
      </section>


      {/* Featured Projects Section */}
      {/* Our Presence Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <motion.img
                src="https://saariga.co.in/wp-content/uploads/2024/03/22-1024x684.jpg"
                alt="Our Global Presence"
                className="rounded-2xl shadow-xl w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              />
            </div>
            <div>
              <motion.span 
                className="font-roboto text-[14px] font-medium tracking-[0.2em] uppercase text-[#4181DA] block mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                PROJECT-1
              </motion.span>

              <motion.h2 
                className="font-playfair text-[32px] md:text-[38px] text-gray-900 font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                LOCOMOTIVE Railway Shed of IRCON International
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-roboto text-gray-600 mb-8"
              >
                Saariga Constructions Private Limited (SCPL) successfully delivered a project for Ircon International Limited, involving the construction of five buildings in Sundergarh, Rourkela (Odisha). The project, valued at ₹14.85 crore, featured civil and pre-engineered steel structures designed to support heavy equipment. The buildings, with a high load-bearing capacity, were built to accommodate 50-ton cranes for servicing locomotives, aligning with the requirements of a locomotive railway shed.
              </motion.p>
            </div>
          </div>
        </div>
      </section>


            {/* Our Presence Section */}
            <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <motion.img
                src="https://saariga.co.in/wp-content/uploads/2024/03/WhatsApp-Image-2021-12-21-at-10.51.42-AM-1024x576.jpeg"
                alt="Our Global Presence"
                className="rounded-2xl shadow-xl w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              />
            </div>
            <div>
              <motion.span 
                className="font-roboto text-[14px] font-medium tracking-[0.2em] uppercase text-[#4181DA] block mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                PROJECT-2
              </motion.span>

              <motion.h2 
                className="font-playfair text-[32px] md:text-[38px] text-gray-900 font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Multi-Level Car Parking of PWD in Mussoorrie
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-roboto text-gray-600 mb-8"
              >
                Saariga Constructions Private Limited (SCPL) is developing a five-story multi-level car parking facility in the heart of Mussoorie to ease congestion and support local businesses. Designed to accommodate 212 cars, the project utilizes composite steel technology to reduce environmental impact by minimizing the use of natural resources. As the first of its kind in a hilly region, it showcases SCPL's expertise in tackling complex infrastructure challenges with sustainable solutions.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

            {/* Our Presence Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <motion.img
                src="https://saariga.co.in/wp-content/uploads/2024/03/0U9B5023-1024x683.jpg"
                alt="Our Global Presence"
                className="rounded-2xl shadow-xl w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              />
            </div>
            <div>
              <motion.span 
                className="font-roboto text-[14px] font-medium tracking-[0.2em] uppercase text-[#4181DA] block mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                PROJECT-3
              </motion.span>

              <motion.h2 
                className="font-playfair text-[32px] md:text-[38px] text-gray-900 font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Multilevel Car parking in Rohtak
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-roboto text-gray-600 mb-8"
              >
                Saariga Constructions Private Limited (SCPL) is developing Rohtak's first multi-level car parking facility to ease congestion in Asia's busiest cloth market. Featuring three parking levels, a basement, and an additional floor for commercial shops, the structure is built for both two-wheelers and four-wheelers. Initiated in June 2019, it comes with a 100-year stability certificate, ensuring long-term reliability. 
              </motion.p>
            </div>
          </div>
        </div>
      </section>


      {/* Our Presence Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <motion.img
                src="https://media.discordapp.net/attachments/976510455847731271/1334066758755156019/Screenshot_2025-01-28_192746.png?ex=679b2dfd&is=6799dc7d&hm=fa38b17a07fa4ceabed47fe254961350946a1d93a28d422a8057bec8f0762a2b&=&format=webp&quality=lossless&width=300&height=206"
                alt="Our Global Presence"
                className="rounded-2xl shadow-xl w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              />
            </div>
            <div>
              <motion.span 
                className="font-roboto text-[14px] font-medium tracking-[0.2em] uppercase text-[#4181DA] block mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                PROJECT-4
              </motion.span>

              <motion.h2 
                className="font-playfair text-[32px] md:text-[38px] text-gray-900 font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                CM Rise School in Chhindwara, Madhya Pradesh
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-roboto text-gray-600 mb-8"
              >
                Saariga Constructions Private Limited (SCPL) is constructing the CM Rise School in Pandhurna, Chhindwara, under the CM Rise Yojana—an initiative to transform government education. Awarded by the Madhya Pradesh Building Development Corporation, the project spans 25,000 square meters across four floors and includes academic blocks, a multipurpose hall, a mid-day meal facility, and a kindergarten. With a contract value of ₹24 crore, this project aligns with the "Make in India" vision, reinforcing SCPL's commitment to national development through high-quality educational infrastructure.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 