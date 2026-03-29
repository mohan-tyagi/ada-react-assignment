/** Cream → black cap; wavy top edge */
function WaveIntoBlack() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className="block h-14 w-full sm:h-[4.25rem]"
      aria-hidden
    >
      <path
        fill="#000000"
        d="M0,80 L1440,80 L1440,46 C1320,72 1200,20 1080,46 C960,72 840,20 720,46 C600,72 480,20 360,46 C240,72 120,20 0,46 L0,80 Z"
      />
    </svg>
  )
}

/* Bottom cap of the quote band: black with wavy lower edge.*/
function WaveOutOfBlack() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className="block h-14 w-full sm:h-[4.25rem]"
      aria-hidden
    >
      <path
        fill="#000000"
        d="M0,0 L1440,0 L1440,34 C1320,60 1200,8 1080,34 C960,60 840,8 720,34 C600,60 480,8 360,34 C240,60 120,8 0,34 L0,0 Z"
      />
    </svg>
  )
}

export function QuoteBanner() {
  return (
    <section className="bg-cream" aria-labelledby="quote-banner-heading">
      <WaveIntoBlack />
      <div className="bg-black px-5 py-3 text-center sm:px-8 sm:py-3 md:py-3">
        <div className="text-gold-mid flex justify-center" aria-hidden>
          <span className="font-display text-5xl leading-none sm:text-5xl md:text-6xl">“</span>
        </div>
        <h2
          id="quote-banner-heading"
          className="font-display max-w-4xl px-2 text-xl leading-snug font-normal text-white sm:mx-auto sm:text-2xl md:text-[1.75rem] md:leading-relaxed"
        >
          “We help people living with and experiencing difficult times”
        </h2>
      </div>
      <WaveOutOfBlack />
    </section>
  )
}
