"use client";
import ContactForm from "@/components/Dashboard/Left/ContactForm"

import { motion, } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Leftpage() {
  
  // Email validator
  // const isValidEmail = (email) => {
  //   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  // };

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
        className="rounded-2xl w-full lg:w-80 sticky h-fit top-0"
      >

        <div className="lg:w-80 w-full p-3 border border-neutral-400 rounded-2xl h-fit bg-[#ebe5dd]">
          <div className="flex">
            <div
              className="w-full relative basis-4/6">
              <Image
                width={1000}
                height={1000}
                className="w-28 h-28 select-none rounded-full object-cover duration-200 transition-all ease-in "
                src="/Foto-3x4.jpg"
                alt="Avan Fabian"
              />
              <h1 className="SpaceGroteskMedium text-xl text-[#1E2022] mt-3 selection:bg-[#c3c8ce]">
                Avan Fabian
              </h1>

              <p className="text-xs SpaceGroteskMedium text-[#1E2022] mt-1 selection:bg-[#c3c8ce]">
                Universitas Negeri Malang
              </p>
            </div>

            <div className="flex gap-x-2 basis-2/6 w-full h-fit">
              <Link
                href="/"
                className="bg-[#282828] SpaceGroteskRegular w-9 text-center select-none text-[#F0F5F9] rounded-md px-1 py-3 h-7 flex items-center justify-center text-[14px]">
                Home
              </Link>

              <Link
                href="https://www.facebook.com/"
                target="_blank"
                className="bg-[#282828] SpaceGroteskRegular w-9 text-center select-none text-[#F0F5F9] rounded-md px-1 py-3 h-7 flex items-center justify-center text-[14px]">
                Blog
              </Link>
              <Link
                href="/resume/Resume_Avan Fabian.pdf"
                target="_blank"
                className="bg-[#282828] SpaceGroteskRegular w-15 text-center select-none text-[#F0F5F9] rounded-md px-1 h-7 flex flex-row items-center justify-center text-[14px]">
                <div className="h-full flex flex-row justify-center items-center">
                  Download&nbsp;CV
                </div>
              </Link>
            </div>
          </div>

          {/* resume */}
          <div className="w-full mt-5 text-[#1E2022]">
            <h2 className="SpaceGroteskBold text-base my-2 selection:bg-[#c3c8ce]">Resume</h2>
            <p className="text-[13px] antialiased text-justify SpaceGroteskRegular mb-3 selection:bg-[#c3c8ce]">
              Avan Fabian Daniswara. A one and a half year Informatics student, with a focus on Data Science and Software Engineering. he's passionate on building effective application which can solve a real problem.
            </p>
            <p className="text-[13px] antialiased text-justify SpaceGroteskRegular my-3 selection:bg-[#c3c8ce]">
              Avan is a dedicated to continuous hard skill and soft skill learner. As a student, he's constantly seeking new challenges and opportunities to expand his skill set. In addition to his technical expertise, he also started exploring soft skill like learn english language, how to communicate effectively to gain a well-rounded readiness level of real word job. This commitment to learning ensures that he's well-equipped to adapt to the evolving job landscape.
            </p>
          </div>
          {/* contact */}
          <div className="w-full mt-5 text-[#1E2022]">
            <h2 className="SpaceGroteskBold text-base my-2 selection:bg-[#c3c8ce]">Reach Me</h2>
            <ContactForm />
          </div>
          <div className="w-full mt-5 text-[#1E2022]">
            {/* <h2 className="SpaceGroteskBold text-base my-2 selection:bg-[#c3c8ce]">Social Media</h2> */}
            <div className="w-full items-center flex flex-row gap-x-7">
              <Link
                href={`https://wa.me/081234566046?text=Hello, Discuss with me for some Opportunity!`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsappSquare className="w-[36px] h-[36px]" />
              </Link>
              <Link href="https://www.linkedin.com/in/avan-fabian-daniswara-4342b1254/" target="_blank">
                <FaLinkedin className="w-[36px] h-[36px]" />
              </Link>
              <Link href="https://github.com/AvanFabian/" target="_blank">
                <FaGithub className="w-[36px] h-[36px]" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Leftpage;
