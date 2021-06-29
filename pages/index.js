import Head from "next/head";
import About from "../components/About";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vishal Gaur | Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <About />
    </div>
  );
}
