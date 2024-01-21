"use client";
import React from "react";
import { PiGithubLogoLight } from "react-icons/pi";
import { SiCss3, SiFramer } from "react-icons/si";

import TestimonialTooltip from "@/components/TestimonialTooltip/page";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

function page() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0, filter: "blur(4px)" }}
      animate={{
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          duration: 0.8,
          // delay: 0.9,
          type: "spring",
          stiffness: 200,
        },
      }}
      className="lg:block w-ful lg:w-fit hidden  max-xl:hidden "
    >
      <div className=" md:w-60 w-full rounded-2xl h-fit sticky top-5 ">
        <div>
          <div className="bg-[#1C1C1C] text-center min-w-min rounded-2xl p-4 border border-neutral-800 h-fit">
            <h2 className="font-RubikBold text-neutral-200">
              Reach Me!
            </h2>
            <form action="" className="flex flex-col w-full">
              <label className="flex flex-col self-start font-medium text-sm text-neutral-100 mt-4 mb-1">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="avan@gmail.com"
                required
                className="py-1 px-3 rounded-md placeholder:text-[#9b9595] placeholder:text-[16px]" />
              <label className="flex flex-col self-start font-medium text-sm text-neutral-100 mt-4 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                className="rounded-md py-2 px-3 placeholder:text-[#9b9595] placeholder:text-[16px]"
                placeholder="Hi, I would like to work with you."
                required></textarea>
              <input type="submit" value="Send" className="bg-[#696969] cursor-pointer h-7 p-1 mt-8 rounded-md text-xs w-full font-RubikMedium text-neutral-50" />
            </form>

            <div className="border border-neutral-700 mb-5 mt-8" />

            <div className="text-neutral-400">

              <div className="flex items-center justify-center gap-x-2">
                <TestimonialTooltip />
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default page;
