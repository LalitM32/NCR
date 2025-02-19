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
            src="https://saariga.co.in/wp-content/uploads/2024/03/WhatsApp-Image-2021-12-21-at-10.51.42-AM-1024x576.jpeg" 
            alt="Turner Construction Office"
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
              Building Tomorrow's World Today
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
                OUR METHOD
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
                Our approach combines cutting-edge technology, sustainable practices, and expert craftsmanship to ensure we consistently exceed expectations and deliver high-impact results on every project.
              </motion.p>

              <div className="space-y-6">
                {[
                  {
                    title: "Innovation",
                    description: "We focus on forward-thinking solutions that anticipate and address the evolving needs of the industry."
                  },
                  {
                    title: "Collaborative Approach",
                    description: "At Saariga Constructions, teamwork is key. We collaborate closely with clients, architects, engineers, and stakeholders to ensure the success of every project. "
                  },

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
                src="https://saariga.co.in/wp-content/uploads/2024/03/11-1024x731.jpg"
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
                OUR PRESENCE
              </motion.span>

              <motion.h2 
                className="font-playfair text-[32px] md:text-[38px] text-gray-900 font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Building India's Future with Excellence
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-roboto text-gray-600 mb-8"
              >
                Saariga Constructions Private Limited (SCPL) is a leading construction firm with a proven track record in executing large-scale infrastructure projects. With a strong operational presence across multiple states, SCPL is committed to addressing regional needs and contributing to national development. 
              </motion.p>

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
        Team Behind Our Success
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-roboto text-gray-600 max-w-2xl mx-auto mb-6"
      >
        Our goal is to help our companies maintain or achieve best-in-class positions in their respective industries.
      </motion.p>
      <motion.span 
        className="font-roboto text-[14px] font-medium tracking-[0.2em] uppercase text-[#4181DA] block mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        PROFESSIONAL TEAM
      </motion.span>
    </div>

    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {[
        {
          name: "Ms. Neha Singh",
          role: "Director & COO",
          image: "https://saariga.co.in/wp-content/uploads/2024/03/GEN_0895-1536x1351.jpg",
        },
        {
          name: "Mr. Shobhit Bansal",
          role: "Human Resource Manager",
          image: "https://static.vecteezy.com/system/resources/thumbnails/001/840/618/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg",
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
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute top-4 right-4">
              <div className="flex flex-col gap-3 bg-white/90 p-2 rounded-lg shadow-lg transform translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                <a href="#" className="text-gray-600 hover:text-[#4181DA]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#4181DA]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#4181DA]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>
                </a>
              </div>
            </div>
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

      {/* New Advisory Board Section */}
      <section className="w-full bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
          <motion.span 
            className="font-roboto text-[14px] font-medium tracking-[0.2em] uppercase text-[#4181DA] block mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ADVISORY BOARD
          </motion.span>

          <motion.h2 
            className="font-playfair text-[32px] md:text-[38px] text-gray-900 font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Meet Our Advisory Board
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-roboto text-gray-600 mb-8"
          >
            SCPL is carrying and experienced advisory board on its panel. There are technical Advisors, Marketing Advisors on board who are the leading consultants in the EPC Industry.They have experience of approx. 20-25 years of handling business and know the construction sector very well. They are the real strength of SCPL and without their support and continuous encouragement, SCPL might have not attained the desired results.
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
}