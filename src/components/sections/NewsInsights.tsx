import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  value: string;
  image: string;
  description: string;
}

export function NewsInsights() {
  const [activeProject, setActiveProject] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Tax Planning & Compliance",
      category: "Direct Tax",
      location: "Business & Individual",
      value: "Tax Solutions",
      description: "Comprehensive tax planning, ITR filing, tax assessments, and compliance management. We help minimize tax liability while ensuring full compliance with tax laws.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3"
    },
    {
      id: 2,
      title: "GST Services",
      category: "Indirect Tax",
      location: "Business",
      value: "GST Compliance",
      description: "End-to-end GST solutions including registration, monthly/quarterly returns, reconciliations, and GST audit services. Stay compliant with evolving GST regulations.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3"
    },
    {
      id: 3,
      title: "Audit & Assurance",
      category: "Audit",
      location: "Corporate",
      value: "Assurance Services",
      description: "Statutory audits, internal audits, tax audits, and special purpose audits. We ensure accuracy and compliance while providing valuable business insights.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3"
    },
    {
      id: 4,
      title: "Business Advisory",
      category: "Advisory",
      location: "All Sectors",
      value: "Strategic Consulting",
      description: "Expert business consulting including company formation, compliance management, financial planning, and strategic business advisory for sustainable growth.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3"
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24">
          <motion.span 
            className="font-roboto text-[14px] font-medium tracking-[0.2em] uppercase text-[#4181DA] block mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            OUR SERVICES
          </motion.span>
          <motion.h2 
            className="font-playfair text-[32px] md:text-[38px] lg:text-[42px] text-gray-900 font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Comprehensive Financial Solutions
          </motion.h2>
          <motion.p 
            className="font-roboto text-[16px] md:text-[18px] text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Discover our range of professional chartered accountancy services, delivering excellence in every engagement.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Content - Projects List */}
          <div className="lg:col-span-7 space-y-12">
            {/* Project Navigation */}
            <div className="space-y-8">
              {projects.map((project, index) => (
                <motion.button
                  key={project.id}
                  onClick={() => setActiveProject(index)}
                  onMouseEnter={() => setIsHovered(index)}
                  onMouseLeave={() => setIsHovered(null)}
                  className={`w-full text-left group ${
                    index === activeProject ? "opacity-100" : "opacity-50 hover:opacity-70"
                  }`}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    <span className={`font-playfair text-sm font-medium transition-colors duration-200 ${
                      index === activeProject ? "text-[#4181DA]" : "text-gray-400"
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <h3 className={`font-playfair text-[20px] md:text-[24px] font-bold mb-3 transition-colors duration-200 ${
                        index === activeProject ? "text-gray-900" : "text-gray-700"
                      }`}>
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-gray-500">
                        <span className="font-roboto text-[15px] bg-gray-100 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                        <span className="hidden md:block w-1 h-1 rounded-full bg-gray-300" />
                        <span className="font-roboto text-[15px]">{project.location}</span>
                      </div>
                      {index === activeProject && (
                        <motion.div 
                          className="h-0.5 bg-[#4181DA] mt-6"
                          layoutId="activeProject"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                        />
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* View All Button */}
            <Link to="/services" 
              className="group inline-flex items-center gap-4 text-[#4181DA] hover:text-gray-900 transition-colors"
            >
              <span className="font-roboto text-[14px] font-semibold tracking-[0.2em] uppercase">
                View All Services
              </span>
              <svg 
                className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </Link>
          </div>

          {/* Right Content - Project Image */}
          <div className="lg:col-span-5">
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                >
                  <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
                    <motion.img
                      src={projects[activeProject].image}
                      alt={projects[activeProject].title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Project Details Overlay */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 p-5 md:p-6 lg:p-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="inline-block px-3 py-1 bg-[#4181DA] text-white font-roboto text-[12px] font-medium tracking-wider uppercase rounded-full mb-3 md:mb-4">
                        {projects[activeProject].category}
                      </span>
                      <p className="font-roboto text-[14px] md:text-[16px] text-white/90 leading-relaxed max-w-lg">
                        {projects[activeProject].description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}