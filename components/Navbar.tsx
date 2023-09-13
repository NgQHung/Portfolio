import Link from 'next/link';
import React, {ReactNode} from 'react';
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
}
const MotionLink: React.FC<ICustomLink> = ({href, children}) => {
    return (
        <motion.a className="w-6 mx-3" href={href} target={'_blank'} whileHover={{y: -2}} whileTap={{scale: 0.9}}>
            {children}
        </motion.a>
    );
};

const CustomLink: React.FC<ICustomLink> = ({href, title, className = ''}) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`h-1 inline-block w-0 bg-black absolute left-0 -bottom-0.5 
                group-hover:w-full transition-[width] ease duration-300 
                ${router.asPath === href ? 'w-full' : 'w-0'}
                dark:bg-white`}>
                &nbsp;
            </span>
        </Link>
    );
};

const Navbar = () => {
    const [mode, setMode] = useThemeSwitcher();
    console.log(mode);

    return (
        <header
            className="w-full px-32 py-8 font-medium flex items-center justify-between
        dark:text-white">
            <nav>
                <CustomLink href="/" title="Home" className="mr-4" />
                <CustomLink href="/about" title="About" className="mx-4" />
                <CustomLink href="/projects" title="Projects" className="mx-4" />
                <CustomLink href="/articles" title="Articles" className="ml-4" />
            </nav>

            <nav className="flex items-center justify-center flex-wrap">
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
            <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
                <Logo />
            </div>
        </header>
    );
};

export default Navbar;
