import { profile } from '@/lib/content';
import { SectionHeader } from './SectionHeader';

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 border-b border-rule">
      <SectionHeader index="04" label="Get in touch" />

      <div className="grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 md:col-span-8">
          <p className="font-display text-3xl md:text-[44px] leading-[1.08] tracking-tightest text-ink">
            Hiring for a senior mobile role, building on Compose Multiplatform, or just want to talk Kotlin?{' '}
            <a
              href={`mailto:${profile.email}`}
              className="text-accent hover:text-accent-2 underline decoration-2 underline-offset-4 transition-colors"
            >
              Drop a line.
            </a>
          </p>
        </div>

        <div className="col-span-12 md:col-span-4 md:pt-1">
          <ul className="space-y-3 font-mono text-sm">
            <li className="flex items-center gap-3">
              <span className="text-muted/60 w-16 shrink-0 text-xs">email</span>
              <a href={`mailto:${profile.email}`} className="prose-link text-xs">
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-muted/60 w-16 shrink-0 text-xs">github</span>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="prose-link text-xs"
              >
                @i-vishi
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-muted/60 w-16 shrink-0 text-xs">linkedin</span>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="prose-link text-xs"
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
