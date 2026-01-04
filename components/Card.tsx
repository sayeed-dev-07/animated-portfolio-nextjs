import React from 'react'
import SwipeButton from './animatedButon'

const linkAdd = '&controls=false&autoplay=true&muted=true&loop=true'

export interface dataProp {
  name: string
  des: string
  code: string
  live: string
  tech: string[]
  img: string
}

const Card = ({
  data,
  index,
  total,
}: {
  data: dataProp
  index: number
  total: number
}) => {
  const isFirst = index === 0
  const isLast = index === total - 1

  // 🎨 alternating bg colors (light + dark)
  const bgClass =
    index % 2 === 0
      ? 'bg-white dark:bg-[#1c1f25]'
      : 'bg-[#f2f2f2] dark:bg-[#14161b]'

  return (
    <div
      className={`
        w-screen h-screen shrink-0 px-3 sm:px-12
        flex items-center justify-center
        text-foreground
        transition-colors duration-300
        ${bgClass}
        ${isFirst ? 'rounded-tl-lg border-none' : ''}
        ${isLast ? 'rounded-br-lg border-none' : ''}
      `}
    >
      <div className="max-w-6xl mx-auto group flex flex-col lg:flex-row items-center justify-between gap-x-12 gap-y-6">

        {/* VIDEO */}
        <div className="lg:flex-1 w-full">
          <iframe
            src={`${data.img}${linkAdd}`}
            className="
              w-full aspect-video rounded-lg
              grayscale-75 group-hover:grayscale-0
              group-hover:scale-105
              transition-all duration-300 ease-out
              drop-shadow-accent-foreground
            "
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          />
        </div>

        {/* CONTENT */}
        <div className="lg:w-[40%] w-full flex flex-col gap-y-3">
          <p className="text-3xl font-semibold">{data.name}</p>
          <p className="text-xl">{data.des}</p>

          <div>
            <p className="text-2xl font-semibold">Tech Used</p>
            <div className="opacity-80">
              {data.tech.join(' | ')}
            </div>
          </div>

          <div className="w-full flex items-center justify-between pt-4">
            <a target="_blank" href={data.live}>
              <SwipeButton firstText="Live" secondText="Live" />
            </a>

            <a target="_blank" href={data.code}>
              <SwipeButton
                firstText="Code"
                secondText="Code"
                firstClass="bg-foreground text-background"
                secondClass="bg-background text-foreground"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
