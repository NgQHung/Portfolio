import AnimatedText from '@/components/AnimatedText';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Layout from '@/components/Layout';
import Skills from '@/components/Skills';
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

const profilePic =
    'https://images.unsplash.com/photo-1576228290547-b7e32fe598d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9sZCUyMHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80';

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
            <main
                className="flex w-full flex-col items-center justify-center
            dark:text-white">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Passion Fuels Purpose!"
                        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 "
                    />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div
                            className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 
                        md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-black/75 dark:text-white/75 ">
                                Biography
                            </h2>
                            <p className="font-medium">
                                Hi, I`m CodeBucks, a web developer and UI/UX designer with a passion for creating
                                beautiful, functional, and user-centered digital experiences. With 4 years of experience
                                in the field. I am always looking for new and innovative ways to bring my clients`
                                visions to life.
                            </p>
                            <p className="my-4 font-medium">
                                I believe that design is about more than just making things look pretty – it`s about
                                solving problems and creating intuitive, enjoyable experiences for users.{' '}
                            </p>
                            <p className="font-medium">
                                Whether I`m working on a website, mobile app, or other digital product, I bring my
                                commitment to design excellence and user-centered thinking to every project I work on. I
                                look forward to the opportunity to bring my skills and passion to your next project.
                            </p>
                        </div>
                        <div
                            className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-black bg-white p-8
                        dark:bg-black dark:border-white xl:col-span-4 md:order-1 md:col-span-8">
                            <div
                                className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-black 
                            dark:bg-white"
                            />
                            <Image
                                width={0}
                                height={0}
                                priority
                                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                                src={profilePic}
                                alt=""
                                className="w-full h-auto rounded-2xl"
                            />
                        </div>
                        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <YearExperience amount={50} description="satisfied clients" />
                            <YearExperience amount={40} description="projects completed" />
                            <YearExperience amount={4} description="years of experience" />
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    );
};

export default about;
