import { motion, Variants } from "motion/react";
import TextBorderAnimation from "../borderText";

export const EnvelopeLink = () => {
    const flapVariants: Variants = {
        initial: {
            scaleY: 1,
            transformOrigin: "50% 0%",
            transition: { duration: 0.4, ease: "circOut" },
        },
        hover: {
            scaleY: -1,
            transformOrigin: "50% 0%",
            transition: { duration: 0.4, ease: "circOut" },
        },
    };

    const topLineVariants: Variants = {
        initial: { opacity: 1 },
        hover: { opacity: 0 },
    };
    const middleLineVariants: Variants = {
        initial: { opacity: 0 },
        hover: { opacity: 1 },
    };

    return (
        <motion.a
            initial="initial"
            whileHover="hover"
            className="flex items-center gap-2 group cursor-pointer"
            target="_blank"
            href="mailto:expsayeedshorif@gmail.com"
        >
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8 overflow-visible"
                    style={{ overflow: "visible" }}
                >
                    {/* 1. ENVELOPE BODY (WITHOUT TOP LINE) */}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75"
                    />

                    {/* 2. TOP HORIZONTAL LINE (HIDES ON HOVER) */}
                    <motion.path
                        variants={topLineVariants}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25"
                    />

                    <motion.path
                        variants={middleLineVariants}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className=""
                        d="M21.75 6.75l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91"
                    />


                    {/* 3. FLAP (OPENS UPWARD) */}
                    <motion.path
                        variants={flapVariants}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="white"
                        fillOpacity="0.1"
                        d="M21.75 6.75v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                </svg>
            </div>

            <TextBorderAnimation text="expsayeedshorif@gmail.com"/>
        </motion.a>
    );
};
