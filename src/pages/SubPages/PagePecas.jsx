import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Navbar from '../components/navbar';
import pecas1 from '../../images/pecas/pecas1.png';
import pecas2 from '../../images/pecas/pecas4.png';
import pecas3 from '../../images/pecas/pecas3.png';
import pecas4 from '../../images/pecas/pecas2.png';
import { useEffect, useState } from 'react';
import pecas5 from '../../images/pecas/pecas5.jpg';
import pecas6 from '../../images/pecas/pecas6.png';

const imagens = [
  {
    src: pecas1,
    texto: 'Peças laterais do coleiro',
    nome: 'Peças laterais do coleiro'
  },
  {
    src: pecas2,
    texto: 'Peças laterais do coleiro',
    nome: 'Peças laterais do coleiro'
  },
  { src: pecas3, texto: 'Caixa do coleiro', nome: 'Caixa do coleiro' },
  { src: pecas4, texto: 'Caixa do coleiro', nome: 'Caixa do coleiro' },
  { src: pecas5, texto: 'Peça do coleiro', nome: 'Peça do coleiro' },
  { src: pecas6, texto: 'Peça do coleiro', nome: 'Peça do coleiro' }
];

const PagePecasDiponiveis = () => {
  const [activeCard, setActiveCard] = useState(null); // Estado para rastrear o card ativo

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = (index) => {
    if (activeCard === index) {
      setActiveCard(null); // Desativa se o mesmo card for clicado novamente
    } else {
      setActiveCard(index); // Ativa o card clicado
    }
  };

  return (
    <div>
      <Navbar />
      <motion.div
        id="pecas"
        className="pt-[100px] sm:pt-[180px] md:pt-[160px] mt-10 flex flex-col justify-center items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div>
          <CardTitle className="text-gray-600 text-center mb-16 text-[33px]">
            Peças Disponíveis para venda
            <hr className="w-1/3 border-t-4 border-blue-500 mt-2 mx-auto" />
          </CardTitle>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-[1200px] mx-auto pl-4">
          {imagens.map((item, index) => (
            <Card
              key={index}
              className={`relative transform transition-transform duration-300 ${
                activeCard === index ? 'scale-105' : 'hover:scale-105'
              }`}
              onMouseEnter={() => setActiveCard(index)} // Hover no desktop
              onMouseLeave={() => setActiveCard(null)} // Remove hover no desktop
              onClick={() => handleCardClick(index)} // Ativa/desativa no mobile e desktop ao clicar
            >
              <CardContent className="flex flex-col items-center p-4">
                <img
                  src={item.src}
                  alt={item.nome}
                  className="w-[250px] h-[180px] object-contain rounded-lg mb-4"
                />
                <div
                  className={`absolute inset-0 border-4 transition-all duration-300 ${
                    activeCard === index
                      ? 'border-blue-500'
                      : 'border-transparent'
                  }`}
                ></div>
                <p className="mb-5 text-[16px] md:text-[23px] h-[60px]">
                  {item.texto}
                </p>
                <Button
                  className={`mt-2 px-4 py-2 bg-blue-500 text-white rounded transition-opacity duration-300 z-10 ${
                    activeCard === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  onClick={() => {
                    const whatsappUrl = `https://api.whatsapp.com/send?phone=+5511915659594&text=Olá, estou interessado na ${item.nome}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      <motion.div
        id="footer"
        className="pt-[100px] mx-auto"
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
