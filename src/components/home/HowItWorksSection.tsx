import type { LucideIcon } from 'lucide-react'
import { CalendarClock, ClipboardList, Handshake, MessagesSquare } from 'lucide-react'
import { GoldButton } from '../GoldButton'

const iconClass = 'h-11 w-11 shrink-0 text-[#e6c565] sm:h-12 sm:w-12'

function StepIcon({ Icon }: { Icon: LucideIcon }) {
  return <Icon className={iconClass} strokeWidth={1.35} aria-hidden />
}

const steps = [
  {
    n: '01',
    label: 'Schedule an appointment',
    Icon: CalendarClock,
  },
  {
    n: '02',
    label: 'Connect with your provider',
    Icon: Handshake,
  },
  {
    n: '03',
    label: 'Discuss your comprehensive assessment',
    Icon: MessagesSquare,
  },
  {
    n: '04',
    label: 'Receive your individualized treatment plan',
    Icon: ClipboardList,
  },
] as const

function StepConnector() {
  return (
    <div
      className="hidden min-h-[1px] min-w-[1.5rem] flex-1 self-start pt-[1.35rem] md:block md:max-w-[5rem] lg:max-w-[7rem] xl:max-w-[9rem]"
      aria-hidden
    >
      <div className="w-full border-t border-dotted border-white/55" />
    </div>
  )
}

export function HowItWorksSection() {
  return (
    <div id="how-it-works">
      <section
        className="bg-header border-gold-mid border-b-2 px-5 pt-12 pb-16 text-white sm:px-8 sm:pt-14 sm:pb-20 md:pt-16 md:pb-24"
        aria-labelledby="how-it-works-heading"
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="how-it-works-heading"
            className="font-display mx-auto max-w-4xl text-center text-3xl font-bold tracking-tight text-[#e6c565] sm:text-4xl md:text-[2.4rem] md:leading-tight"
          >
            Four Simple Steps To Get Started
          </h2>

          <div className="mt-14 flex flex-col items-center gap-10 md:mt-16 md:flex-row md:items-start md:justify-between md:gap-2 lg:gap-4">
            {steps.map((step, index) => (
              <div key={step.n} className="contents md:contents">
                <div className="flex max-w-xs flex-col items-center text-center md:max-w-[200px] lg:max-w-[220px]">
                  <StepIcon Icon={step.Icon} />
                  <p className="font-display mt-5 text-4xl leading-none font-bold text-[#e6c565] sm:mt-6 sm:text-5xl">
                    {step.n}
                  </p>
                  <p className="text-nav mt-3 text-center font-sans text-xs leading-snug sm:text-sm">
                    {step.label}
                  </p>
                </div>
                {index < steps.length - 1 ? <StepConnector /> : null}
              </div>
            ))}
          </div>

          <div className="mt-14 flex justify-center sm:mt-16 md:mt-20">
            <GoldButton
              href="#book"
              horizontalGradient
              size="md"
              className="px-10 font-sans font-semibold tracking-normal sm:px-14"
            >
              Schedule a Call&nbsp;<span aria-hidden>→</span>
            </GoldButton>
          </div>
        </div>
      </section>

      <div className="bg-testimonial-bg h-8 sm:h-10" aria-hidden />
    </div>
  )
}
