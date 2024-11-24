"use client";

import React from "react";
import AnimatedNumbers from "./Animated/AnimatedNumbers";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../store/slice/profileSlice";
import { Skeleton } from "antd";
import AnimatedYears from "./Animated/AnimatedYears";

const ProfileDetail = () => {
  const dispatch = useDispatch();
  const { profile, profileLoading } = useSelector((state) => state.profile);

  React.useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
      {profileLoading ? (
        Array.from({ length: 3 }).map((_, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            width={100}
            height={50}
            className="my-4"
          />
        ))
      ) : (
        <>
          <div className="flex flex-col items-end justify-center xl:items-center">
            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
              <AnimatedNumbers value={profile.satisfiedClients} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
              satisfied clients
            </h2>
          </div>
          <div className="flex flex-col items-end justify-center xl:items-center">
            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
              <AnimatedNumbers value={profile.projectsCompleted} />+
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
        </>
      )}
    </div>
  );
};

export default ProfileDetail;
