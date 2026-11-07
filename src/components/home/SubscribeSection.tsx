import { YOUTUBE_CHANNEL_URL } from "@/config/site";

function YouTubeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    </svg>
  );
}

export default function SubscribeSection() {
  return (
    <section className="section-wrap subscribe-section" id="subscribe">
      <div className="page-shell">
        <div className="subscribe-card">
          <div className="subscribe-orb subscribe-orb-one" aria-hidden="true" />
          <div className="subscribe-orb subscribe-orb-two" aria-hidden="true" />
          <div className="subscribe-content">
            <p className="eyebrow"><span className="subscribe-live-dot" /> THE NEXT CHAPTER IS YOURS</p>
            <h2>Enjoying the<br /><span className="subscribe-heading-accent">content?</span></h2>
            <p className="subscribe-description">Join the Apon Dev community and subscribe for more coding tutorials, programming tips, and development knowledge.</p>
            <a
              className={`button youtube-button${YOUTUBE_CHANNEL_URL ? "" : " is-unavailable"}`}
              href={YOUTUBE_CHANNEL_URL || undefined}
              aria-disabled={!YOUTUBE_CHANNEL_URL}
              title={YOUTUBE_CHANNEL_URL ? "Subscribe to Apon Dev on YouTube" : "Add your channel URL in src/config/site.ts to activate this link"}
              target={YOUTUBE_CHANNEL_URL ? "_blank" : undefined}
              rel={YOUTUBE_CHANNEL_URL ? "noreferrer" : undefined}
            >
              <span className="youtube-icon"><YouTubeIcon /></span>
              <span>Subscribe on YouTube</span>
              <span className="button-arrow" aria-hidden="true">↗</span>
            </a>
            <p className="subscribe-footnote"><span className="bell-wrap"><span className="bell-icon">♧</span><span className="bell-ring" /></span> New videos, good ideas, zero spam.</p>
          </div>
          <div className="subscribe-side" aria-hidden="true">
            <div className="subscribe-art-ring ring-one" />
            <div className="subscribe-art-ring ring-two" />
            <div className="play-tile"><YouTubeIcon /></div>
            <span className="art-spark art-spark-one">✳</span>
            <span className="art-spark art-spark-two">✦</span>
            <div className="art-label"><span className="art-label-dot" /> Apon Dev <span>·</span> subscribe &amp; grow</div>
          </div>
        </div>
      </div>
    </section>
  );
}
