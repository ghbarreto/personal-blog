import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet" />
                <meta name="title" content="Gabriel Barreto's Blog" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;600;700&display=swap"
                    rel="stylesheet"
                />
                <link rel="preload" href="/fonts/Fira_Code/FiraCode-Bold.ttf" as="font" />

                <link rel="preload" href="/fonts/Fira_Code/FiraCode-Regular.ttf" as="font" />
                <link rel="preload" href="/fonts/Fira_Code/FiraCode-Medium.ttf" as="font" />
                <link rel="preload" href="/fonts/Fira_Code/FiraCode-Light.ttf" as="font" />
                <link rel="preload" href="/fonts/Fira_Code/FiraCode-SemiBold.ttf" as="font" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
