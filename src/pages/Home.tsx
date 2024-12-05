import React, { useState } from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import { useScroll, motion } from "framer-motion";
import Services from "../components/Services"
import Clients from "../components/Clients"
import Portfolio from "../components/Portfolio"
import Footer from "../components/Footer"
import { servicesData, navLinks, contact, social } from "../data/data"

const Home: React.FC = () => {
  const [servData] = useState(servicesData)
  const [navData] = useState(navLinks)
  const [contactData] = useState(contact)
  const [socialData] = useState(social)
  const { scrollYProgress } = useScroll();

  return (
    <>
     <motion.div 
        style={{ position: 'fixed', top: 0, right: 0, height: '1.5px', width: '100%', background: `linear-gradient(to right, #563996, #5991a3, #9e1653, #952819)`, scaleX: scrollYProgress,zIndex: 50 }} />
      <Navbar/>
      <Hero/>
      <Services data={servData}/>
      <Clients/>
      <Portfolio data={servData}/>
      <Footer navDatas={navData} contactDatas={contactData} socialDatas={socialData}/>
    </>
  )
}

export default Home