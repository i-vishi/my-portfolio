import { notFound } from 'next/navigation';
import Link from 'next/link';
import { roles } from '@/lib/content';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export function generateStaticParams() {
  return roles.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const role = roles.find((r) => r.slug === params.slug);
  if (!role) return {};
  return {
    title: `${role.role} @ ${role.company} — Vishal Gaur`,
    description: role.blurb,
  };
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const role = roles.find((r) => r.slug === params.slug);
  if (!role) notFound();

  const idx = roles.findIndex((r) => r.slug === params.slug);
  const prev = idx > 0 ? roles[idx - 1] : null;
  const next = idx < roles.length - 1 ? roles[idx + 1] : null;

  return (
    <div className="paper-bg min-h-screen">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <Link
          href="/#work"
          className="font-mono text-xs text-muted hover:text-ink mb-12 inline-block"
        >
          ← All work
        </Link>

        <header className="mb-12 pb-8 border-b border-rule">
          <div className="font-mono text-xs text-muted mb-4">{role.period}</div>
          <h1 className="font-display text-4xl md:text-5xl tracking-tightest text-ink leading-[1.05]">
            {role.role}
            <br />
            <span className="text-accent">@ {role.company}</span>
          </h1>
          <p className="mt-6 text-lg text-ink-2 max-w-2xl leading-relaxed">{role.blurb}</p>
        </header>

        <section className="mb-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-6 section-label">
            Highlights
          </h2>
          <ul className="space-y-4">
            {role.highlights.map((h, i) => (
              <li key={i} className="flex gap-4 text-base text-ink-2 leading-relaxed">
                <span className="font-mono text-xs text-muted mt-1.5 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted mb-4 section-label">
            Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {role.stack.map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-3 py-1.5 border border-rule text-ink-2"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {role.url && (
          <a
            href={role.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono text-sm text-accent hover:text-accent-2 border-b border-accent/40"
          >
            Visit {role.company} ↗
          </a>
        )}

        <nav className="mt-20 pt-8 border-t border-rule flex justify-between font-mono text-sm">
          <div>
            {prev && (
              <Link href={`/work/${prev.slug}`} className="text-muted hover:text-ink">
                ← {prev.company}
              </Link>
            )}
          </div>
          <div>
            {next && (
              <Link href={`/work/${next.slug}`} className="text-muted hover:text-ink">
                {next.company} →
              </Link>
            )}
          </div>
        </nav>

        <Footer />
      </main>
    </div>
  );
}
