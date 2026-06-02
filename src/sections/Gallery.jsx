import { motion } from "framer-motion"
import img1 from "../assets/electronics/#samsung.jpg"
import img2 from "../assets/electronics/541628292709180244.jpg"
import img3 from "../assets/electronics/580471839515466576.jpg"
import img4 from "../assets/electronics/94716398421063417.jpg"
import img5 from "../assets/electronics/Hisense klima EkspertSmart 12 - PROMOTIVNA CIJENA….jpg"
import img6 from "../assets/electronics/Infinix Smart 10 pocket friendly smartphone at….jpg"
import img7 from "../assets/electronics/Iphone 16 Pro Max 2025 _ . . . #iphone #iphone16….jpg"
import img8 from "../assets/electronics/Screen Size   55 Inch     Connectivity   Wi-Fi 6e….jpg"
import img9 from "../assets/electronics/Stay connected with the Tecno POP 10 smartphone….jpg"
import img10 from "../assets/electronics/Tecno Spark 40 Pro+ Unboxing Shows Everything….jpg"
import img11 from "../assets/electronics/Tecno Spark 40___- 128gb and 8gb Ram__- Brand….jpg"
import img12 from "../assets/electronics/The itel S18 series, which comprises itel S18 and….jpg"
import img13 from "../assets/electronics/This item is a Hisense Double Door Refrigerator….jpg"
import img14 from "../assets/electronics/Upgrade your style without spending big! The Tecno….jpg"
import img15 from "../assets/electronics/Watch non-4K content in 4K on big UHD screens to….jpg"
import img16 from "../assets/electronics/📢📢SNOWSEA FREEZER 400L🔥🔥🔥  _FEATURES_ _ 2….jpg"
import img17 from "../assets/electronics/📱 iPhone 16 Plus_ O futuro na palma da sua mão! ✨….jpg"
import img18 from "../assets/electronics/📺 LG SMART TV 55 INCH_💰 Bei_ 1,250,000_=_✅ High….jpg"

const phones = [
  "img1",
  "img2",
  "img3",
  "img4",
  "img5",
]

const electronics = [
   "img6",
  "img7",
  "img8",
  "img9",
  "img10",
]

const appliances = [
   "img11",
  "img12",
  "img13",
  "img14",
  "img15",
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
