import { motion } from "framer-motion";
import savingsImg from "../assets/2.png";

const Savings = () => {
  const whatsappNumber = "2348135281122";

  return (
    <section className="relative min-h-screen overflow-hidden bg-white text-gray-900">
      {/* Grey Grid Background */}
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
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex px-4 py-2 rounded-full border border-gray-300 bg-gray-100/50 backdrop-blur-md mb-8"
            >
              <span className="text-sm text-[#C8A44D] tracking-wide font-medium">SAVINGS PLANS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight"
            >
              Save Smart,
              <br />
              Achieve More.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-8 text-lg leading-8 text-gray-600 max-w-xl"
            >
              Choose a savings plan that fits your lifestyle and watch your money grow.
            </motion.p>

            {/* Savings Types */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="flex items-center gap-2 text-gray-700">
                <i className="fas fa-utensils text-[#C8A44D] text-xl w-6"></i>
                <span>Food Savings</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <i className="fas fa-users text-[#C8A44D] text-xl w-6"></i>
                <span>Daily Contribution (Ajo)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <i className="fas fa-calendar-alt text-[#C8A44D] text-xl w-6"></i>
                <span>Monthly Savings</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <i className="fas fa-coins text-[#C8A44D] text-xl w-6"></i>
                <span>Any Amount Savings</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <i className="fas fa-bullseye text-[#C8A44D] text-xl w-6"></i>
                <span>Target Savings</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href={`https://wa.me/${whatsappNumber}?text=Hello%2C%20I%20want%20to%20join%20a%20savings%20plan`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="inline-block mt-12 px-8 py-4 bg-[#C8A44D] text-black rounded-full font-medium hover:opacity-90 transition text-center"
            >
              Join Now 
            </motion.a>
          </div>

          {/* Right Column: Image + Map */}
          <div className="space-y-8">
            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative rounded-[40px] border border-gray-200 overflow-hidden shadow-xl bg-gray-100"
            >
              <img src={savingsImg} alt="Savings illustration" className="w-full h-auto" />
              
            </motion.div>

            {/* Map iframe - Branches */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-4 shadow-md border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-[#C8A44D]"></i> Our Branches
              </h3>
              <iframe
                title="Branches Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.123456!2d7.489!3d9.057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b7b7b7b7b7b%3A0x1234567890abcdef!2sMaraba%20Building%20Materials%2C%20Dike%20Plaza!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "1rem" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
              <div className="mt-3 text-sm text-gray-600 space-y-1">
                <p><i className="fas fa-building mr-2"></i> Maraba Building Materials, Dike Plaza</p>
                <p><i className="fas fa-tools mr-2"></i> Kugbo Mechanic Village</p>
                <p><i className="fas fa-home mr-2"></i> Lungi Barracks, Mami 2, Maitama Abuja</p>
                <p><i className="fas fa-store mr-2"></i> Wuye Ultra Modern Market</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Savings;
