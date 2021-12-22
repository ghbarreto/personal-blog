import type { AppProps } from 'next/app';
import '../styles/reset.css';
import { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`
  body {
    overflow-x: hidden;
    color: white;
    background-color: #131524;
    font-family: "Fira Code", monospace;

    @font-face {
      font-family: "Fira Code Regular";
      src: url("/fonts/Fira_Code/FiraCode-Regular.ttf");
    }

    @font-face {
      font-family: "Fira Code Medium";
      src: url("/fonts/Fira_Code/FiraCode-Medium.ttf");
    }
    
    @font-face {
      font-family: "Fira Code Bold";
      src: url("/fonts/Fira_Code/FiraCode-Bold.ttf");
    }
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
