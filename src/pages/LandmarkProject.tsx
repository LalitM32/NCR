import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Calculator, PieChart, TrendingUp, Wallet, Target, ArrowRight, LineChart, BarChart3 } from "lucide-react";
import { useEffect } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] }
  }
};

export default function FinancialPlanning() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const planningServices = [
    {
      icon: Calculator,
      title: "Tax Planning",
      description: "Strategic tax planning to minimize liabilities and maximize savings through legal methods and exemptions."
    },
    {
      icon: PieChart,
      title: "Investment Advisory",
      description: "Expert guidance on investment strategies aligned with your financial goals and risk appetite."
    },
    {
      icon: TrendingUp,
      title: "Wealth Management",
      description: "Comprehensive wealth management solutions to grow and protect your assets for long-term prosperity."
    },
    {
      icon: Wallet,
      title: "Retirement Planning",
      description: "Secure your future with well-structured retirement plans and pension schemes."
    },
    {
      icon: Target,
      title: "Goal-Based Planning",
      description: "Customized financial strategies to help you achieve your specific life and business goals."
    },
    {
      icon: LineChart,
      title: "Portfolio Management",
      description: "Professional management of your investment portfolio with regular monitoring and rebalancing."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full bg-gray-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3" 
            alt="Financial Planning"
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
                FINANCIAL PLANNING
              </motion.span>

              <motion.h1 
                className="text-white text-5xl md:text-6xl lg:text-7xl font-playfair font-bold max-w-3xl mb-6"
              >
                Secure Your Financial Future
              </motion.h1>

              <motion.p
                className="text-gray-300 text-lg md:text-xl max-w-2xl"
              >
                Expert financial planning services to help you achieve your goals and secure your financial future.
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
            OUR PLANNING SERVICES
          </motion.span>

          <motion.h2 
            className="font-playfair text-[32px] md:text-[38px] text-gray-900 font-bold leading-tight mb-16"
            initial={fadeInUp.hidden}
            whileInView={fadeInUp.visible}
            viewport={{ once: true }}
          >
            Comprehensive Financial <br />Planning Solutions
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {planningServices.map((service, index) => (
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

      {/* Process Section */}
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
                OUR PROCESS
              </motion.span>

              <motion.h2 
                className="font-playfair text-[32px] md:text-[38px] text-gray-900 font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                How We Create Your Financial Plan
              </motion.h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Initial Assessment",
                    description: "Comprehensive evaluation of your current financial situation and goals."
                  },
                  {
                    title: "Strategy Development",
                    description: "Creating a customized financial plan tailored to your specific needs and objectives."
                  },
                  {
                    title: "Implementation",
                    description: "Executing the planned strategies with precision and attention to detail."
                  },
                  {
                    title: "Regular Review",
                    description: "Continuous monitoring and adjustment of your financial plan to ensure optimal results."
                  }
                ].map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <ArrowRight className="w-6 h-6 text-[#4181DA] group-hover:translate-x-1 transition-transform duration-300" />
                    <div>
                      <h3 className="font-playfair text-gray-900 font-semibold mb-2">{step.title}</h3>
                      <p className="font-roboto text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3"
                alt="Financial Planning Process"
                className="rounded-2xl shadow-xl w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 