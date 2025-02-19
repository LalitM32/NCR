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
            Excellence in Financial Services
          </motion.h2>
          <motion.p 
            className="font-roboto text-[16px] md:text-[18px] text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We provide comprehensive financial solutions with expertise and dedication—helping businesses achieve their financial goals.
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
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <h3 className="font-playfair text-[24px] md:text-[28px] font-bold text-gray-900">
                  Who We Are
                </h3>
              </div>
              <p className="font-roboto text-[16px] text-gray-600 leading-relaxed mb-6">
                NCR CONSULTING is a leading chartered accountancy firm providing comprehensive financial services and solutions.
              </p>
              <ul className="space-y-4 font-roboto text-[15px] text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4181DA]" />
                  Expert team of chartered accountants with decades of combined experience
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4181DA]" />
                  Comprehensive services in taxation, audit, and financial advisory
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4181DA]" />
                  Committed to delivering excellence and maintaining the highest professional standards
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
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                <h3 className="font-playfair text-[24px] md:text-[28px] font-bold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="font-roboto text-[16px] text-gray-600 leading-relaxed mb-6">
                To empower businesses with expert financial guidance and innovative solutions for sustainable growth.
              </p>
              <ul className="space-y-4 font-roboto text-[15px] text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4181DA]" />
                  Provide strategic financial planning and compliance solutions
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4181DA]" />
                  Ensure client success through personalized advisory services
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4181DA]" />
                  Maintain the highest standards of professional ethics and integrity
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}