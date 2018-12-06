import Link from "next/link";

export default () => (
    <div>
        <h1>Hello NextJs</h1>{""}
        <Link href={"/about"}>
            <a>About page</a>
        </Link>
    </div>
);
