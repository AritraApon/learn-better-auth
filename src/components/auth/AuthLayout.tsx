import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

type AuthLayoutProps = {
  children: React.ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  alternateText: string;
  alternateLabel: string;
  alternateHref: string;
};

export default function AuthLayout({
  children,
  eyebrow,
  title,
  description,
  alternateText,
  alternateLabel,
  alternateHref,
}: AuthLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="auth-page">
        <div className="auth-decoration auth-decoration-one" aria-hidden="true" />
        <div className="auth-decoration auth-decoration-two" aria-hidden="true" />
        <section className="auth-card">
          <Link className="auth-brand" href="/"><span className="brand-mark">a.</span><span>Apon <strong>Dev</strong></span></Link>
          <p className="eyebrow auth-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="auth-description">{description}</p>
          {children}
          <p className="auth-alternate">{alternateText} <Link href={alternateHref}>{alternateLabel} <span aria-hidden="true">→</span></Link></p>
          <p className="auth-note"><span>✳</span> Made for curious minds.</p>
        </section>
      </main>
    </>
  );
}
