import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { FaLinkedinIn, FaXTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6';
import { COMPANY, SERVICES } from '../../data';

const FOOTER_SERVICES = SERVICES.slice(0, 6);

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-secondary dark:bg-[#060d1a] text-white">
      {/* CTA Banner */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold font-heading text-white">Ready to Transform Your Network?</h3>
            <p className="text-blue-100 mt-1">Get a free site survey and consultation from our certified engineers.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link to="/contact" className="px-6 py-3 rounded-xl bg-white text-primary font-semibold hover:bg-blue-50 transition-colors">
              Free Site Survey
            </Link>
            <a href={`tel:${COMPANY.phone}`} className="px-6 py-3 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="7" height="7" rx="1" />
                  <rect x="15" y="3" width="7" height="7" rx="1" />
                  <rect x="2" y="14" width="7" height="7" rx="1" />
                  <rect x="15" y="14" width="7" height="7" rx="1" />
                  <path d="M9 6.5h6M9 17.5h6M12 10v4" />
                </svg>
              </div>
              <div>
                <span className="font-bold text-lg font-heading leading-none block text-white">NetCore</span>
                <span className="text-xs text-accent leading-none">Solutions</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Enterprise network infrastructure specialists delivering data centers, structured cabling, security, and wireless solutions across the UAE and GCC.
            </p>
            <div className="space-y-3 text-sm text-slate-400">
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={14} className="text-accent flex-shrink-0" /> {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} className="text-accent flex-shrink-0" /> {COMPANY.email}
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-accent flex-shrink-0 mt-0.5" />
                <span>{COMPANY.address}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-5">Our Services</h4>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map(s => (
                <li key={s.id}>
                  <Link to={`/services/${s.id}`} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group">
                    <ArrowRight size={12} className="text-accent group-hover:translate-x-1 transition-transform" />
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="flex items-center gap-2 text-sm text-accent hover:text-white transition-colors group">
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Industries', href: '/industries' },
                { label: 'Projects', href: '/projects' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
                { label: 'Free Site Survey', href: '/contact' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
              ].map(l => (
                <li key={l.label}>
                  <Link to={l.href} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group">
                    <ArrowRight size={12} className="text-accent group-hover:translate-x-1 transition-transform" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-5">Stay Updated</h4>
            <p className="text-sm text-slate-400 mb-4">Get the latest networking insights and company news.</p>
            <form onSubmit={e => e.preventDefault()} className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <button type="submit" className="w-full py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors">
                Subscribe
              </button>
            </form>
            <div className="mt-6">
              <p className="text-sm text-slate-400 mb-3">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { Icon: FaLinkedinIn, href: COMPANY.social.linkedin, label: 'LinkedIn' },
                  { Icon: FaXTwitter, href: COMPANY.social.twitter, label: 'Twitter' },
                  { Icon: FaFacebookF, href: COMPANY.social.facebook, label: 'Facebook' },
                  { Icon: FaInstagram, href: COMPANY.social.instagram, label: 'Instagram' },
                  { Icon: FaYoutube, href: COMPANY.social.youtube, label: 'YouTube' },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>© {year} {COMPANY.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
