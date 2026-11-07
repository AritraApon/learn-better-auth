const topics = [
  { number: "01", icon: "</>", title: "Frontend foundations", description: "Go from HTML and CSS basics to expressive, interactive interfaces with JavaScript and React.", accent: "topic-lime" },
  { number: "02", icon: "⌘", title: "Modern web apps", description: "Explore TypeScript and Next.js while building fast, polished experiences for the real world.", accent: "topic-violet" },
  { number: "03", icon: "↗", title: "Beyond the browser", description: "Understand APIs, Node.js, and the backend building blocks that power a complete application.", accent: "topic-cyan" },
];

export default function LearningSection() {
  return (
    <section className="section-wrap learning-section" id="learning">
      <div className="page-shell">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">YOUR LEARNING PATH</p>
            <h2>Small steps.<br className="mobile-break" /> <span className="text-gradient">Big possibilities.</span></h2>
          </div>
          <p className="heading-aside">Practical lessons to help turn<br />&ldquo;I wonder how&rdquo; into &ldquo;I built that.&rdquo;</p>
        </div>
        <div className="learning-grid">
          {topics.map((topic) => (
            <article className="learning-card" key={topic.number}>
              <div className="learning-card-top"><span className={`learning-icon ${topic.accent}`}>{topic.icon}</span><span className="topic-number">{topic.number}</span></div>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              <a href="#subscribe" aria-label={`Learn about ${topic.title}`}>Explore topic <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
