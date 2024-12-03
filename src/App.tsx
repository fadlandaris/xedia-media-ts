import React from "react";
import { Routes, Route } from "react-router-dom";
import { useScroll, motion } from "framer-motion";
import Home from "./pages/Home";
import useHeavyScroll from "./useHeavyScroll"; 

const App: React.FC = () => {
  useHeavyScroll(); 

  const { scrollYProgress } = useScroll();

  return (
    <main>
      <motion.div 
        style={{ 
          position: 'fixed', 
          top: 0, 
          right: 0, 
          height: '1.5px', 
          width: '100%', 
          background: `linear-gradient(to right, #563996, #5991a3, #9e1653, #952819)`, 
          // linear-gradient(to right, #563996, #5991a3, #9e1653, #952819)
          scaleX: scrollYProgress,
          zIndex: 50 // Set z-index to 50
        }} 
      />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes> 
    </main>
  );
};

export default App;