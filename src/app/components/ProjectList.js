"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProjectDetails from "./ProjectDetails";
import { fetchProjects } from "../store/slice/projectsSlice";
import ProjectListLoadingSkeleton from "./loadingSkeleton/ProjectListLoadingSkeleton";

const ProjectList = () => {
  const dispatch = useDispatch();
  const { projects, loading } = useSelector((state) => state.projects);

  useEffect(() => {
    if (!projects.length) {
      dispatch(fetchProjects());
    }
  }, [dispatch, projects]);

  if (loading) {
    return <ProjectListLoadingSkeleton />;
  }

  return (
    <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
      {projects.map((project) => (
        <ProjectDetails
          key={project._id}
          title={project.title}
          position={project.position}
          te={project.technical_environment}
          desc={project.description}
          project_link={project.project_link}
        />
      ))}
    </ul>
  );
};

export default ProjectList;
