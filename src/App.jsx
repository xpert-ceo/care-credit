import { StrictMode } from 'react'
import NavBar from "./sections/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import WhyUs from './sections/WhyUs'
import Vision from './sections/Vision'
import FAQ from './sections/Faq'
import Trust from './sections/Trust'
import CTA from './sections/Cta'
import Footer from './sections/Footer'
import Loan from './sections/Loan'
import Savings from './sections/Savings'
import Electronics from './sections/Electronics'
import Investment from './sections/Investment'

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <NavBar />

      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="loans">
        <Loan />
      </div>
      
      <div id="savings">
        <Savings />
      </div>
      
<div id="investment">
        <Investment />
      </div>

      <div id="electronics">
        <Electronics />
      </div>
  
      <WhyUs />
      <Vision />
      <FAQ />
      <Trust />
      <CTA />

      <div id="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App