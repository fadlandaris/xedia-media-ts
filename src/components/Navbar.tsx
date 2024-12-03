import { useState, useEffect } from "react";
import { navLinks } from "../data/data";
import { LOGO } from "../assets/assets";

const Navbar = () => {
  const [navData] = useState(navLinks);
  const [activeState, setActiveState] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveState(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    navData.forEach((item) => {
      if (item.link) {
        const section = document.getElementById(item.link);
        if (section) {
          observer.observe(section);
        }
      }
    });

    return () => {
      navData.forEach((item) => {
        if (item.link) {
          const section = document.getElementById(item.link);
          if (section) {
            observer.unobserve(section);
          }
        }
      });
    };
  }, [navData]);

  return (
    <nav className=" flex justify-between w-full py-2 md:py-4 px-16 items-center font-bold fixed top-0 z-50 text-[12px]">
      <div className="">
        <img src={LOGO} alt="Logo" className="w-12" />
      </div>

      <div className="hidden md:flex justify-center gap-x-8 uppercase">
        {navData.map((item) => (
          <a key={item.id} href={`#${item.link}`}>
            {item.nav}
            <div className={`bg-white h-[1px] ${activeState === item.link ? 'opacity-100 w-[100%] transition-all duration-500' : 'opacity-0 w-[1%]'}`} />
          </a>
        ))}
      </div>

      <button className="hidden md:flex button-styles group">
        Join Xedia Media
        <div className="div-underline group-hover:opacity-100 group-hover:w-[100%]" />
      </button>

      <div className="md:hidden">
        test
      </div>
    </nav>
  );
};

export default Navbar;
