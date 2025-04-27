import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import '~/css/style.css'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ThemeProvider } from '../components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Full-stack developer and designer portfolio',
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
          <div className="pt-16">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
} 