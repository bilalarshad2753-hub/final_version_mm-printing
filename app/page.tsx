import type { Metadata } from 'next'
import HomePageClient from '@/components/HomePageClient'

export const metadata: Metadata = {
  title: 'Home | MM Printing',
  description:
    'High-quality black & white and color printing, PVC cards, visiting cards, and school workbook packages in Lahore with same-day processing and delivery.',
  alternates: {
    canonical: '/',
  },
}

export default function Page() {
  return <HomePageClient />
}
