const states = [
  {
    state: 'Arizona',
    description: 'In-person and Virtual appointment',
    image:
      'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&h=600&q=80',
    imageAlt: 'Phoenix, Arizona skyline at sunset with mountains',
  },
  {
    state: 'Washington',
    description: 'Virtual appointment',
    image:
      'https://images.unsplash.com/photo-1502175353174-a7a70e73b362?auto=format&fit=crop&w=800&h=600&q=80',
    imageAlt: 'Seattle skyline with Space Needle',
  },
  {
    state: 'Oregon',
    description: 'Virtual appointment',
    image:
      'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&h=600&q=80',
    imageAlt: 'Portland skyline with Mount Hood in the distance',
  },
] as const

export function StatesSection() {
  return (
    <section
      className="bg-states-bg scroll-mt-20 px-5 py-16 sm:px-8 sm:py-20 md:py-24"
      id="states"
      aria-labelledby="states-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="states-heading"
          className="font-display text-foreground mx-auto max-w-4xl text-center text-2xl leading-tight font-bold tracking-tight sm:text-3xl md:text-4xl"
        >
          Now Accepting Patients In The Following States.
        </h2>

        <ul className="mt-12 grid gap-12 sm:mt-16 sm:grid-cols-3 sm:gap-8 lg:gap-12">
          {states.map((item) => (
            <li key={item.state} className="flex flex-col items-center text-center">
              <div
                className="arch-image-top relative mx-auto w-full max-w-[280px] overflow-hidden sm:max-w-[300px] lg:max-w-[320px]"
                style={{ height: 'clamp(11rem, 32vw, 15rem)' }}
              >
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover"
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="font-display text-foreground mt-6 text-xl font-bold sm:mt-8 sm:text-2xl">
                {item.state}
              </h3>
              <p className="text-muted-foreground mt-2 max-w-[14rem] font-sans text-sm leading-relaxed sm:text-base">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
