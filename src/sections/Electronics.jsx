import { motion } from "framer-motion";
import electronicsImg from "../assets/4.png";

const Electronics = () => {
  const whatsappNumber = "234813528112";

  return (
    <section className="relative min-h-screen overflow-hidden bg-white text-gray-900">
      {/* Grey Grid */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="absolute right-0 top-0 h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #6B7280 1px, transparent 1px),
              linear-gradient(to bottom, #6B7280 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex px-4 py-2 rounded-full border border-gray-300 bg-gray-100/50 backdrop-blur-md mb-8"
            >
              <span className="text-sm text-[#C8A44D] tracking-wide font-medium">ELECTRONICS & EASYBUY</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight"
            >
              EasyBuy,
              <br />
              Pay Later.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-8 text-lg leading-8 text-gray-600 max-w-xl"
            >
              Get the latest electronics with our flexible installment plans. Easy approval, zero stress.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-10 space-y-3"
            >
              <div className="flex items-center gap-3 text-gray-700">
                <i className="fas fa-mobile-alt text-[#C8A44D] text-xl w-6"></i>
                <span>Smartphones, Laptops, TVs, Home Appliances</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <i className="fas fa-truck text-[#C8A44D] text-xl w-6"></i>
                <span>Free delivery within Abuja</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <i className="fas fa-percent text-[#C8A44D] text-xl w-6"></i>
                <span>0% interest on 3-month EasyBuy plan</span>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 p-4 bg-gray-100 rounded-2xl border border-gray-200"
            >
              <p className="text-gray-800">
                <i className="fas fa-map-pin mr-2 text-[#C8A44D]"></i>
                <strong className="text-[#C8A44D]">Showroom Address:</strong><br />
                Maraba Building Materials, Dike Plaza (opposite the main market)
              </p>
            </motion.div>

            {/* Coming Soon Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 inline-block px-5 py-2 bg-black/5 rounded-full border border-[#C8A44D]/30"
            >
              <i className="fab fa-android mr-2 text-[#C8A44D]"></i>
              <span className="text-[#C8A44D] font-medium">Vanilla Global Trading App – Coming Soon</span>
            </motion.div>

            {/* CTA */}
            <motion.a
              href={`https://wa.me/${whatsappNumber}?text=Hello%2C%20I%20want%20to%20buy%20electronics%20on%20EasyBuy`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="inline-block mt-8 px-8 py-4 bg-[#C8A44D] text-black rounded-full font-medium hover:opacity-90 transition text-center"
            >
              Shop Now
            </motion.a>
          </div>

          {/* Right Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md rounded-[40px] border border-gray-200 overflow-hidden shadow-xl bg-gray-100">
              <img src={electronicsImg} alt="Electronics" className="w-full h-auto object-cover" />
             
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Electronics;