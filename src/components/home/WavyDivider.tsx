/** Light scalloped edge between sections */
export function WavyDivider() {
  return (
    <div className="w-full leading-none" aria-hidden>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        className="text-wave block h-12 w-full sm:h-14"
      >
        <path
          fill="currentColor"
          d="M0,28 C60,8 120,48 180,28 C240,8 300,48 360,28 C420,8 480,48 540,28 C600,8 660,48 720,28 C780,8 840,48 900,28 C960,8 1020,48 1080,28 C1140,8 1200,48 1260,28 C1320,8 1380,48 1440,28 L1440,56 L0,56 Z"
        />
      </svg>
    </div>
  )
}
