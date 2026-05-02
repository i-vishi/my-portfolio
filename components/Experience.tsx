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
            className="grid grid-cols-12 gap-6"
          >
            {/* Period column */}
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-xs text-muted leading-relaxed">{role.period}</div>
              {role.current && (
                <div className="mt-2 inline-flex items-center gap-1.5 font-mono text-[11px] text-accent">
                  <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-accent" />
                  Current
                </div>
              )}
            </div>

            {/* Details column */}
            <div className="col-span-12 md:col-span-9">
              <header className="mb-4">
                <h3 className="font-display text-2xl md:text-[28px] tracking-tightest text-ink leading-tight">
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
                <p className="mt-2 text-[15px] text-muted max-w-2xl leading-relaxed">{role.blurb}</p>
              </header>

              <ul className="space-y-2.5 mb-6 max-w-2xl">
                {role.highlights.slice(0, 4).map((h, i) => (
                  <li key={i} className="flex gap-3 text-sm text-ink-2 leading-relaxed">
                    <span className="font-mono text-muted text-[10px] mt-1.5 shrink-0 select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {role.stack.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] text-muted border border-rule px-2 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href={`/work/${role.slug}`}
                className="inline-block font-mono text-xs text-muted hover:text-accent transition-colors border-b border-rule hover:border-accent/40"
              >
                Full case study →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
