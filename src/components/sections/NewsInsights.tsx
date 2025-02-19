import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  const projects: Project[] = [
    {
      id: 1,
      title: "LOCOMOTIVE Railway Shed of IRCON International",
      category: "Railway",
      location: "Rourkela, Odisha",
      value: "",
      description: "SCPL and Icon International engineered a heavy-load industrial complex in Odisha with 50-ton crane capacity for precision engine servicing.",
      image: "https://saariga.co.in/wp-content/uploads/2024/03/22-1024x684.jpg"
    },
    {
      id: 2,
      title: "Multi-Level Car Parking of PWD in Mussoorrie",
      category: "Parking",
      location: "Mussoorie, Uttarakhand",
      value: "",
      description: "SCPL designed India’s first eco-sensitive multilevel car parking in the hills, seamlessly hosting 212 vehicles while preserving natural resources.",
      image: "https://saariga.co.in/wp-content/uploads/2024/03/WhatsApp-Image-2021-12-21-at-10.51.42-AM-1024x576.jpeg"
    },
    {
      id: 3,
      title: "3-Floor Multilevel Car Parking in Rohtak, Haryana",
      category: "Parking",
      location: "Rohtak, Haryana",
      value: "",
      description: "SCPL’s 100-year-stable parking-commercial hub in Rohtak’s Asia’s largest cloth market tackles congestion and drives government revenue.",
      image: "https://saariga.co.in/wp-content/uploads/2024/03/0U9B5023-1024x683.jpg"
    }
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
            FEATURED PROJECTS
          </motion.span>
          <motion.h2 
            className="font-playfair text-[32px] md:text-[38px] lg:text-[42px] text-gray-900 font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Building Excellence Through Innovation
          </motion.h2>
          <motion.p 
            className="font-roboto text-[16px] md:text-[18px] text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Discover our innovative construction projects, showcasing quality, sustainability, and cutting-edge design. See how we’re building the future.
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
                  className={`w-full text-left group ${
                    index === activeProject ? "opacity-100" : "opacity-50 hover:opacity-70"
                  }`}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    <span className="font-playfair text-sm font-medium text-[#4181DA] pt-1">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-playfair text-[20px] md:text-[24px] text-gray-900 font-bold mb-3">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-gray-500">
                        <span className="font-roboto text-[15px]">{project.location}</span>
                        <span className="hidden md:block w-1 h-1 rounded-full bg-gray-300" />
                        <span className="font-roboto text-[15px]">{project.value}</span>
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
            <motion.button
              className="group inline-flex items-center gap-4 text-[#4181DA] hover:text-gray-900 transition-colors"
              whileHover={{ x: 10 }}
            >
              <span className="font-roboto text-[14px] font-semibold tracking-[0.2em] uppercase">
                View All Projects
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
            </motion.button>
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