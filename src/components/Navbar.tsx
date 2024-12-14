import { useState, useEffect } from "react";
import { navLinks } from "../data/data";
import { LOGO } from "../assets/assets";

const Navbar = () => {
  const [navData] = useState(navLinks);
  const [activeState, setActiveState] = useState("");
  const [isOpen, setIsOpen] = useState(false)

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
    <nav className="px-10 flex justify-between right-0 left-0 py-4 md:px-16 items-center font-bold fixed top-0 z-50 text-[12px]   bg-gradient-to-b from-black/40 via-black/30 to-none backdrop-blur-3xl  ">
      <div className=" md:w-[7rem]">
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

      <button onClick={()=> setIsOpen(!isOpen)} className="md:hidden opacity-70">
        <div className={`h-[1.5px] w-6 bg-white transition-all duration-500 ${isOpen ? 'rotate-45 translate-y-1' : ''}`}/>
        <div className={`h-[1.5px] w-5 bg-white my-1 transition-all duration-500 ${isOpen ? 'opacity-0' : ''}`}/>
        <div className={`h-[1.5px] w-6 bg-white transition-all duration-500 ${isOpen ? '-rotate-45 -translate-y-1.5  ' : ''}`}/>
      </button>

      {isOpen && (
        <div data-aos="fade-down" data-aos-duration="500" className="md:hidden absolute right-0 top-16 w-full px-10 py-8 bg-black backdrop-blur-lg flex flex-col gap-y-8 z-40">
          {navData.map((item) => (
            <a key={item.id} href={`#${item.link}`}>
              {item.nav}
              <div className={`bg-white h-[1px] ${activeState === item.link ? 'opacity-100 w-[10%] transition-all duration-500' : 'opacity-0 w-[1%]'}`} />
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
