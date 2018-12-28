import Head from "next/head";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { Layout } from "antd";
import ProductCard from "../../components/ProductCard";
const { Content } = Layout;

export default ( { data } ) => (
    <>
        <Head>
        <title>Search | Lim Store</title>
        </Head>
        <Header
            centerColumn={<h4>Lim Store</h4>}
            rightColumn={<Button href="/cart" text="Cart" />}
            leftColumn={<Button href="/" text="Home" />}
        />
        <Content style={{ padding: "0 50px" }}>
        <div
            style={{
            display: "grid",
            gridGap: "10px",
            gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
            width: "100%"
            }}
        />
        </Content>
    </>
);