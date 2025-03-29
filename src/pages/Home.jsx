import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import PecasDisponiveis from './components/PecasDisponiveis';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Footer from './components/Footer';
import teste1 from '@/images/usinagem_icon.png';
import teste2 from '@/images/manutencao_icon.png';
import teste3 from '@/images/peca_venda.png';
import HomePage from './SubPages/HomePage';
import Navbar from './components/navbar';

const imagens = [teste1, teste2, teste3];

export function Home() {
  const titles = [
    {
      id: 1,
      name: 'Usinagem',
      router: '/usinagem',
      title:
        'Precisão e qualidade em cada peça. Tecnologia de ponta para fabricação sob medida.'
    },
    {
      id: 2,
      router: '/manutencao',
      name: 'Manutenção',
      title:
        'Serviços especializados para manter seus equipamentos sempre operando no melhor desempenho.'
    },
    {
      id: 3,
      router: '/pecas/disponiveis',
      name: 'Peças Dísponiveis',
      title:
        'Soluções industriais à sua disposição. Adquira peças de alta performance para seu negócio'
    }
  ];

  return (
    <div>
      <Navbar />
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
                  className="relative transform transition-transform duration-300 hover:scale-105 hover:-translate-y-5 group"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#2893B3] scale-x-0 transition-transform duration-300 hover:scale-x-100"></div>
                  <div className="absolute inset-0 border-4 border-transparent hover:border-blue-500 transition-all duration-300"></div>
                  <CardContent className="flex flex-col items-center p-4">
                    <img
                      src={item}
                      alt={`Imagem ${index + 1}`}
                      className="w-[50%] h-full object-cover rounded-lg mb-4"
                    />
                    <p className="mb-5 text-[23px]">{titles[index].name}</p>
                    <p className="text-center mb-4 text-lg">
                      {titles[index].title}
                    </p>
                    <Button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
                      <a href={titles[index].router}>Saiba Mais</a>
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
        className="max-w-auto h-full mt-16"
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
