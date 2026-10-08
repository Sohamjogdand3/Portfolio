import {useState} from 'react';
import Reveal from './Reveal';
import {Mail,Github,Linkedin,FileText,Loader2} from 'lucide-react';
import {profile} from '../data/projects';

const f="mt-1.5 w-full rounded-lg border border-line bg-white px-4 py-3 text-base outline-none transition-colors focus:border-accent";

export default function Contact(){
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === 'error' || status === 'success') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    if (status === 'submitting') return;

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setStatus('error');
      setErrorMessage('Please fill out all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '72c3a349-7c87-4852-ab19-056968e63ef0';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          message,
          subject: `Portfolio Contact from ${name}`
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again later.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection or email directly.');
    }
  };

  const links = [
    [Mail, 'Email', 'mailto:' + profile.email],
    [Github, 'GitHub', profile.github],
    [Linkedin, 'LinkedIn', profile.linkedin],
    [FileText, 'Resume', profile.resume]
  ];

  return (
    <section id="contact" className="section border-t border-line">
      <div className="wrap grid gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <h2 className="h2">Let's build something useful.</h2>
          <p className="mt-5 max-w-md text-lg text-mute">
            Have a project, opportunity or interesting problem? I'd be happy to connect.
          </p>
          <ul className="mt-8 space-y-3">
            {links.map(([I, l, h]) => (
              <li key={l}>
                <a
                  href={h}
                  target={h.startsWith('mailto:') ? undefined : '_blank'}
                  rel={h.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  download={l === 'Resume' ? 'Soham_Jogdand_Resume.pdf' : undefined}
                  className="inline-flex items-center gap-3 hover:text-accent"
                >
                  <I size={18} />
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={submit} className="space-y-5" noValidate>
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                disabled={status === 'submitting'}
                className={f}
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                disabled={status === 'submitting'}
                className={f}
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status === 'submitting'}
                className={f}
                placeholder="How can I help you?"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn btn-p disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center gap-2"
            >
              {status === 'submitting' && <Loader2 size={16} className="animate-spin" />}
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p role="status" className="text-sm font-medium text-accent">
                ✓ Message sent successfully! I'll get back to you soon.
              </p>
            )}

            {status === 'error' && (
              <p role="alert" className="text-sm font-medium text-red-500">
                ⚠ {errorMessage}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
