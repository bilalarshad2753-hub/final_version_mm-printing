import type { Metadata, Viewport } from 'next'
import Footer from '@/components/Footer'
import TopNavBar from '@/components/TopNavBar'
import { Hanken_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-hanken-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const gtmId = process.env.NEXT_PUBLIC_GTM_ID
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'MM Printing',
  image: 'https://www.mmprinting.pk/mm-logo.png',
  '@id': 'https://www.mmprinting.pk',
  url: 'https://www.mmprinting.pk',
  telephone: '+923099018555',
  priceRange: 'Rs',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'House # 6, Street # 6, Shawala Chowk, Near Bhogiwal Eid Gah Ufone Tower',
    addressLocality: 'Lahore',
    addressCountry: 'PK',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: [
    'https://www.facebook.com/share/1EZqGWyHmN/',
    'https://www.instagram.com/mm_printing555',
    'https://wa.me/923099018555',
    'https://www.tiktok.com/@mmprinting555',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '6',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Sara Malik' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        'MM Printing delivered crisp, vibrant banners on a tight timeline. Their customer service and quality made the project feel effortless.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Ahsan Raza' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        'The brochure prints had perfect color consistency and sharp text. Every detail was handled with professional care.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Mariam Khan' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        'From logo stickers to signage, the finished pieces exceeded expectations. The finish was premium and the delivery was fast.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Usman Qureshi' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        'The team’s attention to print accuracy and material quality is impressive. The final output looked polished and bold.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Hina Javed' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        'Great printing workflow and responsive support. Their design advice helped the campaign stand out with strong visuals.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Kamran Ali' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        'High-quality prints, sturdy stock, and excellent color depth. We will use MM Printing again for every key project.',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Printing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Single Side Black & White Printing',
        },
        price: '3.5',
        priceCurrency: 'PKR',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Double Side Black & White Printing',
        },
        price: '4.5',
        priceCurrency: 'PKR',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Single Side Colour Printing',
        },
        price: '7',
        priceCurrency: 'PKR',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Double Side Colour Printing',
        },
        price: '10',
        priceCurrency: 'PKR',
      },
    ],
  },
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mmprinting.pk'),
  title: {
    default: 'MM Printing',
    template: '%s | MM Printing',
  },
  description:
    'Fast, affordable printing, copying, PVC cards, visiting cards, and school packs in Pakistan with same day processing and delivery.',
  keywords: [
    'printing services',
    'printing services Lahore',
    'photocopy shop near me',
    'photocopy shop Lahore',
    'PVC card printing',
    'visiting card printing',
    'school workbook printing',
    'black and white printing',
    'color printing',
    'letterhead printing',
    'same-day printing Pakistan',
  ],
  authors: [{ name: 'MM Printing' }],
  publisher: 'MM Printing',
  openGraph: {
    title: 'MM Printing | Premium Printing & Copy Services in Pakistan',
    description:
      'Fast, affordable printing, copying, PVC cards, visiting cards, and school packs in Lahore with same day processing and delivery.',
    url: 'https://www.mmprinting.pk',
    siteName: 'MM Printing',
    locale: 'en_PK',
    type: 'website',
    images: [
      {
        url: '/mm-logo.png',
        width: 500,
        height: 500,
        alt: 'MM Printing logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MM Printing | Premium Printing & Copy Services in Pakistan',
    description:
      'Fast, affordable printing, copying, PVC cards, visiting cards, and school packs in Lahore with same-day processing and delivery.',
    images: [
    {
      url: '/mm-logo.png',
      alt: 'MM Printing logo',
    },
  ],
},
  icons: {
    icon: [
      { rel: 'icon', url: '/browser logo/favicon.png', sizes: 'any' },
      { rel: 'icon', url: '/browser logo/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', url: '/browser logo/favicon-16x16.png', sizes: '16x16' },
    ],
    apple: [{ rel: 'apple-touch-icon', url: '/mm-logo.png' }],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#121416',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-PK" className={`${hankenGrotesk.variable} ${jetbrainsMono.variable} dark`}>
      <head>
        {gtmId ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
        ) : null}
        {metaPixelId ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${metaPixelId}');
                fbq('track', 'PageView');
              `,
            }}
          />
        ) : null}
      </head>
      <body className="bg-[#121416] text-[#e2e2e5] selection:bg-[#f26419] selection:text-[#4e1900] font-body-md overflow-x-hidden">
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        ) : null}
        {metaPixelId ? (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema),
          }}
        />
        <TopNavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
