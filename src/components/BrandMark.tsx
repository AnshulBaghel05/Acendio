interface BrandMarkProps {
  variant?: 'horizontal' | 'icon';
  tone?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Acendio Brand Identity
 * - Single-path ascending geometric step mark legible down to 16px.
 * - Supports horizontal wordmark lockup and icon-only usage on light or dark surfaces.
 */
export function BrandMark({
  variant = 'horizontal',
  tone = 'light',
  size = 'md',
}: BrandMarkProps) {
  const iconPx = size === 'sm' ? 18 : size === 'lg' ? 28 : 22;
  const textClass =
    size === 'sm'
      ? 'text-lg'
      : size === 'lg'
        ? 'text-2xl'
        : 'text-xl';

  const inkColor = tone === 'light' ? '#0E0F12' : '#F4F1EA';

  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0">
      <svg
        width={iconPx}
        height={iconPx}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M2 20H7V14H12V8H17V3H22V20H19.5V5.5H19V10.5H14.5V16.5H9.5V22H2V20Z"
          fill={inkColor}
        />
        <rect x="17" y="3" width="5" height="2.5" fill="#FF5A1F" />
      </svg>
      {variant === 'horizontal' && (
        <span
          className={`font-editorial font-bold tracking-tight ${textClass}`}
          style={{ color: inkColor }}
        >
          Acendio
        </span>
      )}
    </span>
  );
}
