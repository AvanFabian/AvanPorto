"use client";

import React, { useState } from "react";
import {
  PiLinkedinLogoThin,
} from "react-icons/pi";
import { SlFeed } from "react-icons/sl";
import Link from "next/link";

import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

function TestimonialTooltip() {
  const [hoveredIndex, setHoveredIndex] = useState();

  const springConfig = { stiffness: 100, damping: 5 };

  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const people = [
    {
      id: 1,
      name: "Personal Blog",
      image: <SlFeed />,
      position: "danis-data.com",
    },
    {
      id: 2,
      name: "My Linkedin Profile",
      image: <PiLinkedinLogoThin />,
      position: "https://www.linkedin.com/in/avan-fabian-daniswara-4342b1254/",
    },
  ];

  return (
    <div
      className="flex flex-row items-center gap-x-9  
    cursor-pointer text-wrap
    "
    >
      {people.map((testimonial, idx) => (
        <Link
          href={testimonial.position}
          className="-mr-4  relative group w-full"
          key={testimonial.name}
          target="_blank"
          onMouseEnter={() => setHoveredIndex(testimonial.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === testimonial.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  x: -40,
                  y: 25,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute w-min block -top-16 -left-1/2 translate-x-1/2 text-xs items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                {/* <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " /> */}
                {/* <div className="absolute left-10 w-[40%] z-30 -bottom-px bgradient-to-r from-transparent via-sky-500 to-transparent h-px " /> */}
                <a href={testimonial.position} className="font-bold text-white  block relative z-30 text-xs">
                  {testimonial.name}
                </a>
              </motion.div>
            )}
          </AnimatePresence>
          <p>{testimonial.image}</p>
        </Link>
      ))}
    </div>
  );
}

export default TestimonialTooltip;
