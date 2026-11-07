const skills = [
  { mark: "JS", name: "JavaScript", detail: "The language of the web", style: "skill-js" },
  { mark: "TS", name: "TypeScript", detail: "JavaScript, with confidence", style: "skill-ts" },
  { mark: "⚛", name: "React", detail: "Build interactive interfaces", style: "skill-react" },
  { mark: "N", name: "Next.js", detail: "More than a frontend", style: "skill-next" },
  { mark: "⬡", name: "Node.js", detail: "JavaScript beyond the browser", style: "skill-node" },
  { mark: "{ }", name: "Backend", detail: "What makes apps work", style: "skill-backend" },
];

export default function SkillsSection() {
  return (
    <section className="section-wrap skills-section" id="skills">
      <div className="page-shell">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">TOOLS OF THE TRADE</p>
            <h2>What we&apos;re <span className="text-gradient">building with.</span></h2>
          </div>
          <p className="heading-aside">A growing toolkit for bringing<br />ideas to life on the web.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <article className="skill-card" key={skill.name} style={{ "--card-index": index } as React.CSSProperties}>
              <span className={`skill-mark ${skill.style}`}>{skill.mark}</span>
              <div><h3>{skill.name}</h3><p>{skill.detail}</p></div>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
