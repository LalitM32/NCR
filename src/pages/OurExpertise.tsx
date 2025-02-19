import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Building2, Factory, Building, Workflow, CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";
import { useEffect } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] }
  }
};

export default function OurExpertise() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Building2,
      title: "Infrastructure Development",
      description: "Large-scale civil and railway infrastructure projects, including buildings with pre-engineered steel structures. Delivered complex solutions for clients like Ircon International."
    },
    {
      icon: Factory,
      title: "Multi-Level Parking Solutions",
      description: "Innovative urban parking systems using composite steel technology, designed for sustainability. Successfully implemented in Mussoorie and Rohtak."
    },
    {
      icon: Building,
      title: "Educational & Institutional Facilities",
      description: "Community-focused infrastructure, such as the CM Rise School in Madhya Pradesh, featuring academic blocks, multipurpose halls, and childcare facilities."
    },
    {
      icon: CheckCircle2,
      title: "Factories",
      description: "SCPL provides construction services for industrial facilities and factories. Their innovative methods ensure efficient and robust structures suitable for industrial use."
    },
    {
      icon: Workflow,
      title: "Heavy Civil Infrastructure",
      description: "SCPL undertakes heavy civil infrastructure projects. This includes large-scale projects that require specialized engineering and construction expertise."
    },
    {
      icon: ArrowRight,
      title: "Civil Infrastructure Development",
      description: "SCPL is involved in the development of civil infrastructure. This encompasses a variety of projects aimed at improving the nation's infrastructure."
    },
    {
      icon: ChevronRight,
      title: "Pre-Engineered Building Construction",
      description: "SCPL uses pre-engineered building (PEB) systems in their construction projects. Their approach combines PEB with concrete and other materials to reduce project time and dead load."
    },
    {
      icon: Building2,
      title: "Retail Projects",
      description: "SCPL is involved in the development of retail spaces. This may include shopping centers and other commercial retail structures."
    },
    {
      icon: ChevronRight,
      title: "Commercial Projects",
      description: "SCPL undertakes commercial construction projects. This may include office buildings and other commercial spaces."
    }
  ];

  const workflowSteps = [
    {
      number: "01",
      title: "Innovative Planning",
      description: "Future-focused feasibility studies and design, proven in pioneering projects like Mussoorie's first multi-level hill car park."
    },
    {
      number: "02",
      title: "Collaborative",
      description: "Cross-departmental expertise (civil engineering, procurement, safety) ensures precise budgeting, scalable frameworks, and risk mitigation."
    },
    {
      number: "03",
      title: "Ethical Construction",
      description: "Eco-conscious methods (e.g., composite steel tech) and rigorous quality control for durable, low-impact structures."
    },
    {
      number: "04",
      title: "Excellence in Delivery",
      description: "Certified stability, client handovers, and standout results like the tech-integrated CM Rise School."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full bg-gray-800">
        <div className="absolute inset-0">
          <img
            src="https://saariga.co.in/wp-content/uploads/2024/03/WhatsApp-Image-2021-12-21-at-10.51.42-AM-1024x576.jpeg" 
            alt="Construction Expertise"
            className="w-full h-full object-cover opacity-50"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/25" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
          <div className="flex flex-col justify-center h-full pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <motion.span 
                className="inline-block text-[#4299E1] text-sm font-medium tracking-wider mb-4 py-2 px-4 bg-[#4299E1]/10 rounded-full"
              >
                OUR EXPERTISE
              </motion.span>

              <motion.h1 
                className="text-white text-5xl md:text-6xl lg:text-7xl font-playfair font-bold max-w-3xl mb-6"
              >
                Building Excellence Through Innovation
              </motion.h1>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
          <motion.span 
            className="inline-block font-roboto text-[14px] font-medium tracking-[0.2em] uppercase text-[#4181DA] mb-4 py-2 px-4 bg-[#4181DA]/10 rounded-full"
            initial={fadeInUp.hidden}
            whileInView={fadeInUp.visible}
            viewport={{ once: true }}
          >
            OUR SERVICES
          </motion.span>

          <motion.h2 
            className="font-playfair text-[32px] md:text-[38px] text-gray-900 font-bold leading-tight mb-16"
            initial={fadeInUp.hidden}
            whileInView={fadeInUp.visible}
            viewport={{ once: true }}
          >
            Comprehensive Construction <br />Solutions
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#4181DA]/20"
                initial={fadeInUp.hidden}
                whileInView={fadeInUp.visible}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-4 bg-[#4181DA]/10 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#4181DA]/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-[#4181DA]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="w-full bg-gray-50 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4181DA]/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24 relative">
          <motion.span 
            className="inline-block font-roboto text-[14px] font-medium tracking-[0.2em] uppercase text-[#4181DA] mb-4 py-2 px-4 bg-[#4181DA]/10 rounded-full"
            initial={fadeInUp.hidden}
            whileInView={fadeInUp.visible}
            viewport={{ once: true }}
          >
            OUR PROCESS
          </motion.span>

          <motion.h2 
            className="font-playfair text-[32px] md:text-[38px] text-gray-900 font-bold leading-tight mb-16"
            initial={fadeInUp.hidden}
            whileInView={fadeInUp.visible}
            viewport={{ once: true }}
          >
            How We Work
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative group"
                initial={fadeInUp.hidden}
                whileInView={fadeInUp.visible}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-6">
                  <div className="text-[#4181DA] text-5xl font-bold opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                    {step.number}
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-16 w-full h-[2px] bg-gradient-to-r from-[#4181DA]/20 to-transparent" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}