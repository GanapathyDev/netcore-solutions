import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { COMPANY } from '../../data';

export default function ContactCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-secondary via-primary to-accent relative overflow-hidden">
      <div className="absolute inset-0 network-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 to-primary/60" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Ready to Get Started?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight">
            Let's Build Your Enterprise Network Together
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Get a free site survey and consultation from our certified network engineers. No obligation, no pressure — just expert advice.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-bold hover:bg-blue-50 transition-all shadow-xl"
            >
              Request Free Site Survey <ArrowRight size={16} />
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/40 text-white font-bold hover:bg-white/10 transition-all"
            >
              <Phone size={18} /> {COMPANY.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
