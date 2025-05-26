import { useState } from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import emailjs from 'emailjs-com';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '../components/navbar';
import { useToast } from '../../components/ui/use-toast';
import whats from '../../images/whats.png';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_4llg1zx',
        'template_a3rq008',
        formData,
        'e1uPczpjo4OEN31Gq'
      )
      .then(
        (response) => {
          if (response.status === 200 || response.status === 204) {
            toast({
              title: 'Sucesso!',
              description: 'Mensagem enviada com sucesso!',
              status: 'success',
              variant: 'success'
            });
          } else {
            toast({
              title: 'Erro!',
              description:
                'Falha ao enviar a mensagem. Por favor, tente novamente.',
              status: 'error',
              variant: 'destructive'
            });
          }
        },
        () => {
          toast({
            title: 'Erro!',
            description:
              'Falha ao enviar a mensagem. Por favor, tente novamente.',
            status: 'error',
            variant: 'destructive'
          });
        }
      );
  };

  const { toast } = useToast();

  return (
    <div>
      <Navbar />
      <motion.div
        id="contato"
        className="pt-[50px] sm:pt-[180px] md:pt-[160px] mt-10 flex flex-col md:flex-row justify-center items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Coluna do Formulário */}
        <Card className="border-none w-full md:w-2/5">
          <CardContent>
            <CardTitle className="text-gray-600 text-center mb-8 text-[22px] items-center">
              <h1 className="text-4xl mt-12">Nos envie uma mensagem</h1>
              <hr className="w-[70%] border-t-4 border-blue-500 mt-2 mx-auto" />
              <h3 className="text-xl text-slate-500 text-opacity-3 mt-2">
                Entre em contato para dúvidas e informações
              </h3>
            </CardTitle>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <Label className="text-[#2893B3] text-lg mb-2">Nome</Label>
                <Input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2893B3]"
                  placeholder="*Nome"
                  required
                />
              </div>
              <div className="flex flex-col">
                <Label className="text-[#2893B3] text-lg mb-2">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2893B3]"
                  placeholder="*E-Mail"
                  required
                />
              </div>
              <div className="flex flex-col">
                <Label className="text-[#2893B3] text-lg mb-2">WhatsApp</Label>
                <Input
                  type="text"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2893B3]"
                  placeholder="*Telefone"
                  required
                />
              </div>
              <div className="flex flex-col">
                <Label className="text-[#2893B3] text-lg mb-2">Mensagem</Label>
                <Textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2893B3]"
                  placeholder="Deixe sua mensagem"
                  required
                />
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
            <CardTitle className="text-[#2893B3] text-4xl mb-6">
              Entre em Contato
            </CardTitle>
            <div className="space-y-3 text-gray-700 text-base">
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:manutecao.cezarmendes@gmail.com"
                    className="hover:text-gray-400 flex items-center space-x-2"
                  >
                    <Mail
                      size={24}
                      className="text-grey-800 hover:text-gray-400 "
                    />
                    <span className="text-grey-800 hover:text-gray-400">
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
                      className="text-grey-800 hover:text-gray-400"
                    />
                    <span className="text-grey-800 hover:text-gray-400">
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
                      className="text-grey-800 hover:text-gray-400"
                    />
                    <span className="text-grey-800 hover:text-gray-400">
                      Instagram
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5511915659594"
                    className="hover:text-gray-400 flex items-center space-x-2"
                  >
                    <Phone
                      size={24}
                      className="text-grey-800 hover:text-gray-400"
                    />
                    <span className="text-grey-800 hover:text-gray-400">
                      Whatsapp
                    </span>
                  </a>
                </li>
              </ul>
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

export default ContactForm;
