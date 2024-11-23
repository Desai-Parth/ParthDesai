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
  const [projects, setProjects] = useState([
    {
      _id: "67386b819d549064862ec915",
      title: "Food Order Application, Ahmedabad, India",
      position: "Jr. Consultant",
      technical_environment: "Node.js, Express.js, MongoDB",
      company_link: "https://www.staunchsys.com/",
      project_number: 1,
      description:
        "Developed a food ordering application using Node.js, Express.js, and MongoDB, catering to company employees. Implemented features for pre-ordering lunch with Jain and regular options from selected providers.;Restricted access timelines: Employees can add or remove food items until 8 PM the day before, while admin privileges extend until 8 AM on the current day. Admins can track all orders and add providers, while employees can only view their own orders.;Automated email notifications streamline the process: Providers receive order counts and types at 8 PM the day before, and confirmation emails are dispatched at 8 AM on the delivery day, ensuring timely communication and efficient service.",
      createdAt: "2024-11-16T09:53:05.964Z",
      updatedAt: "2024-11-16T09:53:05.964Z",
      __v: 0,
    },
    {
      _id: "67387630ca8811efdc1ccfc3",
      title: "Ownerscope, Hempstead, NY, USA",
      position: "Jr. Consultant",
      technical_environment: "ReactJs, Material UI",
      company_link: "https://www.staunchsys.com/",
      project_number: 2,
      description:
        "Contributed to updating UI changes and implementing new functionalities in an existing project.;Project focused on Ownerscope, serving as an ice-breaker to facilitate comfortable discussions among friends and relatives about property ownership goals.;Recognized the significance of home ownership discussions within social circles and aimed to enhance user experience.",
      __v: 0,
      project_link: "https://www.ownerscope.com/",
    },
    {
      _id: "6738764eca8811efdc1ccfc5",
      title: "The Lux Trader (Trading Platform), UK",
      position: "Jr. Consultant",
      technical_environment:
        "NestJs, SQL, ReactJs, MT5 (MetaTrader 5), TradingView charting library, Apache Tomcat",
      company_link: "https://www.staunchsys.com/",
      project_number: 3,
      description:
        "Contributed as a full-stack developer, primarily focusing on backend development using Nest.js with SQL and TypeORM. Key responsibilities included managing symbol (stock) order placement, execution, and position creation and closure functionalities crucial for trading operations. Integrated with MT5 (MetaTrader 5) for seamless access to trading functionalities.;Implemented sockets and APIs to facilitate real-time updates on executions and other trading activities.;Developed the front end using React.js and seamlessly integrated the TradingView charting library for efficient trading activities.;Established dedicated servers in Nest.js to handle historical charting data and deliver live, current data using socket and API implementations.;Successfully managed various asset classes such as forex, indices, commodities, stocks, cryptocurrencies, and futures.",
      __v: 0,
    },
    {
      _id: "6738766cca8811efdc1ccfc7",
      title: "Lux Broker Firm Dashboard, UK",
      position: "Jr. Consultant",
      technical_environment: "ReactJs, Material UI",
      company_link: "https://www.staunchsys.com/",
      project_number: 4,
      description:
        "Implemented a dashboard for a broker firm, designed to manage trading accounts with various functionalities, contributing as a Frontend Developer.;Developed a platform to manage trading accounts, facilitate document verification, enable fund deposits and withdrawals, and track trading records, with user and admin dashboard panels, ensuring role-based access control and providing customized views and functionalities for each user type based on their role and permissions.;Implemented various account types, including demo, live, and tournament accounts, each with distinct functionalities reflecting their behaviors.;Leveraged React.js and Material UI to ensure an intuitive, user-friendly interface, prioritizing ease of navigation and efficient account management.",
      __v: 0,
    },
    {
      _id: "6738767cca8811efdc1ccfc9",
      title: "Lux Prop Firm Dashboard, UK",
      position: "Jr. Consultant",
      technical_environment: "ReactJs, Material UI",
      company_link: "https://www.staunchsys.com/",
      project_number: 5,
      description:
        "Implemented a dashboard for a prop firm, designed to manage trading accounts with a focus on advanced trader tools and membership management, contributing as a Frontend Developer.;Developed a platform to manage trading accounts, enable fund deposits and withdrawals, provide trader tools, manage memberships, and track trading records.;Implemented additional features such as advanced trader tools, membership management functionalities, and enhanced data visualization for better trading analysis.;Developed user, admin, and mentor dashboard panels, ensuring role-based access control and providing customized views and functionalities for each user type.",
      __v: 0,
    },
    {
      _id: "6738768dca8811efdc1ccfcb",
      title: "Sports Club Management System, Ahmedabad, India",
      position: "Jr. Consultant",
      technical_environment: "ReactJS, Ant Design",
      company_link: "https://www.staunchsys.com/",
      project_number: 6,
      description:
        "Developed SportsClub360, an online sports academy management system focused on sports academies. The application enabled comprehensive management of trainee enrollment, training packages, and attendance tracking.;Key functionalities included secure user authentication and authorization, allowing users to log in with their credentials. The master data management feature enabled admins to manage data such as holidays, coaches, and training packages.;Admins could also register and manage trainees, enroll them in various sports courses, create batches, and generate sessions based on predefined criteria. Additionally, the system provided robust attendance management functionalities, allowing for the generation and management of session attendance.",
      __v: 0,
    },
    {
      _id: "6738e5138d02868a389c1d87",
      title: "Trading Buddy (Sports Betting Platform), UK",
      position: "Jr. Consultant",
      technical_environment: "ReactJs, Redux, Material UI",
      company_link: "https://www.staunchsys.com/",
      project_number: 7,
      description:
        "Developed a sports betting platform, Trading Buddy, using ReactJs and Material UI, focusing on both user and admin dashboard panels for seamless interactions. Implemented features allowing users to place bets (picks) on sports matches and manage multiple betting accounts under a single login, streamlining the betting process.;Integrated advanced account management functionality, enabling users to track and manage all their betting activities from one unified dashboard.;Developed comprehensive account analysis and statistics-related graphs, providing users with insights into their betting trends and performance.;Additionally, utilized MUI's global theme to ensure a consistent, responsive, and visually cohesive user interface across the entire platform.",
      __v: 0,
    },
  ]);
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
