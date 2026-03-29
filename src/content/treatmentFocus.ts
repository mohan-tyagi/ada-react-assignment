import { images } from './images'

export const treatmentFocusRows = [
  {
    title: 'Mental Health',
    body: 'At Ada Psychiatry, we provide comprehensive care for mental health conditions including depression, anxiety, ADHD, and bipolar disorder. Our approach combines evidence-based treatment with a warm, collaborative partnership so you can build stability, clarity, and confidence in your daily life.',
    image: images.treatmentMentalHealth,
    imageAlt: 'Woman reflecting on her mental wellness',
    imageFirst: true,
  },
  {
    title: 'Addiction And Recovery',
    body: 'We understand addiction as a chronic dysfunction that affects the brain, behavior, and relationships — not a matter of willpower alone. Our team develops individualized treatment plans that emphasize safety, accountability, and sustainable recovery with medical and therapeutic support.',
    image: images.treatmentAddiction,
    imageAlt: 'Man in recovery resting at home',
    imageFirst: false,
  },
  {
    title: 'Supervised Medical Weight Loss',
    body: 'For patients with elevated BMI or obesity-related health concerns, our supervised medical weight loss program offers structured guidance that may include FDA-approved medications when appropriate, alongside nutrition education and follow-up care tailored to your goals and medical history.',
    image: images.treatmentWeightLoss,
    imageAlt: 'Woman in activewear focusing on wellness and fitness',
    imageFirst: true,
  },
] as const
