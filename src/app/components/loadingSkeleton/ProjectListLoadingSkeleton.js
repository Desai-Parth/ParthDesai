import React from "react";
import { Skeleton } from "antd";

const ProjectListLoadingSkeleton = () => {
  return (
    <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
      {[1, 2, 3].map((_, index) => (
        <li
          key={index}
          className="my-8 first:mt-0 last:mb-0 w-[80%] mx-auto md:w-[100%]"
        >
          <Skeleton active title={{ width: "60%" }} paragraph={{ rows: 4 }} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectListLoadingSkeleton;
