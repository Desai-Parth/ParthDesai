import Head from "next/head";
import React from "react";
import Image from "next/image";
import TransitionEffect from "../components/TransitionEffect";
import profilePic from "../../../public/images/profile/profile-pic-2.jpg";
import Layout from "../components/Layout";
import AnimatedText from "../components/Animated/AnimatedText";
import ProfileDetail from "../components/ProfileDetail";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";

export const metadata = {
  title: "About",
};
const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About | Parth-Desai</title>
        <meta name="description" content="ParthDesai | About Page" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-left font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                {` Hello, I'm `}
                <strong className="font-bold text-dark/75 dark:text-white">
                  Parth Desai,
                </strong>
                {` a dedicated Full Stack Developer with a deep passion for creating dynamic, user-centric digital experiences. Specializing in React.js, Node.js, MongoDB, Express.js/Hapi.Js, Nest.js, and Next.js, I excel at crafting seamless, high-performance web applications that blend functionality with design excellence.`}
              </p>
              <p className="mt-2 font-medium">
                {`I focus on building robust backend systems and intuitive front-end interfaces that solve real-world challenges. Whether it’s developing responsive websites, creating RESTful APIs, or optimizing system performance, my goal is to deliver solutions that not only meet client needs but also exceed expectations.`}
              </p>
              <p className="mt-2 font-medium">
                {`With expertise in server management tools like Prometheus and Grafana, along with hands-on experience in exploring emerging technologies such as Docker, Kafka, and Redis, I ensure scalable, future-ready systems tailored to your needs.`}
              </p>
              <p className="my-2 font-medium">
                {`If you're looking for a developer who can turn your ideas into reliable, high-quality digital products, I’d love to collaborate with you. Let’s bring your vision to life with modern solutions, cutting-edge technology, and seamless execution. Feel free to reach out, and let’s create something exceptional together!`}
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl 
            border-2 border-solid border-black bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="ParthdesaI"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <ProfileDetail />
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default AboutPage;
