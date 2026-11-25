"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import NavLink from "./NavLink";


export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const { data: session } = authClient.useSession();
  const users = session?.user;

   const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Career", path: "/career" },
  { name: "Projects", path: "/projects" },
  { name: "Support", path: "/support" , },
];


  const closeMenu = () => setMenuOpen(false);

  const handleLogOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/auth/login");
          toast.success("Logged out successfully.");
        },
      },
    });
  };

  return (
    <header className="site-header">
      <nav className="navbar page-shell" aria-label="Main navigation">
        {/* Logo */}
        <Link className="brand" href="/" onClick={closeMenu}>
          <span className="brand-mark">a.</span>
          <span>
            Apon <strong>Dev</strong>
          </span>
        </Link>

        {/* Mobile toggle */}
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

        {/* Nav content */}
        <div className={`nav-content${menuOpen ? " is-open" : ""}`}>
        {navLinks.map((link) => (
          <NavLink
              key={link.path}
              href={link.path}
              label={link.name}
              onClick={closeMenu}
            />
          ))}

          <div className="nav-actions">
            {users ? (
              <>
                <span className="nav-greeting">Hi, {users.name}</span>
                <button
                  onClick={handleLogOut}
                  className="button button-quiet nav-logout"
                  type="button"
                >
                  Log out <span aria-hidden="true">↗</span>
                </button>
              </>
            ) : (
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