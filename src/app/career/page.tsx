import React from "react";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "2023 — Present",
    desc: "Building full-stack web applications with Next.js, React, Node.js and databases. Working with real clients on production apps.",
    tags: ["Next.js", "React", "Node.js"],
  },
  {
    role: "Frontend Developer",
    company: "Self-taught Projects",
    period: "2022 — 2023",
    desc: "Built dozens of React projects to master components, hooks, state management and modern UI patterns.",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    role: "The Beginning",
    company: "Learning Phase",
    period: "2021 — 2022",
    desc: "Started with HTML, CSS and JavaScript. Fell in love with the craft of turning ideas into working interfaces.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js",
  "Node.js", "REST APIs", "MongoDB", "Tailwind CSS",
];

const CareerPage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="about-hero">
        <div className="page-shell">
          <p className="eyebrow">
            <span className="status-dot" />
            CAREER
          </p>
          <h1 className="about-hero-title">
            My <span className="text-gradient">journey</span> so far
          </h1>
          <p className="about-hero-desc">
            From writing my first line of HTML to building full-stack apps —
            here's how I got here.
          </p>
        </div>
      </section>

      {/* Experience timeline */}
      <section className="about-section">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">
              <span className="status-dot" />
              EXPERIENCE
            </p>
            <h2>
              What I've <span className="text-gradient">worked on</span>
            </h2>
          </div>

          <div className="learning-grid">
            {experiences.map((exp, i) => (
              <div
                className="learning-card"
                key={exp.role}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="learning-card-top">
                  <span
                    className={`learning-icon ${
                      i === 0 ? "topic-lime" : i === 1 ? "topic-violet" : "topic-cyan"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="topic-number">{exp.period}</span>
                </div>
                <h3>{exp.role}</h3>
                <p>{exp.desc}</p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginTop: "auto",
                    paddingTop: "14px",
                  }}
                >
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "9px",
                        padding: "3px 8px",
                        borderRadius: "5px",
                        border: "1px solid var(--line)",
                        color: "var(--muted)",
                        background: "rgba(255,255,255,0.02)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills strip */}
      <section className="skills-section">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">
              <span className="status-dot" />
              TOOLKIT
            </p>
            <h2>
              Skills I <span className="text-gradient">bring</span>
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "9px",
            }}
          >
            {skills.map((s) => (
              <span
                key={s}
                style={{
                  padding: "9px 16px",
                  borderRadius: "8px",
                  border: "1px solid var(--line)",
                  background: "rgba(255,255,255,0.015)",
                  color: "var(--foreground)",
                  fontSize: "11px",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="subscribe-section">
        <div className="page-shell">
          <div className="subscribe-card">
            <div className="subscribe-content">
              <p className="eyebrow">
                <span className="subscribe-live-dot" />
                HIRE ME
              </p>
              <h2>
                Open to <span className="subscribe-heading-accent">new</span>
                <br />
                opportunities
              </h2>
              <p className="subscribe-description">
                Looking for a developer who cares about clean code and good UX?
                Let's talk.
              </p>
              <a
                href="/contact"
                className="button button-primary youtube-button"
              >
                <span>Contact me</span>
                <span className="button-arrow">↗</span>
              </a>
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

export default CareerPage;