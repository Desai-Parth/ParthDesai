"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { fetchSkills } from "../store/slice/profileSlice";
import { Skeleton, Spin } from "antd";

const Skill = ({ name, x, y }) => (
  <motion.div
    className="flex items-center justify-center rounded-full 
      font-semibold bg-dark text-light py-3 px-6 shadow-dark 
      cursor-pointer absolute dark:bg-light dark:text-dark dark:shadow-light"
    whileHover={{ scale: 1.05 }}
    initial={{ x: 0, y: 0 }}
    whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
    viewport={{ once: true }}
  >
    {name}
  </motion.div>
);

const Skills = () => {
  const dispatch = useDispatch();
  const { skills, skillsLoading } = useSelector((state) => state.profile);
  const [percent, setPercent] = React.useState(-50);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const timerRef = React.useRef();

  React.useEffect(() => {
    if (isInView && percent !== 150) {
      timerRef.current = setTimeout(() => {
        setPercent((v) => {
          return v + 5;
        });
      }, 100);
    }
    return () => clearTimeout(timerRef.current);
  }, [isInView, percent]);

  const mergedPercent = skillsLoading ? "auto" : percent;

  React.useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl xs:text-4xl md:mt-32 xs:mt-16">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full 
        font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer
        dark:bg-light dark:text-dark dark:shadow-light"
          whileHover={{ scale: 1.05 }}
          ref={ref}
        >
          Web
        </motion.div>
        {mergedPercent !== 150 ? (
          <Spin
            // percent="auto"
            size="large"
            spinning={mergedPercent !== 150}
            percent={mergedPercent}
            className="flex items-center justify-center rounded-full cursor-pointer absolute spin-custom"
          />
        ) : (
          skills.map((skill) => (
            <Skill key={skill.name} name={skill.name} x={skill.x} y={skill.y} />
          ))
        )}
      </div>
    </>
  );
};

export default Skills;
