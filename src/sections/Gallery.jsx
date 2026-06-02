import { motion } from "framer-motion"

const phones = [
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
  "https://images.unsplash.com/photo-1580910051074-3eb694886505",
  "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb",
  "https://images.unsplash.com/photo-1510557880182-3c7c5f0d6e1f",
]

const electronics = [
  "https://images.unsplash.com/photo-1541807084-5c52b6b3adef",
  "https://images.unsplash.com/photo-1526738549149-8e07eca6c147",
  "https://images.unsplash.com/photo-1588508065123-287b28e013da",
  "https://images.unsplash.com/photo-1571415060716-baff5f717c37",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
]

const appliances = [
  "https://images.unsplash.com/photo-1586201375761-83865001e31c",
  "https://images.unsplash.com/photo-1556911220-bff31c812dba",
  "https://images.unsplash.com/photo-1565538810643-b5bdb714032a",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136",
  "https://images.unsplash.com/photo-1581092921461-eab62e97a780",
]

const Row = ({ images, reverse = false }) => (
  <div className="overflow-hidden py-4">
    <motion.div
      className="flex gap-6 w-max"
      animate={{
        x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {[...images, ...images].map((img, index) => (
        <div
          key={index}
          className="
            w-[300px]
            h-[220px]
            rounded-3xl
            overflow-hidden
            flex-shrink-0
            border border-white/10
          "
        >
          <img
            src={`${img}?auto=format&fit=crop&w=800&q=80`}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </motion.div>
  </div>
)

const Gallery = () => {
  return (
    <section className="bg-black py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-16">
        <p className="text-[#C8A44D] uppercase tracking-[0.25em] text-sm">
          Electronics Gallery
        </p>

        <h2 className="text-4xl md:text-6xl font-semibold mt-4">
          Explore Phones & Electronics
        </h2>

        <p className="text-white/60 mt-6 max-w-2xl">
          Browse a collection of smartphones, home appliances,
          electronics and technology products available through
          our financing solutions.
        </p>
      </div>

      <Row images={phones} />
      <Row images={electronics} reverse />
      <Row images={appliances} />
    </section>
  )
}

export default Gallery
