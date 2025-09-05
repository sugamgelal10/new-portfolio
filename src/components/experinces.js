import React from "react";
import Expcard from "./expcard";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";

const Experiences = () => {
  return (
    <div className=" font-sora bg-black text-white">
      <div className="md:mx-[80px] p-2">
        <div className="text-center text-[28px]">
          My <span className="font-extrabold">Experiences</span>
        </div>
        <div className="my-[16px]  md:px-[24px] md:py-[32px] space-y-5 ">
          <Expcard
            icon={<FcGoogle />}
            title={"Senior Google Developer"}
            joined={"2020"}
            till={"present"}
            desc={`As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.`}
          />
          <Expcard
            icon={<FaLinkedin />}
            title={"Senior Linkedin Developer"}
            joined={"2018"}
            till={"2020"}
            desc={`As a Senior Software Engineer at Linkedin, I played a pivotal role in developing innovative solutions for linkedin's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.`}
          />
          <Expcard
            icon={<FcGoogle />}
            title={"Senior Google Developer"}
            joined={"2020"}
            till={"present"}
            desc={`As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.`}
          />
          <Expcard
            icon={<FcGoogle />}
            title={"Senior Google Developer"}
            joined={"2020"}
            till={"present"}
            desc={`As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.`}
          />
          <Expcard
            icon={<FcGoogle />}
            title={"Senior Google Developer"}
            joined={"2020"}
            till={"present"}
            desc={`As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.`}
          />

        </div>
      </div>
    </div>
  );
};

export default Experiences;
