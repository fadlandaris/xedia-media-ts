/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { servicesData } from "../data/data"; 
import { useParams } from "react-router-dom";
import { HeroParallax } from "../components/ui/hero-parallax";

interface PortfolioItemType {
  title: string;
  thumbnail: string;
}

const PortfolioItem: React.FC = () => {
  const { link } = useParams<{ link: string }>(); 
  const [portfolio, setPortfolio] = useState<PortfolioItemType[]>([]); 

  const fetchPortData = () => {
    const service = servicesData.find(item => item.link === link); 
    if (service) {
      setPortfolio(service.portfolio);
    }
  };

  useEffect(() => {
    fetchPortData();
  }, [link]);

  return (
    <div>
      <HeroParallax products={portfolio}/>
    </div>
  );
};

export default PortfolioItem;