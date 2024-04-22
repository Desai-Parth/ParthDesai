import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/profile-pic-2.jpg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(1) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <spna ref={ref}></spna>;
};

const AnimatedYears = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(1) <= value) {
        ref.current.textContent = latest.toFixed(1);
      }
    });
  }, [springValue, value]);

  return <spna ref={ref}></spna>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>ParthDesai | About Page</title>
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
                <strong class="font-bold text-dark/75 dark:text-white">
                  Parth Desai,
                </strong>
                {` a full stack developer specializing in ReactJS, NodeJS, MongoDB, ExpessJS/HapiJs, Nest Js and NextJS. 
                Currently, I am in the learning phase and gaining valuable experience in the field of web development and 
                UI/UX design. I have a strong passion for creating visually appealing and user-centered digital experiences 
                that not only solve problems but also provide intuitive and enjoyable interactions for users.`}
              </p>
              <p className="my-4 font-medium">
                {`My focus extends beyond just making things look pretty; I believe that design should be about addressing 
                challenges and finding innovative solutions. Whether it's developing a website, mobile app, or any other 
                digital product, I am dedicated to delivering design excellence and implementing user-centered thinking in 
                every project I undertake`}
              </p>
              <p className="font-medium">
                {`I am excited about the opportunity to apply my skills and enthusiasm to your next project, and I am 
                confident in my ability to bring your vision to life.`}
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

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedYears
                    value={(
                      (new Date() - new Date("2023-01-23")) /
                      (1000 * 60 * 60 * 24 * 365)
                    ).toFixed(1)}
                  />
                  +
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
