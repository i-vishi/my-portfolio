import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import LandingInfo from "../components/LandingInfo";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div>
      <LandingInfo />
      <AboutMe />
      <Experience />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}
