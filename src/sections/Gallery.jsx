import { motion } from "framer-motion"

const phones = [
  "https://news.samsung.com/my/photo-capturing-a-new-era-of-galaxy-ai-snapshots-of-galaxy-unpacked-2024", // Samsung Galaxy S24
  "https://photogallery.indiatimes.com/gadgets/phones/tecno-phantom-x2-smartphone-launched-in-india/photoarticleshow/96704830.cms", // Tecno Phantom X2
  "https://id.infinixmobility.com/zero-30-5g", // Infinix Zero 30
  "https://www.gizbot.com/latest-mobiles/itel-p55-10402/", // Itel P55
  "https://www.sony.com.tw/en/bravia/transcript/x90k-official-video-text-transcript-2", // Sony Bravia XR
]

const electronics = [
  "https://www.lg.com/sg/tvs-soundbars/oled/oledsbar-pto1/", // LG OLED evo
  "https://qrcode.hisense.com/appliance/20009976?lang=en", // Hisense U8 TV
  "https://www.thermocool.com.ng/product/refrigerators/side-by-side/side-by-side-refrigerator-hrf-540wbs/", // Thermocool Refrigerator
]

const appliances = [
  "https://www.thermocool.com.ng/product/refrigerators/side-by-side/side-by-side-refrigerator-hrf-540wbs/", // Thermocool Refrigerator
  "https://www.lg.com/sg/tvs-soundbars/oled/oledsbar-pto1/", // LG OLED evo
  "https://qrcode.hisense.com/appliance/20009976?lang=en", // Hisense U8 TV
  "https://news.samsung.com/my/photo-capturing-a-new-era-of-galaxy-ai-snapshots-of-galaxy-unpacked-2024", // Samsung Galaxy S24
  "https://photogallery.indiatimes.com/gadgets/phones/tecno-phantom-x2-smartphone-launched-in-india/photoarticleshow/96704830.cms", // Tecno Phantom X2
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
