import React, {useRef} from 'react';
import {motion, useScroll} from 'framer-motion';

interface ILiIcon {
    reference: any;
}

const LiIcon: React.FC<ILiIcon> = ({reference}) => {
    const ref = useRef<any>(null);

    const {scrollYProgress} = useScroll({
        target: reference,
        offset: ['center end', 'center center'],
    });
    return (
        <figure className="absolute left-0 stroke-black dark:stroke-white">
            <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r="20" className="stroke-primary stroke-1 dark:stroke-primaryDark fill-none" />
                <motion.circle
                    cx="75"
                    cy="50"
                    r="20"
                    className="stroke-[5px] fill-white dark:fill-black "
                    style={{
                        pathLength: scrollYProgress,
                    }}
                />
                <circle cx="75" cy="50" r="10" className="stroke-1 fill-primary dark:fill-primaryDark animate-pulse" />
            </svg>
        </figure>
    );
};

export default LiIcon;
