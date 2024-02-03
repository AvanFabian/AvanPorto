"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { projectsData, projectsDataPreview } from "@/utils/projects";
import { FaArrowRight, FaReact, FaRobot } from "react-icons/fa";
import Card from "./Card";
import CardBg from "@/utils/cardbg";
import { Heading } from "./Heading";
import CardMobile from "./CardMobile";
import ScrollToTop from "react-scroll-to-top";


function Homepage() {
  const [isHovered, setIsHovered] = useState(new Array(projectsDataPreview.length).fill(false));

  return (
    <>
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
        className="w-fit mx-auto lg:ml-4">
        <div className="flex flex-col gap-y-2 lg:gap-4 lg:bg-transparent rounded-2xl ">
          {/* Works Preview Section */}
          <CardBg>
            <div id="firstsection">

              <Heading title="Works Preview" desc="Here are a few projects I've worked on." />

              <div className="rounded-xl w-full p-2 flex flex-col lg:grid lg:grid-cols-2 gap-y-3">
                {projectsDataPreview.map((project, idx) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0.5, scale: 0.2 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                  >
                    <div className="hidden lg:block">
                      <Card project={project} idx={idx} isHovered={isHovered} setIsHovered={setIsHovered} />
                    </div>
                    <div className="block lg:hidden">
                      <CardMobile project={project} idx={idx} isHovered={isHovered} setIsHovered={setIsHovered} />
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex w-full justify-center my-4">
                <Link href="/detail" className="flex gap-x-1 w-fit px-8 py-4 h-[40px] font-bold text-[#34373b] text-[16px] items-center select-none rounded-xl hover:bg-[#34373b] bg-transparent border-2 border-[#34373b] hover:text-[#f2f2f2] duration-200 transition-all ease-in">
                  See More <div className="mt-[1px]"><FaArrowRight /></div>
                </Link>
              </div>
            </div>
          </CardBg>
          {/* Skills Section */}
          <CardBg>
            <div id="secondsection">

              <Heading title="Skills" desc="Some short overview of what I can do." />

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
          </CardBg>
          {/* Certificates Section */}
          {/* <CardBg>

          <Heading title="Certification" desc="Here are some of my certificates." />

          <div className="">

          </div>
        </CardBg> */}
        </div>
      </motion.div>

    </>
  );
}

export default Homepage;
