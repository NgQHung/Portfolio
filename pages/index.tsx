import AnimatedText from '@/components/AnimatedText';
import HireMe from '@/components/HireMe';
import {LinkArrow} from '@/components/Icons';
import Layout from '@/components/Layout';
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
            <main className={`flex items-center text-black w-full min-h-screen dark:text-white`}>
                <Layout className="pt-0">
                    <div className="flex items-center justify-between w-full ">
                        <div className="relative w-1/2 flex flex-col items-center self-center ">
                            <Image
                                src={profilePic}
                                alt="profilePic"
                                className="w-full h-auto "
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{width: '100%', height: 'auto'}}
                            />
                        </div>
                        <div className="w-1/2">
                            <AnimatedText
                                text="Turning Vision Into Reality With Code And Design"
                                className="!text-6xl"
                            />
                            <p className="my-4 text-base font-medium">
                                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web
                                applications. Explore my latest projects and articles, showcasing my expertise in
                                React.js and web development.
                            </p>
                            <div className="flex items-center self-start mt-2">
                                <Link
                                    href=""
                                    target={'_blank'}
                                    className="flex items-center bg-black text-white p-2.3 px-6 
                                    rounded-lg text-lg font-semibold hover:bg-white hover:text-black
                                    border border-solid border-transparent hover:border-black
                                    dark:bg-white dark:text-black hover:dark:bg-black hover:dark:text-white
                                    hover:dark:border-white"
                                    download={true}>
                                    Resume <LinkArrow className={'w-6 ml-1'} />
                                </Link>
                                <Link
                                    href="mailto:hunghunghung273@gmail.com"
                                    target={'_blank'}
                                    className="ml-4 text-lg font-medium capitalize text-black underline
                                    dark:text-white">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                    <HireMe />
                </Layout>
            </main>
        </>
    );
}
