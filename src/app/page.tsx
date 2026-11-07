import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import LearningSection from "@/components/home/LearningSection";
import SkillsSection from "@/components/home/SkillsSection";
import SubscribeSection from "@/components/home/SubscribeSection";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <LearningSection />
        <SubscribeSection />
      </main>
      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">a.</span>
          <span>Apon <strong>Dev</strong></span>
        </a>
        <p>Made with curiosity, coffee, and a little bit of code.</p>
        <a href="#home" className="footer-top-link">Back to top ↑</a>
      </footer>
    </>
  );
}
