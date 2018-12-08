import Link from "next/link";
import withLayout from "../lib/withLayout";

const About = () => (
    <div>
        <h1>Hello NextJs</h1>{""}
        <a>About page</a>
        <p>Hellow this is About Page</p>
    </div>
);

export default withLayout(About);