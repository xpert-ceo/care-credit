import { motion } from "framer-motion"
import AboutImage1 from "../assets/savings.jpg"
import AboutImage2 from "../assets/loan.jpg"

const About = () => {
  return (
    <section
      id="about"
      className="bg-white text-black py-28 overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* TOP CONTENT */}
        <div className="grid lg:grid-cols-2 gap-14 items-end">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#C8A44D] mb-5">
              About Care Credit
            </p>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-semibold
                tracking-tight
                leading-tight
                max-w-xl
              "
            >
              Building Financial
              <br />
              Confidence For Everyone
            </h2>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:pl-20"
          >
            <h3
              className="
                text-3xl
                md:text-4xl
                font-semibold
                leading-tight
                tracking-tight
                max-w-lg
              "
            >
              Empowering individuals and
              businesses with accessible
              financial solutions built on
              trust, transparency, and growth.
            </h3>

          </motion.div>

        </div>

        {/* ABOUT CARDS */}
        <div className="grid lg:grid-cols-2 gap-8 mt-24">

          {/* WHO WE ARE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              group
              border border-black/10
              rounded-[32px]
              p-8
              hover:shadow-2xl
              transition-all duration-500
              bg-white
            "
          >
            <div>
              <h3 className="text-3xl font-semibold tracking-tight">
                Who We Are
              </h3>

              <p className="mt-5 text-black/60 leading-8 max-w-md">
                Care Credit is committed to making
                financial services more accessible,
                helping individuals and businesses
                achieve their goals through trusted
                financial solutions.
              </p>

              
            </div>

            <div
              className="
                relative
                mt-10
                h-[320px]
                rounded-[28px]
                overflow-hidden
                border border-black/5
              "
            >
              <img
                src={AboutImage1}
                alt="About Care Credit"
                className="
                  absolute inset-0
                  w-full h-full
                  object-cover
                  transition-transform duration-700
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-black/20" />

              <div
                className="
                  absolute
                  right-6 top-6
                  px-5 py-3
                  rounded-2xl
                  bg-white
                  shadow-lg
                  border border-black/5
                "
              >
                <p className="text-xs text-black/40">
                  Trusted Since
                </p>

                <h4 className="text-xl font-semibold mt-1">
                  2015
                </h4>
              </div>
            </div>
          </motion.div>

          {/* OUR VISION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              group
              border border-black/10
              rounded-[32px]
              p-8
              hover:shadow-2xl
              transition-all duration-500
              bg-white
            "
          >
            <div>
              <h3 className="text-3xl font-semibold tracking-tight">
                Our Vision
              </h3>

              <p className="mt-5 text-black/60 leading-8 max-w-md">
                To become a trusted financial partner
                that empowers communities, supports
                business growth, and creates lasting
                opportunities through innovation and
                responsible financial services.
              </p>

              
            </div>

            <div
              className="
                relative
                mt-10
                h-[320px]
                rounded-[28px]
                overflow-hidden
                border border-black/5
              "
            >
              <img
                src={AboutImage2}
                alt="Our Vision"
                className="
                  absolute inset-0
                  w-full h-full
                  object-cover
                  transition-transform duration-700
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-black/20" />

              <div
                className="
                  absolute
                  left-6 bottom-6
                  px-5 py-3
                  rounded-2xl
                  bg-white
                  shadow-lg
                  border border-black/5
                "
              >
                <p className="text-xs text-black/40">
                  Customer Satisfaction
                </p>

                <h4 className="text-xl font-semibold mt-1">
                  98%
                </h4>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default About