"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { projectsData, projectsDataScience } from "@/utils/projects";
import CardDetail from "@/components/Dashboard/HomePage/CardDetail";
import CardMobile from "@/components/Dashboard/HomePage/CardMobile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaArrowRight } from "react-icons/fa";
import { header } from "@/utils/textstyle";
import WrapperTabDetail from "@/utils/wrapperTabDetail";

const desktop = "hidden lg:block my-8";
const mobile = "lg:hidden";

function page() {
  const [isHovered, setIsHovered] = useState(new Array(projectsData.length).fill(false));

  // console.log(`isBrowser: ${isBrowser()}`);

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
        <div className="bg-[#282828] opacity-80 backdrop-blur-md h-10 w-full lg:w-fit lg:rounded-xl flex items-center gap-x-3 ">
          <Link href={"/"} className="flex flex-row justify-center">
            <div className="h-8 w-8 rounded-full flex items-center justify-center">
              {/* <div className="rounded-full h-5 w-5 flex items-center justify-center"> */}
              <FaArrowLeft className="text-[#E1E4E6] text-lg" />
              {/* </div> */}
            </div>
            <h1 className="SpaceGroteskMedium text-lg text-[#E1E4E6] select-none lg:mr-3">
              Back
            </h1>
          </Link>
        </div>
      </div>
      {/* card */}
      <div className="mx-[8px] lg:mx-0 w-full flex flex-col">
        <Tabs defaultValue="All" className="w-full gap-x-3 items-center justify-center ">
          <TabsList className="w-full grid grid-cols-2 gap-y-2 mt-3 lg:mt-0 lg:flex items-center gap-x-2 lg:mb-4 bg-[#F5EFE7]">
            <TabsTrigger value="All" className="px-6 py-2 rounded-xl activebgtabs bg-[#282828] text-[#E1E4E6]">All</TabsTrigger>
            <TabsTrigger value="Website" className="px-6 py-2 rounded-xl activebgtabs bg-[#282828] text-[#E1E4E6]">Website</TabsTrigger>
            <TabsTrigger value="DataScience" className="px-6 py-2 rounded-xl activebgtabs bg-[#282828] text-[#E1E4E6]">Data Science</TabsTrigger>
            <TabsTrigger value="AnotherWorthy" className="px-6 py-2 rounded-xl activebgtabs bg-[#282828] text-[#E1E4E6]">Another Worthy</TabsTrigger>
          </TabsList>
          <TabsContent value="All">
            <WrapperTabDetail>
              {projectsData.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0.5, scale: 0.2 }}
                  transition={{ duration: 1.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className=""
                >
                  <div className={desktop}>
                    <CardDetail project={project} idx={idx} isHovered={isHovered} setIsHovered={setIsHovered}/>
                  </div>
                  <div className={mobile}>
                    <CardMobile project={project} idx={idx} />
                  </div>
                </motion.div>
              ))}
            </WrapperTabDetail>

          </TabsContent>
          <TabsContent value="Website">
            <WrapperTabDetail>
              {projectsData.map((project, idx) => (
                <motion.div
                  // ref={ref}
                  key={project.title}
                  initial={{ opacity: 0.5, scale: 0.2 }}
                  transition={{ duration: 1.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                >
                  <div className={desktop}>
                    <CardDetail project={project} idx={idx} isHovered={isHovered} setIsHovered={setIsHovered}/>
                  </div>
                  <div className={mobile}>
                    <CardMobile project={project} idx={idx} />
                  </div>
                </motion.div>
              ))}
            </WrapperTabDetail>
          </TabsContent>
          <TabsContent value="DataScience">
            <WrapperTabDetail>
              {projectsDataScience.map((project, idx) => (
                <motion.div
                  // ref={ref}
                  key={project.title}
                  initial={{ opacity: 0.5, scale: 0.2 }}
                  transition={{ duration: 1.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                >
                  <div className={desktop}>
                    <CardDetail project={project} idx={idx} isHovered={isHovered} setIsHovered={setIsHovered}/>
                  </div>
                  <div className={mobile}>
                    <CardMobile project={project} idx={idx} />
                  </div>
                </motion.div>
              ))}
            </WrapperTabDetail>
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
        <Link href="/archive" className="flex gap-x-1 w-fit px-8 py-4 h-[40px] font-bold text-[#34373b] text-[16px] items-center select-none rounded-xl hover:bg-[#34373b] bg-transparent border-2 border-[#34373b] hover:text-[#f2f2f2] duration-200 transition-all ease-in">
          View in Archive <div className="mt-[1px]"><FaArrowRight /></div>
        </Link>
      </div>
    </motion.div>
  );
}

export default page;
