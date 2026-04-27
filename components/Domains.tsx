import { domains } from '@/lib/content';
import { SectionHeader } from './SectionHeader';

export function Domains() {
  return (
    <section id="domains" className="py-20 md:py-28 border-b border-rule">
      <SectionHeader index="01" label="What I work on" trailing="3 problem classes" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule">
        {domains.map((d, i) => (
          <article
            key={d.id}
            className="bg-paper p-8 flex flex-col"
          >
            <div className="flex items-baseline justify-between mb-4">
              <span className="font-mono text-xs text-muted">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="w-6 h-px bg-accent" />
            </div>
            <h3 className="font-display text-xl tracking-tightest mb-3 text-ink">
              {d.title}
            </h3>
            <p className="text-sm leading-relaxed text-ink-2 mb-6 flex-1">{d.blurb}</p>
            <ul className="font-mono text-[11px] text-muted flex flex-wrap gap-x-3 gap-y-1.5">
              {d.tags.map((t) => (
                <li key={t}>· {t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
