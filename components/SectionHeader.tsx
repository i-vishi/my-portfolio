import { ReactNode } from 'react';

type Props = {
  index: string;
  label: string;
  trailing?: ReactNode;
};

export function SectionHeader({ index, label, trailing }: Props) {
  return (
    <div className="flex items-baseline justify-between border-b border-rule pb-4 mb-12">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[11px] text-muted/60 tracking-wider">{index}</span>
        <h2 className="font-display text-2xl md:text-3xl tracking-tightest text-ink">
          {label}
        </h2>
      </div>
      {trailing && (
        <div className="text-[11px] font-mono text-muted">{trailing}</div>
      )}
    </div>
  );
}
