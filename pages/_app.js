import { Layout } from "antd";
import App, { Container } from "next/app";
import React from "react";
import withApollo from "../lib/withApollo";
import { ApolloProvider } from "react-apollo";
import withNProgress from "next-nprogress";
import NProgress from "next-nprogress/component";
const { Footer } = Layout;

class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    componentDidMount(){
        if("serviceWorker" in navigator){
            navigator.serviceWorker
                .register("/sw.js")
                .then(result => console.log("SW Registered: ", result))
                .catch(error => console.log("Can't register SW: ", error));
        }
    }
    
    
    render() {
        const { Component, pageProps, apollo } = this.props;
        return (
        <ApolloProvider client={apollo}>
            <Container>
                <NProgress
                    color="#29d"
                    options={{ trickleSpeed: 50 }}
                    showAfterMs={300}
                    spinner
                />
                <Layout>
                    <Component {...pageProps} />
                    <Footer>This is important! | by Lim Store</Footer>
                </Layout>
            </Container>
        </ApolloProvider>
        );
    }
}

export default withNProgress()(withApollo(MyApp));