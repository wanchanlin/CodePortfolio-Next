'use client'

import React from 'react'
import Link from 'next/link'

const FOOTER_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Security', href: '/security' },
]

export default function Footer2() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full px-4">
      <div className="mx-auto my-8 flex max-w-5xl flex-col items-center justify-between gap-8 rounded-full bg-white px-12 py-3 shadow-sm dark:border-zinc-800 dark:bg-gray-800 md:flex-row md:justify-start md:py-4">
        
        {/* Copyright Section */}
        <div className="text-gray-400 dark:text-white">
          <p className="text-center text-sm">
            © {currentYear} Joyce's Portfolio. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center md:flex-row md:ml-auto">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 no-underline transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-300 md:ml-6"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
      </div>
    </footer>
  )
}