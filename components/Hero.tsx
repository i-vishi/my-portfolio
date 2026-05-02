import { profile } from '@/lib/content';

export function Hero() {
  return (
    <section className="pt-24 md:pt-32 pb-20 md:pb-28 border-b border-rule">
      <div className="grid grid-cols-12 gap-6">

        {/* Left column — location + status */}
        <div className="col-span-12 md:col-span-3 md:pt-1 flex md:flex-col gap-6 md:gap-0">
          <div className="font-mono text-xs text-muted leading-relaxed">
            <div>{profile.location}</div>
            <div className="mt-0.5 text-muted/70">5 yrs experience</div>
          </div>
          <div className="flex items-center gap-2 md:mt-5">
            <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            <span className="font-mono text-xs text-accent">Open to senior roles</span>
          </div>
        </div>

        {/* Main content */}
        <div className="col-span-12 md:col-span-9">
          <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-muted mb-7">
            <span>Mobile Engineer</span>
            <span className="text-rule">·</span>
            <span>Kotlin Multiplatform</span>
          </div>

          <h1 className="font-display text-[46px] sm:text-6xl md:text-[70px] leading-[0.92] tracking-tightest text-ink">
            {profile.name}.
          </h1>

          <div className="mt-8 max-w-xl space-y-3 leading-relaxed text-ink-2">
            <p className="text-[17px] md:text-lg">{profile.intro[0]}</p>
            <p className="text-base text-muted">{profile.intro[1]}</p>
          </div>

          <div className="mt-10 pt-8 border-t border-rule flex flex-wrap items-center gap-x-5 gap-y-2.5 font-mono text-sm">
            <a href={`mailto:${profile.email}`} className="prose-link">
              {profile.email}
            </a>
            <span className="text-rule text-xs">—</span>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="prose-link"
            >
              GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="prose-link"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
