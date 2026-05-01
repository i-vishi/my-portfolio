import Link from 'next/link';
import { roles } from '@/lib/content';
import { SectionHeader } from './SectionHeader';

export function Experience() {
  return (
    <section id="work" className="py-20 md:py-28 border-b border-rule">
      <SectionHeader index="02" label="Where I've worked" trailing="2021 — present" />

      <div className="space-y-16">
        {roles.map((role) => (
          <article
            key={role.slug}
            className="grid grid-cols-12 gap-6 group"
          >
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-xs text-muted">{role.period}</div>
              {role.current && (
                <div className="mt-2 inline-flex items-center gap-1.5 font-mono text-[11px] text-accent">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Current
                </div>
              )}
            </div>

            <div className="col-span-12 md:col-span-9">
              <header className="mb-4">
                <h3 className="font-display text-2xl md:text-3xl tracking-tightest text-ink">
                  {role.role}{' '}
                  {role.url ? (
                    <a
                      href={role.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-2 transition-colors"
                    >
                      @ {role.company}
                    </a>
                  ) : (
                    <span className="text-accent">@ {role.company}</span>
                  )}
                </h3>
                <p className="mt-2 text-base text-ink-2 max-w-2xl">{role.blurb}</p>
              </header>

              <ul className="space-y-2 mb-5 max-w-2xl">
                {role.highlights.slice(0, 4).map((h, i) => (
                  <li key={i} className="flex gap-3 text-sm text-ink-2 leading-relaxed">
                    <span className="font-mono text-muted text-xs mt-1.5 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] text-muted">
                {role.stack.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <Link
                href={`/work/${role.slug}`}
                className="mt-5 inline-block font-mono text-xs text-accent hover:text-accent-2 border-b border-accent/40 hover:border-accent-2"
              >
                Read the full case study →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
