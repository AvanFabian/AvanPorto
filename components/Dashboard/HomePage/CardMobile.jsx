'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { projectsData } from "@/utils/projects";

const CardMobile = ({ project, idx, isHovered, setIsHovered }) => {
  // const [isHovered, setIsHovered] = useState(new Array(projectsData.length).fill(false));

  return (
    <>
      <div className="relative w-[400px] mx-auto h-[235px]">
        <Image
          width={400}
          height={235}
          className={`w-[400px] mx-auto h-[235px] bg-cover rounded-lg select-none transition-opacity duration-200 ease-in ${isHovered[idx] ? "opacity-10" : "opacity-100"}`}
          src={project.image}
          alt={project.title}
        />
        {/* <div className="absolute top-0 opacity-0 hover:opacity-100 px-8 py-7 duration-200 transition-all ease-in"></div> */}
        <div
          className={`hidden lg:flex absolute top-0 left-0 px-7 py-5 w-[400px] h-[235px] flex-col justify-between duration-200 transition-all ease-in ${isHovered[idx] ? "opacity-100" : "opacity-0"}`}
          onMouseEnter={() => {
            // When the mouse enters, set the boolean at index idx to true
            setIsHovered(prev => {
              const newIsHovered = [...prev];
              newIsHovered[idx] = true;
              return newIsHovered;
            });
          }}
          onMouseLeave={() => {
            // When the mouse leaves, set the boolean at index idx to false
            setIsHovered(prev => {
              const newIsHovered = [...prev];
              newIsHovered[idx] = false;
              return newIsHovered;
            });
          }}
        >
          <h1 className="text-xl font-bold text-left mx-auto select-none">{project.title}</h1>
          {/* <div className="w-[90%] mx-auto"> */}
            <p className="text-[13px] font-bold text-[#6d6c6c] mx-auto text-left select-none">{project.shortdesc}</p>

          {/* </div> */}
          {/* <Button asChild className=""> */}
          <Link href={`${project.previewUrl}`} target="_blank" className="flex mx-auto gap-x-1 w-fit h-[40px] font-bold text-[#34373b] text-[13px] items-center select-none p-2 rounded-xl hover:bg-[#34373b] bg-transparent border-2 border-[#34373b] hover:text-[#f2f2f2] duration-200 transition-all ease-in">
            Open Project <div className="mt-[1px]"><FaArrowRight /></div>
          </Link>
          {/* </Button> */}
        </div>
      </div>
    </>
  )
}

export default CardMobile