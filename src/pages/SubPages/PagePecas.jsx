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
import pecas2 from '../../images/pecas/pecas2.png';
import pecas3 from '../../images/pecas/pecas3.png';
import pecas4 from '../../images/pecas/pecas4.png';
import { useEffect } from 'react';
import pecas5 from '../../images/pecas-usinagem.jpg';
import pecas6 from '../../images/pecas2-usinagem.png';
import pecas7 from '../../images/pecas/pecas3.png';
import pecas8 from '../../images/pecas/pecas4.png';

const imagens = [
  { src: pecas1, texto: 'Nome da peça', nome: 'Imagem 2' },
  { src: pecas2, texto: 'Nome da peça', nome: 'Imagem 3' },
  { src: pecas3, texto: 'Nome da peça', nome: 'Imagem 4' },
  { src: pecas4, texto: 'Nome da peça', nome: 'Imagem 5' },
  { src: pecas5, texto: 'Nome da peça', nome: 'Imagem 2' },
  { src: pecas6, texto: 'Nome da peça', nome: 'Imagem 3' },
  { src: pecas7, texto: 'Nome da peça', nome: 'Imagem 4' },
  { src: pecas8, texto: 'Nome da peça', nome: 'Imagem 5' }
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-[1600px] mx-auto">
          {imagens.map((item, index) => (
            <Card
              key={index}
              className="relative transform transition-transform duration-300 hover:scale-105 hover:-translate-y-5 group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#2893B3] scale-x-0 transition-transform duration-300 hover:scale-x-100"></div>
              <div className="absolute inset-0 border-4 border-transparent hover:border-blue-500 transition-all duration-300"></div>
              <CardContent className="flex flex-col items-center p-4">
                <img
                  src={item.src}
                  alt={`Imagem ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="mb-5 text-[23px]">{item.texto}</p>
                <Button
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
                  onClick={() => {
                    const whatsappUrl = `https://api.whatsapp.com/send?phone=+5511984171772R&text=Olá, estou interessado na ${item.nome}`;
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
