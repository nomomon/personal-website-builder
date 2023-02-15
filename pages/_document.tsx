import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import config from '@/configuration';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/logo.svg" />
            </Head>
            <body>
                <Navbar />
                <Main />
                <Footer />
                <NextScript />
            </body>
        </Html>
    );
}
