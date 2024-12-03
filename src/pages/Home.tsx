import React, { useState } from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
// import About from "../components/About"
import Services from "../components/Services"
import Clients from "../components/Clients"
import Portfolio from "../components/Portfolio"
import Footer from "../components/Footer"
// import ManualNews from "../components/ManualNews"
// import Location from "../components/Location"
// import News from "../components/News"
import { servicesData, navLinks, contact, social } from "../data/data"

const Home: React.FC = () => {
  const [servData] = useState(servicesData)
  const [navData] = useState(navLinks)
  const [contactData] = useState(contact)
  const [socialData] = useState(social)
  // const [newsData] = useState(news)
  // console.log(servData)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Services data={servData}/>
      <Clients/>
      <Portfolio data={servData}/>
      {/* <ManualNews data={newsData}/> */}
      {/* <Location/> */}
      {/* <News/> */}
      <Footer navDatas={navData} contactDatas={contactData} socialDatas={socialData}/>
    </>
  )
}

export default Home