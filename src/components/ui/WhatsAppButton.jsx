import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa6';
import { COMPANY } from '../../data';

export default function WhatsAppButton() {
  const url = `https://wa.me/${COMPANY.whatsapp}?text=Hello%2C%20I%27m%20interested%20in%20your%20network%20infrastructure%20services.`;
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: 'spring' }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={26} />
    </motion.a>
  );
}
