import { useState } from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import WhatsAppButton from '../components/WhatsAppButton';
import logo from '@/images/logoCM.png';
import { Link } from 'react-router-dom';
import { AlignJustify } from 'lucide-react';
import Footer from '../components/Footer';
import { Mail, Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';

const Servicos = () => {
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
              alt="Logo CM Manutencao"
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
        id="contato"
        className="pt-[200px] sm:pt-[180px] md:pt-[160px] mt-10 flex flex-col md:flex-row justify-center items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Coluna do Formulário */}
        <Card className="border-none w-full md:w-2/5 bg-blue-50">
          <CardContent>
            <CardTitle className="text-[#2893B3] text-center mb-10 text-[22px] items-center">
              <h1 className="text-4xl mt-12">Nos envie uma mensagem</h1>
              <h3 className="text-xl text-slate-500 text-opacity-3 mt-2">
                Entre em contato para dúvidas e informações
              </h3>
            </CardTitle>
            <form className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-[#2893B3] mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2893B3]"
                  placeholder="Seu nome"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-[#2893B3] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2893B3]"
                  placeholder="Seu email"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-[#2893B3] mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2893B3]"
                  placeholder="Sua mensagem"
                  rows="4"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <motion.button
                  type="submit"
                  className="w-[200px] bg-[#2893B3] text-white py-3 rounded-lg shadow-md text-lg font-semibold transition-all hover:bg-[#1a6d89] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#1a6d89]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enviar
                </motion.button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Coluna dos Contatos */}
        <Card className="border-none w-full md:w-2/5 flex flex-col justify-center items-center text-center">
          <CardContent>
            <CardTitle className="text-[#2893B3] text-[22px] mb-6">
              Entre em Contato
            </CardTitle>
            <div className="space-y-3 text-gray-700 text-base">
              <p className="flex items-center gap-2">
                <Mail className="text-[#2893B3]" /> email@empresa.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="text-[#2893B3]" /> +55 11 99999-9999
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="text-[#2893B3]" /> +55 11 99999-9999
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="text-[#2893B3]" /> @empresa
              </p>
              <p className="flex items-center gap-2">
                <Facebook className="text-[#2893B3]" /> /empresa
              </p>
            </div>
          </CardContent>
        </Card>
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
};

export default Servicos;
