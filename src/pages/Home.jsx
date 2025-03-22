import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { AlignJustify } from 'lucide-react';
// import ContactForm from './SubPages/Contato';
import WhatsAppButton from './components/WhatsAppButton';
import PecasDisponiveis from './SubPages/PecasDisponiveis';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Footer from './components/Footer';
import logo from '@/images/logoCM.png';
import teste1 from '@/images/teste/engrenagem3.webp';
import teste2 from '@/images/teste/engrenbagem.webp';
import teste3 from '@/images/teste/rol,amento3.jpg';
import HomePage from './SubPages/HomePage';

const imagens = [teste1, teste2, teste3];

export function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-200 h-[160px] shadow-lg">
        <div className="flex justify-between items-center max-w-screen-lg mx-auto px-4">
          <WhatsAppButton />
          <motion.h1
            className="text-2xl font-bold flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={logo}
              alt="Logo RTL Rolamentos"
              className="w-56 h-auto object-cover"
            />
          </motion.h1>
          <nav className="hidden md:flex space-x-6">
            <Link to="home" smooth={true} duration={500}>
              <Button variant="ghost" className="text-[16px]">
                Home
              </Button>
            </Link>
            <Link to="servicos" smooth={true} duration={500}>
              <Button variant="ghost" className="text-[16px]">
                Serviços
              </Button>
            </Link>
            <Link to="pecas" smooth={true} duration={500}>
              <Button variant="ghost" className="text-[16px]">
                Peças disponíveis
              </Button>
            </Link>
            <Link to="contato" smooth={true} duration={500}>
              <Button variant="ghost" className="text-[16px]">
                Contato
              </Button>
            </Link>
          </nav>
          {/* Menu móvel */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu}>
              <AlignJustify size={30} />
            </Button>
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>
            <Button variant="ghost" className="text-white text-2xl mb-4">
              Home
            </Button>
          </Link>
          <Link to="servicos" smooth={true} duration={500} onClick={toggleMenu}>
            <Button variant="ghost" className="text-white text-2xl mb-4">
              Peças disponíveis
            </Button>
          </Link>
          <Link to="contato" smooth={true} duration={500} onClick={toggleMenu}>
            <Button variant="ghost" className="text-white text-2xl mb-4">
              Contato
            </Button>
          </Link>
        </div>
      </div>
      <motion.div
        id="home"
        className="pt-[200px] sm:pt-[180px] md:pt-[160px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HomePage />
      </motion.div>
      <motion.div
        id="servicos"
        className="max-w-auto mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Card className="border-none">
          <CardContent>
            <CardTitle className="text-gray-600 text-center mb-20 text-[33px]">
              Nossos Serviços
              <hr className="w-1/4 border-t-4 border-blue-500 mt-2 mx-auto" />
            </CardTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1600px] mx-auto">
              {imagens.map((item, index) => (
                <Card
                  key={index}
                  className="relative transform transition-transform duration-300 hover:scale-105 hover:-translate-y-5"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#2893B3] scale-x-0 transition-transform duration-300 hover:scale-x-100"></div>
                  <div className="absolute inset-0 border-4 border-transparent hover:border-blue-500 transition-all duration-300"></div>
                  <CardContent className="flex flex-col items-center p-4">
                    <img
                      src={item}
                      alt={`Imagem ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <p className="text-center mb-4">
                      Descrição do serviço {index + 1}
                    </p>
                    <Button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded opacity-0 transition-opacity duration-300 hover:opacity-100">
                      Saiba Mais
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        id="pecas"
        className="max-w-auto mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <PecasDisponiveis />
      </motion.div>
      <motion.div
        id="footer"
        className="pt-[100px] mx-auto "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}
