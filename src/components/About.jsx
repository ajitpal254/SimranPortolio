import { useEffect, useRef } from 'react';
import './About.css';

const infoCards = [
  { icon: '📍', label: 'Location', value: 'Punjab, India' },
  { icon: '📧', label: 'Email', value: 'maanjhsami@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+91 7888599274' },
  { icon: '💍', label: 'Status', value: 'Married' },
];

const achievements = [
  { text: 'Improved organic website traffic through advanced SEO optimization.', icon: '📈' },
  { text: 'Successfully optimized websites according to Core Web Vitals standards.', icon: '⚡' },
  { text: 'Increased keyword rankings on Google search results.', icon: '🎯' },
  { text: 'Generated high-quality leads through SEO & digital marketing campaigns.', icon: '👥' },
  { text: 'Managed and delivered multiple SEO projects successfully.', icon: '💼' },
];

const interests = [
  { name: 'Photography', icon: '📷' },
  { name: 'Cooking', icon: '🍳' },
  { name: 'Reading', icon: '📚' },
  { name: 'Dancing', icon: '💃' },
  { name: 'Badminton', icon: '🏸' },
];

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll('.animate-in');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <p className="section-label animate-in">ABOUT ME</p>
        <h2 className="section-title animate-in delay-1">
          Driving Digital Growth Through SEO Excellence
        </h2>

        <div className="about-content">
          {/* Left column */}
          <div className="about-text animate-in delay-2">
            <p>
              I am a results-driven SEO Executive and Digital Marketing Specialist dedicated to unlocking sustainable, high-impact organic growth. By combining deep technical audits, content optimization, high-quality backlink creation, and performance monitoring, I transform standard search engine presence into a powerful, high-converting revenue driver.
            </p>
            <p style={{ marginTop: '16px' }}>
              Whether analyzing Core Web Vitals, optimizing complex WordPress &amp; Shopify configurations, or implementing schema markup and search intent structures, I align search algorithms with actual business objectives to achieve SERP dominance.
            </p>
          </div>

          {/* Right column */}
          <div className="about-info-grid">
            {infoCards.map((card, index) => (
              <div
                key={card.label}
                className={`info-card animate-in delay-${index + 2}`}
              >
                <span className="info-card-icon">{card.icon}</span>
                <span className="info-card-label">{card.label}</span>
                <span className="info-card-value">{card.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="about-achievements animate-in delay-4">
          <h3>Key Achievements</h3>
          <div className="achievements-grid">
            {achievements.map((ach, index) => (
              <div key={index} className="glass-card achievement-card">
                <span className="achievement-icon">{ach.icon}</span>
                <p className="achievement-text">{ach.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="about-interests animate-in delay-5">
          <h3>Things I Enjoy</h3>
          <div className="interests-list">
            {interests.map((item) => (
              <div key={item.name} className="interest-bubble">
                <span>{item.icon}</span>
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
