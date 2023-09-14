import AnimatedText from '@/components/AnimatedText';
import {GithubIcon} from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {motion} from 'framer-motion';

interface IProject {
    type: String;
    title: string;
    summary?: String;
    img: string;
    link: string;
    github: string;
}

const FramerImage = motion(Image);
const profilePic =
    'https://images.unsplash.com/photo-1683009427479-c7e36bbb7bca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';

const FeaturedProject: React.FC<IProject> = ({type, title, summary, img, link, github}) => {
    return (
        <article
            className="w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-black bg-white shadow-2xl p-12
        dark:border-white dark:bg-black
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div
                className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-black
            rounded-br-3xl
            dark:bg-white
            xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem] "
            />

            <Link
                href={link}
                target="_blank"
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg
            lg:w-full">
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    width={0}
                    height={0}
                    priority
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
                />
            </Link>
            <div
                className="w-1/2 flex flex-col items-start justify-between pl-6
            lg:w-full lg:pl-0 lg:pt-6">
                <span
                    className="text-primary font-medium text-xl dark:text-primaryDark
                xs:text-base">
                    {type}
                </span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2
                        className="my-2 w-full text-left text-4xl font-bold dark:text-white
                    sm:text-sm">
                        {title}
                    </h2>
                </Link>
                <p
                    className="my-2 font-medium text-black dark:text-white
                sn:text-sm">
                    {summary}
                </p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10">
                        <GithubIcon />
                    </Link>
                    <Link
                        href={link}
                        target="_blank"
                        className="ml-4 rounded-lg bg-black text-white p-2 px-4 text-lg font-semibold
                        dark:bg-white dark:text-black
                        sm:px-4 sm:text-base">
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    );
};

const Project: React.FC<IProject> = ({title, type, summary, img, link, github}) => {
    return (
        <article
            className=" w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-black bg-white p-6 relative
        dark:bg-black dark:border-white
        xs:p-4">
            <div
                className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black
            rounded-br-3xl
            dark:bg-white
            md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
            />
            <Link
                href={link}
                target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg
            e">
                <Image src={img} alt={title} className="w-full h-auto" width={0} height={0} sizes="100vw" />
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span
                    className="text-primary font-medium text-xl dark:text-primaryDark
                lg:text-lg md:text-bas">
                    {type}
                </span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2
                        className="my-2 w-full text-left text-4xl font-bold
                    lg:text-2xl ">
                        {title}
                    </h2>
                </Link>
                <p
                    className="my-2 font-medium text-black
                dark:text-white">
                    {summary}
                </p>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link
                        href={link}
                        target="_blank"
                        className="rounded text-lg font-semibold underline
                    md:text-base">
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className="w-8 md:w-6">
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    );
};

const projects = () => {
    return (
        <>
            <Head>
                <title>CodeBucks | About Page</title>
                <meta name="description" content="any description" />
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-white">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Imagination Trumps Knowledge!"
                        className="mb-16
                    lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />
                    <div
                        className="grid grid-cols-12 gap-24 gap-y-32
                    xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Crypto Screener Application"
                                img={profilePic}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                lo cal currency."
                                link="/"
                                github="-"
                                type="Featured Project"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Crypto Screener Application"
                                img={profilePic}
                                link="/"
                                github="-"
                                type="Featured Project"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Crypto Screener Application"
                                img={profilePic}
                                link="/"
                                github="-"
                                type="Featured Project"
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Crypto Screener Application"
                                img={profilePic}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                lo cal currency."
                                link="/"
                                github="-"
                                type="Featured Project"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Crypto Screener Application"
                                img={profilePic}
                                link="/"
                                github="-"
                                type="Featured Project"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Crypto Screener Application"
                                img={profilePic}
                                link="/"
                                github="-"
                                type="Featured Project"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default projects;
