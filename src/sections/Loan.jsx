import { motion } from "framer-motion";
import loanImg from "../assets/1.png";

const Loan = () => {
  const whatsappNumber = "2348135281122"; // replace with your number

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Gold Grid Background */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="absolute right-0 top-0 h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #C8A44D 1px, transparent 1px),
              linear-gradient(to bottom, #C8A44D 1px, transparent 1px)
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
              className="inline-flex px-4 py-2 rounded-full border border-[#C8A44D]/20 bg-white/[0.03] backdrop-blur-md mb-8"
            >
              <span className="text-sm text-[#C8A44D] tracking-wide">LOAN PRODUCTS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight"
            >
              Flexible Loans,
              <br />
              Tailored for You.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-8 text-lg leading-8 text-white/70 max-w-xl"
            >
              We offer a variety of loan products to suit your needs – from salary advances to cooperative loans.
            </motion.p>

            {/* Loan Types List */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-10 space-y-4"
            >
              <div className="flex items-center gap-3 text-white/80">
                <i className="fas fa-wallet text-[#C8A44D] text-xl w-6"></i>
                <span>Salary Advance – Quick cash before payday</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <i className="fas fa-store text-[#C8A44D] text-xl w-6"></i>
                <span>Shop Owner Loan – Boost your inventory</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <i className="fas fa-handshake text-[#C8A44D] text-xl w-6"></i>
                <span>Cooperative / Lenders Loan – Group-backed financing</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href={`https://wa.me/${whatsappNumber}?text=Hello%2C%20I%20want%20to%20apply%20for%20a%20loan`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="inline-block mt-12 px-8 py-4 bg-[#C8A44D] text-black rounded-full font-medium hover:opacity-90 transition text-center"
            >
              Apply →
            </motion.a>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md rounded-[40px] border border-white/10 overflow-hidden shadow-2xl bg-gray-800">
               <img src={loanImg} alt="Loan products" className="w-full h-auto object-cover" />
              
              {/* <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" /> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Loan;