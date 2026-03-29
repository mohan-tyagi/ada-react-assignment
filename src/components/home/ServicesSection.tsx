import type { LucideIcon } from 'lucide-react'
import { Brain, BrainCircuit, Dna, HeartPulse, Hospital } from 'lucide-react'
import { GoldButton } from '../GoldButton'

const iconClass = 'h-11 w-11 shrink-0 text-gold-mid sm:h-12 sm:w-12'

function ServiceGlyph({ Icon }: { Icon: LucideIcon }) {
  return <Icon className={iconClass} strokeWidth={1.25} aria-hidden />
}

const services = [
  {
    lines: ['Psychiatric', 'Evaluation'] as const,
    Icon: Brain,
  },
  {
    lines: ['Medication', 'Management'] as const,
    Icon: Hospital,
  },
  {
    lines: ['Supportive', 'Psychotherapy'] as const,
    Icon: HeartPulse,
  },
  {
    lines: ['ADHD', 'Screening'] as const,
    Icon: BrainCircuit,
  },
  {
    lines: ['MAT', 'Treatment'] as const,
    Icon: Hospital,
  },
  {
    lines: ['Gene Sight', 'Testing'] as const,
    Icon: Dna,
  },
] as const

export function ServicesSection() {
  return (
    <section
      className="bg-cream scroll-mt-20 px-5 py-16 sm:px-8 sm:py-20 md:py-24"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1180px]">
        <h2
          id="services-heading"
          className="font-display text-foreground text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.35rem]"
        >
          Our Services
        </h2>

        <ul className="mt-14 flex flex-col flex-wrap items-center justify-center gap-y-14 sm:mt-16 sm:flex-row sm:gap-x-6 sm:gap-y-12 lg:mt-20 lg:flex-nowrap lg:justify-between lg:gap-x-4 xl:gap-x-6">
          {services.map(({ lines, Icon }) => (
            <li
              key={lines.join('-')}
              className="flex w-full max-w-[200px] flex-col items-center text-center sm:w-[calc(50%-0.75rem)] sm:max-w-none md:w-[calc(33.333%-1rem)] lg:w-auto lg:max-w-[168px] lg:flex-1 xl:max-w-none"
            >
              <div className="bg-service-icon flex h-[104px] w-[104px] items-center justify-center rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:h-[112px] sm:w-[112px]">
                <ServiceGlyph Icon={Icon} />
              </div>
              <p className="font-display text-foreground mt-5 text-[0.8125rem] leading-tight font-semibold sm:text-sm">
                {lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex justify-center sm:mt-16">
          <GoldButton
            href="#why-choose"
            size="sm"
            horizontalGradient
            className="font-sans font-semibold tracking-normal"
          >
            View our services&nbsp;<span aria-hidden>→</span>
          </GoldButton>
        </div>
      </div>
    </section>
  )
}
