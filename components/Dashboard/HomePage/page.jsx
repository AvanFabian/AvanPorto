"use client";
import Link from "next/link";
import React from "react";
import { PiCodeThin } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/utils/projects";
import { projectsDataPreview } from "@/utils/projects";
import { Button } from "@/components/ui/button"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


function Homepage() {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 1.25,
          // delay: 0.9,
          type: "Tween",
          // ease: "easeInOut",
          stiffness: 200,
        },
      }}
      className="w-full"
    >
      <div className=" bg-[#1C1C1C] lg:bg-transparent rounded-2xl ">
        <div className="flex flex-col py-4">
          {/* <PiCodeThin className="text-6xl text-neutral-50" /> */}
          <h1 className=" text-2xl font-bold uppercase selection:bg-[#c3c8ce] text-[#34373b]">
            Projects Preview
          </h1>
        </div>

        <div className="border border-neutral-400 mb-5" />

        <div className="rounded-xl w-full p-2 grid grid-cols-2 gap-y-3">
          {projectsDataPreview.map((project, idx) => (
            <motion.div
              className=""
              initial={{ x: 200, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 0.7,
                  type: "Tween",
                  // ease: "easeInOut",
                  stiffness: 200,
                },
              }}>
              <div className="relative">
                <Image
                  width={1000}
                  height={667}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`w-[475px] h-[275px] bg-cover rounded-lg select-none transition-opacity duration-200 ease-in ${isHovered ? "opacity-10" : "opacity-100"
                    }`}
                  src={project.image}
                  alt={project.title}
                />
                {/* <div className="absolute top-0 opacity-0 hover:opacity-100 px-8 py-7 duration-200 transition-all ease-in"></div> */}
                <div
                  className={`hidden absolute top-0 left-0 px-8 py-7 duration-200 transition-all ease-in ${isHovered ? "opacity-100" : "opacity-0"}`}
                >
                  <p className="text-[13px] font-medium text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt minus ratione repellendus aliquam nihil architecto libero harum dolore alias esse!</p>
                  <Button asChild className="w-[80px] h-[40px] p-2 rounded-md">
                    <Link href="/dashboard/all-project"><p className="font-bold text-[13px] ">See Detail!</p></Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
          <Button asChild className="my-auto mx-auto w-min rounded-2xl">
            <Link href="/dashboard/all-project"><span className="font-bold">See More!</span></Link>
          </Button>

        </div>
        {/* recent */}

        <div className="flex py-4">
          {/* <PiCodeThin className="text-6xl text-neutral-50" /> */}
          <h1 className=" text-2xl font-bold uppercase text-[#34373b] selection:bg-[#c3c8ce]">
            Recent Projects
          </h1>
        </div>

        <div className="border border-neutral-400 mb-5" />

        <div className="mt-6  bg-[#1C1C1C] rounded-lg text-neutral-400">
          <div className="duration-200 transition-all ease-in p-4">
            <div className="  flex items-center gap-x-3">
              <div>
                <span className="text-sm">July 22, 2023</span>
                <h2 className="text-sm font-RubikMedium">
                  Smooth Animation with React and Framer Motion
                </h2>
              </div>
            </div>
          </div>
          <div className="duration-200 transition-all ease-in p-4">
            <div className="  flex items-center gap-x-3">
              <div>
                <span className="text-sm">July 22, 2023</span>
                <h2 className="text-sm font-RubikMedium">
                  Smooth Animation with React and Framer Motion
                </h2>
              </div>
            </div>
          </div>
          <div className="duration-200 transition-all ease-in p-4">
            <div className="flex items-center gap-x-3">
              <div>
                <span className="text-sm">July 22, 2023</span>
                <h2 className="text-sm font-RubikMedium">
                  Smooth Animation with React and Framer Motion
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Homepage;
