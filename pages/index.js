import Head from "next/head";
import Header from "../components/Header";
import withLayout from "../lib/withLayout";

const Index = () => (
    <div>
        <Head>
            <title>About | Lim Store</title>
        </Head>
        <h1>Hellow from the index</h1>
    </div>
);

export default withLayout(Index);