import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HiPlus, HiMinus } from "react-icons/hi"

const faqData = [
  {
    category: "Loans",
    questions: [
      {
        question: "How do I apply for loans?",
        answer:
          "Customers can apply through our digital process designed to make loan access simple, secure, and convenient for individuals and businesses.",
      },

      {
        question: "How long does approval take?",
        answer:
          "Loan approval timelines depend on the type of request and verification process, but we aim to provide quick and efficient responses.",
      },

      {
        question: "What loan options are available?",
        answer:
          "We offer flexible financial solutions tailored for personal needs, business growth, and enterprise support.",
      },
    ],
  },

  {
    category: "Savings & Investment",
    questions: [
      {
        question: "How are savings secured?",
        answer:
          "Customer savings are managed through secure financial systems designed to prioritize reliability and protection.",
      },

      {
        question: "What savings options are available?",
        answer:
          "We provide multiple savings opportunities designed to support financial stability, future planning, and growth.",
      },

      {
        question: "What investment plans are available?",
        answer:
          "Our investment-focused financial solutions are structured to help customers grow and manage wealth strategically.",
      },
    ],
  },

  {
    category: "Security",
    questions: [
      {
        question: "Is Care Credit secure?",
        answer:
          "Security and trust are central to our operations, with systems focused on protecting transactions and customer data.",
      },

      {
        question: "How is customer information protected?",
        answer:
          "We use secure digital systems and modern protection measures to safeguard customer information and financial activity.",
      },

      {
        question: "Are transactions monitored securely?",
        answer:
          "Our technology-driven infrastructure is designed to support safe and reliable transaction processing.",
      },
    ],
  },
]

const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <motion.div
      layout
      className="
        border border-black/10
        rounded-3xl
        overflow-hidden
        bg-white
      "
    >

      {/* QUESTION */}
      <button
        onClick={onClick}
        className="
          w-full
          flex items-center justify-between
          gap-6
          text-left
          px-6 py-6
        "
      >

        <h3 className="text-lg font-medium tracking-tight">
          {item.question}
        </h3>

        <div
          className="
            flex-shrink-0
            w-10 h-10
            rounded-full
            border border-black/10
            flex items-center justify-center
          "
        >
          {isOpen ? (
            <HiMinus className="text-lg" />
          ) : (
            <HiPlus className="text-lg" />
          )}
        </div>

      </button>

      {/* ANSWER */}
      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >

            <div className="px-6 pb-6">

              <p className="text-black/60 leading-8 max-w-2xl">
                {item.answer}
              </p>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.div>
  )
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="bg-white py-32 overflow-hidden text-black">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* TOP AREA */}
        <div className="text-center max-w-3xl mx-auto">

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
            Frequently Asked Questions
          </motion.p>

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
            "
          >
            Answers to Common
            Questions About
            Our Financial Services.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              mt-8
              text-black/60
              leading-8
              text-lg
            "
          >
            Explore frequently asked questions related to
            loans, savings, investment opportunities,
            and financial security.
          </motion.p>

        </div>

        {/* FAQ GRID */}
        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {faqData.map((section, sectionIndex) => (

            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: sectionIndex * 0.1,
              }}
              viewport={{ once: true }}
              className="
                rounded-[32px]
                border border-black/10
                bg-[#fafafa]
                p-6
              "
            >

              {/* CATEGORY */}
              <div
                className="
                  inline-flex
                  px-4 py-2
                  rounded-full
                  bg-black
                  text-white
                  text-sm
                  font-medium
                  mb-8
                "
              >
                {section.category}
              </div>

              {/* QUESTIONS */}
              <div className="space-y-4">

                {section.questions.map((item, itemIndex) => {

                  const uniqueIndex =
                    `${sectionIndex}-${itemIndex}`

                  return (
                    <FAQItem
                      key={uniqueIndex}
                      item={item}
                      isOpen={openIndex === uniqueIndex}
                      onClick={() =>
                        setOpenIndex(
                          openIndex === uniqueIndex
                            ? null
                            : uniqueIndex
                        )
                      }
                    />
                  )
                })}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default FAQ