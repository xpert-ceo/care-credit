import { Link } from "react-router-dom"
import {
  FaWhatsapp,
  FaPhone,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6"

import Logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">

      {/* TOP BORDER */}
      <div className="border-t border-white/10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="grid lg:grid-cols-4 gap-14">

          {/* BRAND AREA */}
          <div>

            {/* LOGO */}
            <div className="flex items-center gap-4">

              <img
                src={Logo}
                alt="Care Credit Logo"
                className="
                  w-12 h-12
                  rounded-full
                  object-cover
                "
              />

              <div>

                <h2 className="text-2xl font-semibold tracking-tight">
                  Care
                  <span className="text-[#C8A44D]">
                    Credit
                  </span>
                </h2>

                <p className="text-white/40 text-sm mt-1">
                  Financial Solutions
                </p>

              </div>

            </div>

            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                text-white/50
                leading-7
                max-w-sm
              "
            >
              Secure loans, savings, and investment
              solutions designed to support individuals
              and businesses through trusted modern finance.
            </p>

          </div>

          {/* SERVICES */}
          <div>

            <h3 className="text-lg font-semibold">
              Services
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-white/60">

              <a
                href="#loans"
                className="hover:text-white transition"
              >
                Loans
              </a>

              <a
                href="#savings"
                className="hover:text-white transition"
              >
                Savings
              </a>

              <a
                href="#investment"
                className="hover:text-white transition"
              >
                Investment
              </a>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-lg font-semibold">
              Contact
            </h3>

            <div className="mt-6 flex flex-col gap-5">

              {/* PHONE */}
              <a
                href="tel:+2348135281122"
                className="
                  flex items-center gap-3
                  text-white/60
                  hover:text-white
                  transition
                "
              >
                <FaPhone />
                +234 813 528 1122
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/2348135281122"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-3
                  text-white/60
                  hover:text-white
                  transition
                "
              >
                <FaWhatsapp />
                WhatsApp Support
              </a>

            </div>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 mt-10">

              <a
                href="/"
                className="
                  w-11 h-11
                  rounded-full
                  border border-white/10
                  flex items-center justify-center
                  text-white/60
                  hover:text-white
                  hover:border-white/20
                  transition
                "
              >
                <FaFacebookF />
              </a>

              <a
                href="/"
                className="
                  w-11 h-11
                  rounded-full
                  border border-white/10
                  flex items-center justify-center
                  text-white/60
                  hover:text-white
                  hover:border-white/20
                  transition
                "
              >
                <FaInstagram />
              </a>

            </div>

          </div>

          {/* NEWSLETTER */}
          <div>

            <h3 className="text-lg font-semibold">
              Subscribe To Our News
            </h3>

            <p className="mt-5 text-white/50 leading-7">
              Stay updated with financial insights,
              new services, and future fintech updates.
            </p>

            {/* INPUT */}
            <div className="mt-8 flex flex-col gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="
                  h-14
                  px-5
                  rounded-full
                  bg-white/[0.04]
                  border border-white/10
                  outline-none
                  text-white
                  placeholder:text-white/30
                "
              />

              <button
                className="
                  h-14
                  rounded-full
                  bg-[#C8A44D]
                  text-black
                  font-medium
                  hover:opacity-90
                  transition
                "
              >
                Subscribe
              </button>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div
          className="
            mt-20
            pt-8
            border-t border-white/10
            flex flex-col lg:flex-row
            items-center justify-between
            gap-5
          "
        >

          <p className="text-white/40 text-sm">
            © 2026 Care Credit Limited. All rights reserved.
          </p>



        </div>

      </div>

    </footer>
  )
}

export default Footer