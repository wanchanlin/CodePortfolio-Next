'use client'

import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">© 2024 Portfolio. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-gray-900">
              Terms of Service
            </Link>
            <Link href="/security" className="text-gray-600 hover:text-gray-900">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 