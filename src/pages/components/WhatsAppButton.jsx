import { motion } from 'framer-motion';
import whats from '@/images/icons8-whatsapp.svg';

const WhatsAppButton = () => {
  const message = 'Olá, gostaria de mais informações sobre os serviços.'; // Mensagem prefixa
  const encodedMessage = encodeURIComponent(message);

  return (
    <motion.div
      className="fixed bottom-4 right-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <a
        href={`https://wa.me/5511915659594?text=${encodedMessage}`} // Substitua pelo seu número de WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="text-white p-4 rounded-full shadow-lg transition-colors duration-300"
      >
        <img src={whats} alt="WhatsApp" className="w-16 h-16" />
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;
