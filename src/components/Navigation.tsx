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

          {/* menu */}
          <div className="navigation-menu desktop-menu">
            <Link href="/about" className="nav-link">
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

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
