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

import ContactForm from "@/components/dashboard/Left/ContactForm"

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
        initial={{ x: -200, opacity: 0, filter: "blur(4px)" }}
        animate={{
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          transition: {
            duration: 1.25,
            // delay: 0.9,
            type: "Tween",
            stiffness: 200,
          },
        }}
        className=" hidden md:block rounded-2xl w-full md:w-80 sticky h-fit top-5 "
      >

        <div className=" md:w-80 w-full p-3 border border-neutral-400 rounded-2xl h-fit bg-[#E1E4E6]">
          <div className="flex">
            <div
              className="w-full relative basis-4/6">
              <Image
                width={1000}
                height={1000}
                className="w-28 h-28 rounded-full object-cover"
                src="/black.jpeg"
                alt="Avan Fabian"
              />
              <h1 className="font-RubikExtraBold text-xl text-[#1E2022] mt-3 selection:bg-[#c3c8ce]">
                Avan Fabian
              </h1>

              <p className="text-xs font-RubikMedium text-[#1E2022] mt-1 selection:bg-[#c3c8ce]">
                Universitas Negeri Malang 🌍
              </p>
            </div>

            <div className="flex gap-x-2 basis-2/6 w-full h-fit">
              <Link
                href="/"
                className="bg-[#282828] w-11 text-center select-none text-[#F0F5F9] rounded-md px-2 py-3 h-7 flex items-center justify-center text-[14px] font-RubikBold">
                Home
              </Link>
              {/* ini */}
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                className="bg-[#282828] w-11 text-center select-none text-[#F0F5F9] rounded-md px-2 py-3 h-7 flex items-center justify-center text-[14px] font-RubikBold">
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

          {/* resume */}
          <div className="w-full mt-5 text-[#1E2022]">
            <h2 className="font-bold text-base my-2 selection:bg-[#c3c8ce]">Resume</h2>
            <p className="text-[13px] antialiased text-justify font-RubikRegular mb-3 selection:bg-[#c3c8ce]">
              Avan Fabian Daniswara. A one and a half year Informatics student, with a focus on Data Science and Software Engineering. he's passionate on building effective application which can solve a real problem.
            </p>
            <p className="text-[13px] antialiased text-justify font-RubikRegular my-3 selection:bg-[#c3c8ce]">
              Avan is a dedicated to continuous hard skill and soft skill learner. As a student, he's constantly seeking new challenges and opportunities to expand his skill set. In addition to his technical expertise, he also started exploring soft skill like learn english language, how to communicate effectively to gain a well-rounded readiness level of real word job. This commitment to learning ensures that he's well-equipped to adapt to the evolving job landscape.
            </p>
          </div>
          {/* contact */}
          <div className="w-full mt-5 text-[#1E2022]">
            <h2 className="font-bold text-base my-2 selection:bg-[#c3c8ce]">Reach Me</h2>
            <ContactForm />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Leftpage;
