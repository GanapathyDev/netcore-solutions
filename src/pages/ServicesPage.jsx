import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import { SectionBadge, SectionHeading } from '../components/ui/SectionHeading';
import { SERVICES } from '../data';
import * as LucideIcons from 'lucide-react';
import ContactCTA from '../components/home/ContactCTA';

export default function ServicesPage() {
  const [query, setQuery] = useState('');
  const filtered = SERVICES.filter(s =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.shortDesc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Services – NetCore Solutions</title>
        <meta name="description" content="Explore our complete range of enterprise network infrastructure services including Data Centers, Structured Cabling, Firewall, Wi-Fi, and more." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 network-grid opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionBadge>Our Services</SectionBadge>
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mt-4 mb-6">
            Complete Network Infrastructure Services
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            End-to-end enterprise networking solutions — from design and deployment to ongoing maintenance.
          </p>
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search services..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted dark:text-slate-400">No services found for "{query}"</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((service, i) => {
                const Icon = LucideIcons[service.icon] || LucideIcons.Server;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="group bg-white dark:bg-slate-800/50 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 card-hover"
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <Icon size={26} style={{ color: service.color }} />
                    </div>
                    <h2 className="text-xl font-bold font-heading text-secondary dark:text-white mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-muted dark:text-slate-400 text-sm leading-relaxed mb-5">{service.shortDesc}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map(f => (
                        <li key={f} className="flex items-center gap-2 text-sm text-secondary dark:text-slate-300">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: service.color }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
                      style={{ color: service.color }}
                    >
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
