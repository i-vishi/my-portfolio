import { projects } from '@/lib/content';
import { SectionHeader } from './SectionHeader';

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 border-b border-rule">
      <SectionHeader
        index="03"
        label="Selected work"
        trailing={
          <a
            href="https://github.com/i-vishi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            All on GitHub ↗
          </a>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule">
        {projects.map((p, i) => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-paper p-8 group hover:bg-paper-2 transition-colors duration-200 block"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="font-mono text-[11px] text-muted tracking-wider">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-mono text-[11px] text-muted">{p.year}</span>
            </div>
            <h3 className="font-display text-2xl tracking-tightest text-ink mb-2 group-hover:text-accent transition-colors duration-200">
              {p.title}
              <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </h3>
            <p className="text-sm leading-relaxed text-ink-2 mb-5">{p.blurb}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] text-muted border border-rule px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
