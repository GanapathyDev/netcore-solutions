import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { SectionBadge, SectionHeading } from '../components/ui/SectionHeading';
import { BLOG_POSTS } from '../data';
import ContactCTA from '../components/home/ContactCTA';

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;
  return (
    <>
      <Helmet>
        <title>Blog – NetCore Solutions</title>
        <meta name="description" content="Expert articles on enterprise networking, cybersecurity, Wi-Fi, fiber optics, and data center design." />
      </Helmet>

      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 network-grid opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionBadge>Knowledge Hub</SectionBadge>
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mt-4 mb-6">
            Networking Insights & Articles
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Expert guidance on enterprise networking, security, and infrastructure best practices.
          </p>
        </div>
      </section>

      <section className="section-padding bg-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group grid md:grid-cols-2 gap-0 bg-white dark:bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700 mb-12 card-hover"
          >
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div className="absolute top-4 left-4">
                <span className="text-xs px-3 py-1.5 rounded-full bg-primary text-white font-semibold">Featured</span>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">{featured.category}</span>
              <h2 className="text-2xl font-bold font-heading text-secondary dark:text-white mb-3 group-hover:text-primary transition-colors">{featured.title}</h2>
              <p className="text-muted dark:text-slate-400 leading-relaxed mb-5">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-muted dark:text-slate-500 mb-5">
                <span className="flex items-center gap-1"><Calendar size={12} /> {featured.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime} read</span>
              </div>
              <Link to={`/blog/${featured.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                Read Article <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-white dark:bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 card-hover"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-primary text-white font-medium">{post.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-4 text-xs text-muted dark:text-slate-500 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={11} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime} read</span>
                  </div>
                  <h3 className="font-bold text-secondary dark:text-white mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                    Read More <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
