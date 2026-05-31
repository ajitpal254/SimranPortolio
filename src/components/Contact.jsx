import { useState } from 'react';
import './Contact.css';

const contactCards = [
  {
    icon: '📧',
    label: 'Email',
    value: 'maanjhsami@gmail.com',
    href: 'mailto:maanjhsami@gmail.com',
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '+91 7888599274',
    href: 'tel:+917888599274',
  },
  {
    icon: '📍',
    label: 'Address',
    value: '#3485, Street No 10, Chet Singh Nagar Gill Road, Ludhiana',
    href: null,
  },
];

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Fetch the access key from environment variables
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.log('No Web3Forms access key found. Simulating form submission in sandbox mode.');
      // Sandbox Simulation
      setTimeout(() => {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      }, 1500);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage('Network error. Please check your internet connection and try again.');
      setStatus('error');
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <span className="section-label">Get In Touch</span>
        <h2 className="section-title">Let's Work Together</h2>

        <div className="contact-grid">
          {/* Left Column — Info Cards */}
          <div className="contact-info">
            {contactCards.map((card) => (
              <div className="contact-card" key={card.label}>
                <div className="contact-card-icon">{card.icon}</div>
                <div className="contact-card-content">
                  <h4>{card.label}</h4>
                  {card.href ? (
                    <a href={card.href}>{card.value}</a>
                  ) : (
                    <p>{card.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="contact-motivation">
              <p>
                I'm always excited to collaborate on projects that push
                boundaries. Whether you need an <strong>SEO strategy</strong>,
                a <strong>digital marketing campaign</strong>, or just want
                to chat about growing your online presence —{' '}
                <strong>let's make it happen together.</strong>
              </p>
            </div>
          </div>

          {/* Right Column — Contact Form or Success Card */}
          <div className="contact-form-wrapper">
            {status === 'success' ? (
              <div className="contact-success animate-scale-in">
                <div className="success-icon">✦</div>
                <h3>Message Sent!</h3>
                <p>
                  Thank you for reaching out. I have received your message and will get back to you as soon as possible.
                </p>
                <button
                  className="contact-submit success-reset"
                  onClick={() => setStatus('idle')}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {status === 'error' && (
                  <div className="form-error-banner">
                    <span className="error-icon">⚠</span>
                    <span className="error-text">{errorMessage}</span>
                  </div>
                )}

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      className="form-input"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      className="form-input"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    className="form-input"
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    value={form.subject}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-input"
                    id="message"
                    name="message"
                    placeholder="Tell me about your project…"
                    value={form.message}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    required
                  />
                </div>

                <button 
                  className={`contact-submit ${status === 'submitting' ? 'submitting' : ''}`} 
                  type="submit"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <span className="submit-loader-text">
                      Sending<span className="dot-pulse">...</span>
                    </span>
                  ) : (
                    'Send Message ✦'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
