import React from "react";

const About = () => {
  return (
    <section className="mx-[32px] font-sora my-[16px] md:mx-[80px]" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className=" flex  justify-center rounded-md ">
          <img
            src={"image2.png"}
            alt="sugam gelal"
            className=" w-[325px] items-center rounded-md"
          />
        </div>
        <div>
          <div className="text-[28px] flex items-center gap-2">
            About <span className="font-extrabold text-[28px]">Me</span>
            <div className="border-t-2 border-black w-full "></div>
          </div>
          <div className="text-primary2 items-center">
            Hello there! I'm Sugam Gelal, and my journey in the realm of
            technology began at a young age, where my curiosity led me to
            explore the inner workings of computers and software. From tinkering
            with basic programming languages to diving deep into complex
            algorithms, my passion for coding has only grown stronger over the
            years. <br />
            <br />
            For the past one and a half years, I've been particularly immersed
            in the fascinating world of React programming. Harnessing its power
            to build dynamic and interactive user interfaces, I've delved into
            crafting efficient and elegant solutions for various projects. My
            experience with React has not only honed my technical skills but has
            also fueled my enthusiasm for creating seamless digital experiences.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
