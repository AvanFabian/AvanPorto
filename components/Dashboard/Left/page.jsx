"use client";
import React, { useState } from "react";
import {
  PiBookOpenTextLight,
  PiGoogleLogoThin,
  PiTwitterLogoLight,
  PiMagicWandThin,
  PiShapesThin,
  PiHouseLight,
} from "react-icons/pi";
import { SiAdobe } from "react-icons/si";

import { ModeToggle } from "@/components/providers/switcher";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function Leftpage() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  const controls = useAnimation();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isValidEmail(email)) {
      setEmail("");
    } else {
      controls.start({
        x: 0,
        transition: {
          type: "spring",
          velocity: "600",
          stiffness: "5000",
          damping: 15,
        },
      });
    }
  };

  return (
    <div>
      <motion.div
        initial={{ x: -100, opacity: 0, filter: "blur(4px)" }}
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
        className=" hidden md:block bg-[#1C1C1C] w-full md:w-80 h-fit top-5 "
      >

        <div className=" md:w-80 w-full p-3 border border-neutral-800 rounded-2xl h-fit bg-[#1C1C1C]">
          <div className="flex">
            <div
              className="w-full relative"
            >
              <Image
                width={1000}
                height={1000}
                className="w-28 h-28 rounded-full object-cover"
                src="/black.jpeg"
                alt=""
              />
              {/* <div
                onClick={() => setOpen(!open)}
                className="bg-lime-400 w-3 h-3 cursor-pointer rounded-full absolute top-20 right-28 animate-pulse"
              /> */}

              {/* {open && (
                <div className="border border-lime-400 h-5 flex items-center justify-center rounded-2xl w-fit px-2 absolute top-[4.7rem] right-3 ">
                  <p className="text-[9px] font-RubikMedium text-lime-300">
                    Open to freelancing
                  </p>
                </div>
              )} */}
              <h1 className="font-RubikExtraBold text-xl text-neutral-300 mt-3">
                Avan Fabian
              </h1>

              <p className="text-xs font-RubikMedium text-neutral-300 mt-1">
                Universitas Negeri Malang 🌍
              </p>
            </div>

            <div className="flex gap-x-1 w-full h-fit">
              <Link
                href="/"
                className="bg-[#282828] w-min text-neutral-300 rounded-md px-2 py-3 h-7 flex items-center justify-center text-[14px] font-RubikBold">
                Home
              </Link>
              {/* ini */}
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                className="bg-[#282828] w-min text-neutral-300 rounded-md px-2 py-3 h-7 flex items-center justify-center text-[14px] font-RubikBold">
                Blog
              </Link>
              {/* <div>
                <ModeToggle />
              </div> */}

            </div>
          </div>

          {/* <form
            onSubmit={handleSubmit}
            className="bg-[#282828] p-1  rounded-md md:flex items-center  justify-between h-9 w-full hidden "
          >
            <input
              value={email}
              onChange={handleChange}
              className=" w-36 focus:outline-none bg-transparent text-neutral-400 text-xs placeholder:text-neutral-600 h-full pl-2 placeholder:text-xs placeholder:font-RubikMedium"
              placeholder="name@email.com"
              type="text"
            />
            <motion.button
              animate={controls}
              className="bg-[#696969] h-full p-1 rounded-md text-xs w-20 font-RubikMedium text-neutral-50"
            >
              Subscribe
            </motion.button>
          </form> */}

          <div className="w-full mt-5 text-neutral-300">
            <h2 className="font-RubikBold my-4">Resume</h2>
            <p className="text-[12px] font-RubikRegular my-3">
              Avan Fabian Daniswara. A one and a half year Informatics student, with a focus on Data Science and Software Engineering. he's passionate on building effective application which can solve a real problem.
            </p>
            <p className="text-[12px] font-RubikRegular my-3">
              Avan is a dedicated to continuous hard skill and soft skill learner. As a student, he's constantly seeking new challenges and opportunities to expand his skill set. In addition to his technical expertise, he also started exploring soft skill like learn english language, how to communicate effectively to gain a well-rounded readiness level of real word job. This commitment to learning ensures that he's well-equipped to adapt to the evolving job landscape.
            </p>

            {/* <div className="mt-6 flex justify-between text-sm">
              <div className="flex items-center gap-x-1">
                <PiShapesThin />
                <span className="text-xs font-RubikRegular">
                  7 Years as a Developer
                </span>
              </div>
              <div className="flex items-center gap-x-1">
                <PiMagicWandThin />
                <span className="text-xs font-RubikRegular">24 Projects</span>
              </div>
            </div> */}

            {/* <div className="border border-[#282828] text-neutral-300 my-6" /> */}

            {/* <div className="my-4 ">
              <h1 className="font-RubikRegular">Educational History</h1>
              <div className="mt-7 flex  justify-between">
                <div className="flex gap-x-3">
                  <PiGoogleLogoThin className="text-xl" />
                  <div className="-mt-1">
                    <h3 className="text-sm font-RubikMedium">Sr. Developer</h3>
                    <p className="text-[9px]">Google</p>
                  </div>
                </div>
                <small className="text-[9px] text-neutral-300">
                  January 2020 - Current
                </small>
              </div>
              <div className="my-3 flex  justify-between">
                <div className="flex gap-x-3">
                  <SiAdobe className="text-xl" />
                  <div className="-mt-1">
                    <h3 className="text-sm font-RubikMedium">
                      Jr. Creative Dev
                    </h3>
                    <p className="text-[9px]">Adobe</p>
                  </div>
                </div>
                <small className="text-[9px] text-neutral-300">
                  Sep 2016 - January 2020
                </small>
              </div>
            </div> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Leftpage;
