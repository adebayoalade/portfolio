'use client'
import { SiNextdotjs,SiTypescript } from "react-icons/si";
import {
    IconBrandReact,
    IconBrandTailwind,
    IconBrandGit,
    IconServer2,
} from "@tabler/icons-react";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import SlideIn from "./SlideIn";
import { motion } from "framer-motion";

const About = () => {
    const technologies = [
        { logo: <IconBrandReact size={24} className="text-blue-500" />, name: "React" },
        { logo: <TbBrandJavascript size={24} className="text-blue-600" />, name: "Javascript" },
        { logo: <IconServer2 size={24} className="text-teal-500" />, name: "Express" },
        { logo: <BiLogoPostgresql size={24} className="text-green-500" />, name: "Postgresql" },
    ];
    const technologies2 = [
        { logo: <SiNextdotjs size={24} className="text-blue-500" />, name: "Next.js" },
        { logo: <TbBrandJavascript size={24} className="text-blue-600" />, name: "Javascript" },
        { logo: <SiTypescript size={24} className="text-blue-600" />, name: "TypeScript" },
        { logo: <IconBrandTailwind size={24} className="text-teal-500" />, name: "Tailwind" },
        { logo: <IconBrandGit size={24} className="text-orange-600" />, name: "Git" },

    ];
    // Animation variants for each skill
    const skillVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }, 
    };


    return (
        <SlideIn direction='bottom'>
            <section className="px-8 md:px-16 text-white lg:px-32 mb-24">
                <div className="container mx-auto flex flex-col items-center md:flex-row">
                    {/* Description */}
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl text-center font-semibold mb-4 text-white">About <span className="text-yellow-400">Me</span> </h2>
                        <p className="font-light">
                            With over 2 years of experience as a <span className="font-semibold">Frontend Engineer</span> , I have had a deep passion for creating and building things. My journey into
                            software engineering was driven by my love for creation, which began with drawing and making music. This creative inclination naturally
                            led me to explore the world of technology and software development.
                        </p>
                        <p className="font-light mt-5">
                            I specialize in both <span className="font-semibold">Frontend </span> and <span className="font-semibold">Backend </span> Engineer, having worked extensively in both areas. I thrive on the continuous learning
                            process that coding offers and relish the opportunity to apply new knowledge to solve real-world problems. Coding, for me, is more
                            than just a profession, it is a hobby and a source of joy.
                        </p>
                        <p className="font-light mt-5">
                            In addition to my technical skills, I am a highly social person and have always found myself in leadership roles, guiding teams and
                            fostering collaboration.
                        </p>
                        <p className="font-light mt-5">
                            I am always excited to take on new challenges and build innovative solutions that make a difference. Let's connect and see how we can
                            create something amazing together!
                        </p>

                        {/* Experience */}
                        <div className="mt-24 text-white">
                            <h3 className="text-xl font-semibold mb-4 text-white">Work Experience</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
                                <li>
                                    <h4 className="text-xl font-bold">Frontend Engineer, Payhive</h4>
                                    <span className="text-sm text-white">July,2024 - September,2024</span>
                                    <p className="mt-2 text-md font-light">
                                        I designed and implemented a payment dashboard with secure money transfer capabilities, including Naira-to-USSD currency conversions, local wallet-to-wallet transfers, interactive user functionalities, sidebar features, and API integrations to streamline front-end and back-end communication
                                        <span className="block mt-2 font-semibold">Technologies Used <span aria-hidden="true">→</span></span>
                                    </p>
                                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                                        {technologies.map((tech, index) => (
                                            <motion.div
                                                key={index}
                                                className="flex flex-col items-center"
                                                variants={skillVariants} 
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true, amount: 0.2 }} // Controls when the element should animate
                                                transition={{ duration: 0.5, delay: index * 0.1 }} 
                                            >
                                                <button
                                                    key={index}
                                                    className="flex flex-col items-center justify-center p-3 rounded-md  transition-transform transform  focus:outline-none"
                                                >
                                                    <span className="text-lg">{tech.logo}</span>
                                                    <span className="mt-1 text-xs text-white">{tech.name}</span>
                                                </button>
                                            </motion.div>
                                        ))}
                                    </div>
                                </li>
                                <li>
                                    <h4 className="text-xl font-bold">Frontend Engineer, Boosty Inc</h4>
                                    <span className="text-sm text-white">Oct 2024 - present</span>
                                    <p className="mt-2 text-md font-light">
                                        I design and develop responsive, user-friendly interfaces using React.js, Next.js, and Tailwind CSS,Implement modern UI/UX best practices to deliver seamless user experiences across devices,Collaborate with backend teams to integrate RESTful APIs and GraphQL into front-end applications,Optimize performance, accessibility, and cross-browser compatibility for web applications,Write clean, reusable, and maintainable code following industry standards,Conduct testing, debugging, and deployment to ensure high-quality and reliable applications.
                                        <span className="block mt-2 font-semibold">Technologies Used <span aria-hidden="true">→</span></span>
                                    </p>
                                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                                        {technologies2.map((tech, index) => (
                                            <motion.div
                                                key={index}
                                                className="flex flex-col items-center"
                                                variants={skillVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true, amount: 0.2 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                            >
                                                <button
                                                    key={index}
                                                    className="flex flex-col items-center justify-center p-3 rounded-md transition-transform transform  focus:outline-none"
                                                >
                                                    <span className="text-lg">{tech.logo}</span>
                                                    <span className="mt-1 text-xs text-white
                                                    ">{tech.name}</span>
                                                </button>
                                            </motion.div>
                                        ))}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </SlideIn>
    );
};

export default About;