import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HireMe = () => {
    return (
        <div
            className="fixed left-4 bottom-4
    flex items-center justify-center overflow-hidden
    md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0">
            {/* helli */}
            <div
                className="w-48 h-auto flex items-center justify-center relative
            md:w-24">
                <Image
                    src="/circle-text.png"
                    alt=""
                    className="fill-black animate-spin-slow dark:fill-white"
                    width={0}
                    height={0}
                    sizes="100vw"
                />
                <Link
                    href="mailto:hunghunghung273@gmail.com"
                    className="flex items-center justify-center 
                absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black 
                text-white shadow-md border border-solid border-black w-20 h-20 rounded-full
                font-semibold hover:bg-white hover:text-black
                dark:bg-white dark:text-black hover:dark:bg-black hover:dark:text-white
                hover:dark:border-white
                md:w-12 md:h-12 md:text-[10px]
                ">
                    Hire Me
                </Link>
            </div>
        </div>
    );
};

export default HireMe;
