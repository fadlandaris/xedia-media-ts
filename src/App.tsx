import React, {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { WhatsappLogo } from "phosphor-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import PortfolioItem from "./pages/PortfolioItem";

const App: React.FC = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500, 
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);

  return (
    <main>
      <a href="https://wa.me/6282328713200" target="_blank" className="fixed z-50 right-4 bottom-4 text-green-500 text-7xl animate-bounce">
        <WhatsappLogo />
      </a>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:link' element={<PortfolioItem />} />
      </Routes> 
    </main>
  );
};

export default App;