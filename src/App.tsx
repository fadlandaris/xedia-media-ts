import React, {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import { useScroll, motion } from "framer-motion";
import Home from "./pages/Home";
import { WhatsappLogo } from "phosphor-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    AOS.init({
      duration: 1500, 
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);

  return (
    <main>
      <a href="https://wa.me/6282328713200" target="_blank" className="fixed right-4 bottom-4 text-green-500 text-3xl animate-bounce">
        <WhatsappLogo />
      </a>
      <motion.div 
        style={{ position: 'fixed', top: 0, right: 0, height: '1.5px', width: '100%', background: `linear-gradient(to right, #563996, #5991a3, #9e1653, #952819)`, scaleX: scrollYProgress,zIndex: 50 }} />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes> 
    </main>
  );
};

export default App;