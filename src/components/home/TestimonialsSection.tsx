import * as React from 'react'
import testimonial from '../../assets/homeImages/testimonial.png'

const testimonials = [
  {
    quote:
      '“ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach.”',
    name: 'Jordan Lee',
    role: 'Northwind Health',
    avatar: testimonial,
  },
  {
    quote:
      '“ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach.”',
    name: 'Carl Rowan',
    role: 'Aglets Inc',
    avatar: testimonial,
  },
  {
    quote:
      '“From the first visit, I felt heard. Scheduling was simple and my provider took time to explain options without rushing me.”',
    name: 'Morgan Ellis',
    role: 'Brightline Co.',
    avatar: testimonial,
  },
  {
    quote:
      '“Virtual appointments fit my schedule, and the care still felt personal. I’m grateful for the team’s consistency and kindness.”',
    name: 'Sam Rivera',
    role: 'Harbor & Co.',
    avatar: testimonial,
  },
  {
    quote:
      '“Clear communication, thoughtful follow-up, and a calm office environment. Exactly what I needed during a hard season.”',
    name: 'Taylor Brooks',
    role: 'Studio North',
    avatar: testimonial,
  },
  {
    quote:
      '“Medication management felt collaborative — questions were welcomed and adjustments were explained with patience.”',
    name: 'Riley Park',
    role: 'Openfield Labs',
    avatar: testimonial,
  },
  {
    quote:
      '“I appreciate the balance of professionalism and warmth. It’s rare to find both in one practice.”',
    name: 'Casey Nguyen',
    role: 'Meridian Arts',
    avatar: testimonial,
  },
] as const

function HexNavButton({
  active,
  index,
  onSelect,
}: {
  active: boolean
  index: number
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      className="text-testimonial-footer p-1 transition-opacity hover:opacity-80"
      aria-label={`Show testimonial ${index + 1} of ${testimonials.length}`}
      aria-current={active ? 'true' : undefined}
      onClick={onSelect}
    >
      <svg viewBox="0 0 24 28" className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden>
        {active ? (
          <polygon
            points="12,1 23,8 23,20 12,27 1,20 1,8"
            className="fill-testimonial-footer"
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
    </button>
  )
}

type CardProps = {
  quote: string
  name: string
  role: string
  avatar: string
  variant?: 'featured' | 'peek'
}

function TestimonialCard({ quote, name, role, avatar, variant = 'featured' }: CardProps) {
  const isPeek = variant === 'peek'
  return (
    <article
      className={`overflow-hidden rounded-[22px] shadow-lg sm:rounded-[26px] ${isPeek ? 'shadow-md' : ''}`}
    >
      <div className="bg-testimonial-card relative px-5 pt-10 pb-6 sm:px-7 sm:pt-12 sm:pb-8">
        <span
          className="font-display text-foreground pointer-events-none absolute top-4 left-4 text-5xl leading-none sm:top-5 sm:left-5 sm:text-6xl"
          aria-hidden
        >
          “
        </span>
        <p
          className={`text-secondary-fg font-sans leading-relaxed ${isPeek ? 'line-clamp-4 text-xs sm:text-sm' : 'pl-1 text-sm sm:pl-2 sm:text-base'}`}
        >
          {quote}
        </p>
      </div>
      <div className="bg-testimonial-footer flex items-center justify-center gap-3 px-5 py-4 sm:gap-4 sm:py-5">
        <img
          src={avatar}
          alt=""
          className={`shrink-0 rounded-full object-cover ${isPeek ? 'h-9 w-9 sm:h-10 sm:w-10' : 'h-11 w-11 sm:h-12 sm:w-12'}`}
          width={96}
          height={96}
          loading="lazy"
          decoding="async"
        />
        <div className="min-w-0 text-left text-white">
          <p
            className={`font-display font-bold ${isPeek ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'}`}
          >
            {name}
          </p>
          <p
            className={`font-sans font-normal opacity-95 ${isPeek ? 'text-[10px] sm:text-xs' : 'text-xs sm:text-sm'}`}
          >
            {role}
          </p>
        </div>
      </div>
    </article>
  )
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = React.useState(1)
  const n = testimonials.length
  const prevIndex = activeIndex > 0 ? activeIndex - 1 : null
  const nextIndex = activeIndex < n - 1 ? activeIndex + 1 : null

  return (
    <section
      className="bg-testimonial-bg border-gold-mid scroll-mt-20 border-b-2 px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-14 md:pt-24 md:pb-16"
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="testimonials-heading"
          className="font-display text-foreground text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.35rem]"
        >
          What Our Patients Are saying
        </h2>

        <div className="mt-12 flex min-h-[min(70vh,520px)] items-center justify-center gap-2 sm:mt-16 sm:gap-4 md:gap-6">
          {prevIndex !== null ? (
            <button
              type="button"
              className="hidden w-[26%] max-w-[240px] shrink scale-[0.92] opacity-50 transition hover:opacity-70 sm:block"
              onClick={() => setActiveIndex(prevIndex)}
              aria-label="Previous testimonial"
            >
              <TestimonialCard {...testimonials[prevIndex]} variant="peek" />
            </button>
          ) : (
            <div className="hidden w-[26%] max-w-[240px] shrink sm:block" aria-hidden />
          )}

          <div className="w-full max-w-md shrink-0 sm:max-w-[400px]">
            <TestimonialCard {...testimonials[activeIndex]} variant="featured" />
          </div>

          {nextIndex !== null ? (
            <button
              type="button"
              className="hidden w-[26%] max-w-[240px] shrink scale-[0.92] opacity-50 transition hover:opacity-70 sm:block"
              onClick={() => setActiveIndex(nextIndex)}
              aria-label="Next testimonial"
            >
              <TestimonialCard {...testimonials[nextIndex]} variant="peek" />
            </button>
          ) : (
            <div className="hidden w-[26%] max-w-[240px] shrink sm:block" aria-hidden />
          )}
        </div>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:mt-12 sm:gap-2.5"
          role="group"
          aria-label="Testimonial slides"
        >
          {testimonials.map((_, i) => (
            <HexNavButton
              key={i}
              index={i}
              active={i === activeIndex}
              onSelect={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
