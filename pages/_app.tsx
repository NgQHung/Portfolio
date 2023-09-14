import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import {AnimatePresence} from 'framer-motion';
import type {AppProps} from 'next/app';
import {useRouter} from 'next/router';

export default function App({Component, pageProps}: AppProps) {
    const router = useRouter();
    return (
        <main className=" bg-white dark:bg-black w-full min-h-screen">
            <Navbar />
            <AnimatePresence mode="wait">
                <Component key={router.asPath} {...pageProps} />
            </AnimatePresence>
            <Footer />
        </main>
    );
}
