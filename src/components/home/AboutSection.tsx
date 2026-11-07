export default function AboutSection() {
  return (
    <section className="section-wrap about-section" id="about">
      <div className="page-shell">
        <div className="section-heading">
          <p className="eyebrow">A LITTLE ABOUT US</p>
          <h2>Good code starts<br />with <span className="text-gradient">good questions.</span></h2>
        </div>
        <div className="about-grid">
          <div className="about-story">
            <p className="large-copy">Apon Dev is my corner of the internet for learning out loud.</p>
            <p>Here, we break big ideas into friendly steps, turn concepts into projects, and share the lessons that make the next challenge feel a little less daunting.</p>
            <p>No gatekeeping. No pressure to know it all. Just useful ideas, honest progress, and a community that builds together.</p>
            <a className="text-link" href="#learning">See what you can learn <span aria-hidden="true">↗</span></a>
          </div>
          <div className="about-note">
            <div className="note-top"><span className="note-icon">✳</span><span>THE APON DEV WAY</span></div>
            <blockquote>&ldquo;The best way to learn to build is to <em>start building.</em>&rdquo;</blockquote>
            <div className="note-signature"><span className="signature-mark">a.</span><span>Apon<br /><small>Developer &amp; lifelong learner</small></span></div>
            <span className="note-decoration" aria-hidden="true">✳</span>
          </div>
        </div>
      </div>
    </section>
  );
}
