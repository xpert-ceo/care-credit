import { motion } from "framer-motion"

const phones = [
  "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c", // Samsung Galaxy S24 (modern phone)
  "https://images.unsplash.com/photo-1631652745884-6c7e3b5f8f8a", // Tecno Phantom X2 (gold)
  "https://images.unsplash.com/photo-1627485937982-65db6d6f8d5a", // Infinix Zero 30 (blue)
  "https://images.unsplash.com/photo-1616348436168-de43ad0db179", // Itel P55 (black)
  "https://images.unsplash.com/photo-1598327105666-5b89351aff97", // Generic premium phone (alternative)
]

const electronics = [
  "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1", // Sony Bravia 4K TV
  "https://images.unsplash.com/photo-1593784991095-a205069470b6", // LG OLED TV
  "https://images.unsplash.com/photo-1571415060716-baff5f717c37", // Hisense ULED TV
  "https://images.unsplash.com/photo-1556911220-bff31c812dba", // Sony WH-1000XM5 headphones
  "https://images.unsplash.com/photo-1541807084-5c52b6b3adef", // Modern home entertainment setup
]

const appliances = [
  "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30", // Thermocool-style double-door fridge
  "https://images.unsplash.com/photo-1565538810643-b5bdb714032a", // Modern washing machine
  "https://images.unsplash.com/photo-1586201375761-83865001e31c", // Microwave oven
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136", // Air conditioner
  "https://images.unsplash.com/photo-1581092921461-eab62e97a780", // Chest freezer (Thermocool style)
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
