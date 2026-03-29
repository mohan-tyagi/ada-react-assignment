import type { ReactNode } from 'react'

type GoldButtonProps = {
  href?: string
  children: ReactNode
  showArrow?: boolean
  className?: string
  size?: 'md' | 'sm'
  horizontalGradient?: boolean
}

function ArrowIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={`shrink-0 ${className}`} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14m0 0-4-4m4 4-4 4"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const sizeClasses = {
  md: 'gap-2 px-8 py-3.5 text-sm font-semibold',
  sm: 'gap-1.5 px-6 py-2.5 text-xs font-semibold',
} as const

export function GoldButton({
  href = '#',
  children,
  showArrow,
  className = '',
  size = 'md',
  horizontalGradient = false,
}: GoldButtonProps) {
  const gradientClass = horizontalGradient ? 'bg-gold-gradient-horizontal' : 'bg-gold-gradient'
  return (
    <a
      href={href}
      className={`${gradientClass} text-btn-text focus-visible:ring-gold-line inline-flex items-center justify-center rounded-full shadow-sm transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none ${sizeClasses[size]} ${className}`}
    >
      {children}
      {showArrow ? <ArrowIcon className={size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4'} /> : null}
    </a>
  )
}
