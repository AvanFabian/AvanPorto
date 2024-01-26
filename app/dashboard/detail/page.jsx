"use client";

import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/utils/projects";
import Card from "@/components/Dashboard/HomePage/Card";


function page() {
  return (
    <motion.div
      className="w-full"
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
          <div className="bg-[#282828] opacity-80 backdrop-blur-md h-10 w-fit rounded-xl flex items-center gap-x-3 ">
            <Link href={"/dashboard"} className="flex flex-row justify-center">
              <div className="h-8 w-8 rounded-full flex items-center justify-center">
                {/* <div className="rounded-full h-5 w-5 flex items-center justify-center"> */}
                  <FaArrowLeft  className="text-[#E1E4E6] text-lg" />
                {/* </div> */}
              </div>
            <h1 className="SpaceGroteskMedium my-auto text-lg text-[#E1E4E6] select-none mr-3">
              Back
            </h1>
            </Link>
          </div>
      </div>
      {/* card */}
      <div className="mt-5 w-full flex flex-col gap-5">
        <div className="w-full flex gap-x-3 items-start justify-center">
          {/* <h1 className="text-sm SpaceGroteskRegular my-auto rounded-xl px-3 py-1 bg-[#282828] text-[#f2f2f2] font-bold text-left select-none">
            {projectsData[0].createdAt}
          </h1> */}
          <h1 className="text-2xl capitalize mx-auto my-auto text-[#34373b] font-bold text-left selection:bg-[#ccccc0]">
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
