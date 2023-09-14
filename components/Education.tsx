import {motion, useScroll} from 'framer-motion';
import React, {useRef} from 'react';
import LiIcon from './LiIcon';

interface Details {
    type: String;
    place: String;
    time: string;
    info: String;
}
const Details: React.FC<Details> = ({type, time, place, info}) => {
    const ref = useRef<any>(null);

    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between 
        md:w-[80%]">
            <LiIcon reference={ref} />
            <motion.div initial={{y: 50}} whileInView={{y: 0}} transition={{duration: 0.5, type: 'spring'}}>
                <span
                    className="inline-block capitalize font-bold text-2xl
                sm:text-xl xs:text-lg">
                    {type}
                </span>
                <span
                    className="capitalize font-medium text-black/75 dark:text-white/75
                xs:text-sm">
                    {time} | {place}
                </span>
                <p className="font-medium w-full md:text-sm">{info}</p>
            </motion.div>
        </li>
    );
};

const Education = () => {
    const ref = useRef<any>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start end', 'center start'],
    });

    return (
        <div className="my-64">
            <h2
                className="font-bold text-8xl mb-32 w-full text-center
            md:text-6xl xs:text-4xl md:mb-16">
                Education
            </h2>
            <div
                className="w-[75%] mx-auto relative
            lg:w-[90%] md:w-full">
                <motion.div
                    ref={ref}
                    className="absolute left-9 top-0 w-1 h-full bg-black dark:bg-white origin-top
                    md:w-[2px] md:left-[30px] xs:left-[20px]"
                    style={{scaleY: scrollYProgress}}
                />
                <ul
                    className="w-full flex flex-col items-start justify-between ml-4
                xs:ml-2">
                    <Details
                        type="Bachelor Of Software Development"
                        time="2021-present"
                        place="Unicorn University"
                        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
                    />
                </ul>
            </div>
        </div>
    );
};

export default Education;
