'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


const CardMobile = ({ project, idx }) => {

  return (
    <div className="flex flex-col gap-y-3">
      <div className="relative w-full mx-auto">
        <Image
          width={400}
          height={235}
          className={`w-[400px] mx-auto h-[235px] bg-cover rounded-lg select-none transition-opacity duration-200 ease-in`}
          src={project.image}
          alt={project.title}
        />        
      </div>
      <div className="">

      </div>
    </div>
  )
}

export default CardMobile