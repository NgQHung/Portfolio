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
            <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
            <div
                className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight
            dark:bg-circularDark">
                <motion.div
                    className="flex items-center justify-center rounded-full font-semibold bg-black text-white
                p-9 shadow-black cursor-pointer
                dark:text-black dark:bg-white"
                    whileHover={{scale: 1.05}}>
                    web
                </motion.div>

                <Skill name="Css" x="-5vw" y="-10vw" />
                <Skill name="HTML" x="-20vw" y="2vw" />
                <Skill name="Javascript" x="20vw" y="6vw" />
                <Skill name="ReactJs" x="0vw" y="12vw" />
                <Skill name="NextJs" x="-20vw" y="-15vw" />
                <Skill name="Tailwind Css" x="18vw" y="18vw" />
                <Skill name="NodeJs" x="-25vw" y="18vw" />
            </div>
        </>
    );
};

export default Skills;
