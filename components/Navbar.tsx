'use client'
import { motion } from "motion/react"
import { usePathname } from 'next/navigation'
import Link from "next/link";
import HoverText from "./ui/HoverText";
import ThemeToggle from "./toggle";
import Hamburger from "./ui/Hamburger";
;



const Navbar = () => {
    


    const pathname = usePathname()
    const active = pathname === "/" ? "home" : pathname.slice(1);

    const items = ['home', 'about', 'projects', 'contact']

    return (
        <div className="flex items-center justify-center px-2 h-full w-full gap-x-12">
            <div className="w-full">
                <Link href={'/'}>
                    <HoverText className="font-outfit" text="Sayeed" fontSize="text-2xl md:text-4xl" />
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