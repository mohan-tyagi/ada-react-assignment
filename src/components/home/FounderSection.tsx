import { GoldButton } from '../GoldButton'
import { images } from '../../content/images'
import { WavyDivider } from './WavyDivider'

export function FounderSection() {
  return (
    <section
      className="bg-cream pt-16 pb-0 sm:pt-24"
      id="founder"
      aria-labelledby="founder-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:gap-0">
          <div className="relative z-20 mx-auto w-full max-w-sm shrink-0 lg:mx-0 lg:-mr-12 lg:max-w-md xl:-mr-16">
            <img
              src={images.founder}
              alt="Lakeisha Appleton, founder of Ada Psychiatry"
              className="aspect-[5/4] w-full rounded-2xl object-cover object-top shadow-xl"
              width={600}
              height={480}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="border-gold-line relative z-10 flex-1 rounded-2xl border-2 bg-transparent px-6 py-10 sm:px-10 sm:py-12 lg:ml-0 lg:pr-12 lg:pl-16 xl:pl-24">
            <h2
              id="founder-heading"
              className="font-display text-foreground text-3xl font-semibold sm:text-4xl"
            >
              Meet The Founder
            </h2>
            <p className="font-display text-foreground mt-6 text-2xl font-medium sm:text-3xl">
              Lakeisha Appleton
            </p>
            <p className="text-secondary-fg mt-2 text-sm font-medium tracking-wide sm:text-base">
              FNP-C, PMHNP- BC
            </p>
            <blockquote className="text-secondary-fg border-gold-line mt-8 border-l-2 pl-5 text-base leading-relaxed sm:text-lg">
              <p>
                “Mental health problems don’t define who you are. They are something you experience.
                You walk in the rain and you feel the rain, but, importantly, YOU ARE NOT THE RAIN.”
              </p>
              <footer className="text-muted-foreground mt-4 text-sm not-italic">— Matt Haig</footer>
            </blockquote>
            <div className="mt-10">
              <GoldButton href="#treatment-focus" showArrow>
                Learn More
              </GoldButton>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 sm:mt-16">
        <WavyDivider />
      </div>
    </section>
  )
}
