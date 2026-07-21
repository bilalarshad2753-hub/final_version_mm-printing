import type { Metadata } from 'next'
import ContactPageClient from '@/components/ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact MM Printing in Lahore for same-day printing, PVC cards, visiting cards, letterheads, and school workbook packages.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
