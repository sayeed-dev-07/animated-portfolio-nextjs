'use client'
import TextBorderAnimation from "@/components/borderText";
import { EnvelopeLink } from "@/components/ui/GmailPart";

import { motion } from "motion/react";
import type { Variants } from "motion/react";

const headVariants: Variants = {
  initial: { y: 0 },
  hover: { y: -10, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

// Variants for the Arrow Shaft (The | part)
const shaftVariants: Variants = {
  initial: { scaleY: 1, originY: "bottom" },
  hover: { scaleY: 1.5, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

const headVariants2: Variants = {
  initial: { x: 0, y: 0 },
  hover: {
    x: 8, // Moves right
    y: 8, // Moves down

    transition: { type: "spring", stiffness: 300, damping: 20 }
  },
};

// The Shaft scales from the top-left (0,0) towards the bottom-right
const shaftVariants2: Variants = {
  initial: { scale: 1, originX: 0, originY: 0 },
  hover: {
    strokeWidth: 3,
    scale: 1.5,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  },
};

const page = () => {
  return (
    <div className="px-3 py-6 min-h-[calc(100vh-6rem)] justify-between max-w-350 mx-auto flex flex-col">
      <div>
        <motion.div
          initial="initial"
          whileHover="hover"
          className="flex w-fit items-center gap-x-6 cursor-pointer group"
        >
          <p className="lg:text-6xl font-bold sm:text-4xl text-2xl ">
            SOCIAL NETWORKS
          </p>

          <div className="overflow-visible">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:size-16 size-8 overflow-visible"
              style={{ overflow: 'visible' }}
            >
              {/* Arrow Shaft: The diagonal line */}
              <motion.path
                variants={shaftVariants2}
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 4.5 15 15"
              />

              {/* Arrow Head: The "L" shape at the end */}
              <motion.path
                variants={headVariants2}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25V19.5H8.25"
              />
            </svg>
          </div>
        </motion.div>
      </div>
      <div className="first">
        <div className="flex font-medium text-2xl flex-col items-end">
          <a target="_blank" href="https://www.facebook.com/sayeed.shorif.2025">
            <TextBorderAnimation text="Facebook" />
          </a>
          <a target="_blank" href="https://github.com/sayeed-dev-07">
            <TextBorderAnimation text="Github" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/sayeed-shorif-68080234b/">
            <TextBorderAnimation text="LinkedIn" />
          </a>
          {/* <a className="flex items-center gap-2  " target="_blank"
            href="mailto:expsayeedshorif@gmail.com?subject=Project%20Inquiry&body=Hi%20Sayeed%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.%0A%0ARegards%2C"
          >

            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 hidden sm:block">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>


            <TextBorderAnimation text="expsayeedshorif@gmail.com" />
          </a> */}
        <EnvelopeLink/>

        </div>
      </div>
      <div className="second overflow-visible">
        <div className="overflow-visible">
          <p className="text-xl">Get a Project in Mind?</p>

          <motion.div
            initial="initial"
            whileHover="hover"
            className="flex overflow-visible items-center justify-between cursor-pointer border-b-2 border-transparent hover:border-foreground transition-colors duration-500 py-4"
          >
            <p className="lg:text-8xl sm:text-6xl text-5xl font-semibold uppercase">Let&apos;s Talk</p>

            <div className="overflow-visible">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                /* CRITICAL: Added overflow-visible class and inline style to prevent clipping */
                className="lg:size-20 sm:size-14 size-10 overflow-visible"
                style={{ overflow: 'visible' }}
              >
                {/* Arrow Head (The ^ part) */}
                <motion.path
                  variants={headVariants}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 10.5 12 3m0 0 7.5 7.5"
                />

                {/* Arrow Shaft (The | part) */}
                <motion.path
                  variants={shaftVariants}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v18"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
};

export default page;