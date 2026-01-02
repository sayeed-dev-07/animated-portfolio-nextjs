import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
}

const experiences: Experience[] = [
    {
        title: "Diploma In Computer Technology",
        company: "Rangpur Polytechnic Institute",
        period: "2021 - 2025",
        description: "Studied core computer science and software development fundamentals, with a focus on web development, data structures, and basic application development. Gained hands-on experience in programming, problem-solving, and building practical software solutions."
    },
    {
        title: "Mern FrontEnd Developer Intern",
        company: "BD Calling It Ltd.",
        period: "2025 - 2025(4 month)",
        description: "Worked as a MERN Frontend Developer Intern, focusing on building responsive and reusable user interfaces using React. Collaborated with the development team to integrate APIs, implement modern UI patterns, and follow best practices in clean, maintainable code."
    },
    {
        title: "Student",
        company: "The Odin Project",
        period: "2024 - present",
        description: "Actively learning full-stack web development through The Odin Project, focusing on modern JavaScript, HTML, CSS, Git, and React. Building real-world projects while strengthening problem-solving and software engineering fundamentals."
    },
];

interface ExperienceCardProps {
    experience: Experience;
    index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
    const isLeft = index % 2 === 0;
    const cardRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "center center"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
    const x = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3,0.4, 0.5], [isLeft ? -200 : 200,isLeft ? -160 : 160,isLeft ? -120 : 120, isLeft ? -80 : 80, isLeft ? -40 : 40, 0]);

    return (
        <motion.div
            ref={cardRef}
            style={{ opacity, x }}
            className={`flex ${isLeft ? 'justify-start' : 'justify-end'} mb-24 relative `}
        >
            <div className={`md:w-5/12 p-2 md:p-6 rounded-lg shadow-lg dark:border-[#c7c5c573] border-[#0000007f] border-2 hover:shadow-xl transition-shadow bg-[#e2e2e3] dark:text-white dark:bg-[#272525] `}>
                <div className="">
                    <h3 className="text-2xl font-fira font-bold  mb-1">{experience.title}</h3>
                    <p className=" font-semibold font-fira text-xl mb-2">{experience.company}</p>
                    <p className="text-lg font-semibold  mb-3">{experience.period}</p>
                    <p className=" text-xl leading-relaxed">{experience.description}</p>
                </div>
            </div>

            {/* Timeline dot */}
            <motion.div
                style={{ opacity }}
                className="absolute hidden md:block left-1/2 transform -translate-x-1/2 top-8 z-10"
            >
                <div className="w-5 h-5 bg-accent rounded-full border-4 border-accent-foreground shadow-lg" />
            </motion.div>
        </motion.div>
    );
};

const ExperienceSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="py-20 text-accent-foreground px-4">
            <div className="max-w-6xl mx-auto">
                <div ref={containerRef} className="relative ">
                    {/* Animated line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full">

                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-1 bg-accent-foreground shadow-md"
                        />
                    </div>

                    {/* Experience cards */}
                    <div className="relative">
                        {experiences.map((exp, index) => (
                            <ExperienceCard key={index} experience={exp} index={index} />
                        ))}
                    </div>

                    {/* End dot */}
                    <motion.div
                        style={{
                            opacity: useTransform(scrollYProgress, [0.95, 1], [0, 1]),
                            scale: useTransform(scrollYProgress, [0.95, 1], [0, 1])
                        }}
                        className="flex justify-center relative"
                    >
                        <div className="w-6 h-6 bg-accent-foreground rounded-full border-4 border-accent-foreground shadow-xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;