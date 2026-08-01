import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ChevronDown, Phone } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { COMPANY, SERVICES } from '../../data';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', hasMega: true },
  { label: 'Industries', href: '/industries' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const { dark, toggle } = useTheme();
  const location = useLocation();
  const megaRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const navBg = scrolled || !isHome
    ? 'bg-white/95 dark:bg-secondary/95 backdrop-blur-md shadow-md'
    : 'bg-transparent';
  const textColor = scrolled || !isHome
    ? 'text-secondary dark:text-white'
    : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
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
              <span className={`font-bold text-lg font-heading leading-none block ${textColor}`}>
                NetCore
              </span>
              <span className={`text-xs leading-none ${scrolled || !isHome ? 'text-primary' : 'text-accent'}`}>
                Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              link.hasMega ? (
                <div key={link.label} className="relative" ref={megaRef}>
                  <button
                    onMouseEnter={() => setMegaOpen(true)}
                    onMouseLeave={() => setMegaOpen(false)}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:text-primary ${textColor}`}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        onMouseEnter={() => setMegaOpen(true)}
                        onMouseLeave={() => setMegaOpen(false)}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] bg-white dark:bg-secondary rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 p-6 grid grid-cols-2 gap-2"
                      >
                        {SERVICES.map(s => (
                          <Link
                            key={s.id}
                            to={`/services/${s.id}`}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${s.color}15` }}>
                              <span className="text-xs font-bold" style={{ color: s.color }}>
                                {s.title.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-secondary dark:text-white group-hover:text-primary transition-colors">
                                {s.title}
                              </div>
                              <div className="text-xs text-muted dark:text-slate-400 mt-0.5 line-clamp-1">
                                {s.shortDesc}
                              </div>
                            </div>
                          </Link>
                        ))}
                        <div className="col-span-2 pt-3 mt-1 border-t border-slate-100 dark:border-slate-700">
                          <Link
                            to="/services"
                            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors"
                          >
                            View All Services →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:text-primary ${textColor} ${location.pathname === link.href ? 'text-primary' : ''}`}
                >
                  {link.label}
                  {location.pathname === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </Link>
              )
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className={`p-2 rounded-lg transition-colors hover:bg-white/10 ${textColor}`}
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href={`tel:${COMPANY.phone}`}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <Phone size={14} />
              <span className="hidden xl:inline">{COMPANY.phone}</span>
            </a>
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-all shadow-md hover:shadow-primary/30"
            >
              Free Consultation
            </Link>
            <button
              onClick={() => setMobileOpen(o => !o)}
              className={`lg:hidden p-2 rounded-lg ${textColor}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-secondary border-t border-slate-100 dark:border-slate-700 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 ${location.pathname === link.href ? 'text-primary bg-primary/5' : 'text-secondary dark:text-white'}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-700 space-y-2">
                <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-primary bg-primary/10">
                  <Phone size={16} /> {COMPANY.phone}
                </a>
                <Link to="/contact" className="block text-center px-4 py-3 rounded-xl bg-primary text-white text-sm font-semibold">
                  Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
