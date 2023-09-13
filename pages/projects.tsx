import AnimatedText from '@/components/AnimatedText';
import {GithubIcon} from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

interface IProject {
    type: String;
    title: string;
    summary?: String;
    img: string;
    link: string;
    github: string;
}

const profilePic =
    'https://images.unsplash.com/photo-1683009427479-c7e36bbb7bca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';

const FeaturedProject: React.FC<IProject> = ({type, title, summary, img, link, github}) => {
    return (
        <article
            className="w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-black bg-white shadow-2xl p-12">
            <div
                className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-black
            rounded-br-3xl"
            />

            <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
                <img src={img} alt={title} className="w-full h-auto" />
            </Link>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6">
                <span className="text-primary font-medium text-xl">{type}</span>
                <Link href={link} target="_black" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-black">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10">
                        <GithubIcon />
                    </Link>
                    <Link
                        href={link}
                        target="_blank"
                        className="ml-4 rounded-lg bg-black text-white p-2 px-4 text-lg font-semibold">
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
            className="w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-white p-6 relative">
            <div
                className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black
            rounded-br-3xl"
            />
            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                <img src={img} alt={title} className="w-full h-auto" />
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl">{type}</span>
                <Link href={link} target="_black" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-black">{summary}</p>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} target="_blank" className="rounded text-lg font-semibold underline">
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className="w-10">
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
            <main className="w-full mb-16 flex flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16" />
                    <div className="grid grid-cols-12 gap-24 gap-y-32">
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
                        <div className="col-span-6">
                            <Project
                                title="Crypto Screener Application"
                                img={profilePic}
                                link="/"
                                github="-"
                                type="Featured Project"
                            />
                        </div>
                        <div className="col-span-6">
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
                        <div className="col-span-6">
                            <Project
                                title="Crypto Screener Application"
                                img={profilePic}
                                link="/"
                                github="-"
                                type="Featured Project"
                            />
                        </div>
                        <div className="col-span-6">
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
