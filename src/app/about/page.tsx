import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "", // title ignore template,
        default: "next.js",
        template: "%s | Evolution" // %s will be replace by child title
    }
}

export default function About() {
    return <h1>About me</h1>;
}