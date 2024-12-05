"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

// import { HERO } from "../../assets/assets";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(4, 9);
  const thirdRow = products.slice(9, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  console.log(products)

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 500]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -500]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  console.log(products)

  return (
    <div
      ref={ref}
      className="h-[320vh] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      {/* <div className="absolute inset-0 z-0 w-full h-full " >
        <img src={HERO} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute z-0 inset-0 bg-black/80">
      </div> */}
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex gap-x-20 flex-row-reverse mb-20 cursor-pointer">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex gap-x-20 -ml-40 flex-row mb-20 cursor-pointer">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex gap-x-20 flex-row-reverse cursor-pointer">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative  mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl font-extrabold md:text-5xl  ">
        Beauty and Excellence <br/> of Our Proud Creations
      </h1>
      <p className="max-w-2xl text-[14px] w-1/2 mt-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus doloremque eum laboriosam, distinctio quibusdam perspiciatis. Fuga quisquam illum nesciunt dolore, aperiam optio quod quis aspernatur!
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.thumbnail}
      className="group/product h-[20rem] w-[20rem] relative flex-shrink-0"
    >
    <img
          src={product.thumbnail}
          className="object-cover object-left-top absolute h-full w-full inset-0"
          key={product.thumbnail}
        />
      <div className="absolute inset-0 h-full w-full opacity-0 transition-all duration-500 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      {/* <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2> */}
    </motion.div>
  );
};
