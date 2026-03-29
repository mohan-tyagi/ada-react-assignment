import { useState } from 'react'
import { GoldButton } from '../GoldButton'
import { heroSlides } from '../../content/images'

function Hexagon({ filled }: { filled: boolean }) {
  return (
    <span className="inline-flex h-3 w-3 items-center justify-center sm:h-3.5 sm:w-3.5">
      <svg viewBox="0 0 24 28" className="text-gold-mid h-full w-full" aria-hidden>
        {filled ? (
          <polygon
            points="12,1 23,8 23,20 12,27 1,20 1,8"
            className="fill-gold-mid"
            stroke="currentColor"
            strokeWidth={1}
          />
        ) : (
          <polygon
            points="12,1 23,8 23,20 12,27 1,20 1,8"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
          />
        )}
      </svg>
    </span>
  )
}

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const slideCount = heroSlides.length
  const safeIndex = slideCount > 0 ? Math.min(activeIndex, slideCount - 1) : 0
  const current = heroSlides[safeIndex] ?? heroSlides[0]

  if (slideCount === 0) {
    return null
  }

  return (
    <section className="relative min-h-[min(100vh,820px)] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="h-full w-full object-cover object-center transition-opacity duration-500"
          width={1920}
          height={1080}
          loading={safeIndex === 0 ? 'eager' : 'lazy'}
          decoding="async"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25 sm:from-black/80 sm:via-black/40"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[min(100vh,820px)] max-w-7xl flex-col justify-end px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:justify-center lg:px-8 lg:pt-20 lg:pb-24">
        <div className="max-w-xl lg:max-w-2xl">
          <h1 className="font-display text-nav text-3xl leading-[1.15] font-semibold tracking-wide uppercase sm:text-4xl md:text-5xl lg:text-[2.75rem]">
            Need a mental health provider?
          </h1>
          <p className="font-display text-nav mt-4 text-2xl font-normal sm:text-3xl md:text-4xl">
            No Look Further
          </p>
          <p className="text-nav/95 mt-6 max-w-md text-base leading-relaxed sm:text-lg">
            Our goal is to provide a safe, comfortable, and warm environment so that you can openly
            discuss your mental health needs.
          </p>
          <div className="mt-8" id="book">
            <GoldButton href="#founder" showArrow>
              Learn More
            </GoldButton>
          </div>
        </div>

        <div
          className="mt-12 flex items-center gap-2 sm:mt-16 lg:absolute lg:bottom-10 lg:left-8 lg:mt-0 xl:left-[max(2rem,calc(50%-40rem))]"
          role="tablist"
          aria-label="Hero slides"
        >
          <p className="sr-only" aria-live="polite">
            Showing hero image {safeIndex + 1} of {slideCount}
          </p>
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === safeIndex}
              aria-label={`Show hero slide ${i + 1} of ${slideCount}`}
              className="focus-visible:ring-gold-mid rounded p-0.5 transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none"
              onClick={() => setActiveIndex(i)}
            >
              <Hexagon filled={i === safeIndex} />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
