'use client'

import React from 'react'
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
            Portfolio
          </Link>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                About
              </Link>
              <Link href="#services" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                Services
              </Link>
              <Link href="#projects" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                Projects
              </Link>
              <Link href="#contact" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                Contact
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
} 