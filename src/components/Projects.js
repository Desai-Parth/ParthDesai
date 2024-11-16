import React, { useEffect, useState } from "react";
import { Skeleton } from "antd";
import { motion } from "framer-motion";
import axiosInstance from "@/utils/axiosInstance";
import { ManOutlined } from "@ant-design/icons";

const Details = ({ title, position, te, desc, project_link }) => {
  const descriptionPoints = desc
    .split(";")
    .filter((point) => point.trim() !== "");

  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between md:w-[100%]">
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-primary dark:text-primaryDark mb-4 md:mb-2 xs:mb-1">
          {title}
          {project_link && (
            <a
              href={project_link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-primary hover:text-dark/75 dark:text-primaryDark dark:hover:text-light/75 transition-transform transform hover:scale-110"
              title="View Project"
            >
              <ManOutlined fontSize="medium" />
            </a>
          )}
        </h3>
        <div className="mb-4 md:mb-2 xs:mb-1">
          <div>
            <span className="capitalize font-bold text-dark/75 dark:text-light/75 xs:text-sm">
              Position: {position}
            </span>
          </div>
          <div>
            <span className="capitalize font-bold text-dark/75 dark:text-light/75 xs:text-sm">
              Technical Environment: {te}
            </span>
          </div>
        </div>
        <div className="mb-4 md:mb-2 xs:mb-1">
          <div>
            <span className="capitalize font-bold text-dark/75 dark:text-light/75 xs:text-sm">
              Project Description:
            </span>
          </div>
          <ul className="list-disc list-inside font-medium w-full md:text-sm pl-8 md:pl-4 xs:pl-2">
            {descriptionPoints.map((point, index) => (
              <li key={index}>{point.trim()}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </li>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch project data from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axiosInstance.get("/api/projects");
        // Introduce a delay
        setTimeout(() => {
          setProjects(response.projects); // Assuming the response contains a "projects" array
          setLoading(false); // Stop loading after delay
        }, 2000); // 3-second delay
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="w-[75%] m-auto relative lg:w-[90%] md:w-full">
      <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
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
          // Render project details
          projects.map((project) => (
            <Details
              key={project._id}
              title={project.title}
              position={project.position}
              te={project.technical_environment}
              desc={project.description}
              project_link={project.project_link}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default Projects;
