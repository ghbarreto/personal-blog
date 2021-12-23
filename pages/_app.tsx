import type { AppProps } from 'next/app';
import '../styles/reset.css';
import { PostContextProvider } from '../context/PostContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PostContextProvider>
        <Component {...pageProps} />
      </PostContextProvider>
    </>
  );
}

export default MyApp;
