import React from "react";
import SkillCard from "./skillscard";
import { FaHtml5, FaCss3, FaReact, FaNode, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiNextdotjs,
  SiMongodb,
  SiFlutter,
  SiExpress,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";
const Skills = () => {
  return (
    <section id="skill" className="bg-black font-sora text-white py-[8px]">
      <div className="md:mx-[80px] mx-[16px] my-[16px] md:px-[24px]">
        <div className="text-center text-[28px]">
          My <span className="text-[28px] font-semibold">Skills</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-[16px]">
          <SkillCard icon={<FaHtml5 />} text={"HTML"} />
          <SkillCard icon={<FaCss3 />} text={"CSS"} />
          <SkillCard icon={<IoLogoJavascript />} text={"Javascript"} />
          <SkillCard icon={<FaReact />} text={"React"} />
          <SkillCard icon={<SiNextdotjs />} text={"NextJs"} />
          <SkillCard icon={<FaNode />} text={"NodeJs"} />
          <SkillCard icon={<SiExpress />} text={"ExpressJS"} />
          <SkillCard icon={<SiMongodb />} text={"MongoDB"} />
          <SkillCard icon={<SiFlutter />} text={"Flutter"} />
          <SkillCard icon={<FaFigma />} text={"Figma"} />
          <SkillCard icon={<SiAdobephotoshop />} text={"Photoshop"} />
          <SkillCard icon={<SiAdobeillustrator />} text={"Illustrator"} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
