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
import Projects from "@/components/Projects";

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

const project = () => {
    return (
        <>
            <Head>
                <title>ParthDesai | About Page</title>
                <meta name="description" content="ParthDesai | Projct Page" />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text="First, solve the problem. Then, write the code!"
                        className="mb-16 lg:!text-7xl sm:!text-4xl xs:!text-2xl sm:mb-8 text-6xl"
                    />
                    <Projects />
                </Layout>
            </main>
        </>
    );
};

export default project;
