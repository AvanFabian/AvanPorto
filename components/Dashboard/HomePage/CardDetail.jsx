'use client'
import { textdesc, subHeader, header, transition } from "@/utils/textstyle";
import CardBgDesc from "@/utils/cardbgdesc";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { CreatedTime, DevelopmentStatus, HostingStatus } from "@/utils/label";

const CardDetail = ({ project, idx, isHovered, setIsHovered }) => {

  return (
    <div className="w-full flex flex-row">
      <div
        className=" w-full h-[500px] z-40 flex items-center"
        initial={{ opacity: 0.5, scale: 0.2 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        whileHover={{ scale: 1.2 }}
        whileInView={{ opacity: 1, scale: 1 }}>
        {/* parent for the image */}
        <div
          className="relative w-full h-[370px]"
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
          {/* Image */}
          <motion.img
            width={400}
            height={235}
            className={`w-full h-[370px] bg-cover rounded-lg select-none ${transition} ${isHovered[idx] ? "opacity-100" : "opacity-10"}`}
            src={project.image}
            alt={project.title}
          />
          {/* Link to the github */}
          <Link
            href={`${project.gitUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer z-20 justify-center absolute top-0 right-6 flex w-[30px] h-[30px] font-bold text-[#34373b] text-[13px] items-center 
            select-none p-2 rounded-xl hover:bg-[#7c8187] bg-[#34373b]  
          hover:text-[#f2f2f2] duration-200 transition-all ease-in">
            <div className="mt-[1px] text-[#f2f2f2] text-[16px]"><FaGithub /></div>
          </Link>
          {/* Link to the preview */}
          <Link
            href={`${project.previewUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer z-20 justify-center absolute top-0 right-0 flex w-[30px] h-[30px] font-bold text-[#34373b] text-[13px] items-center 
            select-none p-2 rounded-xl hover:bg-[#7c8187] bg-[#34373b]  
          hover:text-[#f2f2f2] duration-200 transition-all ease-in">
            <div className="mt-[1px] text-[#f2f2f2] text-[16px]"><FaArrowRight /></div>
          </Link>
          <HostingStatus project={project} />
          {/* Deskripsi */}
          <div className={`hidden lg:flex w-full absolute top-0 h-[370px] px-12 py-5 flex-col justify-center gap-y-7 duration-200 transition-all ease-in ${isHovered[idx] ? "opacity-0" : "opacity-100"}`}>
            <h1 className="text-xl font-bold text-left mx-auto select-none">{project.title}</h1>
            <p className="text-[13px] font-bold text-[#6d6c6c] mx-auto text-left select-none">{project.shortdesc}</p>
          </div>
        </div>
      </div>
      {/* Deskripsi right */}
      <CardBgDesc>
        <DevelopmentStatus project={project} />
        <CreatedTime project={project} />
        <div className="flex flex-col items-center w-full gap-y-3 px-3 py-4">
          <span className={subHeader}>{project.title}</span>
          <span className={`px-12 ${textdesc}`}>{project.longdesc}</span>
          <div className="flex absolute bottom-2 flex-row gap-x-2">
            {project.TechStack.split(', ').map((tech, index) => (
              <div key={index} className="bg-[#282828] SpaceGroteskRegular w-[100px] text-center select-none text-[#F0F5F9] rounded-md px-2 py-3 h-7 flex items-center justify-center text-[14px] font-RubikBold">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </CardBgDesc>
    </div>
  )
}

export default CardDetail