import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, ClipboardList, ChevronDown } from 'lucide-react';
import { STATS, COMPANY } from '../../data';
import NetworkBackground from '../three/NetworkBackground';

function useCountUp(end, duration = 2000, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, active]);
  return count;
}

function StatCount({ end, suffix, active }) {
  const count = useCountUp(end, 2000, active);
  return <div className="text-3xl font-bold font-display text-white mb-1">{count}{suffix}</div>;
}

export default function Hero() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-secondary dark:bg-[#060d1a]">
      {/* Animated Network Background */}
      <NetworkBackground />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/70 to-primary/30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg dark:from-dark-bg to-transparent pointer-events-none" />

      {/* Animated grid */}
      <div className="absolute inset-0 network-grid opacity-30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/30 text-accent text-sm font-semibold mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Enterprise Network Infrastructure Specialists
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading text-white leading-tight mb-6"
          >
            Enterprise{' '}
            <span className="gradient-text">Network Infrastructure</span>{' '}
            Solutions
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl"
          >
            We design, deploy, configure, secure, and maintain enterprise-grade IT infrastructure including{' '}
            <span className="text-accent font-medium">Data Centers</span>,{' '}
            <span className="text-accent font-medium">Structured Cabling</span>,{' '}
            <span className="text-accent font-medium">Routing & Switching</span>,{' '}
            <span className="text-accent font-medium">Firewall Security</span>,{' '}
            <span className="text-accent font-medium">Wi-Fi</span>, and{' '}
            <span className="text-accent font-medium">Fiber Optic Networks</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-primary text-white font-semibold text-base hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
            >
              <ClipboardList size={18} />
              Request Free Site Survey
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl glass border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-all"
            >
              Get Consultation
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-accent/40 text-accent font-semibold text-base hover:bg-accent/10 transition-all"
            >
              <Phone size={18} />
              Call Now
            </a>
          </motion.div>

          {/* Stats */}
          <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass rounded-2xl p-5 border border-white/10"
              >
                <StatCount end={stat.value} suffix={stat.suffix} active={inView} />
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
