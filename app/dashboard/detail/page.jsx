"use client";

import Link from "next/link";
import React from "react";
import { PiArrowLeftThin } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/utils/projects";
import Card from "@/components/Dashboard/HomePage/Card";


function page() {
  return (
    <motion.div
      className="text-neutral-50 w-full"
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          // delay: 0.9,
          type: "spring",
          stiffness: 200,
        },
      }}
    >
      <div className="sticky top-0 z-50">
          <div className="bg-neutral-900 backdrop-blur-md h-10  w-full rounded-xl flex items-center gap-x-3 ">
            <Link href={"/dashboard"}>
              <div className="bg-[#1E2022] h-8 w-8 rounded-full flex items-center justify-center ml-3">
                <div className="rounded-full h-5 w-5 flex items-center justify-center">
                  <PiArrowLeftThin className="text-[#f2f2f2] text-lg" />
                </div>
              </div>
            </Link>
            <h1 className="SpaceGroteskMedium text-lg text-[#1E2022] select-none">
              Back
            </h1>
          </div>
      </div>
      {/* card */}
      <div className="mt-5 w-full flex flex-col gap-5">
        <div className="w-full flex gap-x-3 items-start">
          {/* <div>

          </div>
          <div>

          </div> */}
          <h1 className="text-lg rounded-md px-3 py-1 bg-[#020202] text-[#f2f2f2] font-bold text-left select-none">
            {projectsData[0].createdAt}
          </h1>
          <h1 className="text-lg mx-auto rounded-md px-3 py-1 bg-[#020202] text-[#f2f2f2] font-bold text-left select-none">
            Website Project
          </h1>
        </div>
        {/* Map array */}
        {projectsData.map((project, idx) => (
          <div className="flex flex-row gap-3" key={idx}>
            <div className="basis-1/2">
              <Card project={project} idx={idx} />
            </div>
            <div className="basis-1/2">
              
            </div>  
          </div>

        ))}
      </div>
    </motion.div>
  );
}

export default page;
