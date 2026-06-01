import { useEffect, useRef } from 'react';
import './Experience.css';

const experiences = [
  {
    title: 'SEO & Digital Marketing Executive',
    company: 'Digital Handler India',
    period: 'Feb 2026 - Present',
    bullets: [
      'Manage complete On-Page, Off-Page, and Technical SEO campaigns for multiple high-traffic websites.',
      'Successfully optimize websites according to Core Web Vitals (LCP, INP, CLS) standards to maximize site speed and user experience.',
      'Implement advanced schema markup, structured data, canonical flags, and resolve complex search console indexing errors.',
      'Spearhead next-gen conversational search strategies including AEO (Answer Engine) and GEO (Generative Engine) optimization.',
      'Design customized client-facing SEO performance and traffic analytics dashboards in Looker Studio.',
      'Coordinate with developers and content creators to align semantic keywords and ensure seamless technical execution.',
      'Significantly improve organic search traffic, keyword positioning, and inbound lead generation.'
    ]
  },
  {
    title: 'SEO & Digital Marketing Executive',
    company: 'Punjab IT',
    period: 'Jan 2023 - Dec 2025',
    bullets: [
      'Manage complete On-Page, Off-Page, and Technical SEO campaigns for multiple high-traffic websites.',
      'Successfully optimize websites according to Core Web Vitals (LCP, INP, CLS) standards to maximize site speed and user experience.',
      'Implement advanced schema markup, structured data, canonical flags, and resolve complex search console indexing errors.',
      'Spearhead next-gen conversational search strategies including AEO (Answer Engine) and GEO (Generative Engine) optimization.',
      'Design customized client-facing SEO performance and traffic analytics dashboards in Looker Studio.',
      'Coordinate with developers and content creators to align semantic keywords and ensure seamless technical execution.',
      'Significantly improve organic search traffic, keyword positioning, and inbound lead generation.'
    ]
  },
  {
    title: 'Jr. SEO Executive',
    company: 'ebuilderz Infotech',
    period: 'Nov 2021 - Dec 2022',
    bullets: [
      'Performed detailed keyword research and search intent competitor intelligence for diverse client portfolios.',
      'Optimized meta tags, heading hierarchies, URL structures, image alt text, and internal link architecture.',
      'Built high-authority backlinks, guest posting connections, local citations, and brand mentions.',
      'Conducted routine technical SEO audits, resolved crawl issues, fixed broken links, and managed redirects.',
      'Optimized Google Business Profiles to improve local map presence and drive brick-and-mortar leads.',
      'Maintained precise performance reports using Google Search Console and Google Analytics (GA4).'
    ]
  },
  {
    title: 'Digital Marketing Trainee',
    company: 'Ansh Infotech Training Center',
    period: 'Jan 2021 - July 2021',
    bullets: [
      'Acquired certificate of completion in Digital Marketing, mastering SEO fundamentals, search analytics, and SEM campaigns.',
      'Practiced hand-on directory submissions, forum posting, content structuring, and baseline CSS/HTML layouts.'
    ]
  }
];

function Experience() {
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
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience" ref={sectionRef}>
      <div className="container">
        <div className="experience-header">
          <p className="section-label animate-in">CAREER PATH</p>
          <h2 className="section-title animate-in delay-1">Work Experience</h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item animate-in delay-${index + 1}`}
            >
              <div className="timeline-dot" />
              <div className="timeline-card">
                <span className="timeline-period">{exp.period}</span>
                <h3 className="timeline-title">{exp.title}</h3>
                <p className="timeline-company">{exp.company}</p>
                {exp.bullets ? (
                  <ul className="timeline-bullets">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="timeline-bullet-item">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="timeline-description">{exp.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
