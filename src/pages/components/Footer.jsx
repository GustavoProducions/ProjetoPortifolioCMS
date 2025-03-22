import { Card, CardFooter } from '@/components/ui/card';
import { Facebook, Instagram, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <Card className="w-full bg-gray-900 text-white">
      <CardFooter className="footer-container max-w-screen-xl mx-auto md:h-[500px] border-none">
        <div className="footer-container grid grid-cols-1 sm:grid-cols-3 gap-8 text-gray-600 border-none">
          {/* Seção de Contato */}
          <div className="footer-section flex flex-col items-start border-none">
            <h3 className="footer-title text-xl font-semibold mb-4 text-blue-400">
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:manutecao.cezarmendes@gmail.com"
                  className="hover:text-gray-400 flex items-center space-x-2"
                >
                  <Mail size={24} className="text-white hover:text-gray-400 " />
                  <span className="text-white hover:text-gray-400">
                    manutecao.cezarmendes@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  className="hover:text-gray-400 flex items-center space-x-2"
                >
                  <Facebook
                    size={24}
                    className="text-white hover:text-gray-400"
                  />
                  <span className="text-white hover:text-gray-400">
                    Facebook
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  className="hover:text-gray-400 flex items-center space-x-2"
                >
                  <Instagram
                    size={24}
                    className="text-white hover:text-gray-400"
                  />
                  <span className="text-white hover:text-gray-400">
                    Instagram
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5511915659594"
                  className="hover:text-gray-400 flex items-center space-x-2"
                >
                  <Phone size={24} className="text-white hover:text-gray-400" />
                  <span className="text-white hover:text-gray-400">
                    Whatsapp
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Seção de Navegação */}
          <div className="footer-section flex flex-col items-start">
            <h3 className="footer-title text-xl font-semibold mb-4 text-blue-400">
              Navegação
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-white hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-white hover:text-gray-400">
                  Sobre
                </a>
              </li>
              <li>
                <a href="/services" className="text-white hover:text-gray-400">
                  Serviços
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white hover:text-gray-400">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Seção Sobre Nós */}
          <div className="footer-section flex flex-col items-start">
            <h3 className="footer-title text-xl font-semibold mb-4 text-blue-400">
              Sobre nós
            </h3>
            <p className="text-l leading-relaxed text-white hover:text-gray-400">
              Somos uma empresa especializada em manutenção e serviços de alta
              qualidade. Nossa missão é garantir a satisfação dos nossos
              clientes com soluções eficientes e personalizadas.
            </p>
          </div>
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
