"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navigation">
      <div className="navigation-container">
        <div className="navigation-wrapper">
          <Link href="/" className="navigation-logo">
            <img src="/images/logo.svg" alt="logo" className="logo-img" />
          </Link>

          {/* Hamburger Menu Button */}
          <button 
            className="mobile-menu-button md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger-icon ${menuOpen ? 'open' : ''}`}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </span>
          </button>

          {/* Desktop and Mobile Menu */}
          <div className={`navigation-menu ${menuOpen ? 'show-mobile-menu' : ''}`}>
            <Link href="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
              About
            </Link>
           
            <Link href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
            <Link href="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <Link href="https://wanchanlin.webflow.io/" target="_blank" className="nav-link" onClick={() => setMenuOpen(false)}>
              Design Site
            </Link>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
