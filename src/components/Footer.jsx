import './Footer.css';

const socials = [
  { label: 'LinkedIn', icon: '💼', href: '#' },
  { label: 'Instagram', icon: '📸', href: '#' },
  { label: 'Twitter', icon: '🐦', href: '#' },
  { label: 'GitHub', icon: '💻', href: '#' },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-divider" />

        <h3 className="footer-name">SIMRAN MAANJU</h3>
        <p className="footer-tagline">
          SEO Expert &amp; Digital Marketing Professional
        </p>

        <div className="footer-socials">
          {socials.map((s) => (
            <a
              key={s.label}
              className="footer-social-link"
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <p className="footer-copyright">
          &copy; 2025 Simran Maanju. All Rights Reserved.
        </p>
      </div>

      <button
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
      >
        ↑
      </button>
    </footer>
  );
}

export default Footer;
