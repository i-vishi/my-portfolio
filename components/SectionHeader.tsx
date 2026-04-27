import { ReactNode } from 'react';

type Props = {
  index: string; // e.g. "01"
  label: string; // e.g. "Selected work"
  trailing?: ReactNode;
};

export function SectionHeader({ index, label, trailing }: Props) {
  return (
    <div className="flex items-baseline justify-between border-b border-rule pb-3 mb-10">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-xs text-muted tracking-wider">{index}</span>
        <h2 className="font-display text-2xl md:text-3xl tracking-tightest text-ink">
          {label}
        </h2>
      </div>
      {trailing && <div className="text-xs font-mono text-muted">{trailing}</div>}
    </div>
  );
}
