import { Layout } from "antd";
import App, { Container } from "next/app";
import React from "react";
import withApollo from "../lib/withApollo";
import { ApolloProvider } from "react-apollo";
import withNProgress from "next-nprogress";
import NProgress from "next-nprogress/component";
import convertDataURIToBinary from "../lib/base64";
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
        if("serviceWorker" in navigator && "PushManager" in window){
            navigator.serviceWorker
                .register("/sw.js")
                .then(swReg => { 
                    console.log("SW Registered: ", swReg);
                    Notification.requestPermission().then(permission => {
                        if(permission === "granted") {
                            swReg.pushManager.subscribe({
                                userVisibleOnly: true,
                                applicationServerKey: convertDataURIToBinary('BKAsHuj0Nqzr5wtfux6qL1OKzstMdrzNaoNXRjeht7b9jNeVAUZcT-3T0E5a53AEF0etIIwe3pmbJNGILHItb7o')
                            }).then(pushSubscriptionObject => {
                                console.log(pushSubscriptionObject);
                            })
                        }
                    })
                })
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