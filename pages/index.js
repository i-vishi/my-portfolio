import Head from "next/head";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Experience from "../components/Experience";
import LandingInfo from "../components/LandingInfo";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vishal Gaur | Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingInfo />
      <AboutMe />
      <Experience />
      <Projects />
      <ContactMe />
    </div>
  );
}
