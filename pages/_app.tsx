import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import type {AppProps} from 'next/app';

export default function App({Component, pageProps}: AppProps) {
    return (
        <main className="bg-white ư-full min-h-screen">
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </main>
    );
}
