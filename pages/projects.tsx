import AnimatedText from '@/components/AnimatedText';
import {GithubIcon} from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {motion} from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';

interface IProject {
    type?: String;
    title: string;
    summary?: String;
    img: string;
    link: string;
    github: string;
}

const FramerImage = motion(Image);

const FeaturedProject: React.FC<IProject> = ({type, title, summary, img, link, github}) => {
    return (
        <article
            className="
            relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border border-solid p-12 shadow-2xl   dark:bg-dark  lg:flex-col  lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4  
            border-black bg-white
        dark:border-white dark:bg-black
        ">
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
                <p className=" my-2 rounded-md font-medium text-black dark:text-white sm:text-sm">{summary}</p>
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
            <TransitionEffect />

            <main className="mb-16  flex w-full flex-col items-center justify-center dark:text-white">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Imagination Trumps Knowledge!"
                        className="mb-16
                    lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />
                    <div className="grid grid-cols-12 gap-24 gap-y-32 gap-x-16 md:gap-y-24 sm:gap-x-1">
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Zalando Clone Web"
                                img="/zalando.png"
                                summary="A clone website using React, Typescript, Redux, Tailwind designed to replicate the 
                                features and functionalities of the popular online fashion and lifestyle 
                                retailer. A clone website aims to provide a similar shopping experience to users."
                                link="https://zalando-clone-five.vercel.app/"
                                github="https://github.com/NgQHung/zalando-5/"
                                type="Featured Project"
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Website cocktail app"
                                img="/cocktail.png"
                                summary="A clone website using React, Typescript, Redux, Tailwind designed to allow users to 
                                view a list of cocktails. They can also see the details of each
                                cocktail. For each registered user they can CRUD their own cocktails."
                                link="https://cocktail-app-opal.vercel.app/"
                                github="https://github.com/NgQHung/cocktail-app-typescript/"
                                type="Featured Project"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Pokemon Card"
                                img="/pokemon.png"
                                link="https://clone-pokemon.vercel.app/"
                                github="https://github.com/NgQHung/clone-pokemon"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Tavern Restaurant"
                                img="/tavern.png"
                                link="https://tavern-restaurant.vercel.app/"
                                github="https://github.com/NgQHung/tavern-restaurant-landing"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default projects;
