'use client'

import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-[1000px] mx-auto py-8 flex flex-col items-center bg-[var(--background)] md:flex-row md:justify-between">
        <div>
          <p>© 2025 Joyce's Portfolio. All rights reserved.</p>
        </div>
        <div className="flex flex-col items-center md:flex-row">
          <Link href="/privacy" className="text-[var(--foreground)] no-underline md:ml-4">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-[var(--foreground)] no-underline md:ml-4">
            Terms of Service
          </Link>
          <Link href="/security" className="text-[var(--foreground)] no-underline md:ml-4">
            Security
          </Link>
        </div>
      </div>
    </footer>
  )
} 