import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { MapPin, CheckCircle, Users, Building2, Globe2, Award, ArrowRight } from "lucide-react";
import { useEffect } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] }
  }
};

export default function AboutUs() {
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
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3" 
            alt="NCR Consulting Office"
            className="w-full h-full object-cover opacity-75"
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
              ABOUT US
            </motion.span>

            <motion.h1 
              className="text-white text-4xl md:text-5xl lg:text-6xl font-playfair font-bold max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Your Trusted Financial Partners
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="w-full bg-white py-20"> */}
      {/*   <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24"> */}
      {/*     <div className="grid grid-cols-2 md:grid-cols-4 gap-8"> */}
      {/*       {[ */}
      {/*         { number: "46", label: "Countries", icon: Globe2 }, */}
      {/*         { number: "110+", label: "Offices", icon: Building2 }, */}
      {/*         { number: "10K+", label: "Employees", icon: Users }, */}
      {/*         { number: "70+", label: "Years Experience", icon: Award } */}
      {/*       ].map((stat, index) => ( */}
      {/*         <motion.div */}
      {/*           key={stat.label} */}
      {/*           initial={{ opacity: 0, y: 20 }} */}
      {/*           whileInView={{ opacity: 1, y: 0 }} */}
      {/*           viewport={{ once: true }} */}
      {/*           transition={{ delay: index * 0.1 }} */}
      {/*           className="group" */}
      {/*         > */}
      {/*           <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"> */}
      {/*             <stat.icon className="w-8 h-8 text-[#4181DA] mb-4" /> */}
      {/*             <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3> */}
      {/*             <p className="font-roboto text-gray-600">{stat.label}</p> */}
      {/*           </div> */}
      {/*         </motion.div> */}
      {/*       ))} */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </section> */}

      {/* Our Method Section */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.span 
                className="font-roboto text-[14px] font-medium tracking-[0.2em] uppercase text-[#4181DA] block mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                OUR APPROACH
              </motion.span>

              <motion.h2 
                className="font-playfair text-[32px] md:text-[38px] text-gray-900 font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                How We Deliver Excellence
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-roboto text-gray-600 mb-8"
              >
                Our approach combines deep expertise, innovative solutions, and personalized service to ensure we consistently exceed client expectations and deliver optimal financial outcomes.
              </motion.p>

              <div className="space-y-6">
                {[
                  {
                    title: "Expert Guidance",
                    description: "Our team of experienced professionals provides strategic advice tailored to your specific needs."
                  },
                  {
                    title: "Innovative Solutions",
                    description: "We leverage cutting-edge technology and industry best practices to deliver efficient and effective financial solutions."
                  },
                  {
                    title: "Client-Centric Approach",
                    description: "We prioritize understanding your unique requirements and maintaining clear communication throughout our engagement."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <ArrowRight className="w-6 h-6 text-[#4181DA] group-hover:translate-x-1 transition-transform duration-300" />
                    <div>
                      <h3 className="font-playfair text-gray-900 font-semibold mb-2">{item.title}</h3>
                      <p className="font-roboto text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3"
                alt="Our Method"
                className="rounded-2xl shadow-xl w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
          <div className="text-center mb-16">
            <motion.h2 
              className="font-playfair text-[32px] md:text-[38px] text-gray-900 font-bold leading-tight mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Meet Our Leadership
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-roboto text-gray-600 max-w-2xl mx-auto mb-6"
            >
              Our experienced team of professionals is dedicated to providing exceptional financial services and solutions.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Rajesh Kumar",
                role: "Managing Partner",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3",
              },
              {
                name: "Priya Sharma",
                role: "Tax Advisory Head",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3",
              },
              {
                name: "Amit Patel",
                role: "Audit & Assurance Partner",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="font-roboto text-gray-600">{member.role}</p>
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