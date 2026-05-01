import { profile } from '@/lib/content';
import { SectionHeader } from './SectionHeader';

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 border-b border-rule">
      <SectionHeader index="04" label="Get in touch" />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8">
          <p className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tightest text-ink">
            Hiring for a senior mobile role, building something on Compose
            Multiplatform, or just want to chat about Kotlin?{' '}
            <a
              href={`mailto:${profile.email}`}
              className="text-accent hover:text-accent-2 underline decoration-2 underline-offset-4"
            >
              Drop a line.
            </a>
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 md:pt-2">
          <ul className="space-y-3 font-mono text-sm">
            <li>
              <span className="text-muted">email</span>{' '}
              <a href={`mailto:${profile.email}`} className="prose-link ml-2">
                {profile.email}
              </a>
            </li>
            <li>
              <span className="text-muted">github</span>{' '}
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="prose-link ml-2"
              >
                @i-vishi
              </a>
            </li>
            <li>
              <span className="text-muted">linkedin</span>{' '}
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="prose-link ml-2"
              >
                in/i-vishi
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
