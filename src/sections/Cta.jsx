import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const CTA = () => {
  const whatsappNumber = "2348135281122";
  return (
    <section className="relative py-32 bg-white overflow-hidden">

      {/* SUBTLE GRID */}
      <div
        className="
          absolute inset-0 opacity-[0.03]
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, black 1px, transparent 1px),
            linear-gradient(to bottom, black 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden
            rounded-[40px]
            bg-black
            text-white
            px-8
            lg:px-16
            py-20
            border border-white/10
          "
        >

          {/* GOLD LIGHT */}
          <div
            className="
              absolute
              top-0 right-0
              w-[300px]
              h-[300px]
              bg-[#C8A44D]/10
              blur-3xl
              rounded-full
            "
          />

          {/* CONTENT */}
          <div className="relative z-10 max-w-3xl">

            {/* LABEL */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="
                text-sm
                uppercase
                tracking-[0.25em]
                text-[#C8A44D]
                mb-6
              "
            >
              Start Your Financial Journey
            </motion.p>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-semibold
                tracking-tight
                leading-tight
              "
            >
              Take The Next Step
              Towards Financial
              Growth.
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="
                mt-8
                text-white/60
                leading-8
                text-lg
                max-w-2xl
              "
            >
              Access secure financial solutions designed
              to support your future through trusted loans,
              savings opportunities, and investment services.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="
                mt-12
                flex flex-wrap
                gap-5
              "
            >

              {/* CONTACT BUTTON */}
              <a href="#footer">

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    px-7 py-4
                    rounded-full
                    bg-[#C8A44D]
                    text-black
                    font-medium
                    transition-all duration-300
                    hover:opacity-90
                  "
                >
                  Contact Us
                </motion.button>

              </a>

              {/* GET STARTED */}
              <a href={`https://wa.me/${whatsappNumber}?text=Hello%2C%20I%20want%20to%20get%20started`} target="_blank" rel="noopener noreferrer">

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    px-7 py-4
                    rounded-full
                    border border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    text-white
                    font-medium
                    hover:bg-white/[0.06]
                    transition-all duration-300
                  "
                >
                  Get Started
                </motion.button>

              </a>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default CTA