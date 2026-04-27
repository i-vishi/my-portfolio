import { profile } from '@/lib/content';

export function Hero() {
  return (
    <section className="pt-20 md:pt-28 pb-20 md:pb-28 border-b border-rule">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2">
          <div className="font-mono text-xs text-muted tracking-wider">
            <div>{profile.location}</div>
            <div className="mt-1 text-accent">● Available for senior roles</div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-10">
          <p className="section-label font-mono text-xs uppercase tracking-widest text-muted mb-6">
            Mobile engineer · Kotlin Multiplatform
          </p>
          <h1 className="font-display text-[44px] sm:text-6xl md:text-7xl leading-[0.95] tracking-tightest text-ink">
            {profile.name}.
          </h1>
          <div className="mt-8 max-w-2xl space-y-4 text-lg md:text-xl leading-relaxed text-ink-2">
            <p>{profile.intro[0]}</p>
            <p className="text-base text-muted">{profile.intro[1]}</p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="prose-link"
            >
              {profile.email}
            </a>
            <span className="text-rule">/</span>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="prose-link"
            >
              github
            </a>
            <span className="text-rule">/</span>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="prose-link"
            >
              linkedin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
