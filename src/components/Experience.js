import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import axiosInstance from "@/utils/axiosInstance";
import { Skeleton } from "antd";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto 
    flex flex-col items-center justify-between md:w-[80%] "
    >
      <LiIcon reference={ref} />
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
  const [experiences, setExperiences] = useState([
    {
      _id: "6738bce904250012f6e38bb8",
      position: "Full stack trainee",
      company: "Staunchsys",
      companyLink: "https://www.staunchsys.com/",
      time: "Jan 2023 - July 2023",
      address: "410-413, Aaron Spectra, Ahmedabad, Gujarat 380054",
      work: "As a full stack trainee at Staunchsys, I am responsible for developing and maintaining both the front-end and back-end aspects of our web applications. I work with various technologies and programming languages to ensure seamless integration and deliver user-friendly and efficient solutions to our clients.",
      __v: 0,
    },
    {
      _id: "6738bd1404250012f6e38bba",
      position: "Full stack devloper",
      company: "Staunchsys",
      companyLink: "https://www.staunchsys.com/",
      time: "July 2023 - Present",
      address: "410-413, Aaron Spectra, Ahmedabad, Gujarat 380054",
      work: "In my role as a full stack developer at Staunchsys, I handle the creation and upkeep of both the front-end and back-end components in our web applications. I utilize a diverse set of technologies and programming languages to guarantee smooth connections and provide clients with user-friendly, effective solutions.",
      __v: 0,
    },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axiosInstance.get("/api/experiences");
        setTimeout(() => {
          setExperiences(response.experiences);
          setLoading(false);
        }, 2000);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);
  return (
    <>
      <div className="my-64 md:my-32 xs:my-16">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>
        <div ref={ref} className="w-[75%] m-auto relative lg:w-[90%] md:w-full">
          {loading ? (
            // Show Skeleton Loader
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
    </>
  );
};

export default Experience;
