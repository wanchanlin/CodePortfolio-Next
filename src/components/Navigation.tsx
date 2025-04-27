"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="navigation-container">
        <div className="navigation-wrapper">
          <Link href="/" className="navigation-logo">
            <img src="/images/logo.svg" alt="logo" className="logo-img" />
          </Link>

          {/* Desktop menu */}
          <div className="navigation-menu desktop-menu">
            <Link href="#about" className="nav-link">
              About
            </Link>
            <Link href="#services" className="nav-link">
              Services
            </Link>
            <Link href="#projects" className="nav-link">
              Projects
            </Link>
            <Link href="#contact" className="nav-link">
              Contact
            </Link>
          </div>

          {/* Hamburger for mobile */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="hamburger-icon" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="navigation-menu mobile-menu">
              <Link href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <Link href="#services" className="nav-link" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
              <Link href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
              <Link href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </div>
          )}

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
