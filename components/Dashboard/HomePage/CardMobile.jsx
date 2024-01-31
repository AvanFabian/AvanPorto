'use client'
import Image from "next/image";
import { textdesc, subHeader, header, transition} from "@/utils/textstyle";
import CardBgDesc from "@/utils/cardbgdesc";
import { motion } from "framer-motion";

const CardMobile = ({ project }) => {

  return (
    <div className="w-full flex flex-col my-6 justify-between">
      <div className="relative w-full h-[330px] z-40 flex items-center">
        <Image
          width={500}
          height={330}
          className={`w-full h-[330px] grayscale  hover:grayscale-0 bg-cover rounded-lg select-none ${transition}`}
          src={project.image}
          alt={project.title}
        />
      </div>
      <CardBgDesc>
        <div className="absolute w-22 flex items-center text-[#E1E4E6] justify-center top-0 left-0 bg-[#282828] rounded-none px-2 py-2">
          <span className={`text-[16px] font-bold  h-full block`}>{project.Status}</span>
        </div>
        <div className="absolute w-22 flex items-center text-[#E1E4E6] justify-center top-0 right-0 bg-[#282828] rounded-none px-2 py-2">
          <span className={`text-[16px] font-bold  h-full block`}>{project.createdAt}</span>
        </div>
        <div className="flex flex-col items-center w-full gap-y-3 px-3 py-2">
          <span className={subHeader}>{project.title}</span>
          <span className={`px-2 ${textdesc}`}>{project.longdesc}</span>
          <div className="grid grid-cols-3 gap-2">
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

export default CardMobile