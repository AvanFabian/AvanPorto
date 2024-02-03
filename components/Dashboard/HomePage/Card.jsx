'use client'
// import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
// import { projectsData } from "@/utils/projects";
import { FaGithub } from "react-icons/fa";

const Card = ({ project, idx, isHovered, setIsHovered }) => {
  // const [isHovered, setIsHovered] = useState(new Array(projectsData.length).fill(false));

  return (
    <>
      <div
        className="relative w-[400px] mx-auto h-[235px]"
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
        }}>
        <Image
          width={400}
          height={235}
          className={`w-[400px] z-15 absolute h-[235px] bg-cover rounded-lg select-none duration-200 transition-all ease-in ${isHovered[idx] ? "opacity-100" : "opacity-10"}`}
          src={project.image}
          alt={project.title}
        />
          <Link 
            href={`${project.previewUrl}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer z-20 justify-center absolute top-0 right-6 flex w-[30px] h-[30px] font-bold text-[#34373b] text-[13px] items-center 
            select-none p-2 rounded-xl hover:bg-[#7c8187] bg-[#34373b]  
          hover:text-[#f2f2f2] duration-200 transition-all ease-in">
              <div className="mt-[1px] text-[#f2f2f2] text-[16px]"><FaGithub /></div>
          </Link>
          <Link 
            href={`${project.previewUrl}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer z-20 justify-center absolute top-0 right-0 flex w-[30px] h-[30px] font-bold text-[#34373b] text-[13px] items-center 
            select-none p-2 rounded-xl hover:bg-[#7c8187] bg-[#34373b]  
          hover:text-[#f2f2f2] duration-200 transition-all ease-in">
              <div className="mt-[1px] text-[#f2f2f2] text-[16px]"><FaArrowRight /></div>
          </Link>
        <div
          className={`hidden lg:flex px-7 py-5 w-[400px] h-[235px] flex-col justify-center gap-y-7 duration-200 transition-all ease-in ${isHovered[idx] ? "opacity-0" : "opacity-100"}`}>
          <h1 className="text-xl font-bold text-left mx-auto select-none">{project.title}</h1>
          <p className="text-[13px] font-bold text-[#6d6c6c] mx-auto text-left select-none">{project.shortdesc}</p>
        </div>
      </div>
    </>
  )
}

export default Card