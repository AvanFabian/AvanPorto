"use client";

import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { projectsData, projectsDataScience } from "@/utils/projects";
import CardDetail from "@/components/Dashboard/HomePage/CardDetail";
import CardDesc from "@/components/Dashboard/HomePage/CardMobile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaArrowRight } from "react-icons/fa";
import { header } from "@/utils/textstyle";


function page() {

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
        <div className="bg-[#282828]  opacity-80 backdrop-blur-md h-10 w-full lg:w-fit lg:rounded-xl flex items-center gap-x-3 ">
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
      <div className="my-10 w-full flex flex-col">
        <Tabs defaultValue="All" className="w-full gap-x-3 items-center justify-center">
          <TabsList className="w-full items-center gap-x-2 mb-8 bg-[#F5EFE7]">
            <TabsTrigger value="All" className="px-6 py-2 rounded-xl activebgtabs bg-[#282828] text-[#E1E4E6]">All</TabsTrigger>
            <TabsTrigger value="Website" className="px-6 py-2 rounded-xl activebgtabs bg-[#282828] text-[#E1E4E6]">Website</TabsTrigger>
            <TabsTrigger value="DataScience" className="px-6 py-2 rounded-xl activebgtabs bg-[#282828] text-[#E1E4E6]">Data Science</TabsTrigger>
            <TabsTrigger value="AnotherWorthy" className="px-6 py-2 rounded-xl activebgtabs bg-[#282828] text-[#E1E4E6]">Another Worthy</TabsTrigger>
          </TabsList>
          <TabsContent value="All">
            <div className="rounded-xl w-full p-2 flex flex-col gap-y-12">
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
                  <div className="hidden md:block">
                    <CardDetail project={project} idx={idx} />
                  </div>
                  <div className="md:hidden">
                    <CardDesc project={project} idx={idx} />
                  </div>
                </motion.div>
              ))}
            </div>

          </TabsContent>
          <TabsContent value="Website">
            <div className="rounded-xl w-full p-2 flex flex-col gap-y-12">
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
                  <div className="hidden md:block">
                    <CardDetail project={project} idx={idx} />
                  </div>
                  <div className="md:hidden">
                    <CardDesc project={project} idx={idx} />
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="DataScience">
          <div className="rounded-xl w-full p-2 flex flex-col gap-y-12">
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
                  <div className="hidden md:block">
                    <CardDetail project={project} idx={idx} />
                  </div>
                  <div className="md:hidden">
                    <CardDesc project={project} idx={idx} />
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="AnotherWorthy">
            <div className="w-full flex items-center justify-center">
              <span className={`my-5 ${header}`}>
                Coming Soon!
              </span>

            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="flex w-full justify-center my-4">
        <Link href="/dashboard/archive" className="flex gap-x-1 w-fit px-8 py-4 h-[40px] font-bold text-[#34373b] text-[16px] items-center select-none rounded-xl hover:bg-[#34373b] bg-transparent border-2 border-[#34373b] hover:text-[#f2f2f2] duration-200 transition-all ease-in">
          View in Archive <div className="mt-[1px]"><FaArrowRight /></div>
        </Link>
      </div>
    </motion.div>
  );
}

export default page;
