"use client";
import Link from "next/link";
import React from "react";
import { PiCodeThin } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/utils/projects";


function Homepage() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
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
      className="w-full lg:w-fit "
    >
      <div className="  bg-[#1C1C1C] lg:bg-transparent rounded-2xl ">
        <div>
          <div className="flex p-4">
            {/* <PiCodeThin className="text-6xl text-neutral-50" /> */}
              <h1 className=" text-2xl font-RubikMedium text-neutral-300">
                Preview Projects
              </h1>
          </div>

          <div className="border border-neutral-700 my-5" />

          <div className="  bg-[#1C1C1C] rounded-lg text-neutral-400">
            <Link href={"/dashboard/all-project"}>
              <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
                <div className="  flex items-center gap-x-3">
                  <Image
                    width={1000}
                    height={1000}
                    className="w-24 h-24 object-cover rounded-md"
                    src="/pic.jpg"
                    alt=""
                  />
                  <div>
                    <span className="text-sm">July 22, 2023</span>
                    <h2 className="text-sm font-RubikMedium">
                      Smooth Animation with React and Framer Motion
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
            </div>
          {/* recent */}

          <div className="flex p-4">
            {/* <PiCodeThin className="text-6xl text-neutral-50" /> */}
              <h1 className=" text-2xl font-RubikMedium text-neutral-300">
                Recent Projects
              </h1>
          </div>

          <div className="border border-neutral-700 my-5" />

          <div className="mt-6  bg-[#1C1C1C] rounded-lg text-neutral-400">
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <div>
                  <span className="text-sm">July 22, 2023</span>
                  <h2 className="text-sm font-RubikMedium">
                    Smooth Animation with React and Framer Motion
                  </h2>
                </div>
              </div>
            </div>
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <div>
                  <span className="text-sm">July 22, 2023</span>
                  <h2 className="text-sm font-RubikMedium">
                    Smooth Animation with React and Framer Motion
                  </h2>
                </div>
              </div>
            </div>
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
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
