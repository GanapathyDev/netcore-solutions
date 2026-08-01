import { motion } from 'framer-motion';
import { SectionBadge, SectionHeading } from '../ui/SectionHeading';
import { WHY_CHOOSE_US } from '../../data';
import * as LucideIcons from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <SectionBadge>Why Choose Us</SectionBadge>
            <SectionHeading
              title="The NetCore Advantage"
              subtitle="We combine deep technical expertise with enterprise-grade processes to deliver network infrastructure that performs reliably for years."
              center={false}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {WHY_CHOOSE_US.map((item, i) => {
                const Icon = LucideIcons[item.icon] || LucideIcons.CheckCircle;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-secondary dark:text-white text-sm">{item.title}</div>
                      <div className="text-xs text-muted dark:text-slate-400 mt-0.5 leading-relaxed">{item.desc}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-secondary to-primary p-8 text-white">
              <div className="absolute inset-0 network-grid opacity-20" />
              <div className="relative z-10">
                <div className="text-5xl font-bold font-display mb-2">350+</div>
                <div className="text-blue-200 mb-8">Successful Projects Delivered</div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'UAE Projects', value: '200+' },
                    { label: 'GCC Projects', value: '150+' },
                    { label: 'Certified Engineers', value: '15+' },
                    { label: 'Technology Partners', value: '20+' },
                  ].map(item => (
                    <div key={item.label} className="glass rounded-xl p-4">
                      <div className="text-2xl font-bold text-accent">{item.value}</div>
                      <div className="text-sm text-blue-200 mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-xl bg-white/10 border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span className="text-sm font-medium">All Systems Operational</span>
                  </div>
                  <div className="text-xs text-blue-200">24/7 Network Operations Center monitoring 280+ active networks</div>
                </div>
              </div>
            </div>
            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4 border border-slate-100 dark:border-slate-700"
            >
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-xs text-muted">Uptime SLA</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5 }}
              className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4 border border-slate-100 dark:border-slate-700"
            >
              <div className="text-2xl font-bold text-success">ISO</div>
              <div className="text-xs text-muted">Certified</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
