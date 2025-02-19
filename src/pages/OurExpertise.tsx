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
      title: "Direct Tax Services",
      description: "Comprehensive tax planning, ITR filing, tax assessments, and compliance management for individuals and businesses."
    },
    {
      icon: Factory,
      title: "GST Services",
      description: "Complete GST solutions including registration, returns filing, reconciliations, and GST audit services."
    },
    {
      icon: Building,
      title: "Audit & Assurance",
      description: "Statutory audits, internal audits, tax audits, and special purpose audits with detailed reporting and insights."
    },
    {
      icon: CheckCircle2,
      title: "Corporate Compliance",
      description: "Company formation, annual compliance, ROC filings, and corporate law advisory services."
    },
    {
      icon: Workflow,
      title: "Business Advisory",
      description: "Strategic business consulting, financial planning, and growth advisory for businesses of all sizes."
    },
    {
      icon: ArrowRight,
      title: "Accounting Services",
      description: "Professional bookkeeping, accounting, and financial statement preparation with the highest standards."
    }
  ];

  const workflowSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Understanding your needs through detailed discussion and requirement analysis."
    },
    {
      number: "02",
      title: "Strategic Planning",
      description: "Developing customized solutions and strategies aligned with your financial goals."
    },
    {
      number: "03",
      title: "Implementation",
      description: "Executing planned strategies with precision and attention to detail."
    },
    {
      number: "04",
      title: "Monitoring & Review",
      description: "Regular follow-ups and adjustments to ensure optimal results."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full bg-gray-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3" 
            alt="Financial Expertise"
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
                Comprehensive Financial Solutions
              </motion.h1>

              <motion.p
                className="text-gray-300 text-lg md:text-xl max-w-2xl"
              >
                Expert chartered accountancy services delivering excellence in taxation, audit, and financial advisory.
              </motion.p>
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
            Professional Financial <br />Services
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