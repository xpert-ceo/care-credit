import { motion } from "framer-motion"
import { FaGooglePlay, FaApple } from "react-icons/fa"
import visionImage from "../assets/vision.jpg"

const Vision = () => {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="
          absolute inset-0
          bg-cover bg-center
          scale-105
        "
        style={{
          backgroundImage:
            `url(${visionImage})`,
        }}
      />

      {/* DARK BLUR OVERLAY */}
      <div
        className="
          absolute inset-0
          bg-black/65
          backdrop-blur-[3px]
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

        {/* SMALL LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="
            uppercase
            tracking-[0.3em]
            text-[#C8A44D]
            text-sm
            mb-6
          "
        >
          Future Fintech Vision
        </motion.p>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            text-4xl
            md:text-6xl
            font-semibold
            tracking-tight
            leading-tight
          "
        >
          The Future of
          <br />
          Digital Finance
          Starts Here.
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            mt-8
            text-lg
            leading-8
            text-white/75
            max-w-3xl
            mx-auto
          "
        >
          We are building a technology-driven financial ecosystem
          focused on seamless digital payments, smarter financial
          tools, and secure modern banking experiences designed
          for individuals and businesses.
        </motion.p>

        {/* APP COMING SOON */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-14"
        >

          <p className="text-white/60 text-sm tracking-wide">
            Get updated — Our mobile app is coming soon on
          </p>

          {/* STORE BUTTONS */}
          <div
            className="
              mt-8
              flex flex-col sm:flex-row
              items-center justify-center
              gap-5
            "
          >

            {/* PLAYSTORE */}
            <button
              className="
                group
                flex items-center gap-4
                px-7 py-4
                rounded-2xl
                bg-white/[0.06]
                border border-white/10
                backdrop-blur-xl
                hover:bg-white/[0.1]
                transition-all duration-300
                min-w-[220px]
              "
            >

              <div
                className="
                  w-12 h-12
                  rounded-xl
                  bg-white/10
                  flex items-center justify-center
                "
              >
                <FaGooglePlay className="text-xl text-white" />
              </div>

              <div className="text-left">
                <p className="text-xs text-white/50">
                  Coming Soon on
                </p>

                <h3 className="text-lg font-medium">
                  Google Play
                </h3>
              </div>

            </button>

            {/* APP STORE */}
            <button
              className="
                group
                flex items-center gap-4
                px-7 py-4
                rounded-2xl
                bg-white/[0.06]
                border border-white/10
                backdrop-blur-xl
                hover:bg-white/[0.1]
                transition-all duration-300
                min-w-[220px]
              "
            >

              <div
                className="
                  w-12 h-12
                  rounded-xl
                  bg-white/10
                  flex items-center justify-center
                "
              >
                <FaApple className="text-2xl text-white" />
              </div>

              <div className="text-left">
                <p className="text-xs text-white/50">
                  Coming Soon on
                </p>

                <h3 className="text-lg font-medium">
                  App Store
                </h3>
              </div>

            </button>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Vision