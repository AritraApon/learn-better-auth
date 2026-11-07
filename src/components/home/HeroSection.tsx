import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero-section section-wrap" id="home">
      <div className="hero-glow" aria-hidden="true" />
      <div className="page-shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> YOUR NEXT LINE OF CODE STARTS HERE</p>
          <h1>Hey, I&apos;m Apon <span className="wave" role="img" aria-label="waving hand">👋</span><br />I make tech <span className="text-gradient">make sense.</span></h1>
          <p className="hero-description">
            Welcome to Apon Dev — a place to learn programming, build for the web, and grow one practical project at a time.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#learning">Explore the lessons <span aria-hidden="true">↗</span></a>
            <Link className="button button-outline" href="/auth/register">Join the community <span aria-hidden="true">→</span></Link>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack" aria-hidden="true"><span>A</span><span>&lt;/&gt;</span><span>✦</span></div>
            <p><strong>Curious minds welcome.</strong><br />Let&apos;s figure it out together.</p>
          </div>
        </div>

        <div className="hero-visual" aria-label="A preview of a code editor">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="floating-chip chip-top"><span className="chip-dot" /> building something good</div>
          <div className="code-window">
            <div className="window-bar">
              <div className="window-dots"><i /><i /><i /></div>
              <span>hello-world.tsx</span>
              <span className="window-menu">•••</span>
            </div>
            <div className="code-content" aria-label="Code example">
              <div><span className="line-no">01</span><span className="code-purple">const</span> <span className="code-blue">journey</span> = {"{"}</div>
              <div><span className="line-no">02</span>&nbsp;&nbsp;learn: <span className="code-green">&quot;every day&quot;</span>,</div>
              <div><span className="line-no">03</span>&nbsp;&nbsp;build: <span className="code-green">&quot;real things&quot;</span>,</div>
              <div><span className="line-no">04</span>&nbsp;&nbsp;share: <span className="code-green">true</span>,</div>
              <div><span className="line-no">05</span>{"};"}</div>
              <div className="code-spacer"><span className="line-no">06</span></div>
              <div><span className="line-no">07</span><span className="code-purple">await</span> <span className="code-blue">growTogether</span>(journey);<span className="cursor" /></div>
            </div>
            <div className="window-status"><span>◉ &nbsp;All systems curious</span><span>UTF-8 &nbsp; TypeScript</span></div>
          </div>
          <div className="floating-chip chip-bottom"><span className="sparkle">✳</span> learn by building</div>
          <div className="visual-caption"><span className="caption-line" /> A little progress, every day.</div>
        </div>
      </div>
      <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
    </section>
  );
}
