import { useState } from 'react'
import { GoldButton } from '../GoldButton'

const faqItems = [
  {
    id: 'confidential',
    question: 'Is Ada psychiatry confidential?',
    answer:
      'We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home.',
  },
  {
    id: 'schedule',
    question: 'What is the best way to schedule a appointment?',
    answer:
      'The easiest way is to use our online booking flow or call our office. We will help you find a time that works and confirm whether you prefer an in-person or virtual visit.',
  },
  {
    id: 'controlled',
    question: 'Do you prescribe controlled substance medication?',
    answer:
      'When clinically appropriate and in line with state and federal regulations, your provider may discuss controlled medications as part of your plan. This is always decided individually after a full evaluation.',
  },
  {
    id: 'initial',
    question: 'How long does the initial appointment take?',
    answer:
      'Your first appointment is typically scheduled for about 45 to 60 minutes so we can review your history, goals, and treatment options without rushing.',
  },
] as const

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('confidential')

  return (
    <section
      className="bg-cream scroll-mt-20 px-5 py-16 sm:px-8 sm:py-20 md:py-24"
      id="faq"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="faq-heading"
          className="font-display text-foreground text-center text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.35rem]"
        >
          Frequently asked questions
        </h2>

        <ul className="border-gold-divider/80 mt-12 border-t sm:mt-14">
          {faqItems.map((item) => {
            const isOpen = openId === item.id
            return (
              <li key={item.id} className="border-gold-divider/80 border-b">
                <button
                  type="button"
                  className="flex w-full items-start gap-3 py-5 text-left transition hover:opacity-90 sm:gap-4 sm:py-6"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  id={`faq-trigger-${item.id}`}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  <span
                    className="text-gold-divider font-display mt-0.5 w-5 shrink-0 text-center text-xl leading-none sm:w-6 sm:text-2xl"
                    aria-hidden
                  >
                    {isOpen ? '—' : '+'}
                  </span>
                  <span className="font-display text-foreground text-lg leading-snug font-bold sm:text-xl">
                    {item.question}
                  </span>
                </button>
                <div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  hidden={!isOpen}
                  className={isOpen ? 'pb-6' : undefined}
                >
                  <p className="text-foreground pl-8 font-sans text-sm leading-relaxed sm:pl-10 sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="mt-12 flex justify-center sm:mt-14">
          <GoldButton showArrow>See all FAQ</GoldButton>
        </div>
      </div>
    </section>
  )
}
