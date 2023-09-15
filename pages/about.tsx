import AnimatedText from '@/components/AnimatedText';
import Education from '@/components/Education';
import Layout from '@/components/Layout';
import Skills from '@/components/Skills';
import TransitionEffect from '@/components/TransitionEffect';
import {useInView, useMotionValue, useSpring} from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import React, {useEffect, useRef} from 'react';

interface IYearExperience {
    amount: Number;
    description: String;
}
interface IAnimatedNumbers {
    value: any;
}

const AnimatedNumbers: React.FC<IAnimatedNumbers> = ({value}) => {
    const ref = useRef<any>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000});
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);
    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);

    return <span ref={ref}></span>;
};

const YearExperience: React.FC<IYearExperience> = ({amount, description}) => {
    return (
        <div className="flex flex-col items-end justify-center xl:items-center">
            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={amount} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-black/75 dark:text-white/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                {description}
            </h2>
        </div>
    );
};

const about = () => {
    return (
        <>
            <Head>
                <title>CodeBucks | About Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main
                className="flex w-full flex-col items-center justify-center
            dark:text-white">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Hung Nguyen Quang"
                        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 "
                    />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div
                            className="col-span-3 flex flex-col items-start justify-start col-span-4 
                        md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-black/75 dark:text-white/75 ">
                                Biography
                            </h2>
                            <p className="font-medium">
                                Hi, I am Hung Nguyen Quang, 23 years old. I am currently a student of Unicorn
                                University, I am very confident in my knowledge of Software Development.
                            </p>
                            <p className="my-4 font-medium">
                                Although I have no formal work experience in the IT field, I have been involved in
                                several personal projects recently that have allowed me to develop my skills and gain
                                practical knowledge of the field. During this work, I focused on website development,
                                mainly using HTML, CSS, JavaScript, Typescript and React. I believe these are valuable
                                foundations that can help me understand and well meet the needs of your company`s
                                customers.
                            </p>
                            <p className="font-medium">
                                I am open to entry-level opportunities, internships, or projects where I can apply my
                                skills and continue to grow as an IT professional. I am confident that my passion,
                                determination, and hands-on experience make me a valuable asset to any team.
                            </p>
                        </div>
                        <div
                            className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-black bg-white p-8
                        dark:bg-black dark:border-white md:order-1 md:col-span-8">
                            <div
                                className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-black 
                            dark:bg-white"
                            />
                            <Image
                                width={0}
                                height={0}
                                priority
                                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                                src="/profilePic.png"
                                alt="profile picture"
                                className="w-full h-auto rounded-2xl"
                            />
                        </div>
                        <div className="col-span-2 flex items-center justify-center xl:col-span-8  md:order-3">
                            <YearExperience amount={5} description="projects completed" />
                        </div>
                    </div>
                    <Skills />
                    <Education />
                </Layout>
            </main>
        </>
    );
};

export default about;
