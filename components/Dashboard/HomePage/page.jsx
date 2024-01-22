"use client";
import Link from "next/link";
import React from "react";
import { PiCodeThin } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/utils/projects";
import { projectsDataPreview } from "@/utils/projects";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


function Homepage() {
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
      <div className="  bg-[#1C1C1C] lg:bg-transparent rounded-2xl ">
        <div>
          <div className="flex py-4">
            {/* <PiCodeThin className="text-6xl text-neutral-50" /> */}
            <h1 className=" text-2xl font-bold uppercase selection:bg-[#c3c8ce] text-[#34373b]">
              Projects Preview
            </h1>
          </div>

          <div className="border border-neutral-400 mb-5" />
          <div className="rounded-xl w-full p-2">
            {projectsDataPreview.map((project, idx) => (
              <div className="bg-[#e1e4e6] rounded-2xl mb-3 text-[#1E2022] w-full border-[1px] hover:bg-[#b2b5b7] duration-200 transition-all ease-in  border-neutral-400">
                <Link href={`/dashboard/${project.id}`} key={project.title}>
                  <motion.div 
                    className="p-2 "
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
                    }}
                  >
                    <div className="flex gap-x-2">
                      <Image
                        width={1000}
                        height={1000}
                        className="w-[400px] h-[250px] bg-cover rounded-lg select-none"
                        src={project.image}
                        alt={project.title}
                      />
                      <div className="w-full flex flex-col align-top">
                          <div className="flex flex-row">
                            <span className="text-2xl text-[#1E2022] font-bold selection:bg-[#c3c8ce]">
                              {project.title}
                            </span>
                          </div>
                          <span className="text-[16px] antialiased font-RubikRegular my-1 mr-2 text-justify capitalize selection:bg-[#c3c8ce]">
                            {project.shortdesc}
                          </span>
                          <div className="flex items-end w-full h-full text-sm text-[#1E2022] align-bottom font-light selection:bg-[#c3c8ce]">{project.createdAt}</div>
                        </div>
                      </div>
                  </motion.div>
                </Link>
              </div>
            ))}
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
      </div>
    </motion.div>
  );
}

export default Homepage;
