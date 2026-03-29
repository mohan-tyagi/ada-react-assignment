import hero1 from '../assets/homeImages/hero1.png'
import founder from '../assets/homeImages/founder.png'
import whyChoose from '../assets/homeImages/whyChoose.png'

/* Images */
export const images = {
  founder: founder,
  treatmentMentalHealth:
    'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=600&h=600&q=80',
  treatmentAddiction:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=600&q=80',
  treatmentWeightLoss:
    'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&h=600&q=80',
  whyChoose: whyChoose,
} as const

/** Hero carousel */
export const heroSlides: ReadonlyArray<{ src: string; alt: string }> = [
  {
    src: hero1,
    alt: 'Healthcare professional meeting with a patient in a calm office setting',
  },
  {
    src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80',
    alt: 'Medical staff walking and talking together in a bright hospital corridor',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80',
    alt: 'Bright modern office workspace with natural light',
  },
  {
    src: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1920&q=80',
    alt: 'Layered mountain ridges at sunrise with soft mist and warm light',
  },
  {
    src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1920&q=80',
    alt: 'Laptop, notebook, pen, and coffee cup arranged on a wooden desk, seen from above',
  },
]
