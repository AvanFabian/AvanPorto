"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/utils/projects";
// import { Button } from "@/components/ui/button"
import { FaArrowRight } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
// import { Input } from "@/components/ui/input"
import { useInView } from 'react-intersection-observer';
import Card from "./Card";

function Homepage() {
  // const [isHovered, setIsHovered] = React.useState(false);
  const [isHovered, setIsHovered] = useState(new Array(projectsData.length).fill(false));

  const [ref, inView] = useInView({
    triggerOnce: false, // Change to false if you want the animation to trigger again whenever it comes into view
  });

  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
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
      <div className="flex flex-col gap-4 bg-[#1C1C1C] lg:bg-transparent rounded-2xl ">

        <div id="firstsection" className="bg-[#ebe5dd] rounded-2xl p-2 border border-neutral-400">
          <div className="flex flex-col mb-1 text-center">
            {/* <PiCodeThin className="text-6xl text-neutral-50" /> */}
            <h1 className=" text-2xl SpaceGroteskBold capitalize selection:bg-[#ccccc0] text-[#34373b]">
              Recent Works
            </h1>
            <h1 className=" text-sm my-3 SpaceGroteskRegular capitalize selection:bg-[#ccccc0] text-[#34373b]">
              Here are a few projects I've worked on recently.
            </h1>
          </div>

          <div className="rounded-xl w-full p-2 grid grid-cols-2 gap-y-3">
            {projectsData.map((project, idx) => (
              <motion.div
                ref={ref}
                key={project.title}
                initial={{ x: 300, opacity: 0 }}
                transition={{ duration: 0.9 }}
                animate={inView ? {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.9,
                    // delay: 0.7,
                    type: "Tween",
                    stiffness: 200,
                  },
                } : {
                  x: 300,
                  opacity: 0,
                }}
              >
                <Card project={project} idx={idx} isHovered={isHovered} setIsHovered={setIsHovered} />
              </motion.div>
            ))}
          </div>
          <div className="flex w-full justify-center my-4">
            <Link href="/dashboard/detail" className="flex gap-x-1 w-fit px-8 py-4 h-[40px] font-bold text-[#34373b] text-[16px] items-center select-none rounded-xl hover:bg-[#34373b] bg-transparent border-2 border-[#34373b] hover:text-[#f2f2f2] duration-200 transition-all ease-in">
              See More <div className="mt-[1px]"><FaArrowRight /></div>
            </Link>
          </div>
        </div>

        <div id="secondsection " className="bg-[#ebe5dd] rounded-2xl p-2 border border-neutral-400">
          <div className="flex flex-col mb-1 text-center">
            {/* <PiCodeThin className="text-6xl text-neutral-50" /> */}
            <h1 className="text-2xl SpaceGroteskBold capitalize selection:bg-[#ccccc0] text-[#34373b]">
              Skills
            </h1>
            <h1 className=" text-sm my-3 SpaceGroteskRegular capitalize selection:bg-[#ccccc0] text-[#34373b]">
              Some short overview of what I can do.
            </h1>
          </div>
          <div className="rounded-2xl flex flex-col gap-3">
            <div className="w-full flex flex-row">
              <motion.div
                className="flex flex-col"
                initial={{ x: -200, opacity: 0 }}
                // animate={{ x: 0, opacity: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.9 }}
              >
                <div className="w-full my-8 gap-y-3 items-center text-center flex flex-col gap-3">
                  <FaReact className="w-[100px] h-[100px]" />
                  <h1 className="text-xl SpaceGroteskBold capitalize selection:bg-[#ccccc0] text-[#34373b]">
                    Web-Apps <br />Development
                  </h1>
                  <div className="lg:w-1/2">
                    <p className="text-[14px] SpaceGroteskRegular capitalize selection:bg-[#ccccc0] text-[#34373b]">
                      Develop some stuff which will be helpfull for my everyday task with UI that is easy on the eyes.
                    </p>
                  </div>
                </div>
                <div className="w-full mb-12 mt-4 gap-y-2 items-center text-center flex flex-col gap-3">
                  <h1 className="text-sm SpaceGroteskBold capitalize selection:bg-[#ccccc0] text-[#00668c]">
                    Tech used to solve problems:
                  </h1>
                  <div className="lg:w-1/2">
                    <p className="text-[14px] SpaceGroteskRegular capitalize selection:bg-[#ccccc0] text-[#34373b]">
                      TailwindCSS, ReactJS, NextJS, Prisma, MongoDB, MySQL, FramerMotion, shadcn
                    </p>
                  </div>
                </div>
                <div className="w-full mb-1 gap-y-2 items-center text-center flex flex-col gap-3">
                  <h1 className="text-sm SpaceGroteskBold capitalize selection:bg-[#ccccc0] text-[#00668c]">
                    Development Tools:
                  </h1>
                  <div className="lg:w-1/2">
                    <p className="text-[14px] SpaceGroteskRegular capitalize selection:bg-[#ccccc0] text-[#34373b]">
                      VScode <br />Git & Github <br />Figma <br />GitBash
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col"
                initial={{ x: 200, opacity: 0 }}
                // animate={{ x: 0, opacity: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.9 }}
              >
                <div className="w-full my-8 gap-y-3 items-center text-center flex flex-col gap-3">
                  <FaRobot className="w-[100px] h-[100px]" />
                  <h1 className="text-xl SpaceGroteskBold capitalize selection:bg-[#ccccc0] text-[#34373b]">
                    Data Science <br /> ML/AI
                  </h1>
                  <div className="lg:w-1/2">
                    <p className="text-[14px] SpaceGroteskRegular capitalize selection:bg-[#ccccc0] text-[#34373b]">
                      Develop a Model that can help to predict and make a decision on real world problem.
                    </p>
                  </div>
                </div>
                <div className="w-full mb-12 my-4 gap-y-2 items-center text-center flex flex-col gap-3">
                  <h1 className="text-sm SpaceGroteskBold capitalize selection:bg-[#ccccc0] text-[#00668c]">
                    Tech used to solve problems:
                  </h1>
                  <div className="lg:w-1/2">
                    <p className="text-[14px]  SpaceGroteskRegular capitalize selection:bg-[#ccccc0] text-[#34373b]">
                      Scikit-Learn, Tensorflow, Pandas, Numpy, Matplotlib, Seaborn
                    </p>
                  </div>
                </div>
                <div className="w-full mb-1 mt-4 gap-y-2 items-center text-center flex flex-col gap-3">
                  <h1 className="text-sm SpaceGroteskBold capitalize selection:bg-[#ccccc0] text-[#00668c]">
                    Development Tools:
                  </h1>
                  <div className="lg:w-1/2">
                    <p className="text-[14px] SpaceGroteskRegular capitalize selection:bg-[#ccccc0] text-[#34373b]">
                      Google Colab <br /> Jupyter Notebook <br /> Kaggle
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>


      </div>
    </motion.div>
  );
}

export default Homepage;
