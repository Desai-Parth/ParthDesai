import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axiosInstance from "@/utils/axiosInstance";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full 
        font-semibold bg-dark text-light py-3 px-6 shadow-dark 
        cursor-pointer absolute dark:bg-light dark:text-dark dark:shadow-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const [skills, setSkills] = useState([
    {
      _id: "673889af92401322de975659",
      name: "HTML",
      x: "-25vw",
      y: "2vw",
      __v: 0,
    },
    {
      _id: "673889c992401322de97565b",
      name: "CSS",
      x: "-5vw",
      y: "-11vw",
      __v: 0,
    },
    {
      _id: "673889d392401322de97565d",
      name: "JavaScript",
      x: "20vw",
      y: "6vw",
      __v: 0,
    },
    {
      _id: "673889dd92401322de97565f",
      name: "ReactJS",
      x: "0vw",
      y: "12vw",
      __v: 0,
    },
    {
      _id: "673889e692401322de975661",
      name: "NextJs",
      x: "-22vw",
      y: "-20vw",
      __v: 0,
    },
    {
      _id: "673889ee92401322de975663",
      name: "MongoDB",
      x: "15vw",
      y: "-12vw",
      __v: 0,
    },
    {
      _id: "673889f692401322de975665",
      name: "MySQL",
      x: "30vw",
      y: "-20vw",
      __v: 0,
    },
    {
      _id: "673889ff92401322de975667",
      name: "ExpressJS",
      x: "32vw",
      y: "-5vw",
      __v: 0,
    },
    {
      _id: "67388a0992401322de975669",
      name: "NodeJS",
      x: "0vw",
      y: "-20vw",
      __v: 0,
    },
    {
      _id: "67388a0f92401322de97566b",
      name: "Github",
      x: "-36vw",
      y: "-5vw",
      __v: 0,
    },
    {
      _id: "67388a1692401322de97566d",
      name: "Bootstrap",
      x: "-26vw",
      y: "20vw",
      __v: 0,
    },
    {
      _id: "67388a1c92401322de97566f",
      name: "Tailwind CSS",
      x: "18vw",
      y: "18vw",
      __v: 0,
    },
    {
      _id: "67388a2492401322de975671",
      name: "Nest Js",
      x: "-20vw",
      y: "-10vw",
      __v: 0,
    },
    {
      _id: "67388a2d92401322de975673",
      name: "HapiJs",
      x: "32vw",
      y: "12vw",
      __v: 0,
    },
    {
      _id: "67388a3692401322de975675",
      name: "TimeScale DB",
      x: "07vw",
      y: "24vw",
      __v: 0,
    },
    {
      _id: "67388a4292401322de975677",
      name: "Apache Tomcat",
      x: "-35vw",
      y: "9vw",
      __v: 0,
    },
    {
      _id: "67388a4e92401322de975679",
      name: "MUI / Ant Design",
      x: "-15vw",
      y: "15vw",
      __v: 0,
    },
  ]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axiosInstance.get("/api/skills");
        setSkills(response.skills);
      } catch (error) {
      }
    };

    fetchSkills();
  }, []);
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl xs:text-4xl md:mt-32 xs:mt-16">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[30vh] 
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
      >
        <motion.div
          className="flex items-center justify-center rounded-full 
        font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer
        dark:bg-light dark:text-dark dark:shadow-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        {skills.map((skill) => (
          <Skill key={skill.name} name={skill.name} x={skill.x} y={skill.y} />
        ))}
      </div>
    </>
  );
};
export default Skills;
