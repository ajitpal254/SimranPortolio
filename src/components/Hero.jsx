import './Hero.css';
import simranImg from '../assets/simran.jpeg';

// Helper to convert standard Google Drive preview links into high-speed direct image streams
// const getDirectImageUrl = (url) => {
//   if (!url) return '';
//   if (url.includes('drive.google.com')) {
//     const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
//     if (match && match[1]) {
//       return `https://lh3.googleusercontent.com/d/${match[1]}`;
//     }
//   }
//   return url;
// };

export default function Hero() {
  const profileSrc = simranImg;
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="hero" id="home">
      {/* Background Particles & Shapes */}
      <div className="hero__particles">
        <div className="hero__particle hero__particle--1" />
        <div className="hero__particle hero__particle--2" />
        <div className="hero__particle hero__particle--3" />
        <div className="hero__particle hero__particle--4" />
        <div className="hero__particle hero__particle--5" />
        <div className="hero__particle hero__particle--6" />
        <div className="hero__shape hero__shape--diamond" />
        <div className="hero__shape hero__shape--cross" />
      </div>

      <div className="hero__container">
        <div className="hero__grid">
          {/* Left – Content */}
          <div className="hero__content">
            <span className="hero__greeting">
              <span className="hero__greeting-emoji">👋</span> Hello, I&apos;m
            </span>

            <h1 className="hero__name">SIMRAN MAANJU</h1>

            <p className="hero__tagline">SEO Executive &amp; Digital Marketing Specialist</p>

            <p className="hero__description">
              Results-driven SEO Executive and Digital Marketing professional with deep expertise in On-Page, Off-Page, and Technical SEO. Skilled in improving website rankings, organic traffic, and user experiences through data-backed strategies, Core Web Vitals optimization, and advanced AEO &amp; GEO architectures.
            </p>

            <div className="hero__cta">
              <a href="#contact" className="hero__cta-btn" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
                <span className="btn btn-primary">
                  Get in Touch <span className="hero__cta-arrow">→</span>
                </span>
              </a>
              <a href="#experience" className="hero__cta-btn" onClick={(e) => { e.preventDefault(); scrollTo('experience'); }}>
                <span className="btn btn-outline">
                  View Experience
                </span>
              </a>
            </div>
          </div>

          {/* Right – Visual */}
          <div className="hero__visual">
            <div className="hero__image-wrapper">
              <img
                className="hero__profile-img"
                src={profileSrc}
                alt="Simran Maanju – SEO Executive & Digital Marketing Specialist"
                loading="eager"
              />

              {/* Decorative Rings */}
              <div className="hero__ring" />
              <div className="hero__ring hero__ring--inner" />

              {/* Floating Badges */}
              <div className="hero__badge hero__badge--experience">
                <span className="hero__badge-icon">🚀</span>
                4+ Years Exp.
              </div>
              <div className="hero__badge hero__badge--seo">
                <span className="hero__badge-icon">🎯</span>
                SEO Specialist
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="hero__stats">
          <div className="hero__stats-inner">
            <div className="hero__stat">
              <span className="hero__stat-value">4+ Years</span>
              <span className="hero__stat-label">SEO Experience</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">50+</span>
              <span className="hero__stat-label">Websites Audited</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">200%+</span>
              <span className="hero__stat-label">Avg. Organic Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
