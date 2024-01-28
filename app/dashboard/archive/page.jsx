"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

import CardDetail from "@/components/Dashboard/HomePage/CardDetail";
import CardDesc from "@/components/Dashboard/HomePage/CardMobile";
import { FaArrowRight } from "react-icons/fa";
import CardBg from "@/utils/cardbg";
import { TableData } from "./TableData";

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
      <div className="sticky top-0 z-50 mb-10">
        <div className="bg-[#282828]  opacity-80 backdrop-blur-md h-10 w-full lg:w-fit lg:rounded-xl flex items-center gap-x-3 ">
          <Link href={"/dashboard/detail"} className="flex flex-row justify-center">
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
      <CardBg>
        <div>
          <TableData />
        </div>
      </CardBg>
    </motion.div>
  );
}

export default page;
