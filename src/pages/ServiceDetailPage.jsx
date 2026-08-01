import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, ArrowLeft, Phone } from 'lucide-react';
import { SERVICES, COMPANY } from '../data';
import * as LucideIcons from 'lucide-react';
import ContactCTA from '../components/home/ContactCTA';

export default function ServiceDetailPage() {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === id);
  if (!service) return <Navigate to="/services" replace />;

  const Icon = LucideIcons[service.icon] || LucideIcons.Server;
  const related = SERVICES.filter(s => s.id !== id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{service.title} – NetCore Solutions</title>
        <meta name="description" content={service.shortDesc} />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 network-grid opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-6 text-sm">
            <ArrowLeft size={16} /> Back to Services
          </Link>
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${service.color}30` }}>
              <Icon size={30} style={{ color: service.color }} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">{service.title}</h1>
              <p className="text-xl text-blue-100 max-w-2xl">{service.shortDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-slate-800/50 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 mb-8"
              >
                <h2 className="text-2xl font-bold font-heading text-secondary dark:text-white mb-6">What's Included</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map(f => (
                    <div key={f} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50">
                      <CheckCircle size={16} className="text-success flex-shrink-0" />
                      <span className="text-sm text-secondary dark:text-slate-300">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Why this service */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-slate-800/50 rounded-3xl p-8 border border-slate-100 dark:border-slate-700"
              >
                <h2 className="text-2xl font-bold font-heading text-secondary dark:text-white mb-4">Our Approach</h2>
                <p className="text-muted dark:text-slate-400 leading-relaxed mb-4">
                  Our certified engineers follow industry best practices and vendor-recommended methodologies for every {service.title.toLowerCase()} engagement. We begin with a thorough assessment of your requirements, design a solution tailored to your environment, and execute with precision.
                </p>
                <p className="text-muted dark:text-slate-400 leading-relaxed">
                  Every project includes comprehensive documentation, testing reports, and a formal handover process. Our post-deployment support ensures your infrastructure continues to perform at its best.
                </p>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Get a Free Quote</h3>
                <p className="text-blue-100 text-sm mb-5">Tell us about your project and we'll provide a detailed proposal within 24 hours.</p>
                <Link to="/contact" className="block text-center py-3 rounded-xl bg-white text-primary font-semibold hover:bg-blue-50 transition-colors mb-3">
                  Request Quote
                </Link>
                <a href={`tel:${COMPANY.phone}`} className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/30 text-white text-sm hover:bg-white/10 transition-colors">
                  <Phone size={15} /> {COMPANY.phone}
                </a>
              </div>

              {/* Related Services */}
              <div className="bg-white dark:bg-slate-800/50 rounded-3xl p-6 border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-secondary dark:text-white mb-4">Related Services</h3>
                <div className="space-y-3">
                  {related.map(s => {
                    const RelIcon = LucideIcons[s.icon] || LucideIcons.Server;
                    return (
                      <Link
                        key={s.id}
                        to={`/services/${s.id}`}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${s.color}15` }}>
                          <RelIcon size={16} style={{ color: s.color }} />
                        </div>
                        <span className="text-sm font-medium text-secondary dark:text-white group-hover:text-primary transition-colors">{s.title}</span>
                        <ArrowRight size={12} className="ml-auto text-muted group-hover:text-primary transition-colors" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
