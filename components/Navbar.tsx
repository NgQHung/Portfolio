import Link from 'next/link';
import React, {ReactNode, useState} from 'react';
import Logo from './Logo';
import {useRouter} from 'next/router';
import {GithubIcon, LinkedInIcon, MoonIcon, SunIcon} from './Icons';
import {motion} from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';

interface ICustomLink {
    children?: ReactNode;
    href: string;
    title?: string;
    className?: string;
    toggle?: () => void;
}
const MotionLink: React.FC<ICustomLink> = ({href, children}) => {
    return (
        <motion.a
            className="w-6 mx-3 sm:mx-1"
            href={href}
            target={'_blank'}
            whileHover={{y: -2}}
            whileTap={{scale: 0.9}}>
            {children}
        </motion.a>
    );
};

const CustomLink: React.FC<ICustomLink> = ({href, title, className = ''}) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group text-black dark:text-white`}>
            {title}
            <span
                className={`h-[1px] inline-block bg-black 
                absolute left-0 -bottom-0.5 
                group-hover:w-full transition-[width] ease duration-300 
                ${router.asPath === href ? 'w-full' : 'w-0'}
                dark:bg-white`}>
                &nbsp;
            </span>
        </Link>
    );
};
const CustomMobileLink: React.FC<ICustomLink> = ({href, title, className = '', toggle}) => {
    const router = useRouter();
    const clickHandler = () => {
        toggle?.();
        router.push(href);
    };

    return (
        <button onClick={clickHandler} className={`${className} relative group text-white dark:text-black my-2`}>
            {title}
            <span
                className={`h-[1px] inline-block bg-white 
                absolute left-0 -bottom-0.5 
                group-hover:w-full transition-[width] ease duration-300 
                ${router.asPath === href ? 'w-full' : 'w-0'}
                dark:bg-black`}>
                &nbsp;
            </span>
        </button>
    );
};

const Navbar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState<Boolean>(false);
    const clickHandler = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header
            className="w-full px-32 py-8 font-medium flex items-center justify-between
         dark:text-white relative z-10 lg:px-16 md:px-12 sm:px-8">
            <button className=" flex-col justify-center items-center hidden lg:flex " onClick={clickHandler}>
                <span
                    className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5  ${
                        isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`}></span>
                <span
                    className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 my-0.5 rounded-sm ${
                        isOpen ? 'opacity-0' : 'opacity-100'
                    }`}></span>
                <span
                    className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${
                        isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`}></span>
            </button>
            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4" />
                    <CustomLink href="/about" title="About" className="mx-4" />
                    <CustomLink href="/projects" title="Projects" className="mx-4" />
                    <CustomLink href="/articles" title="Articles" className="ml-4" />
                </nav>

                <nav className="flex items-center justify-center flex-wrap ">
                    <MotionLink href="/">
                        <GithubIcon />
                    </MotionLink>
                    <MotionLink href="/">
                        <LinkedInIcon />
                    </MotionLink>
                    <button
                        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                        className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                            mode === 'light' ? 'bg-black text-white' : 'bg-white text-black'
                        }`}>
                        {mode === 'dark' ? <SunIcon className={'fill-black'} /> : <MoonIcon className={'fill-black'} />}
                    </button>
                </nav>
            </div>
            {isOpen ? (
                <motion.div
                    initial={{scale: 0, opacity: 0, x: '-50%', y: '-50%'}}
                    animate={{scale: 1, opacity: 1}}
                    className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-black/90 dark:bg-white/75 rounded-lg backdrop-blur-md py-32">
                    <nav className="flex items-center flex-col justify-center">
                        <CustomMobileLink href="/" title="Home" className="" toggle={clickHandler} />
                        <CustomMobileLink href="/about" title="About" className="" toggle={clickHandler} />
                        <CustomMobileLink href="/projects" title="Projects" className="" toggle={clickHandler} />
                        <CustomMobileLink href="/articles" title="Articles" className="" toggle={clickHandler} />
                    </nav>

                    <nav className="flex items-center justify-center flex-wrap">
                        <MotionLink href="/">
                            <GithubIcon className="bg-white rounded-full dark:bg-black" />
                        </MotionLink>
                        <MotionLink href="/">
                            <LinkedInIcon />
                        </MotionLink>
                        <button
                            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                                mode === 'light' ? 'bg-black text-white' : 'bg-white text-black'
                            }`}>
                            {mode === 'dark' ? (
                                <SunIcon className={'fill-black'} />
                            ) : (
                                <MoonIcon className={'fill-black'} />
                            )}
                        </button>
                    </nav>
                </motion.div>
            ) : null}

            <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
                <Logo />
            </div>
        </header>
    );
};

export default Navbar;
