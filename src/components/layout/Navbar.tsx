"use client";

import Link from "next/link";
import { useState } from "react";

// User type — better-auth theke asha user object
type NavbarProps = {
  user?: { name: string } | null;
  onLogout?: () => void;
};

export default function Navbar({ user = null, onLogout }: NavbarProps) {
  // Mobile menu open/close state
  const [menuOpen, setMenuOpen] = useState(false);

  // Menu bondho kore dey (link click korle)
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar page-shell" aria-label="Main navigation">
        {/* ---- Logo / Brand ---- */}
        <Link className="brand" href="/" onClick={closeMenu}>
          <span className="brand-mark">a.</span>
          <span>
            Apon <strong>Dev</strong>
          </span>
        </Link>

        {/* ---- Mobile menu toggle button ---- */}
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        {/* ---- Nav links + actions ---- */}
        <div className={`nav-content${menuOpen ? " is-open" : ""}`}>
          <Link className="nav-home" href="/" onClick={closeMenu}>
            Home
          </Link>

          <div className="nav-actions">
            {user ? (
              // ---- Jodi user logged in hoy ----
              <>
                <span className="nav-greeting">Hi, {user.name}</span>
                <button
                  className="button button-quiet nav-logout"
                  type="button"
                  onClick={onLogout}
                >
                  Log out <span aria-hidden="true">↗</span>
                </button>
              </>
            ) : (
              // ---- Jodi user logged in na hoy ----
              <>
                <Link className="nav-login" href="/auth/login" onClick={closeMenu}>
                  Log in
                </Link>
                <Link
                  className="button button-small button-primary nav-register"
                  href="/auth/register"
                  onClick={closeMenu}
                >
                  Get started <span aria-hidden="true">↗</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}