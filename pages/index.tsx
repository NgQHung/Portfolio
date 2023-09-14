import AnimatedText from '@/components/AnimatedText';
import HireMe from '@/components/HireMe';
import {LinkArrow} from '@/components/Icons';
import Layout from '@/components/Layout';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const profilePic =
    'https://images.unsplash.com/photo-1576228290547-b7e32fe598d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9sZCUyMHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80';

export default function Home() {
    return (
        <>
            <Head>
                <title>CodeBucks | About Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className={`flex items-center text-black w-full min-h-screen dark:text-white`}>
                <Layout className="pt-0 md:pt-16 sm:pt-8">
                    <div className="flex items-center justify-between w-full lg:flex-col">
                        <div className="w-1/2 ">
                            <Image
                                src={profilePic}
                                alt="profilePic"
                                className="w-full h-auto  md:inline-block md:w-full lg:hidden "
                                width={0}
                                height={0}
                                priority
                                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
                            />
                        </div>
                        <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center ">
                            <AnimatedText
                                text="Turning Vision Into Reality With Code And Design"
                                className="!text-6xl !text-left
                                xl:text-5xl lg:!text-center lg:!text=6x1 md:!text-5xl sm:!text-3xl"
                            />
                            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web
                                applications. Explore my latest projects and articles, showcasing my expertise in
                                React.js and web development.
                            </p>
                            <div className="flex items-center self-start mt-2 lg:self-center">
                                <Link
                                    href=""
                                    target={'_blank'}
                                    className="flex items-center bg-black text-white p-2.3 px-6 
                                    rounded-lg text-lg font-semibold hover:bg-white hover:text-black
                                    border border-solid border-transparent hover:border-black
                                    dark:bg-white dark:text-black hover:dark:bg-black hover:dark:text-white
                                    hover:dark:border-white md:p-2 md:px-5 md:text-base"
                                    download={true}>
                                    Resume <LinkArrow className={'w-6 ml-1'} />
                                </Link>
                                <Link
                                    href="mailto:hunghunghung273@gmail.com"
                                    target={'_blank'}
                                    className="ml-4 text-lg font-medium capitalize text-black underline
                                    dark:text-white md:text-base">
                                    Contact
                                </Link>
                            </div>
                        </div>
                        <HireMe />
                    </div>
                </Layout>
            </main>
        </>
    );
}
