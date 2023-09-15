import React from 'react';
import {motion} from 'framer-motion';

interface ISkill {
    name: String;
    x: any;
    y: any;
}

const Skill: React.FC<ISkill> = ({name, x, y}) => {
    return (
        <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-black text-white
            py-3 px-6 shadow-black cursor-pointer absolute
          dark:text-black dark:bg-white
          lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
          xs:text-black xs:dark:text-white xs:font-bold
                "
            whileHover={{scale: 1.05}}
            initial={{x: 0, y: 0}}
            whileInView={{x: x, y: y, transition: {duration: 1.5}}}
            transition={{duration: 1.5}}
            viewport={{once: true}}>
            {name}
        </motion.div>
    );
};

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">Skills</h2>
            <div
                className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
            lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
            lg:bg-circularLightLg lg:dark:bg-circularDarkLg
            md:bg-circularLightMd md:dark:bg-circularDarkMd 
            sm:bg-circularLightSm sm:dark:bg-circularDarkSm
            ">
                <motion.div
                    className="flex items-center justify-center rounded-full font-semibold bg-black text-white
                p-9 shadow-black cursor-pointer
                dark:text-black dark:bg-white 
                lg:p-6 md:p-4 xs:text-xs xs:p-2"
                    whileHover={{scale: 1.05}}>
                    web
                </motion.div>
                <Skill name="JavaScript" x="10vw" y="8vw" />
                <Skill name="TypeScript" x="10vw" y="-10vw" />
                <Skill name="ReactJs" x="-13vw" y="-3vw" />
                <Skill name="HTML&CSS" x="-20vw" y="-10vw" />
                <Skill name="Tailwind CSS" x="-15vw" y="10vw" />
                <Skill name="Redux" x="0vw" y="20vw" />

                <Skill name="NodeJs" x="7vw" y="-17vw" />
                <Skill name="MongoDB" x="28vw" y="-1.5vw" />
                <Skill name="Angular" x="0vw" y="-22vw" />
                <Skill name="Spring Boot" x="-28vw" y="0vw" />
                <Skill name="Java" x="27vw" y="15vw" />
                <Skill name="SQL" x="22vw" y="-22vw" />
                <Skill name="Git" x="-25vw" y="18vw" />
                <Skill name="NextJs" x="-20vw" y="-20vw" />
            </div>
        </>
    );
};

export default Skills;
