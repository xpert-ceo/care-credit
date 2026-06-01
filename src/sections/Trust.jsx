import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Promise Okene",
    role: "National Assembly Co-operative",
    category: "Business Finance",
    review:
      "Care Credit Limited has consistently provided reliable financial support and professional service delivery. Their structure and responsiveness have made business operations smoother and more efficient for our organization.",
  },

  {
    name: "Godwin Abuh",
    role: "Taj Bank",
    category: "Loan Services",
    review:
      "The loan process was transparent, fast, and professionally managed. Care Credit demonstrated strong financial understanding and excellent customer support throughout the process.",
  },

  {
    name: "Abdullahi Nurudeen",
    role: "Zenith Bank",
    category: "Loan Services",
    review:
      "Working with Care Credit has been seamless. Their commitment to accessibility, financial reliability, and customer-focused service stands out strongly in today’s financial space.",
  },

  {
    name: "Kumbat",
    role: "Investment Client",
    category: "Savings & Investment",
    review:
      "Over the years, Care Credit has consistently delivered on investment-related commitments with professionalism, trust, and accountability. The experience has been dependable and reassuring.",
  },

  {
    name: "Uwem Itoro",
    role: "Private Investor",
    category: "Investment Portfolio",
    review:
      "I have invested over ₦5,000,000 through Care Credit and the experience has remained secure, transparent, and professionally managed from the beginning.",
  },

  {
    name: "Amina Yusuf",
    role: "Savings Customer",
    category: "Savings Solutions",
    review:
      "Their savings structure helped me organize my financial plans better while giving me confidence in the safety and accessibility of my funds.",
  },
]

const Trust = () => {
  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">

      {/* GOLD GRID */}
      <div
        className="
          absolute inset-0 opacity-[0.05]
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, #C8A44D 1px, transparent 1px),
            linear-gradient(to bottom, #C8A44D 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* TOP SECTION */}
        <div className="max-w-3xl">

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
            Trusted By Individuals & Organizations
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              text-4xl
              md:text-5xl
              font-semibold
              tracking-tight
              leading-tight
            "
          >
            Trusted Financial
            Relationships Built
            Through Consistency.
          </motion.h2>

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
            Care Credit continues to support individuals,
            professionals, and organizations through
            reliable financial solutions focused on trust,
            accessibility, and long-term value.
          </motion.p>

        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="
                group
                relative
                rounded-[32px]
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-8
                hover:bg-white/[0.05]
                transition-all duration-500
              "
            >

              {/* CATEGORY */}
              <div
                className="
                  inline-flex
                  px-4 py-2
                  rounded-full
                  border border-[#C8A44D]/20
                  text-[#C8A44D]
                  text-xs
                  uppercase
                  tracking-[0.2em]
                "
              >
                {item.category}
              </div>

              {/* REVIEW */}
              <p
                className="
                  mt-8
                  text-white/70
                  leading-8
                  text-[15px]
                "
              >
                “{item.review}”
              </p>

              {/* USER */}
              <div className="mt-10">

                <h3 className="text-xl font-semibold tracking-tight">
                  {item.name}
                </h3>

                <p className="mt-2 text-white/40 text-sm">
                  {item.role}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Trust