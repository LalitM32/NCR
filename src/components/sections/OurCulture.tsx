import { motion } from "framer-motion";

export function OurCulture() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.span 
            className="font-roboto text-[14px] font-medium tracking-[0.2em] uppercase text-[#4181DA] block mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Us
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
            We build excellence through innovation. Delivering quality construction with expertise, technology, and dedication—bringing your vision to life.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* About Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-2xl p-8 md:p-10 lg:p-12 h-full">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-12 rounded-full bg-[#4181DA] flex items-center justify-center">
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                    />
                  </svg>
                </span>
                <h3 className="font-playfair text-[24px] md:text-[28px] font-bold text-gray-900">
                  Who We Are
                </h3>
              </div>
              <p className="font-roboto text-[16px] text-gray-600 leading-relaxed mb-6">
               Saariga Constructions Private Limited (SCPL) is transforming India's infrastructure landscape through excellence in construction and sustainable development.
              </p>
              <ul className="space-y-4 font-roboto text-[15px] text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4181DA]" />
                  Deliver premium construction services as an A-Class certified contractor for PWD-MP and UPSIDCO, backed by ₹120 crore in successful projects
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4181DA]" />
                  Drive innovation across civil infrastructure, retail, and institutional projects under the leadership of Ms. Neha Singh
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4181DA]" />
                  Build with purpose to strengthen India's development while maintaining the highest quality standards
                </li>

              </ul>
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-2xl p-8 md:p-10 lg:p-12 h-full">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-12 rounded-full bg-[#4181DA] flex items-center justify-center">
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 10V3L4 14h7v7l9-11h-7z" 
                    />
                  </svg>
                </span>
                <h3 className="font-playfair text-[24px] md:text-[28px] font-bold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="font-roboto text-[16px] text-gray-600 leading-relaxed mb-6">
               SCPL's mission is to drive excellence in construction through innovative thinking and sustainable practices, contributing to India's self-reliance vision of "Aatmnirbhar Bharat."
              </p>
              <ul className="space-y-4 font-roboto text-[15px] text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4181DA]" />
                  Create forward-thinking solutions through advanced construction practices and technology
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4181DA]" />
                  Foster sustainable growth while delivering exceptional quality and scalability
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4181DA]" />
                  Build collaborative partnerships to strengthen national infrastructure development
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}