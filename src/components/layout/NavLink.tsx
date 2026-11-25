"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  label: string;
  onClick?: () => void;
};

export default function NavLink({ href, label, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;


  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className="nav-home"
      style={
        isActive
          ? {
              color: "var(--lime)",
              fontWeight: 600,
              background: "rgba(199, 243, 107, 0.08)",
              padding: "6px 12px",
              borderRadius: "7px",
            }
          : undefined
      }
    >
      {label}
    </Link>
  );
}