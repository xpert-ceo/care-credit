import { motion } from "framer-motion"
import HeroImage from "../assets/hero.jpg"

const features = [
  {
    title: "Fast Approval",
    description:
      "Quick and efficient loan processing designed to help individuals and businesses move forward confidently.",
  },

  {
    title: "Transparent Process",
    description:
      "Clear procedures and honest financial systems with no hidden complexity throughout the experience.",
  },

  {
    title: "Secure Transactions",
    description:
      "Reliable and protected financial operations built with security and customer trust in mind.",
  },

  {
    title: "Customer Support",
    description:
      "Dedicated support systems focused on providing assistance and financial guidance when needed.",
  },

  {
    title: "Financial Inclusion",
    description:
      "Accessible financial services created to support more individuals and growing businesses.",
  },

  {
    title: "Technology Driven",
    description:
      "Modern fintech infrastructure designed to deliver seamless and future-ready financial experiences.",
  },
]

const WhyUs = () => {
  return (
    <section className="relative py-32 bg-[#fafafa] overflow-hidden">

      {/* SUBTLE GRID TEXTURE */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div
              className="
                relative
                h-[600px]
                rounded-[40px]
                overflow-hidden
                border border-black/10
                bg-white
                shadow-[0_20px_60px_rgba(0,0,0,0.06)]
              "
            >

             {/* IMAGE */}
<img
  src={HeroImage}
  alt="Care Credit Fintech"
  className="
    absolute inset-0
    w-full h-full
    object-cover
  "
/>

{/* DARK OVERLAY */}
<div
  className="
    absolute inset-0
    bg-black/25
  "
/>

{/* SUBTLE GLASS OVERLAY */}
<div
  className="
    absolute inset-0
    backdrop-blur-[2px]
    bg-white/[0.02]
  "
/>

              {/* FLOATING TRUST CARD */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-8 left-8
                  p-6
                  rounded-3xl
                  bg-black
                  text-white
                  max-w-xs
                "
              >

                <p className="text-white/60 text-sm">
                  Trusted Financial Services
                </p>

                <h3 className="mt-3 text-3xl font-semibold">
                  5,000+
                </h3>

                <p className="mt-2 text-white/60 text-sm leading-6">
                  Individuals and businesses trust Care Credit
                  for secure financial solutions.
                </p>

              </motion.div>

            </div>

          </motion.div>

          {/* RIGHT CONTENT */}
          <div>

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
              Why Choose Care Credit
            </motion.p>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="
                text-4xl
                md:text-5xl
                font-semibold
                tracking-tight
                leading-tight
                max-w-xl
                text-[#000000]
              "
            >
              Built Around Trust,
              Accessibility,
              and Modern Finance.
            </motion.h2>

            {/* FEATURES GRID */}
            <div className="grid sm:grid-cols-2 gap-6 mt-14">

              {features.map((feature, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  viewport={{ once: true }}
                  className="
                    group
                    p-6
                    rounded-3xl
                    border border-black/8
                    bg-white/80
                    backdrop-blur-md
                    hover:shadow-xl
                    transition-all duration-500
                  "
                >

                  {/* ICON DOT */}
                  <div
                    className="
                      w-3 h-3
                      rounded-full
                      bg-[#C8A44D]
                    "
                  />

                  <h3 className="mt-5 text-xl font-semibold tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-black/60 leading-7 text-sm">
                    {feature.description}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

        {/* BOTTOM STAT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            mt-28
            rounded-[40px]
            bg-black
            text-white
            px-8 lg:px-16
            py-14
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-10
          "
        >

          <div>
            <h3 className="text-4xl font-semibold">
              ₦500M+
            </h3>

            <p className="mt-3 text-white/60">
              Processed Loans
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-semibold">
              5K+
            </h3>

            <p className="mt-3 text-white/60">
              Active Customers
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-semibold">
              Fast
            </h3>

            <p className="mt-3 text-white/60">
              Loan Approval
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-semibold">
              Secure
            </h3>

            <p className="mt-3 text-white/60">
              Financial Systems
            </p>
          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default WhyUs