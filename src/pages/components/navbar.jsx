import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppButton from '../components/WhatsAppButton';
import logo from '@/images/logoCM.png';
import { Link } from 'react-router-dom';
import { AlignJustify, MoveRight, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      <header
        className={`fixed top-0 left-0 w-full z-50 h-[110px] md:h-[160px] transition-all duration-300 ${isScrolled ? 'bg-transparent md:bg-gray-200' : 'bg-gray-200'}`}
      >
        <div className="flex justify-between items-center max-w-screen-lg mx-auto px-4">
          <WhatsAppButton />
          <motion.h1
            className="text-2xl font-bold flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Link to="/home" smooth={true} duration={500}>
              <Button
                variant="logo"
                className="w-32 md:w-56 h-auto justify-start"
              >
                <img
                  src={logo}
                  alt="Logo CM Manutencao"
                  className={`w-32 mt-3 md:mt-0 h-auto object-cover md:w-56 transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
                />
              </Button>
            </Link>
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
            <Button variant="outline" onClick={toggleMenu} className="bg-white">
              <div className="relative w-9 h-9">
                <AnimatePresence>
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <X size={32} className="text-gray-900" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="open"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <AlignJustify size={32} className="text-gray-900" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Button>
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-0 bg-gray-900 z-40 ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="flex flex-col md:flex-row items-center justify-center h-full space-y-6 md:space-y-0 md:space-x-10">
          <Link to="/home" smooth={true} duration={500} onClick={toggleMenu}>
            <Button
              variant="ghost"
              className="text-white text-2xl mb-4 hover:text-blue-500 transition-colors duration-300"
            >
              Home
            </Button>
          </Link>
          <Link
            to="/usinagem"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            <Button
              variant="ghost"
              className="text-white text-2xl mb-4 hover:text-blue-500 transition-colors duration-300"
            >
              Usinagem
            </Button>
          </Link>
          <Link
            to="/manutencao"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            <Button
              variant="ghost"
              className="text-white text-2xl mb-4 hover:text-blue-500 transition-colors duration-300"
            >
              Manutenção
            </Button>
          </Link>
          <Link
            to="/pecas/disponiveis"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            <Button
              variant="ghost"
              className="text-white text-2xl mb-4 hover:text-blue-500 transition-colors duration-300"
            >
              Peças disponíveis
            </Button>
          </Link>
          <Link to="/contato" smooth={true} duration={500} onClick={toggleMenu}>
            <Button
              variant="ghost"
              className="text-white text-2xl mb-4 hover:text-blue-500 transition-colors duration-300"
            >
              Solicite um orçamento
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
