import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import { Mail, Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';
import Navbar from '../components/navbar';

const PagePecasDiponiveis = () => {
  return (
    <div>
      <Navbar />
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

export default PagePecasDiponiveis;
