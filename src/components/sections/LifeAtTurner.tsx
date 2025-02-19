import { motion } from "framer-motion";

export function LifeAtTurner() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Image Section */}
          <div className="w-full lg:w-[61%]">
            <motion.div
              className="relative h-[400px] md:h-[500px] lg:h-full rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3"
                className="w-full h-full object-cover"
                alt="Professional financial consultants in a modern office setting"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-[39%] flex flex-col justify-center">
            <motion.span 
              className="font-roboto text-[14px] font-medium tracking-[0.2em] uppercase text-[#4181DA] mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              EXPERTISE
            </motion.span>
            
            <motion.h2 
              className="font-playfair text-[32px] md:text-[38px] lg:text-[42px] text-gray-900 font-bold leading-tight mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Your Trusted Financial Partner
            </motion.h2>
            
            <motion.p 
              className="font-roboto text-[18px] md:text-[20px] text-gray-600 leading-relaxed mb-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              We provide comprehensive financial solutions that help businesses thrive. Our expertise ensures your success in today's dynamic market.
            </motion.p>

            <motion.button 
              className="group inline-flex items-center gap-3 text-[#4181DA] hover:text-gray-900 transition-colors"
              whileHover={{ x: 10 }}
              aria-label="Learn more about our financial services"
              tabIndex={0}
            >
              <span className="font-roboto text-[14px] font-semibold tracking-[0.2em] uppercase">
                Explore Services
              </span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}