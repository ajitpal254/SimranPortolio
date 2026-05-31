import { useState, useEffect, useRef } from 'react';
import './Skills.css';

const skillsCategories = [
  {
    id: 'core-seo',
    label: 'Core SEO',
    icon: '🎯',
    groups: [
      {
        title: 'On-Page SEO',
        skills: [
          'Meta Title Optimization', 'Meta Description Writing', 'Heading Tag Optimization',
          'URL Structure Optimization', 'Internal Linking', 'Content Optimization',
          'Keyword Placement', 'Image Alt Tags Optimization', 'Canonical Tags',
          'Schema Markup & Structured Data', 'XML Sitemap Optimization', 'Robots.txt Optimization',
          'Page Indexing Optimization'
        ]
      },
      {
        title: 'Off-Page SEO',
        skills: [
          'High Quality Backlink Building', 'Guest Posting', 'Directory Submission',
          'Social Bookmarking', 'Business Listing', 'Profile Creation',
          'Forum & Blog Commenting', 'Article Submission', 'Local Citation Building',
          'Influencer Outreach', 'Link Building Strategy', 'Brand Mentions'
        ]
      },
      {
        title: 'SEO Strategy & Research',
        skills: [
          'Keyword Research', 'Competitor Analysis', 'SEO Auditing',
          'SEO Strategy Planning', 'Search Intent Optimization', 'SERP Analysis',
          'Local SEO', 'International SEO', 'Ecommerce SEO', 'Mobile, Image & Video SEO'
        ]
      }
    ]
  },
  {
    id: 'tech-cwv',
    label: 'Technical & Speed',
    icon: '⚡',
    groups: [
      {
        title: 'Technical SEO',
        skills: [
          'Website SEO Audit', 'Crawl Error Fixing', 'Broken Link Analysis',
          'Redirect Management', 'HTTPS Security Optimization', 'Canonical Issue Resolution',
          'Duplicate Content Fixing', 'Structured Data Validation', 'JavaScript SEO',
          'Log File Analysis', 'Index Coverage Fixing'
        ]
      },
      {
        title: 'Core Web Vitals Optimization',
        skills: [
          'Largest Contentful Paint (LCP)', 'First Input Delay (FID)', 'Interaction to Next Paint (INP)',
          'Cumulative Layout Shift (CLS)', 'Website Speed Improvement', 'Image Compression & Lazy Loading',
          'CSS & JavaScript Minification', 'Browser Caching & CDN Optimization', 'Mobile Performance Optimization'
        ]
      }
    ]
  },
  {
    id: 'google-tools',
    label: 'Google Tools & BI',
    icon: '📊',
    groups: [
      {
        title: 'Google Search Console',
        skills: [
          'Performance Monitoring', 'Indexing Management', 'Sitemap Submission',
          'URL Inspection', 'Core Web Vitals Monitoring', 'Search Traffic Analysis',
          'Click Through Rate (CTR) Optimization', 'Keyword Performance Tracking', 'Error Monitoring & Resolution'
        ]
      },
      {
        title: 'Google Analytics (GA4)',
        skills: [
          'Traffic Analysis', 'User Behavior Analysis', 'Conversion & Event Tracking',
          'Audience Insights', 'Funnel Analysis', 'Ecommerce Tracking',
          'Goal Setup & Reporting', 'Campaign Performance Analysis'
        ]
      },
      {
        title: 'Looker Studio (BI)',
        skills: [
          'SEO Dashboard Creation', 'Website Traffic Reporting', 'Keyword Performance Dashboard',
          'Google Analytics Reporting', 'Search Console Reporting', 'Automated Client Reporting',
          'Data Visualization', 'KPI Monitoring'
        ]
      }
    ]
  },
  {
    id: 'aeo-geo',
    label: 'AEO & GEO',
    icon: '🤖',
    groups: [
      {
        title: 'Answer Engine Optimization (AEO)',
        skills: [
          'Featured Snippet Optimization', 'FAQ Schema Optimization', 'Voice Search Optimization',
          'Conversational Content Strategy', 'AI Search Optimization', 'Question-Based Keyword Targeting',
          'Structured Content Creation', 'Search Intent Optimization'
        ]
      },
      {
        title: 'Generative Engine Optimization (GEO)',
        skills: [
          'AI Search Visibility Optimization', 'Generative Search Content Strategy', 'Entity-Based SEO',
          'Semantic SEO', 'AI-Friendly Content Optimization', 'E-E-A-T Optimization',
          'Knowledge Graph Optimization', 'AI Search Result Enhancement'
        ]
      }
    ]
  },
  {
    id: 'platforms-tools',
    label: 'Platforms & Tools',
    icon: '⚙️',
    groups: [
      {
        title: 'CMS Platforms & SEO',
        skills: [
          'WordPress SEO', 'Shopify SEO'
        ]
      },
      {
        title: 'Industry Standard Tools',
        skills: [
          'Ahrefs', 'SEMrush', 'Ubersuggest', 'Screaming Frog',
          'Google Keyword Planner', 'PageSpeed Insights', 'GTmetrix'
        ]
      }
    ]
  },
  {
    id: 'additional',
    label: 'Strategic Skills',
    icon: '💼',
    groups: [
      {
        title: 'Digital Marketing & Content',
        skills: [
          'Digital Marketing Strategy', 'SEO Content Planning', 'Content Writing',
          'Google Business Profile Optimization', 'Social Media Optimization', 'Lead Generation'
        ]
      },
      {
        title: 'Professional Abilities',
        skills: [
          'HTML & CSS Basics', 'Canva Designing', 'Client Communication',
          'Team Coordination', 'Data-Driven Decision Making'
        ]
      }
    ]
  }
];

function Skills() {
  const [activeTab, setActiveTab] = useState('core-seo');
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Trigger entrance animation on component mount
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

  const handleTabChange = (tabId) => {
    setAnimate(false);
    setActiveTab(tabId);
    // Tiny delay to restart slide/fade animations
    setTimeout(() => {
      setAnimate(true);
    }, 50);
  };

  const currentCategory = skillsCategories.find((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <div className="skills-header">
          <span className="section-label">EXPERTISE</span>
          <h2 className="section-title">Skills &amp; Tools</h2>
          <p className="section-subtitle">
            An extensive breakdown of my core digital marketing competencies, specialized SEO toolkits, and modern generative search optimization parameters.
          </p>
        </div>

        <div className="skills-interactive-container">
          {/* Left / Top Side: Tabs Menu */}
          <div className="skills-tabs">
            {skillsCategories.map((category) => (
              <button
                key={category.id}
                className={`skill-tab-btn ${activeTab === category.id ? 'active' : ''}`}
                onClick={() => handleTabChange(category.id)}
              >
                <span className="tab-icon">{category.icon}</span>
                <span className="tab-label">{category.label}</span>
              </button>
            ))}
          </div>

          {/* Right Side: Tab Panel Content */}
          <div className={`skills-panel ${animate ? 'visible' : ''}`}>
            {currentCategory?.groups.map((group, gIdx) => (
              <div
                key={group.title}
                className="glass-card skill-group-card"
                style={{ animationDelay: `${gIdx * 0.1}s` }}
              >
                <h3 className="skill-group-title">{group.title}</h3>
                <div className="skill-tags-grid">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={skill}
                      className="skill-tag"
                      style={{ animationDelay: `${sIdx * 0.03}s` }}
                    >
                      <span className="skill-bullet">✦</span>
                      <span className="skill-text">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
