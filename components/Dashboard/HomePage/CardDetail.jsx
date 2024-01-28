'use client'
import Image from "next/image";
import { textdesc, subHeader, header, transition} from "@/utils/textstyle";
import CardBgDesc from "@/utils/cardbgdesc";

const CardDetail = ({ project, idx }) => {
  // const [isHovered, setIsHovered] = useState(new Array(projectsData.length).fill(false));

  return (
    <div className="w-full flex flex-row">
      <div className="relative w-full h-[500px] z-40 flex items-center">
        <Image
          width={400}
          height={235}
          className={`w-full h-[370px] grayscale  hover:grayscale-0 bg-cover rounded-lg select-none ${transition}`}
          src={project.image}
          alt={project.title}
        />
      </div>
      <CardBgDesc>
        <div className="flex flex-col items-center justify-between  w-full gap-y-3 px-3 py-4">
          <span className={subHeader}>{project.title}</span>
          <span className={`px-12 ${textdesc}`}>{project.longdesc}</span>
          <div className="flex flex-row gap-x-2">
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