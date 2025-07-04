import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
// import '~/css/style.css'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ThemeProvider } from '../components/ThemeProvider'
import GoogleAnalytics from '../components/GoogleAnalytics'
import { GA_MEASUREMENT_ID } from '../config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wanchan Website',
  description: 'Full-stack developer and designer portfolio',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Wanchan Website',
    description: 'Full-stack developer and designer portfolio',
    images: [
      {
        url: 'images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wanchan Website Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wanchan Website',
    description: 'Full-stack developer and designer portfolio',
    images: ['/twitter-image.jpg'],
  },
  other: {
    'msapplication-TileImage': 'images/stile-144x144.png',
    'apple-touch-icon': '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
          <GoogleAnalytics />
        </ThemeProvider>
      </body>
    </html>
  )
}