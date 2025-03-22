import { Card, CardFooter } from '@/components/ui/card';
import { Facebook, Instagram, Twitter, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <Card className="w-full h-[300px] bg-gray-900 text-white">
      <CardFooter className="flex flex-wrap justify-between items-center w-full py-4">
        <a
          href="https://maps.app.goo.gl/eNsgqdTycrdymSpV7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-gray-400 w-full sm:w-auto sm:mb-0"
        >
          <MapPin size={20} className="text-red-500" />
          <span className="text-sm sm:text-base">
            R. Antonio Carlos Paiva Camelo, 274 - Jardim Paraiso, Cajamar - SP
          </span>
        </a>
        <div className="mt-8 text-center text-sm text-gray-400">
          <span>&copy; 2025 CM Manutenção. Todos os direitos reservados.</span>
        </div>

        <div className="flex space-x-4 w-full sm:w-auto justify-center sm:justify-start">
          <a href="#" className="hover:text-gray-400">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <Twitter size={24} />
          </a>
          <a
            href="mailto:manutecao.cezarmendes@gmail.com"
            className="hover:text-gray-400 flex items-center space-x-2"
          >
            <Mail size={24} className="text-blue-500" />
            <span className="text-sm sm:text-base">
              manutecao.cezarmendes@gmail.com
            </span>
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Footer;
