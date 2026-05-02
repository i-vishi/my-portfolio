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
            className="bg-paper p-8 flex flex-col group hover:bg-paper-2 transition-colors duration-200"
          >
            <div className="flex items-baseline justify-between mb-5">
              <span className="font-mono text-[11px] text-muted tracking-wider">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="w-5 h-px bg-rule group-hover:bg-accent transition-colors duration-200" />
            </div>
            <h3 className="font-display text-xl tracking-tightest mb-3 text-ink">
              {d.title}
            </h3>
            <p className="text-sm leading-relaxed text-ink-2 mb-6 flex-1">{d.blurb}</p>
            <div className="flex flex-wrap gap-1.5">
              {d.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] text-muted border border-rule px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
