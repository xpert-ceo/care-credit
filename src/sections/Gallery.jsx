import { motion } from "framer-motion";
import img1 from "../assets/electronics/img1.jpg"
import img2 from "../assets/electronics/img2.jpg";
import img3 from "../assets/electronics/img3.jpg";
import img4 from "../assets/electronics/img4.jpg";
import img5 from "../assets/electronics/img5.jpg";
import img6 from "../assets/electronics/img6.jpg";
import img7 from "../assets/electronics/img7.jpg";
import img8 from "../assets/electronics/img9.jpg";
import img9 from "../assets/electronics/img10.jpg";
import img10 from "../assets/electronics/img12.jpg";
import img11 from "../assets/electronics/img13.jpg";
import img12 from "../assets/electronics/img14.jpg";
import img13 from "../assets/electronics/img15.jpg";
import img14 from "../assets/electronics/img16.jpg";
import img15 from "../assets/electronics/img17.jpg";
import img16 from "../assets/electronics/img8.jpg";


// Use the actual imported variables, not strings
const phones = [img1, img2, img3, img4, img5];
const electronics = [img6, img7, img8, img9, img10];
const appliances = [img11, img12, img13, img14, img15, img16,];

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
            src={img}  // Directly use the imported image
            alt="Product"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </motion.div>
  </div>
);

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
  );
};

export default Gallery;