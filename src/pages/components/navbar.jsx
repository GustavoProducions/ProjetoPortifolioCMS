import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import WhatsAppButton from '../components/WhatsAppButton';
import logo from '@/images/logoCM.png';
import { Link } from 'react-router-dom';
import { AlignJustify, MoveRight } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
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
            <Link to="/home" smooth={true} duration={500}>
              <Button variant="ghost" className="text-[16px]">
                Home
              </Button>
            </Link>
            <Link to="/usinagem" smooth={true} duration={500}>
              <Button variant="ghost" className="text-[16px]">
                Usinagem
              </Button>
            </Link>
            <Link to="/manutencao" smooth={true} duration={500}>
              <Button variant="ghost" className="text-[16px]">
                Manutenção
              </Button>
            </Link>
            <Link to="/pecas/disponiveis" smooth={true} duration={500}>
              <Button variant="ghost" className="text-[16px]">
                Peças disponíveis
              </Button>
            </Link>
            <Link to="/contato" smooth={true} duration={500}>
              <Button variant="orcamento" className="text-[16px]">
                Solicite um orçamento <MoveRight className="mt-1" />
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
    </div>
  );
};

export default Navbar;
