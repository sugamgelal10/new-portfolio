import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className=" flex mx-[16px] font-sora center justify-center md:mx-[80px]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <img
          src={"hero2.png"}
          alt="sugam vector"
          className="order-1 md:order-2"
        />
        <div className="text-[28px] order-2 md:order-1 items-center md:mt-[24px]">
          Hello I am{" "}
          <span className="font-extrabold text-[28px]">Sugam Gelal</span>
          <br />
          <span className="font-extrabold"> Frontend</span>{" "}
          <span className="font-extrabold font-mono text-white border-black font-outline-1">
            Developer <br />
          </span>
          Based in <span className="font-extrabold">Nepal.</span>
          <div className="text-primary2 text-[12px]">
            Hello there! I'm Sugam Gelal, and my journey in the realm of
            technology began at a young age, where my curiosity led me to
            explore the inner workings of computers and software.As I continue
            my studies in Computer Engineering at Tribhuvan University, I'm
            eager to merge my academic knowledge with practical insights gained
            from real-world programming challenges. With a steadfast commitment
            to innovation and continuous learning, I'm excited to see where this
            journey in technology takes me next.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
