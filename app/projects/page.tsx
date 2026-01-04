/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import dataProject from '@/public/data'
import Card from '@/components/Card'
import SlideArrowButton from '@/components/ArrowButton'
import Link from 'next/link'


const Page = () => {
  const ref = useRef<HTMLDivElement | null>(null)

  const cardCount = dataProject.length

  /**
   * Scroll logic:
   * 1 section  = first card hold
   * N sections = remaining cards
   * 1 section  = last card hold
   */
  const TOTAL_SECTIONS = cardCount + 1

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  return (
    <div className="w-full">

      {/* SCROLL CONTAINER */}
      <div
        ref={ref}
        className="relative"
        style={{ height: `${(TOTAL_SECTIONS + 1) * 100}vh` }}
      >

        {/* ───────── INTRO (100vh) ───────── */}
        <div className="h-[calc(100vh-6rem)] flex items-center flex-col gap-y-24 justify-center">
          <p className="text-7xl">Projects</p>
          <div className='flex  items-center justify-center w-full mt-12'>

                    <motion.svg animate={{ y: [0, 12, 0] }}
                        transition={{
                            duration: 1.2,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }} className='fill-accent' id='Double_Down_24' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' opacity='0' />


                        <g transform="matrix(0.48 0 0 0.48 12 12)" >
                            <path className='fill-accent' style={{ stroke: 'none', strokeWidth: 6, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'currentColor', fillRule: 'nonzero', opacity: 1 }} transform=" translate(-25, -25.7)" d="M 44.988281 7.984375 C 44.726563 7.992188 44.476563 8.101563 44.292969 8.292969 L 25 27.585938 L 5.707031 8.292969 C 5.519531 8.097656 5.261719 7.992188 4.992188 7.992188 C 4.582031 7.992188 4.21875 8.238281 4.0625 8.613281 C 3.910156 8.992188 4 9.421875 4.292969 9.707031 L 25 30.414063 L 45.707031 9.707031 C 46.003906 9.421875 46.09375 8.980469 45.9375 8.601563 C 45.777344 8.222656 45.402344 7.976563 44.988281 7.984375 Z M 44.988281 20.984375 C 44.726563 20.992188 44.476563 21.101563 44.292969 21.292969 L 25 40.585938 L 5.707031 21.292969 C 5.519531 21.097656 5.261719 20.992188 4.992188 20.988281 C 4.582031 20.992188 4.21875 21.238281 4.0625 21.613281 C 3.910156 21.992188 4 22.421875 4.292969 22.707031 L 25 43.414063 L 45.707031 22.707031 C 46.003906 22.421875 46.09375 21.980469 45.9375 21.601563 C 45.777344 21.222656 45.402344 20.976563 44.988281 20.984375 Z" strokeLinecap="round" />
                        </g>
                    </motion.svg>
                </div>
        </div>

        {/* ───────── STACKED CARDS ───────── */}
        <div className="sticky top-0 h-screen overflow-hidden">

          {dataProject.map((project, index) => {
            /**
             * Each card gets its own scroll slice
             */
            const start = index / TOTAL_SECTIONS
            const end = (index + 1) / TOTAL_SECTIONS

            // First card is always visible
            const y =
              index === 0
                ? '0%'
                
                : useTransform(
                    scrollYProgress,
                    [start, end],
                    ['100%', '0%']
                  )

            const opacity =
              index === 0
                ? 1
                : useTransform(
                    scrollYProgress,
                    [start, start + 0.05],
                    [0, 1]
                  )

            return (
              <motion.div
                key={project.name}
                style={{
                  y,
                  opacity,
                  zIndex: index + 1,
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Card
                  index={index}
                  total={cardCount}
                  data={project}
                />
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* ───────── NEXT CONTENT ───────── */}
      <div className="h-screen w-full flex items-center px-3 text-center justify-center flex-col gap-y-12">
        <p className="text-4xl">Do You Have Project?</p>
        <Link href="/contact">
          <SlideArrowButton />
        </Link>
      </div>
    </div>
  )
}

export default Page
