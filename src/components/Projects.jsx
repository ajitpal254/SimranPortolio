import { useState, useEffect, useRef } from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'Win Trust Ltd',
    domain: 'wintrustltd.com',
    url: 'https://wintrustltd.com/',
    type: 'national',
    category: 'Finance & Corporate',
    icon: '💼',
    tags: ['Technical SEO', 'On-Page SEO', 'Schema Markup', 'Financial SEO']
  },
  {
    title: 'Ayurvedic Franchise',
    domain: 'ayurvedicfranchise.com',
    url: 'https://ayurvedicfranchise.com/',
    type: 'national',
    category: 'Healthcare & Franchise',
    icon: '🌿',
    tags: ['Keyword Research', 'Local SEO', 'Lead Generation', 'Content Strategy']
  },
  {
    title: 'Pronk India',
    domain: 'pronk.in',
    url: 'https://pronk.in/',
    type: 'national',
    category: 'Retail & E-commerce',
    icon: '🛒',
    tags: ['Ecommerce SEO', 'Site Speed', 'On-Page SEO', 'Structured Data']
  },
  {
    title: 'Unimarck Pharma',
    domain: 'unimarckpharma.com',
    url: 'https://unimarckpharma.com/',
    type: 'national',
    category: 'Pharmaceutical',
    icon: '💊',
    tags: ['Technical Audit', 'On-Page SEO', 'Core Web Vitals', 'B2B SEO']
  },
  {
    title: 'Unibiotech Formulations',
    domain: 'unibiotechformulations.in',
    url: 'https://unibiotechformulations.in/',
    type: 'national',
    category: 'Biotech & Pharma',
    icon: '🔬',
    tags: ['B2B SEO', 'Keyword Optimization', 'Link Building', 'Local Citations']
  },
  {
    title: 'Uniqaya',
    domain: 'uniqaya.com',
    url: 'https://uniqaya.com/',
    type: 'national',
    category: 'Skincare & E-commerce',
    icon: '✨',
    tags: ['Ecommerce SEO', 'Content Marketing', 'Off-Page SEO', 'Image SEO']
  },
  {
    title: 'Sharman Jain Sweets',
    domain: 'sharmanjainsweets.com',
    url: 'https://sharmanjainsweets.com/',
    type: 'national',
    category: 'Food & Confectionery',
    icon: '🍬',
    tags: ['Local SEO', 'Schema Markup', 'GMB Optimization', 'Local Citations']
  },
  {
    title: 'VFA Academy',
    domain: 'vfaacademy.com',
    url: 'https://vfaacademy.com/',
    type: 'national',
    category: 'Education & Training',
    icon: '🎓',
    tags: ['Lead Generation', 'On-Page SEO', 'Content Strategy', 'Site Structure']
  },
  {
    title: 'Rana Healthcare',
    domain: 'ranahealthcare.com',
    url: 'https://ranahealthcare.com/',
    type: 'national',
    category: 'Medical & Health',
    icon: '🏥',
    tags: ['Medical SEO', 'Local Citations', 'On-Page SEO', 'Technical Audits']
  },
  {
    title: 'Rana Fertility',
    domain: 'ranafertility.com',
    url: 'https://ranafertility.com/',
    type: 'national',
    category: 'Fertility Clinic',
    icon: '👶',
    tags: ['Local SEO', 'Technical SEO', 'Lead Generation', 'Competitor Analysis']
  },
  {
    title: 'Excel Aviation Services',
    domain: 'excelaviationservices.com',
    url: 'https://excelaviationservices.com/',
    type: 'national',
    category: 'Aviation Services',
    icon: '✈️',
    tags: ['B2B SEO', 'Keyword Research', 'Competitor Analysis', 'Brand Mentions']
  },
  {
    title: 'Extensions Company',
    domain: 'extensionscompany.com',
    url: 'https://extensionscompany.com/',
    type: 'national',
    category: 'Fashion & E-commerce',
    icon: '💇',
    tags: ['Ecommerce SEO', 'Image SEO', 'Content Strategy', 'Link Building']
  },
  {
    title: 'G-Lok',
    domain: 'g-lok.co.in',
    url: 'https://g-lok.co.in/',
    type: 'national',
    category: 'Industrial Manufacturing',
    icon: '⚙️',
    tags: ['Technical SEO', 'B2B SEO', 'Indexing Optimization', 'Site Audit']
  },
  {
    title: 'Zolartek',
    domain: 'zolartek.com',
    url: 'https://www.zolartek.com/',
    type: 'international',
    category: 'Solar Energy & Tech',
    icon: '☀️',
    tags: ['International SEO', 'Technical SEO', 'Core Web Vitals', 'Geo-Targeting']
  },
  {
    title: 'HE Care UK',
    domain: 'hecare.co.uk',
    url: 'https://hecare.co.uk/',
    type: 'international',
    category: 'Healthcare UK',
    icon: '🇬🇧',
    tags: ['International SEO', 'Local SEO', 'Content Optimization', 'Link Building']
  },
  {
    title: 'Beverly Hills Med Spa',
    domain: 'beverlyhillsmedspa.com',
    url: 'https://www.beverlyhillsmedspa.com/',
    type: 'international',
    category: 'Medical Spa & Aesthetics',
    icon: '🌴',
    tags: ['Medical SEO', 'Local SEO', 'Lead Generation', 'Google Maps SEO']
  },
  {
    title: 'Alex & Company',
    domain: 'alexandcompany.com',
    url: 'https://alexandcompany.com/',
    type: 'international',
    category: 'Luxury Jewelry & Retail',
    icon: '💎',
    tags: ['Ecommerce SEO', 'International SEO', 'On-Page SEO', 'Content Strategy']
  }
];

function Projects() {
  const [filter, setFilter] = useState('all');
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);
    return () => observer.disconnect();
  }, []);

  const handleFilterChange = (newFilter) => {
    setAnimate(false);
    setFilter(newFilter);
    setTimeout(() => {
      setAnimate(true);
    }, 50);
  };

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    return project.type === filter;
  });

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <div className="projects-header">
          <span className="section-label animate-in visible">PORTFOLIO</span>
          <h2 className="section-title animate-in visible">Featured Projects</h2>
          <p className="section-subtitle animate-in visible">
            A selective showcase of national and international campaigns, displaying my expertise in Technical SEO, Core Web Vitals optimization, Lead Generation, and SERP visibility.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="projects-filters animate-in visible">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterChange('all')}
          >
            All Projects ({projectsData.length})
          </button>
          <button
            className={`filter-btn ${filter === 'national' ? 'active' : ''}`}
            onClick={() => handleFilterChange('national')}
          >
            National ({projectsData.filter(p => p.type === 'national').length})
          </button>
          <button
            className={`filter-btn ${filter === 'international' ? 'active' : ''}`}
            onClick={() => handleFilterChange('international')}
          >
            International ({projectsData.filter(p => p.type === 'international').length})
          </button>
        </div>

        {/* Projects Grid */}
        <div className={`projects-grid ${animate ? 'visible' : ''}`}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.domain}
              className="glass-card project-card"
              style={{ animationDelay: `${(index % 6) * 0.05}s` }}
            >
              <div className="project-card-header">
                <div className="project-icon-wrapper">
                  <span className="project-icon">{project.icon}</span>
                </div>
                <span className={`project-badge ${project.type}`}>
                  {project.type === 'national' ? 'National' : 'International'}
                </span>
              </div>

              <div className="project-card-content">
                <p className="project-category">{project.category}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-domain">{project.domain}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-card-footer">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  Visit Website
                  <span className="btn-arrow">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
