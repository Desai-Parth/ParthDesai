import Head from "next/head";
import React, { Suspense } from "react";
import TransitionEffect from "../components/TransitionEffect";
import Layout from "../components/Layout";
import AnimatedText from "../components/Animated/AnimatedText";
import ProjectListLoadingSkeleton from "../components/loadingSkeleton/ProjectListLoadingSkeleton";
import ProjectList from "../components/ProjectList";

export const metadata = {
  title: "Projects",
};

const ProjectPage = () => {
  return (
    <>
      <Head>
        <title>Project | Parth-Desai</title>
        <meta name="description" content="Project | Parth-Desai" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="First, solve the problem. Then, write the code!"
            className="mb-16 lg:!text-7xl sm:!text-4xl xs:!text-2xl sm:mb-8 text-6xl"
          />
          <Suspense fallback={<ProjectListLoadingSkeleton />}>
            <ProjectList />
          </Suspense>
        </Layout>
      </main>
    </>
  );
};

export default ProjectPage;
