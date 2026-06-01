import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import HeroImage from "../assets/hero.jpg"
import { useEffect, useState } from "react"



const Counter = ({ from = 0, to = 100, duration = 2, suffix = "" }) => {
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => Math.floor(latest))
  const [display, setDisplay] = useState(from)

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.floor(latest)),
    })

    return controls.stop
  }, [from, to])

  return (
    <span>
      {display}
      {suffix}
    </span>
  )
}


const Hero = () => {
  return (
    
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* GOLD GRID */}
      <div className="absolute inset-0">

        <div
          className="
            absolute right-0 top-0
            h-full w-1/2
            opacity-[0.08]
          "
          style={{
            backgroundImage: `
              linear-gradient(to right, #C8A44D 1px, transparent 1px),
              linear-gradient(to bottom, #C8A44D 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-40 pb-24">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* SMALL LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                inline-flex items-center
                px-4 py-2 rounded-full
                border border-[#C8A44D]/20
                bg-white/[0.03]
                backdrop-blur-md
                mb-8
              "
            >
              <span className="text-sm text-[#C8A44D] tracking-wide">
                FUTURE OF DIGITAL FINANCE
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="
                text-5xl
                sm:text-6xl
                lg:text-7xl
                font-semibold
                leading-tight
                tracking-tight
              "
            >
              Accessible Loans,
              <br />

              Smarter Savings,
              <br />

              and The Future
              <br />

              of Finance.
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
                mt-8
                text-lg
                leading-8
                text-white/70
                max-w-xl
              "
            >
              Care Credit Limited provides secure loan and
              savings solutions designed to help individuals
              and businesses grow with confidence through
              trusted financial services and modern technology.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mt-10 flex flex-wrap gap-5"
            >

              <a href="#loans"
                className="
                  px-7 py-4
                  bg-[#C8A44D]
                  text-black
                  rounded-full
                  font-medium
                  hover:opacity-90
                  transition
                "
              >
                Apply for Loan
              </a>

              <a href="#savings"
                className="
                  px-7 py-4
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-md
                  rounded-full
                  text-white
                  hover:bg-white/[0.06]
                  transition
                "
              >
                Explore Savings
              </a>

            </motion.div>

            {/* TRUST POINTS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="
                mt-12
                flex flex-col sm:flex-row
                gap-6
                text-white/60
                text-sm
              "
            >

              <span>✓ Secure Transactions</span>
              <span>✓ Fast Approval</span>
              <span>✓ Trusted Financial Partner</span>

            </motion.div>

          </div>

          {/* RIGHT VISUAL AREA */}
          <div className="relative hidden lg:flex items-center justify-center min-h-[600px]">

            {/* MAIN IMAGE PANEL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="
                relative
                w-[420px]
                h-[520px]
                rounded-[40px]
                border border-white/10
                overflow-hidden
                shadow-[0_20px_80px_rgba(0,0,0,0.45)]
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
                  bg-black/30
                "
              />

              {/* GLASS EFFECT */}
              <div
                className="
                  absolute inset-0
                  backdrop-blur-[2px]
                  bg-white/[0.02]
                "
              />

            </motion.div>

            {/* LOAN CARD */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="
                absolute top-20 left-0
                p-5 rounded-3xl
                border border-white/10
                bg-black/60
                backdrop-blur-xl
                shadow-2xl
              "
            >

              <p className="text-white/50 text-sm">
                New Loan
              </p>

              <h3 className="text-3xl font-semibold mt-2">
                ₦400,000
              </h3>

            </motion.div>

            {/* SAVINGS CARD */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="
                absolute bottom-24 left-16
                p-4 rounded-2xl
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
              "
            >

              <p className="text-sm text-white/50">
                Savings Growth
              </p>

              <h4 className="text-2xl font-medium mt-2">
                +₦100,000
              </h4>

            </motion.div>

            {/* INVESTMENT CARD */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="
                absolute right-0 top-40
                p-5 rounded-3xl
                border border-white/10
                bg-[#111111]
                backdrop-blur-xl
              "
            >

              <p className="text-white/50 text-sm">
                Investment Wallet
              </p>

              <h3 className="text-2xl font-semibold mt-2">
                ₦50,000,000
              </h3>

            </motion.div>

          </div>

        </div>

      
               {/* BOTTOM METRICS */}
               
       <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-10 border-t border-white/10 pt-10">

  <div>
    <h3 className="text-3xl font-semibold">
      ₦<Counter to={500} duration={2.5} suffix="M+" />
    </h3>
    <p className="text-white/50 mt-2">Processed Loans</p>
  </div>

  <div>
    <h3 className="text-3xl font-semibold">
      <Counter to={5000} duration={2.5} suffix="+" />
    </h3>
    <p className="text-white/50 mt-2">Active Users</p>
  </div>

  <div>
    <h3 className="text-3xl font-semibold">
      <Counter to={24} duration={2} suffix="hrs" />
    </h3>
    <p className="text-white/50 mt-2">Loan Approval</p>
  </div>

  <div>
    <h3 className="text-3xl font-semibold">
      <Counter to={99} duration={2} suffix="%" />
    </h3>
    <p className="text-white/50 mt-2">Secure Investment System</p>
  </div>

</div>
      </div>
    </section>
  )
}

export default Hero