import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IFeaturedArticle {
    img: string;
    title: string;
    time: String;
    summary: String;
    link: string;
}

const profilePic =
    'https://images.unsplash.com/photo-1683009427479-c7e36bbb7bca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';

const FeaturedArticle: React.FC<IFeaturedArticle> = ({img, title, time, summary, link}) => {
    return (
        <li
            className="col-span-1 w-full p-4 bg-white border border-solid border-black rounded-2xl
         dark:border-white dark:bg-black">
            <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
                <Image
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    width={0}
                    height={0}
                    priority
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
                />
            </Link>
            <Link href={link} target="_blank">
                <h2 className="capitalize text-2xl font-bold my-2 hover:underline">{title}</h2>
            </Link>
            <p className="text-sm mb-2">{summary}</p>
            <span className="text-primary font-semibold dark:text-primaryDark">{time}</span>
        </li>
    );
};

const articles = () => {
    return (
        <>
            <Head>
                <title>CodeBucks | About Page</title>
                <meta name="description" content="any description" />
            </Head>
            <main
                className="w-ful mb-16 flex flex-col items-center justify-center overflow-hidden
            dark:text-white
            ">
                <Layout className="pt-16">
                    <AnimatedText text="Words Can Change The World!" className="mb-16" />
                    <ul className="grid grid-cols-2 gap-16">
                        <FeaturedArticle
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            time="9 min read"
                            link="/"
                            img={profilePic}
                        />
                        <FeaturedArticle
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            time="9 min read"
                            link="/"
                            img={profilePic}
                        />
                    </ul>
                </Layout>
            </main>
        </>
    );
};

export default articles;
