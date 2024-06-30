import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ title, position, te, companyLink, desc }) => {
    const ref = useRef(null);
    const descriptionPoints = desc.split(";").filter(point => point.trim() !== ""); // Split the description by "●" and filter out empty points

    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[80%] mx-auto 
    flex flex-col items-center justify-between md:w-[100%] "
        >
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.7, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-primary dark:text-primaryDark mb-4 md:mb-2 xs:mb-1">
                    {title}
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
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });
    return (
        <>
            <div ref={ref} className="w-[75%] m-auto relative lg:w-[90%] md:w-full">
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details
                        title="Food Order Application, Ahmedabad, India"
                        position="Jr. Consultant"
                        te="Node.js, Express.js, MongoDB"
                        companyLink="https://www.staunchsys.com/"
                        desc="Developed a food ordering application using Node.js, Express.js, and MongoDB, catering to company employees. Implemented features for pre-ordering lunch with Jain and regular options from selected providers.;Restricted access timelines: Employees can add or remove food items until 8 PM the day before, while admin privileges extend until 8 AM on the current day. Admins can track all orders and add providers, while employees can only view their own orders.;Automated email notifications streamline the process: Providers receive order counts and types at 8 PM the day before, and confirmation emails are dispatched at 8 AM on the delivery day, ensuring timely communication and efficient service." />
                    <Details
                        title="Ownerscope, Hempstead, NY, USA"
                        position="Jr. Consultant"
                        te="ReactJs, Material UI"
                        companyLink="https://www.staunchsys.com/"
                        desc="Contributed to updating UI changes and implementing new functionalities in an existing project.;Project focused on Ownerscope, serving as an ice-breaker to facilitate comfortable discussions among friends and relatives about property ownership goals.;Recognized the significance of home ownership discussions within social circles and aimed to enhance user experience." />
                    <Details
                        title="The Lux Trader (Trading Platform), UK"
                        position="Jr. Consultant"
                        te="NestJs, SQL, ReactJs,  MT5 (MetaTrader 5), TradingView charting library, Apache Tomcat"
                        companyLink="https://www.staunchsys.com/"
                        desc="Contributed as a full-stack developer, primarily focusing on backend development using Nest.js with SQL and TypeORM. Key responsibilities included managing symbol (stock) order placement, execution, and position creation and closure functionalities crucial for trading operations. Integrated with MT5 (MetaTrader 5) for seamless access to trading functionalities.;Implemented sockets and APIs to facilitate real-time updates on executions and other trading activities.;Developed the front end using React.js and seamlessly integrated the TradingView charting library for efficient trading activities.;Established dedicated servers in Nest.js to handle historical charting data and deliver live, current data using socket and API implementations.;Successfully managed various asset classes such as forex, indices, commodities, stocks, cryptocurrencies, and futures." />
                    <Details
                        title="Lux Broker Firm Dashboard, UK"
                        position="Jr. Consultant"
                        te="ReactJs, Material UI"
                        companyLink="https://www.staunchsys.com/"
                        desc="Implemented a dashboard for a broker firm, designed to manage trading accounts with various functionalities and Contributed as a Frontend Developer.;Developed a platform to manage trading accounts, facilitate document verification, enable fund deposits and withdrawals, and track trading records.;Implemented various account types, including demo, live, and tournament accounts, each with distinct functionalities reflecting account behaviors.;Leveraged ReactJs and Material UI to ensure an intuitive and user-friendly interface, prioritizing ease of navigation and efficient account management." />
                    <Details
                        title="Lux Prop Firm Dashboard, UK"
                        position="Jr. Consultant"
                        te="ReactJs, Material UI"
                        companyLink="https://www.staunchsys.com/"
                        desc="Implemented a dashboard for a prop firm, designed to manage trading accounts with a focus on advanced trader tools and membership management and Contributed as a Frontend Developer.;Developed a platform to manage trading accounts, enable fund deposits and withdrawals, provide trader tools, manage memberships, and track trading records.;Implemented additional features such as advanced trader tools, membership management functionalities, and enhanced data visualization for better trading analysis." />
                    <Details
                        title="Sports Club Management System, Ahmedabad, India"
                        position="Jr. Consultant"
                        te=": ReactJS, Ant Design"
                        companyLink="https://www.staunchsys.com/"
                        desc="Developed SportsClub360, an online sports academy management system focused on sports academies. The application enabled comprehensive management of trainee enrollment, training packages, and attendance tracking.;Key functionalities included secure user authentication and authorization, allowing users to log in with their credentials. The master data management feature enabled admins to manage data such as holidays, coaches, and training packages.;Admins could also register and manage trainees, enroll them in various sports courses, create batches, and generate sessions based on predefined criteria. Additionally, the system provided robust attendance management functionalities, allowing for the generation and management of session attendance." />

                </ul>
            </div>
        </>
    );
};

export default Projects;
