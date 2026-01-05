'use client'
import { motion } from "motion/react"
import { usePathname } from 'next/navigation'
import Link from "next/link";
import HoverText from "./ui/HoverText";
import ThemeToggle from "./toggle";
import Hamburger from "./ui/Hamburger";
import Image from "next/image";
;



const Navbar = () => {
    


    const pathname = usePathname()
    const active = pathname === "/" ? "home" : pathname.slice(1);

    const items = ['home', 'about', 'projects', 'contact']

    return (
        <div className="flex items-center justify-center px-2 h-full w-full gap-x-12">
            <div className="w-full">
                <Link href={'/'} className="" >
                    <svg 
      className={`stroke-accent-foreground  rotate-10 `}  
      height="70" 
      viewBox="0 0 395 178" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M48.8437 64.8031C44.8537 61.1431 40.8637 59.1431 35.0387 57.9731C25.6976 56.0969 20.8637 61.1231 15.8637 64.1231C9.99111 67.6467 7.86368 74.4431 3.35868 82.2731C1.67269 85.2035 1.51368 88.1231 1.01368 90.7831C0.521281 93.4027 14.7037 94.8031 36.1987 94.6381C44.8376 94.5718 48.4837 93.8031 53.1437 94.9581C57.815 96.1159 57.8437 103.443 57.5137 107.938C57.0962 113.625 47.2237 117.443 41.0287 118.968C32.4502 121.08 19.8537 119.143 18.6837 118.638C18.5037 118.793 19.1637 119.783 19.5037 120.953C19.8437 122.123 19.8437 123.443 19.8437 124.803" 
        strokeWidth="6" 
        strokeLinecap="round" 
        pathLength="1" 
        strokeDashoffset="0px" 
        strokeDasharray="1px 1px"
      />
      <path 
        d="M87.8437 88.8031C87.8437 88.1431 86.1937 87.8031 82.5387 88.6281C77.6863 89.7234 74.8537 93.7931 73.3537 97.9331C72.2667 100.933 72.8437 106.363 73.3387 109.083C73.8337 111.803 74.8237 111.803 75.8287 111.638C79.8777 110.973 82.8237 105.163 87.4937 97.4981C89.1345 94.8051 90.5037 92.8131 91.9987 91.4781C92.6726 90.8764 93.8237 91.4631 94.9937 92.6231C97.4837 95.7631 99.8337 99.1231 101.499 101.618C102.174 102.793 102.504 103.783 104.844 106.803" 
        strokeWidth="6" 
        strokeLinecap="round" 
        pathLength="1" 
        strokeDashoffset="0px" 
        strokeDasharray="1px 1px"
      />
      <path 
        d="M106.844 87.8031C107.174 89.7931 111.144 95.1031 115.994 100.618C117.089 101.863 118.484 102.783 119.824 103.293C121.164 103.803 122.484 103.803 123.494 103.308C127.864 101.166 128.504 94.1631 134.484 81.3431C135.453 79.2654 137.484 81.7631 138.659 85.2581C144.348 102.182 145.484 120.043 148.999 132.418C152.111 143.377 151.844 159.053 151.184 171.718C150.951 176.176 149.204 176.463 147.864 175.973C141.116 173.506 139.524 164.823 134.199 149.533C129.041 134.723 132.164 112.203 137.489 102.003C141.927 93.5022 147.824 87.8231 151.499 82.9881C154.569 78.9484 156.504 73.8231 157.844 70.6431C157.986 70.3048 156.204 71.1231 155.359 71.9581C152.118 75.16 152.184 82.1031 152.504 89.9431C152.571 91.5989 154.484 92.1231 155.659 92.4631C156.834 92.8031 157.824 92.8031 158.829 92.4731C163.139 91.0578 165.824 84.5031 172.814 76.5031C177.012 71.6978 179.504 67.8131 180.174 66.9731C181.176 65.7166 178.844 72.1131 179.009 76.1081C179.121 78.8262 180.504 80.7931 182.164 82.4581C183.016 83.3125 184.484 83.4631 185.659 83.4681C190.885 83.4904 195.824 76.8231 200.659 70.6631C205.412 64.6067 207.484 57.1831 212.994 36.7231C217.656 19.411 214.844 5.87313 216.824 1.31313C218.054 -1.51961 222.764 15.5631 225.959 27.4581C235.604 63.3661 234.174 66.7931 234.509 67.6331C235.066 69.0315 233.184 63.4831 231.689 61.1531C230.353 59.0711 226.864 58.8031 223.369 59.1331C220.687 59.3863 219.184 61.7931 218.019 64.1181C216.63 66.8893 216.844 72.1031 217.504 76.6081C217.703 77.9675 219.484 76.8231 220.659 75.6531C226.207 70.1289 227.824 60.1631 230.334 54.3281C231.13 52.4781 232.484 50.1831 233.659 48.8281C234.834 47.4731 235.824 47.1431 236.499 47.4681C240.008 49.1577 238.504 57.7631 240.004 79.2181C240.347 84.1266 241.164 86.4231 241.999 87.9431C242.834 89.4631 243.824 90.1231 245.489 89.4731C247.154 88.8231 249.464 86.8431 251.844 84.8031" 
        strokeWidth="6" 
        strokeLinecap="round" 
        pathLength="1" 
        strokeDashoffset="0px" 
        strokeDasharray="1px 1px"
      />
    </svg>
                </Link>
            </div>
            <div className="text-2xl md:flex items-center justify-center h-full gap-x-6 hidden ">
                {
                    items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative capitalize px-3 py-2 rounded-md"
                        >
                            {active === item && (
                                <motion.div
                                    layoutId="active-background"
                                    className="absolute inset-0 border-2 bg-accent-foreground rounded-md"
                                    transition={{
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 30
                                    }}
                                />
                            )}
                            <Link
                                href={`${item === 'home' ? '/' : item}`}
                                className={`relative cursor-pointer z-10 ${active === item ? 'text-accent' : ''}`}
                            >
                                {item}
                            </Link>
                        </motion.div>
                    ))
                }
            </div>
            <div className="">
                <ThemeToggle />
            </div>
            <div className="absolute md:hidden">
                <Hamburger/>
            </div>
        </div>
    );
};

export default Navbar;