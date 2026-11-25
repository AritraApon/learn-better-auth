import Link from "next/link";
import React from "react";

const skills = [
  { mark: "JS", name: "JavaScript", desc: "Modern ES6+", cls: "skill-js" },
  { mark: "TS", name: "TypeScript", desc: "Type-safe code", cls: "skill-ts" },
  { mark: "⚛", name: "React", desc: "Component-based UI", cls: "skill-react" },
  { mark: "N", name: "Next.js", desc: "Full-stack React", cls: "skill-next" },
  { mark: "⬢", name: "Node.js", desc: "Backend APIs", cls: "skill-node" },
  { mark: "🔗", name: "REST / GraphQL", desc: "API design", cls: "skill-backend" },
];

const journey = [
  {
    step: "01",
    year: "2021",
    iconCls: "topic-lime",
    title: "The Beginning",
    desc: "Learned HTML and CSS to build my first static website. Then mastered the fundamentals of JavaScript.",
  },
  {
    step: "02",
    year: "2022",
    iconCls: "topic-violet",
    title: "Entering React",
    desc: "Started component-based development with React. Gained solid skills in state management and hooks.",
  },
  {
    step: "03",
    year: "2023+",
    iconCls: "topic-cyan",
    title: "Full-Stack Journey",
    desc: "Learned Node.js and databases to build full-stack applications. Now working on real-world projects.",
  },
];

const AboutPage = () => {
  return (
    <main className="about-page">
      {/* ── Hero ─────────────────────────────────── */}
      <section className="about-hero">
        <div className="page-shell">
          <p className="eyebrow">
            <span className="status-dot" />
            ABOUT ME
          </p>
          <h1 className="about-hero-title">
            I'm a <span className="text-gradient">Developer</span>{" "}
            <span className="wave">👋</span>
          </h1>
          <p className="about-hero-desc">
            I love solving problems through code. For the past few years I've
            been working on web development and I'm always eager to learn new
            technologies.
          </p>
        </div>
      </section>

      {/* ── Story ────────────────────────────────── */}
      <section className="about-section">
        <div className="page-shell">
          <div className="about-grid">
            <div className="about-story">
              <p className="large-copy">
                I've had a deep interest in computers and technology since
                childhood. That curiosity is what brought me into programming.
              </p>
              <p>
                I started with HTML and CSS back in 2021, then gradually learned
                JavaScript, React, and Node.js. Today I can build full-stack
                applications.
              </p>
              <p>
                I believe good code isn't just about making things work — it
                should be clean, maintainable, and readable.
              </p>
              <Link href="/projects" className="text-link">
                View my projects <span>↗</span>
              </Link>
            </div>

            <div className="about-note">
              <div className="note-top">
                <span className="note-icon">✦</span>
                MY PHILOSOPHY
              </div>
              <blockquote>
                "Code is <em>poetry</em>. Every line should be{" "}
                <em>purposeful</em>."
              </blockquote>
              <div className="note-signature">
                <span className="signature-mark">A</span>
                <div>
                  Your Name
                  <small>Full-Stack Developer</small>
                </div>
              </div>
              <span className="note-decoration">"</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ───────────────────────────────── */}
      <section className="skills-section">
        <div className="page-shell">
          <div className="section-heading-row">
            <div className="section-heading">
              <p className="eyebrow">
                <span className="status-dot" />
                SKILLS
              </p>
              <h2>
                Technologies I <span className="text-gradient">work with</span>
              </h2>
            </div>
            <p className="heading-aside">Always learning something new</p>
          </div>

          <div className="skills-grid">
            {skills.map((s, i) => (
              <div
                className="skill-card"
                key={s.name}
                style={{ "--card-index": i } as React.CSSProperties}
              >
                <span className={`skill-mark ${s.cls}`}>{s.mark}</span>
                <div>
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                </div>
                <span className="card-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey ──────────────────────────────── */}
      <section className="learning-section">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">
              <span className="status-dot" />
              JOURNEY
            </p>
            <h2>
              My <span className="text-gradient">learning</span> path
            </h2>
          </div>

          <div className="learning-grid">
            {journey.map((item) => (
              <div className="learning-card" key={item.step}>
                <div className="learning-card-top">
                  <span className={`learning-icon ${item.iconCls}`}>
                    {item.step}
                  </span>
                  <span className="topic-number">{item.year}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <Link href="/career">
                  Read more <span>↗</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="subscribe-section">
        <div className="page-shell">
          <div className="subscribe-card">
            <div className="subscribe-content">
              <p className="eyebrow">
                <span className="subscribe-live-dot" />
                LET'S CONNECT
              </p>
              <h2>
                Let's build
                <br />
                <span className="subscribe-heading-accent">something</span>{" "}
                together
              </h2>
              <p className="subscribe-description">
                Have a new project, a collaboration in mind, or just want to
                chat? I'm always open to it.
              </p>
              <Link
                href="/support"
                className="button button-primary youtube-button"
              >
                <span>Get in touch</span>
                <span className="button-arrow">↗</span>
              </Link>
            </div>
            <div className="subscribe-side">
              <span className="subscribe-orb subscribe-orb-one" />
              <span className="subscribe-orb subscribe-orb-two" />
              <span className="subscribe-art-ring" />
              <span className="subscribe-art-ring ring-two" />
              <div className="play-tile">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;