'use client'

import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <div>
            <p>© 2024 Portfolio. All rights reserved.</p>
          </div>
          <div>
            <Link href="/privacy">
              Privacy Policy
            </Link>
            <Link href="/terms" >
              Terms of Service
            </Link>
            <Link href="/security">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 