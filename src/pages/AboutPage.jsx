import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Eye, Heart } from 'lucide-react';
import { SectionBadge, SectionHeading } from '../components/ui/SectionHeading';
import ContactCTA from '../components/home/ContactCTA';

const TIMELINE = [
  { year: '2018', title: 'Company Founded', desc: 'NetCore Solutions established in Dubai with a team of 5 certified network engineers.' },
  { year: '2019', title: 'First Enterprise Contract', desc: 'Secured first major banking sector project — 500-node network deployment.' },
  { year: '2020', title: 'GCC Expansion', desc: 'Expanded operations to Abu Dhabi, Sharjah, and Saudi Arabia.' },
  { year: '2021', title: 'Security Practice Launch', desc: 'Launched dedicated cybersecurity and firewall practice with Fortinet partnership.' },
  { year: '2022', title: '100 Projects Milestone', desc: 'Completed 100th enterprise project — a 15-floor corporate headquarters.' },
  { year: '2023', title: 'Data Center Division', desc: 'Established specialized data center design and build division.' },
  { year: '2024', title: '350+ Projects', desc: 'Serving 350+ enterprise clients across UAE and GCC with 15+ certified engineers.' },
];

const VALUES = [
  { icon: CheckCircle, title: 'Technical Excellence', desc: 'We hold ourselves to the highest engineering standards on every project.' },
  { icon: Heart, title: 'Client First', desc: 'Your success is our success. We build long-term partnerships, not transactions.' },
  { icon: Target, title: 'Precision Delivery', desc: 'On time, within budget, and to specification — every single time.' },
  { icon: Eye, title: 'Transparency', desc: 'Clear communication, honest pricing, and no surprises.' },
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us – NetCore Solutions</title>
        <meta name="description" content="Learn about NetCore Solutions — enterprise network infrastructure specialists with 6+ years of experience and 350+ projects across UAE and GCC." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 network-grid opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionBadge>About NetCore Solutions</SectionBadge>
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mt-4 mb-6 max-w-3xl leading-tight">
            Building the Networks That Power Modern Business
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
            Since 2018, we've been designing and deploying enterprise-grade network infrastructure for organizations that demand reliability, security, and performance.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800/50 rounded-3xl p-8 border border-slate-100 dark:border-slate-700"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Target size={24} className="text-primary" />
              </div>
              <h2 className="text-2xl font-bold font-heading text-secondary dark:text-white mb-4">Our Mission</h2>
              <p className="text-muted dark:text-slate-400 leading-relaxed">
                To deliver enterprise-grade network infrastructure solutions that enable businesses to operate with maximum efficiency, security, and reliability — empowering them to focus on their core objectives while we manage the technology backbone.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800/50 rounded-3xl p-8 border border-slate-100 dark:border-slate-700"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <Eye size={24} className="text-accent" />
              </div>
              <h2 className="text-2xl font-bold font-heading text-secondary dark:text-white mb-4">Our Vision</h2>
              <p className="text-muted dark:text-slate-400 leading-relaxed">
                To be the most trusted enterprise network infrastructure partner in the GCC region, recognized for technical excellence, innovation, and unwavering commitment to client success across every industry we serve.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <div className="text-center mb-4">
            <SectionBadge>Our Values</SectionBadge>
          </div>
          <SectionHeading title="What We Stand For" subtitle="The principles that guide every decision, every project, and every client interaction." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon size={26} className="text-primary" />
                </div>
                <h3 className="font-bold text-secondary dark:text-white mb-2">{v.title}</h3>
                <p className="text-sm text-muted dark:text-slate-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionBadge>Founder's Message</SectionBadge>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary dark:text-white mt-4 mb-6">
                Built on a Foundation of Technical Excellence
              </h2>
              <div className="space-y-4 text-muted dark:text-slate-400 leading-relaxed">
                <p>
                  "When I founded NetCore Solutions in 2018, I had one clear goal: to build a company that treats every network project with the same level of care and precision that I would want for my own business.
                </p>
                <p>
                  Over the years, we've grown from a small team of engineers to a full-service enterprise networking firm, but our core philosophy hasn't changed. We believe that great infrastructure is invisible — it just works, reliably, every day.
                </p>
                <p>
                  Every project we take on is an opportunity to demonstrate that technical excellence and client service can coexist. I'm proud of what our team has built, and I'm excited about what's ahead."
                </p>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                  AK
                </div>
                <div>
                  <div className="font-bold text-secondary dark:text-white">Ahmed Al Kaabi</div>
                  <div className="text-sm text-muted dark:text-slate-400">Founder & CEO, NetCore Solutions</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: '350+', label: 'Projects Completed', color: 'bg-primary' },
                { value: '6+', label: 'Years Experience', color: 'bg-accent' },
                { value: '15+', label: 'Certified Engineers', color: 'bg-success' },
                { value: '99.9%', label: 'Client Satisfaction', color: 'bg-warning' },
              ].map(stat => (
                <div key={stat.label} className={`${stat.color} rounded-2xl p-6 text-white`}>
                  <div className="text-3xl font-bold font-display mb-1">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-bg dark:bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <SectionBadge>Our Journey</SectionBadge>
          </div>
          <SectionHeading title="Company Timeline" subtitle="From a startup to a trusted enterprise networking partner." />
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />
            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-6 items-start"
                >
                  <div className="relative z-10 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-lg shadow-primary/30">
                    {item.year}
                  </div>
                  <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-100 dark:border-slate-700 flex-1 mt-2">
                    <div className="font-bold text-secondary dark:text-white mb-1">{item.title}</div>
                    <div className="text-sm text-muted dark:text-slate-400">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
