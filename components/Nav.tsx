import Link from 'next/link';
import { profile } from '@/lib/content';

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-paper/85 border-b border-rule/50">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-ink focus:text-paper focus:px-3 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>
      <nav className="max-w-5xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="w-7 h-7 rounded-sm bg-ink text-paper font-mono text-[11px] font-medium flex items-center justify-center tracking-wide group-hover:bg-ink-2 transition-colors">
            VG
          </span>
          <span className="font-display text-lg tracking-tightest hidden sm:inline text-ink">
            {profile.name}
          </span>
        </Link>
        <div className="flex items-center gap-5 md:gap-6">
          <Link href="/#work" className="font-mono text-xs text-muted hover:text-ink transition-colors">
            Work
          </Link>
          <Link href="/#projects" className="font-mono text-xs text-muted hover:text-ink transition-colors">
            Projects
          </Link>
          <Link href="/#contact" className="font-mono text-xs text-muted hover:text-ink transition-colors">
            Contact
          </Link>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs px-3 py-1.5 border border-ink/70 text-ink hover:bg-ink hover:text-paper transition-colors duration-150"
          >
            Résumé ↗
          </a>
        </div>
      </nav>
    </header>
  );
}
