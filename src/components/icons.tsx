interface IconProps {
  className?: string;
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
    </svg>
  );
}

export function FlowerMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.4">
        <ellipse cx="20" cy="11" rx="4.2" ry="9" />
        <ellipse cx="20" cy="29" rx="4.2" ry="9" />
        <ellipse cx="11" cy="20" rx="9" ry="4.2" />
        <ellipse cx="29" cy="20" rx="9" ry="4.2" />
      </g>
      <circle cx="20" cy="20" r="2.6" fill="currentColor" />
    </svg>
  );
}
