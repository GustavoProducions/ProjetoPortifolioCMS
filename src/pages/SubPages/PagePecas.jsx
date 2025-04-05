import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Navbar from '../components/navbar';
// import fotos1 from '../../images/1.jpeg';
// import fotos2 from '../../images/2.jpeg';
// import fotos3 from '../../images/3.jpeg';
// import fotos4 from '../../images/4.jpeg';
// import fotos5 from '../../images/5.jpeg';
// import fotos6 from '../../images/6.jpeg';
// import fotos7 from '../../images/7.jpeg';
// import fotos8 from '../../images/8.jpeg';
// import fotos9 from '../../images/9.jpeg';
// import fotos10 from '../../images/10.jpeg';
// import fotos11 from '../../images/11.jpeg';
import pecas1 from '../../images/pecas/pecas1.png';
import pecas2 from '../../images/pecas/pecas4.png';
import pecas3 from '../../images/pecas/pecas3.png';
import pecas4 from '../../images/pecas/pecas2.png';
import { useEffect } from 'react';
import pecas5 from '../../images/pecas/pecas5.jpg';
import pecas6 from '../../images/pecas/pecas6.png';

const imagensMobile = [
  // Primeira coluna no desktop (vertical) / Primeira dupla no mobile (horizontal)
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

  // Segunda coluna no desktop (vertical) / Segunda dupla no mobile (horizontal)
  { src: pecas3, texto: 'Caixa do coleiro', nome: 'Caixa do coleiro' },
  { src: pecas4, texto: 'Caixa do coleiro', nome: 'Caixa do coleiro' },

  // Terceira coluna no desktop (vertical) / Terceira dupla no mobile (horizontal)
  { src: pecas5, texto: 'Peça do coleiro', nome: 'Peça do coleiro' },
  { src: pecas6, texto: 'Peça do coleiro', nome: 'Peça do coleiro' }
];
const imagensDesktop = [
  // Coluna 1 (desktop)
  {
    src: pecas1,
    texto: 'Peças laterais do coleiro',
    nome: 'Peças laterais do coleiro'
  },
  { src: pecas3, texto: 'Caixa do coleiro', nome: 'Caixa do coleiro' },
  { src: pecas5, texto: 'Peça do coleiro', nome: 'Peça do coleiro' },
  {
    src: pecas2,
    texto: 'Peças laterais do coleiro',
    nome: 'Peças laterais do coleiro'
  },
  { src: pecas4, texto: 'Caixa do coleiro', nome: 'Caixa do coleiro' },
  { src: pecas6, texto: 'Peça do coleiro', nome: 'Peça do coleiro' }
];

const PagePecasDiponiveis = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        <div className="grid md:hidden grid-cols-2 gap-5 max-w-[1200px] mx-auto pl-4">
          {imagensMobile.map((item, index) => (
            <Card
              key={index}
              className="relative transform transition-transform duration-300 hover:scale-105 group"
            >
              <CardContent className="flex flex-col items-center p-4">
                <img
                  src={item.src}
                  alt={item.nome}
                  className="w-[250px] h-[180px] object-contain rounded-lg mb-4"
                />
                <p className="mb-5 text-[23px] h-[60px]">{item.texto}</p>
                <Button
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
                  onClick={() => {
                    const whatsappUrl = `https://api.whatsapp.com/send?phone=+5511984171772&text=Olá, estou interessado na ${item.nome}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="hidden md:grid grid-cols-3 gap-5 max-w-[1200px] mx-auto pl-4">
          {imagensDesktop.map((item, index) => (
            <Card
              key={index}
              className="relative transform transition-transform duration-300 hover:scale-105 group"
            >
              <CardContent className="flex flex-col items-center p-4">
                <img
                  src={item.src}
                  alt={item.nome}
                  className="w-[250px] h-[180px] object-contain rounded-lg mb-4"
                />
                <p className="mb-5 text-[23px] h-[60px]">{item.texto}</p>
                <Button
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
                  onClick={() => {
                    const whatsappUrl = `https://api.whatsapp.com/send?phone=+5511984171772&text=Olá, estou interessado na ${item.nome}`;
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
