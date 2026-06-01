import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi"
import Logo from "../assets/logo.png"

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About Us", path: "#about" },
    { name: "Loans", path: "#loans" },
    { name: "Savings", path: "#savings" },
    { name: "Electronics", path: "#electronics" },
    { name: "Investment", path: "#investment" },
  ]

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500
        ${
          scrolled
            ? "backdrop-blur-xl bg-white/70 border-b border-black/5 shadow-sm"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link to="/">
            <motion.div
              whileHover={{ opacity: 0.9 }}
              className="flex items-center gap-3"
            >
              <img
                src={Logo}
                alt="Care Credit Logo"
                className="w-25 h-25 object-contain"
              />

              <h1
                className={`
                  text-2xl font-semibold tracking-tight
                  transition-colors duration-500
                  ${scrolled ? "text-black" : "text-white"}
                `}
              >
                Care
                <span className="text-[#C8A44D]">
                  Credit
                </span>
              </h1>
            </motion.div>
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="relative group"
              >
                <a
                  href={link.path}
                  className={`
                    text-[15px] font-medium
                    transition-all duration-300
                    ${
                      scrolled
                        ? "text-black/80 hover:text-black"
                        : "text-white/90 hover:text-white"
                    }
                  `}
                >
                  {link.name}
                </a>

                <span
                  className="
                    absolute left-0 -bottom-2
                    h-[1.5px] w-0
                    bg-[#C8A44D]
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-5">
            

            <motion.a
              href="#footer"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="
                px-5 py-2.5 rounded-full
                bg-[#C8A44D]
                text-black
                font-medium
                text-sm
                transition-all duration-300
                hover:opacity-90
              "
            >
              Contact Us
            </motion.a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`
              lg:hidden text-3xl transition-colors duration-300
              ${scrolled ? "text-black" : "text-white"}
            `}
          >
            {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="
              lg:hidden
              backdrop-blur-2xl
              bg-white/90
              border-t border-black/5
            "
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="
                    text-black/80
                    text-lg
                    font-medium
                    border-b border-black/5
                    pb-4
                  "
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#footer"
                onClick={() => setMenuOpen(false)}
                className="
                  mt-2
                  bg-[#C8A44D]
                  text-black
                  py-3
                  rounded-full
                  font-medium
                  text-center
                "
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default NavBar