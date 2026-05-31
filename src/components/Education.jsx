import { useState, useEffect, useRef } from 'react';
import './Education.css';

const educationData = [
  {
    degree: '+2 (Non Medical)',
    year: '2016',
    institution: 'Dasmesh Senior Secondary School (PSEB)',
  },
  {
    degree: 'B.Sc (Computer Science)',
    year: '2019',
    institution: 'Ramgarhia Girls College (P.U)',
  },
  {
    degree: 'M.Sc (Information Technology)',
    year: '2021',
    institution: 'Govt College For Girls (P.U)',
  },
];

const languagesData = [
  { name: 'English', rating: 5, total: 5 },
  { name: 'Hindi', rating: 5, total: 5 },
  { name: 'Punjabi', rating: 5, total: 5 },
];

function Education() {
  const [cardsVisible, setCardsVisible] = useState(false);
  const [langsVisible, setLangsVisible] = useState(false);
  const cardsRef = useRef(null);
  const langsRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.15 };

    const cardsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setCardsVisible(true);
        cardsObserver.disconnect();
      }
    }, observerOptions);

    const langsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLangsVisible(true);
        langsObserver.disconnect();
      }
    }, observerOptions);

    const cardsEl = cardsRef.current;
    const langsEl = langsRef.current;

    if (cardsEl) cardsObserver.observe(cardsEl);
    if (langsEl) langsObserver.observe(langsEl);

    return () => {
      if (cardsEl) cardsObserver.unobserve(cardsEl);
      if (langsEl) langsObserver.unobserve(langsEl);
    };
  }, []);

  const renderStars = (rating, total) => {
    return Array.from({ length: total }, (_, i) => (
      <span
        key={i}
        className={`star ${i < rating ? 'filled' : 'unfilled'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="education-header">
          <span className="section-label">EDUCATION</span>
          <h2 className="section-title">Academic Background</h2>
        </div>

        <div className="education-cards" ref={cardsRef}>
          {educationData.map((edu, index) => (
            <div
              key={edu.year}
              className={`glass-card edu-card${cardsVisible ? ' visible' : ''}`}
              style={{
                transitionDelay: cardsVisible ? `${index * 0.15}s` : '0s',
              }}
            >
              <div className="edu-card-header">
                <span className="edu-year">{edu.year}</span>
                <h3 className="edu-degree">{edu.degree}</h3>
              </div>
              <p className="edu-institution">{edu.institution}</p>
            </div>
          ))}
        </div>

        <div className="languages-section" ref={langsRef}>
          <h3 className="languages-title">Languages</h3>
          <div className="languages-grid">
            {languagesData.map((lang, index) => (
              <div
                key={lang.name}
                className={`glass-card language-card${langsVisible ? ' visible' : ''}`}
                style={{
                  transitionDelay: langsVisible ? `${(index + 1) * 0.1}s` : '0s',
                }}
              >
                <div className="language-name">{lang.name}</div>
                <div className="language-stars">
                  {renderStars(lang.rating, lang.total)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
