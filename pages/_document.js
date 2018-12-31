import Document, { Head, Main, NextScript } from "next/document";

 export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { 
            ...initialProps
        };
    }
    
    render() {
        return (
        <html lang="ko">
            <Head>
            <meta name="author" content={"king name"} />
            <meta name="viewport" content="width=device-width, user-scalable=no" />
            <meta name="description" content="Lim Store, brend new ( 임스토어 )" />
            <meta name="theme-color" content="black" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.8.1/antd.min.css" rel="stylesheet" />
             <style>{`body { background-color: #EFF2F5!important}`}</style>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </html>
        );
    }
};