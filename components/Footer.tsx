import { profile } from '@/lib/content';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 font-mono text-xs text-muted">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          © {year} {profile.name}. Set in Fraunces and JetBrains Mono.
        </div>
        <a
          href="https://github.com/i-vishi/my-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-ink"
        >
          View source ↗
        </a>
      </div>
    </footer>
  );
}
