import { GoldButton } from '../GoldButton'
import { treatmentFocusRows } from '../../content/treatmentFocus'

function CircularFocusImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="bg-cream mx-auto flex w-full max-w-[280px] justify-center sm:max-w-[300px] lg:max-w-[320px]">
      <div className="border-gold-line aspect-square w-full rounded-full border-2 p-1.5 shadow-sm sm:p-2">
        <img
          src={src}
          alt={alt}
          className="h-full w-full rounded-full object-cover"
          width={320}
          height={320}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  )
}

function TreatmentTextBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="text-center lg:text-left">
      <h3 className="font-display text-foreground text-2xl font-semibold sm:text-3xl">{title}</h3>
      <p className="text-secondary-fg mx-auto mt-4 max-w-xl text-sm leading-relaxed sm:text-base lg:mx-0">
        {body}
      </p>
      <div className="mt-8 flex justify-center lg:justify-start">
        <GoldButton href="#book" showArrow size="sm">
          Learn More
        </GoldButton>
      </div>
    </div>
  )
}

export function TreatmentFocusSection() {
  return (
    <section
      className="bg-cream scroll-mt-20 pt-6 pb-20 sm:pt-8 sm:pb-24"
      id="treatment-focus"
      aria-labelledby="treatment-focus-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="treatment-focus-heading"
          className="font-display text-foreground text-center text-3xl font-semibold sm:text-4xl md:text-[2.5rem]"
        >
          Our Treatment Focus
        </h2>

        {treatmentFocusRows.map((row, index) => (
          <div
            key={row.title}
            className={
              index === 0
                ? 'mt-14 grid items-center gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-16'
                : 'mt-16 grid items-center gap-10 lg:mt-24 lg:grid-cols-2 lg:gap-16'
            }
          >
            {row.imageFirst ? (
              <>
                <CircularFocusImage src={row.image} alt={row.imageAlt} />
                <TreatmentTextBlock title={row.title} body={row.body} />
              </>
            ) : (
              <>
                <TreatmentTextBlock title={row.title} body={row.body} />
                <CircularFocusImage src={row.image} alt={row.imageAlt} />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
