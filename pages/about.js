import Link from "next/link";
import withLayout from "../lib/withLayout";

const About = () => (
    <div>
        <h1>Hello NextJs</h1>{""}
        <Link href={"/about"}>
            <a>About page</a>
        </Link>
    </div>
);

export default withLayout(About);