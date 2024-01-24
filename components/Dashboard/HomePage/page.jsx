"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { PiCodeThin } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/utils/projects";
import { projectsDataPreview } from "@/utils/projects";
import { Button } from "@/components/ui/button"
import { FaArrowRight } from "react-icons/fa";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


function Homepage() {
  // const [isHovered, setIsHovered] = React.useState(false);
  const [isHovered, setIsHovered] = useState(new Array(projectsDataPreview.length).fill(false));
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

        <div id="firstsection">
          <div className="flex flex-col mb-1 text-center">
            {/* <PiCodeThin className="text-6xl text-neutral-50" /> */}
            <h1 className=" text-2xl font-bold uppercase selection:bg-[#c3c8ce] text-[#34373b]">
              My Recent Works
            </h1>
          </div>

          

        </div>

        <div id="secondsection">
          <div className="flex flex-col mb-1 text-center">
            {/* <PiCodeThin className="text-6xl text-neutral-50" /> */}
            <h1 className=" text-2xl font-bold uppercase selection:bg-[#c3c8ce] text-[#34373b]">
              My Recent Works
            </h1>
          </div>

          <div className="border border-neutral-400 my-4" />

          <div className="rounded-xl w-full p-2 grid grid-cols-2 gap-y-3">
            {projectsData.map((project, idx) => (
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
                    width={475}
                    height={275}
                    className={`w-[400px] h-[225px] bg-cover rounded-lg select-none transition-opacity duration-200 ease-in ${isHovered[idx] ? "opacity-10" : "opacity-100"}`}
                    src={project.image}
                    alt={project.title}
                  />
                  {/* <div className="absolute top-0 opacity-0 hover:opacity-100 px-8 py-7 duration-200 transition-all ease-in"></div> */}
                  <div
                    className={`absolute top-0 left-0 w-[400px] h-[225px] px-8 py-7 flex flex-col justify-between items-center duration-200 transition-all ease-in ${isHovered[idx] ? "opacity-100" : "opacity-0"}`}
                    onMouseEnter={() => {
                      // When the mouse enters, set the boolean at index idx to true
                      setIsHovered(prev => {
                        const newIsHovered = [...prev];
                        newIsHovered[idx] = true;
                        return newIsHovered;
                      });
                    }}
                    onMouseLeave={() => {
                      // When the mouse leaves, set the boolean at index idx to false
                      setIsHovered(prev => {
                        const newIsHovered = [...prev];
                        newIsHovered[idx] = false;
                        return newIsHovered;
                      });
                    }}
                  >
                    <h1 className="text-xl font-bold text-left select-none">{project.title}</h1>
                    <p className="text-[13px] font-bold text-[#6d6c6c] text-left select-none">{project.shortdesc}</p>
                    {/* <Button asChild className=""> */}
                    <Link href="/dashboard/all-project" className="flex gap-x-1 w-fit h-[40px] font-bold text-[#34373b] text-[13px] items-center select-none p-2 rounded-xl hover:bg-[#34373b] bg-transparent border-2 border-[#34373b] hover:text-[#f2f2f2] duration-200 transition-all ease-in">
                      Open Project <div className="mt-[1px]"><FaArrowRight /></div>
                    </Link>
                    {/* </Button> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex w-full justify-center mt-2 mb-5">
            <Link href="/dashboard/all-project" className="flex gap-x-1 w-fit px-8 py-4 h-[40px] font-bold text-[#34373b] text-[16px] items-center select-none rounded-xl hover:bg-[#34373b] bg-transparent border-2 border-[#34373b] hover:text-[#f2f2f2] duration-200 transition-all ease-in">
              See More <div className="mt-[1px]"><FaArrowRight /></div>
            </Link>
          </div>
        </div>
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
