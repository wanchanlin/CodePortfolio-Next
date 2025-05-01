'use client'

import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      
        <div className="footer-content">
          <div className="footer-copyright">
            <p>© 2025 Joyce's Portfolio. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <Link href="/privacy" className="footer-link">
              Privacy Policy
            </Link>
            <Link href="/terms" className="footer-link">
              Terms of Service
            </Link>
            <Link href="/security" className="footer-link">
              Security
            </Link>
          </div>
        
      </div>
    </footer>
  )
} 