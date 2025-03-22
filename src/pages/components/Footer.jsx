import { Card, CardFooter } from '@/components/ui/card';
import { Facebook, Instagram, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <Card className="w-full bg-gray-900 text-white">
      <CardFooter className="footer-container py-4 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-screen-xl mx-auto md:h-[500px]">
        {/* Seção de Contato */}
        <div className="footer-section">
          <h3 className="footer-title text-xl font-semibold mt-4">Contato</h3>
          <ul className="text-sm text-gray-400 space-y-2 mt-5">

            {/* E-mail */}
            <li>
              <a href="mailto:manutecao.cezarmendes@gmail.com" className="hover:text-gray-400 flex items-center space-x-2">
                <Mail size={24} className="text-blue-500" />
                <span className="text-sm sm:text-base">manutecao.cezarmendes@gmail.com</span>
              </a>
            </li>

            {/* Facebook */}
            <li>
              <a href="https://facebook.com" className="hover:text-gray-400 flex items-center space-x-2">
                <Facebook size={24} />
                <span className="text-sm sm:text-base">Facebook</span>
              </a>
            </li>

            {/* Instagram */}
            <li>
              <a href="https://instagram.com" className="hover:text-gray-400 flex items-center space-x-2">
                <Instagram size={24} />
                <span className="text-sm sm:text-base">Instagram</span>
              </a>
            </li>

            {/* WhatsApp */}
            <li>
              <a href="https://wa.me/5511915659594" className="hover:text-gray-400 flex items-center space-x-2">
                <Phone size={24} className="text-green-500" />
                <span className="text-sm sm:text-base">Whatsapp</span>
              </a>
            </li>

          </ul>
        </div>


        {/* Seção de Navegação */}
        <div className="footer-section">
          <h3 className="footer-title text-xl font-semibold mb-7">Navegação</h3>
          <ul className="text-l text-gray-400">
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
            <li><a href="/about" className="hover:text-gray-400">Sobre</a></li>
            <li><a href="/services" className="hover:text-gray-400">Serviços</a></li>
            <li><a href="/contact" className="hover:text-gray-400">Contato</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title text-xl font-semibold">Sobre nós</h3>
          <p className="text-l text-gray-400 mt-10">
            Somos uma empresa especializada em manutenção e serviços de alta qualidade. Nossa missão é garantir a satisfação dos nossos clientes com soluções eficientes e personalizadas.
          </p>
        </div>

      </CardFooter>

      {/* Separador de conteúdo */}
      <hr className="border-t border-gray-700 mx-auto w-1/2 my-4" />

      {/* Copyright */}
      <div className="footer-copyright bg-transparent text-center text-sm text-gray-400 py-4">
        <span>&copy; 2025 CM Manutenção. Todos os direitos reservados.</span>
      </div>
    </Card>
  );
};


export default Footer;

