import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import { Mail, Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';
import Navbar from '../components/navbar';

const Usinagem = () => {
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
            <CardTitle className="text-gray-600 text-center mb-20 text-[33px]">
              Usinagem
              <hr className="w-1/3 border-t-4 border-blue-500 mt-2 mx-auto" />
            </CardTitle>
            <div>
              <span className="text-xl">
                Saiba mais sobre nossos serviços de Usinagem
              </span>
              <div>
                <span>
                  A Inspectro possui procedimentos e ações que norteiam e
                  capacitam seus serviços, contando com parceiros e
                  colaboradores qualificados e comprometidos. Desta forma,
                  permite oferecer aos clientes trabalhos com excelência em
                  qualidade.
                </span>
              </div>
            </div>
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

export default Usinagem;
