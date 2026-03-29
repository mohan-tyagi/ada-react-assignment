import { useState } from 'react'
import { images } from '../../content/images'

const accordionItems = [
  {
    id: 'convenient',
    title: 'Convenient access',
    body: 'We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home.',
  },
  {
    id: 'concierge',
    title: 'Concierge approach',
    body: 'You’ll experience thoughtful follow-up, clear communication, and care coordination designed to reduce friction between visits.',
  },
  {
    id: 'quality',
    title: 'High quality service',
    body: 'Our practice is built on evidence-based treatment, careful medication management, and standards that put your safety first.',
  },
  {
    id: 'trusted',
    title: 'Trusted and empathic providers',
    body: 'Our team listens first — creating a respectful space where you can share openly and collaborate on a plan that fits your life.',
  },
] as const

export function WhyChooseSection() {
  const [openId, setOpenId] = useState<string | null>('convenient')

  return (
    <section
      className="bg-why-bg scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24 md:py-28"
      id="why-choose"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
          <div
            className="border-gold-divider pointer-events-none absolute top-3 -right-2 -bottom-2 left-3 rounded-2xl border-2 sm:top-4 sm:-right-3 sm:-bottom-3 sm:left-4"
            aria-hidden
          />
          <img
            src={images.whyChoose}
            alt="Provider and patient talking together on a sofa in a comfortable office"
            className="relative w-full rounded-2xl object-cover shadow-lg"
            width={960}
            height={720}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div>
          <h2
            id="why-choose-heading"
            className="font-display text-foreground text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.35rem] lg:leading-tight"
          >
            Why Should You Choose Ada Psychiatry?
          </h2>

          <ul className="border-gold-divider/80 mt-10 border-t">
            {accordionItems.map((item) => {
              const isOpen = openId === item.id
              return (
                <li key={item.id} className="border-gold-divider/80 border-b">
                  <button
                    type="button"
                    className="flex w-full items-start gap-3 py-5 text-left transition hover:opacity-90 sm:gap-4 sm:py-6"
                    aria-expanded={isOpen}
                    aria-controls={`why-panel-${item.id}`}
                    id={`why-trigger-${item.id}`}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                  >
                    <span
                      className="text-gold-divider font-display mt-0.5 w-5 shrink-0 text-center text-xl leading-none sm:w-6 sm:text-2xl"
                      aria-hidden
                    >
                      {isOpen ? '—' : '+'}
                    </span>
                    <span className="font-display text-foreground text-lg leading-snug font-medium sm:text-xl">
                      {item.title}
                    </span>
                  </button>
                  <div
                    id={`why-panel-${item.id}`}
                    role="region"
                    hidden={!isOpen}
                    className={isOpen ? 'pb-6' : undefined}
                  >
                    <p className="text-secondary-fg pl-8 font-sans text-sm leading-relaxed sm:pl-10 sm:text-base">
                      {item.body}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
