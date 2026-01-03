import Link from 'next/link';
import React from 'react';

const linkAdd = '&controls=false&autoplay=true&muted=true&loop=true'
export interface dataProp {
    name: string;
    des: string;
    code: string;
    live: string;
    tech: string[];
    img: string;
}

const Card = ({ data, index, total }: { data: dataProp, index: number, total: number }) => {
    const isFirst = index === 0;
    const isLast = index === total - 1;
    return (
        <div className={`w-screen ${isFirst ? 'rounded-tl-lg border-none' : ''}
        ${isLast ? 'rounded-br-lg border-none' : ''}  bg-[#a3b18a] px-12 h-screen flex items-center justify-center dark:bg-[#1c1f25] text-foreground shrink-0`}>
            <div className='max-w-6xl gap-y-6 mx-auto group flex flex-col lg:flex-row items-center justify-between gap-x-12'>
                <div className='lg:flex-1 w-full'>
                    <iframe
                        src={`${data.img}${linkAdd}`}
                        className="w-full drop-shadow-accent-foreground group-hover:scale-105 transition-all duration-200 ease group-hover:grayscale-0 grayscale-75 rounded-lg  aspect-video"
                        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                    />
                </div>
                <div className='lg:w-[40%] w-full  h-full flex flex-col items-start justify-items-start gap-y-3'>
                    <p className='text-3xl font-semibold'>{data.name}</p>
                    <p className='text-xl'>{data.des}</p>
                    <div>
                        <p className='text-2xl font-semibold'>Tech Used</p>
                        <div>
                            {data.tech.join(' | ')}
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <a className='border-foreground border-2 px-3 py-1.5 rounded-lg' target='_blank' href={`${data.live}`}>Live</a>
                        <a className='border-foreground border-2 px-3 py-1.5 rounded-lg' target='_blank' href={`${data.code}`}>Code</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;