"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { projectsData, projectsDataScience } from "@/utils/projects";
import { useInView } from 'react-intersection-observer';
import Card from "@/components/Dashboard/HomePage/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


function page() {
  const [isHovered, setIsHovered] = useState(new Array(projectsData.length).fill(false));
  const [isHovered2, setIsHovered2] = useState(new Array(projectsDataScience.length).fill(false));

  return (
    <motion.div
      className="w-full"
      initial={{ y: 300, opacity: 0 }}
      transition={{ duration: 0.9 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.9,
          // delay: 0.7,
          type: "Tween",
          stiffness: 200,
        },
      }}
    >
      <div className="sticky top-0 z-50">
        <div className="bg-[#282828] opacity-80 backdrop-blur-md h-10 w-fit rounded-xl flex items-center gap-x-3 ">
          <Link href={"/dashboard"} className="flex flex-row justify-center">
            <div className="h-8 w-8 rounded-full flex items-center justify-center">
              {/* <div className="rounded-full h-5 w-5 flex items-center justify-center"> */}
              <FaArrowLeft className="text-[#E1E4E6] text-lg" />
              {/* </div> */}
            </div>
            <h1 className="SpaceGroteskMedium my-auto text-lg text-[#E1E4E6] select-none mr-3">
              Back
            </h1>
          </Link>
        </div>
      </div>
      {/* card */}
      <div className="my-5 w-full flex flex-col gap-5">
        <Tabs defaultValue="All" className="w-full gap-x-3 items-center justify-center">
          <TabsList className="w-full items-center gap-x-2 bg-[#F5EFE7]">
            <TabsTrigger value="All" className="px-6 py-2 rounded-xl bg-[#282828] text-[#E1E4E6]">All</TabsTrigger>
            <TabsTrigger value="Website" className="px-6 py-2 rounded-xl bg-[#282828] text-[#E1E4E6]">Website</TabsTrigger>
            <TabsTrigger value="DataScience" className="px-6 py-2 rounded-xl bg-[#282828] text-[#E1E4E6]">Data Science</TabsTrigger>
          </TabsList>
          <TabsContent value="All">
            <div className="rounded-xl w-full p-2 grid grid-cols-2 gap-y-3">
              {projectsData.map((project, idx) => (
                <motion.div
                  // ref={ref}
                  key={project.title}
                  initial={{ x: 300, opacity: 0 }}
                  transition={{ duration: 0.9 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.9,
                      // delay: 0.7,
                      type: "Tween",
                      stiffness: 200,
                    },
                  }}
                >
                  <Card project={project} idx={idx} isHovered={isHovered} setIsHovered={setIsHovered} />
                </motion.div>
              ))}
            </div>

          </TabsContent>
          <TabsContent value="Website">
            <div className="rounded-xl w-full p-2 grid grid-cols-2 gap-y-3">
              {projectsData.map((project, idx) => (
                <motion.div
                  // ref={ref}
                  key={project.title}
                  initial={{ x: 300, opacity: 0 }}
                  transition={{ duration: 0.9 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.9,
                      // delay: 0.7,
                      type: "Tween",
                      stiffness: 200,
                    },
                  }}
                >
                  <Card project={project} idx={idx} isHovered={isHovered} setIsHovered={setIsHovered} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="DataScience">
            <div className="rounded-xl w-full p-2 grid grid-cols-2 gap-y-3">
              {projectsDataScience.map((project, idx) => (
                <motion.div
                  // ref={ref}
                  key={project.title}
                  initial={{ x: 300, opacity: 0 }}
                  transition={{ duration: 0.9 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.9,
                      // delay: 0.7,
                      type: "Tween",
                      stiffness: 200,
                    },
                  }}
                >
                  <Card project={project} idx={idx} isHovered={isHovered2} setIsHovered={setIsHovered2} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

      </div>
    </motion.div>
  );
}

export default page;
