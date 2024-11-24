"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "antd";
import { fetchExperiences } from "../store/slice/experienceSlice";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto 
    flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon ref={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const dispatch = useDispatch();
  const { experiences, loading } = useSelector((state) => state.experience);

  useEffect(() => {
    dispatch(fetchExperiences());
  }, [dispatch]);

  return (
    <div className="my-64 md:my-32 xs:my-16">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] m-auto relative lg:w-[90%] md:w-full">
        {loading ? (
          <>
            {[1, 2, 3].map((_, index) => (
              <li
                key={index}
                className="my-8 first:mt-0 last:mb-0 w-[80%] mx-auto md:w-[100%]"
              >
                <Skeleton
                  active
                  title={{ width: "60%" }}
                  paragraph={{ rows: 4 }}
                />
              </li>
            ))}
          </>
        ) : (
          <>
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
            />
            <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
              {experiences.map((experience) => (
                <Details
                  key={experience._id}
                  position={experience.position}
                  companyLink={experience.companyLink}
                  company={experience.company}
                  time={experience.time}
                  address={experience.address}
                  work={experience.work}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Experience;
