import Head from "next/head";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { Layout } from "antd";
import ProductCard from "../../components/ProductCard";
import CartButton from "../../components/CartButton";
const { Content } = Layout;

export default ( { data } ) => (
    <>
        <Head>
        <title>Home | Lim Store</title>
        </Head>
        <Header
            centerColumn={<h4>Lim Store</h4>}
            rightColumn={<CartButton />}
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
        >
            {data &&
                data.categories &&
                data.categories.map(category => (
                    <Button
                        key={category.id}
                        href={`/category?name=${category.name.toLowerCase()}`}
                        hrefAs={`/category/${category.name.toLowerCase()}`}
                        text={category.name}
                    />
                ))}

        </div>
        <div style={{ marginTop: "50px" }}>
            {data &&
            data.category[0] &&
            data.category[0].products &&
            data.category[0].products.length !== 0 && <h2>{data.category[0].name}</h2>}
            <div
            style={{
                display: "grid",
                gridGap: "10px",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                width: "100%"
            }}
            >
            {data &&
                data.category &&
                data.category[0].products && 
                data.category[0].products.map(product => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    subtitle={product.subtitle}
                    price={product.price}
                    photoUrl={product.photo.url}
                />
                ))}
            </div>
        </div>
        </Content>
    </>
);