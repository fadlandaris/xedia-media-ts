// src/useHeavyScroll.ts
import { useEffect } from 'react';

const useHeavyScroll = () => {
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault(); 

      const scrollAmount = event.deltaY > 0 ? 200 : -200; 
      window.scrollBy({
        top: scrollAmount,
        behavior: 'smooth', 
      });
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);
};

export default useHeavyScroll;