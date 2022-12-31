import '../styles/globals.css';
import '../styles/markdown.css';
import '../styles/atom-one-dark.css';
import '../styles/mathjax.css';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
