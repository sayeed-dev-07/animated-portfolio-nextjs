'use client'
import Image from 'next/image';
import { motion } from 'motion/react'
import { IoLogoHtml5, IoLogoJavascript } from 'react-icons/io';
import { FaCss3, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiFramer, SiReactquery, SiRedux, SiTailwindcss, SiTypescript, SiVite } from 'react-icons/si';
import { RiNextjsLine } from 'react-icons/ri';
import ExperienceSection from '@/components/Experience';
import ArrowButton from '@/components/ui/Download';
import Link from 'next/link';


const page = () => {
    const animate = {
        opacity: 1, x: 0, filter: 'blur(0px)'
    }
    const initial = {
        x: -100, opacity: 0, filter: 'blur(10px)'
    }
    const parentVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const childVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 400,
                damping: 22,
            },
        },
    };


    return (
        <div className='px-3'>
            <div className='flex items-center justify-center flex-col'>
                <div className='flex items-center justify-center  flex-col md:flex-row t gap-x-6 gap-y-6 md:mt-16 mt-3'>
                    <div className='md:w-[50%] w-full'>
                        <div className='flex flex-col gap-y-8'>
                            <motion.p initial={initial} animate={animate} transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                            }} className='uppercase text-3xl font-semibold'>Biography</motion.p>
                            <motion.p initial={initial} animate={animate} transition={{
                                delay: 0.2, type: "spring",
                                stiffness: 300,
                                damping: 20,
                            }} className='text-xl'>I am <span className='font-semibold'>Sayeed Shorif</span>, a Front-End Web Developer with experience building modern, responsive web applications using JavaScript, TypeScript, React, and Next.js. I have a strong understanding of component-based architecture, state management, API integration, and performance optimization, and I am committed to writing clean, maintainable code while delivering intuitive user experiences.</motion.p>
                            <motion.p initial={initial} animate={animate} transition={{
                                delay: 0.4, type: "spring",
                                stiffness: 300,
                                damping: 20,
                            }} className='italic text-lg'>It doesn’t take much to be kind, but takes alot to be kind.</motion.p>
                        </div>
                        <div className='mt-6 flex items-center justify-start w-full'>
                            <svg className='w-[40%] stroke-accent-foreground' width="500" height="100" viewBox="0 0 395 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <motion.path initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{
                                        delay: 1,
                                        duration: 0.5,
                                        ease: "easeInOut",
                                    }} d="M48.8437 64.8031C44.8537 61.1431 40.8637 59.1431 35.0387 57.9731C25.6976 56.0969 20.8637 61.1231 15.8637 64.1231C9.99111 67.6467 7.86368 74.4431 3.35868 82.2731C1.67269 85.2035 1.51368 88.1231 1.01368 90.7831C0.521281 93.4027 14.7037 94.8031 36.1987 94.6381C44.8376 94.5718 48.4837 93.8031 53.1437 94.9581C57.815 96.1159 57.8437 103.443 57.5137 107.938C57.0962 113.625 47.2237 117.443 41.0287 118.968C32.4502 121.08 19.8537 119.143 18.6837 118.638C18.5037 118.793 19.1637 119.783 19.5037 120.953C19.8437 122.123 19.8437 123.443 19.8437 124.803" strokeWidth="6" strokeLinecap="round" />
                                <motion.path initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{
                                        delay: 1.5,
                                        duration: 0.2,
                                        ease: "easeInOut",
                                    }} d="M87.8437 88.8031C87.8437 88.1431 86.1937 87.8031 82.5387 88.6281C77.6863 89.7234 74.8537 93.7931 73.3537 97.9331C72.2667 100.933 72.8437 106.363 73.3387 109.083C73.8337 111.803 74.8237 111.803 75.8287 111.638C79.8777 110.973 82.8237 105.163 87.4937 97.4981C89.1345 94.8051 90.5037 92.8131 91.9987 91.4781C92.6726 90.8764 93.8237 91.4631 94.9937 92.6231C97.4837 95.7631 99.8337 99.1231 101.499 101.618C102.174 102.793 102.504 103.783 104.844 106.803" strokeWidth="6" strokeLinecap="round" />
                                <motion.path initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{
                                        delay: 1.7,
                                        duration: 2,
                                        ease: "easeInOut",
                                    }} d="M106.844 87.8031C107.174 89.7931 111.144 95.1031 115.994 100.618C117.089 101.863 118.484 102.783 119.824 103.293C121.164 103.803 122.484 103.803 123.494 103.308C127.864 101.166 128.504 94.1631 134.484 81.3431C135.453 79.2654 137.484 81.7631 138.659 85.2581C144.348 102.182 145.484 120.043 148.999 132.418C152.111 143.377 151.844 159.053 151.184 171.718C150.951 176.176 149.204 176.463 147.864 175.973C141.116 173.506 139.524 164.823 134.199 149.533C129.041 134.723 132.164 112.203 137.489 102.003C141.927 93.5022 147.824 87.8231 151.499 82.9881C154.569 78.9484 156.504 73.8231 157.844 70.6431C157.986 70.3048 156.204 71.1231 155.359 71.9581C152.118 75.16 152.184 82.1031 152.504 89.9431C152.571 91.5989 154.484 92.1231 155.659 92.4631C156.834 92.8031 157.824 92.8031 158.829 92.4731C163.139 91.0578 165.824 84.5031 172.814 76.5031C177.012 71.6978 179.504 67.8131 180.174 66.9731C181.176 65.7166 178.844 72.1131 179.009 76.1081C179.121 78.8262 180.504 80.7931 182.164 82.4581C183.016 83.3125 184.484 83.4631 185.659 83.4681C190.885 83.4904 195.824 76.8231 200.659 70.6631C205.412 64.6067 207.484 57.1831 212.994 36.7231C217.656 19.411 214.844 5.87313 216.824 1.31313C218.054 -1.51961 222.764 15.5631 225.959 27.4581C235.604 63.3661 234.174 66.7931 234.509 67.6331C235.066 69.0315 233.184 63.4831 231.689 61.1531C230.353 59.0711 226.864 58.8031 223.369 59.1331C220.687 59.3863 219.184 61.7931 218.019 64.1181C216.63 66.8893 216.844 72.1031 217.504 76.6081C217.703 77.9675 219.484 76.8231 220.659 75.6531C226.207 70.1289 227.824 60.1631 230.334 54.3281C231.13 52.4781 232.484 50.1831 233.659 48.8281C234.834 47.4731 235.824 47.1431 236.499 47.4681C240.008 49.1577 238.504 57.7631 240.004 79.2181C240.347 84.1266 241.164 86.4231 241.999 87.9431C242.834 89.4631 243.824 90.1231 245.489 89.4731C247.154 88.8231 249.464 86.8431 251.844 84.8031" strokeWidth="6" strokeLinecap="round" />
                            </svg>

                        </div>

                    </div>
                    <motion.div initial={{ x: 100, opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }} transition={{
                        delay: 0.6, type: "spring",
                        stiffness: 300,
                        damping: 20,
                    }} >
                        <Image className='rounded-xl drop-shadow-accent-foreground/20 drop-shadow-xl' height={400} width={350} loading='lazy' src='/me.png' alt='me' />
                    </motion.div>
                </div>
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
            
            <div className='md:my-24 my-6'>
                <p className='uppercase text-3xl '>Experience</p>
                <div className='overflow-hidden'>
                    <ExperienceSection/>
                </div>
            </div>

            <div className='md:my-12 my-3'>
                <motion.p whileInView={animate} initial={initial} transition={{
                    duration: 0.5, type: "spring",
                    stiffness: 300,
                    damping: 20,
                }} className='uppercase text-3xl'>Skills</motion.p>
                <motion.div id='experience' variants={parentVariants} initial='hidden' whileInView='show' className="flex my-6 font-semibold items-center justify-start gap-4 flex-wrap">
                    <motion.div variants={childVariants} className="flex items-center justify-center gap-x-1.5 px-4 py-1.5 bg-accent-foreground text-accent rounded-md">
                        <IoLogoHtml5 size={24} />
                        <p>HTML5</p>
                    </motion.div>

                    <motion.div variants={childVariants} className="flex items-center justify-center gap-x-1.5 px-4 py-1.5 bg-accent-foreground text-accent rounded-md">
                        <FaCss3 size={24} />
                        <p>CSS</p>
                    </motion.div>

                    <motion.div variants={childVariants} className="flex items-center justify-center gap-x-1.5 px-4 py-1.5 bg-accent-foreground text-accent rounded-md">
                        <SiTailwindcss size={24} />
                        <p>Tailwind CSS</p>
                    </motion.div>

                    <motion.div variants={childVariants} className="flex items-center justify-center gap-x-1.5 px-4 py-1.5 bg-accent-foreground text-accent rounded-md">
                        <IoLogoJavascript size={24} />
                        <p>JavaScript</p>
                    </motion.div>

                    <motion.div variants={childVariants} className="flex items-center justify-center gap-x-1.5 px-4 py-1.5 bg-accent-foreground text-accent rounded-md">
                        <SiTypescript size={24} />
                        <p>TypeScript</p>
                    </motion.div>

                    <motion.div variants={childVariants} className="flex items-center justify-center gap-x-1.5 px-4 py-1.5 bg-accent-foreground text-accent rounded-md">
                        <SiVite size={24} />
                        <p>Vite</p>
                    </motion.div>

                    <motion.div variants={childVariants} className="flex items-center justify-center gap-x-1.5 px-4 py-1.5 bg-accent-foreground text-accent rounded-md">
                        <RiNextjsLine size={24} />
                        <p>Next.js</p>
                    </motion.div>

                    {/* New additions */}

                    <motion.div variants={childVariants} className="flex items-center justify-center gap-x-1.5 px-4 py-1.5 bg-accent-foreground text-accent rounded-md">
                        <SiFramer size={24} />
                        <p>Framer Motion</p>
                    </motion.div>

                    <motion.div variants={childVariants} className="flex items-center justify-center gap-x-1.5 px-4 py-1.5 bg-accent-foreground text-accent rounded-md">
                        <SiReactquery size={24} />
                        <p>TanStack Query</p>
                    </motion.div>

                    <motion.div variants={childVariants} className="flex items-center justify-center gap-x-1.5 px-4 py-1.5 bg-accent-foreground text-accent rounded-md">
                        <p>Zustand</p>
                    </motion.div>

                    <motion.div variants={childVariants} className="flex items-center justify-center gap-x-1.5 px-4 py-1.5 bg-accent-foreground text-accent rounded-md">
                        <SiRedux size={24} />
                        <p>Redux</p>
                    </motion.div>

                    <motion.div variants={childVariants} className="flex items-center justify-center gap-x-1.5 px-4 py-1.5 bg-accent-foreground text-accent rounded-md">
                        <FaGitAlt size={24} />
                        <p>Git</p>
                    </motion.div>

                    <motion.div variants={childVariants} className="flex items-center justify-center gap-x-1.5 px-4 py-1.5 bg-accent-foreground text-accent rounded-md">
                        <FaGithub size={24} />
                        <p>GitHub</p>
                    </motion.div>
                </motion.div>

            </div>
            <div className='min-h-75 flex items-center justify-center flex-col gap-y-4'>
                <p className='text-3xl'>Download My Resume</p>
                <a target='_blank' href={'https://drive.google.com/file/d/1QGdXt2LNQyYeninZln0iZpIi1SFNVw50/view'}>
                <ArrowButton text='Resume' />
                </a>
            </div>
        </div>
    );
};

export default page;