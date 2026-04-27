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
            className="hover:text-ink"
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
            className="bg-paper p-8 group hover:bg-paper-2 transition-colors block"
          >
            <div className="flex items-baseline justify-between mb-4">
              <span className="font-mono text-xs text-muted">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-mono text-xs text-muted">{p.year}</span>
            </div>
            <h3 className="font-display text-2xl tracking-tightest text-ink mb-2 group-hover:text-accent transition-colors">
              {p.title}
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </h3>
            <p className="text-sm leading-relaxed text-ink-2 mb-5">{p.blurb}</p>
            <div className="flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[11px] text-muted">
              {p.tags.map((t) => (
                <span key={t}>· {t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
