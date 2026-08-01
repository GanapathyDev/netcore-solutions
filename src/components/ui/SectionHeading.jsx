import { motion } from 'framer-motion';

export function SectionBadge({ children }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-4"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
      {children}
    </motion.span>
  );
}

export function SectionHeading({ title, subtitle, center = true, light = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight mb-4 ${light ? 'text-white' : 'text-secondary dark:text-white'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-blue-100' : 'text-muted dark:text-slate-400'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
