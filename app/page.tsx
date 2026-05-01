import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Domains } from '@/components/Domains';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="paper-bg min-h-screen">
      <Nav />
      <main id="main" className="max-w-5xl mx-auto px-6 md:px-10">
        <Hero />
        <Domains />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
