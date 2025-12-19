'use client'

import React from 'react'
import Link from 'next/link'

export default function Footer2() {
  return (
    <footer>
      <div className= " my-8 flex items-center justify-between px-6 py-3 md:py-4 shadow-sm max-w-5xl rounded-full mx-auto w-full bg-white dark:bg-gray-800  dark:border-zinc-800 sticky top-4 z-50 md:justify-start gap-8 text-gray-400 dark:text-white text-sm "
          >
        <div>
          <p >© 2025 Joyce's Portfolio. All rights reserved.</p>
        </div>
        <div className="flex flex-col items-center md:flex-row">
          <Link href="/privacy" className="dark:text-white text-sm no-underline md:ml-4">
            Privacy Policy
          </Link>
          <Link href="/terms" className="dark:text-white text-smno-underline md:ml-4">
            Terms of Service
          </Link>
          <Link href="/security" className=" dark:text-white text-sm text-sm no-underline md:ml-4">
            Security
          </Link>
        </div>
      </div>
    </footer>
  )
} 