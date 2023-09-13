import React, {useRef} from 'react';
import {motion, useScroll} from 'framer-motion';
import LiIcon from './LiIcon';
interface Details {
    position: String;
    company: String;
    companyLink: string;
    time: String;
    address: String;
    work: String;
}

const Details: React.FC<Details> = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef<any>(null);

    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between ">
            <LiIcon reference={ref} />
            <motion.p initial={{y: 50}} whileInView={{y: 0}} transition={{duration: 0.5, type: 'spring'}}>
                <span className=" inline-block capitalize font-bold text-2xl">
                    {position}&nbsp;
                    <a href={companyLink} target="_blank" className="text-primary dark:text-primaryDark capitalize">
                        @{company}
                    </a>
                </span>
                <span className="capitalize font-medium text-black/75 dark:text-white/75">
                    {time} | {address}
                </span>
                <p className="font-medium w-full">{work}</p>
            </motion.p>
        </li>
    );
};

const Experience = () => {
    const ref = useRef<any>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start end', 'center start'],
    });

    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center">Experience</h2>
            <div className="w-[75%] mx-auto relative">
                <motion.div
                    ref={ref}
                    className="absolute left-9 top-0 w-1 h-full bg-black origin-top
                    dark:bg-white"
                    style={{scaleY: scrollYProgress}}
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <Details
                        position="Software Engineer"
                        company="Google"
                        companyLink="www.google.com"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
                    />
                    <Details
                        position="Software Engineer"
                        company="Google"
                        companyLink="www.google.com"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
                    />
                    <Details
                        position="Software Engineer"
                        company="Google"
                        companyLink="www.google.com"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
