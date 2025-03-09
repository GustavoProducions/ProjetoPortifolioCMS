import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { AlignJustify } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Card, CardContent, CardTitle, CardFooter } from '@/components/ui/card';

import um from '@/images/1.jpeg';
import dois from '@/images/2.jpeg';
import quatro from '@/images/4.jpeg';
import seis from '@/images/6.jpeg';
import sete from '@/images/7.jpeg';
import oito from '@/images/8.jpeg';
import logo from '@/images/logoCM.png';
import manutencao from '@/images/manutencao.webp';
import usinagem from '@/images/usinagem.jpg';
import teste1 from '@/images/teste/engrenagem3.webp';
import teste2 from '@/images/teste/engrenbagem.webp';
import teste3 from '@/images/teste/rol,amento3.jpg';
import teste4 from '@/images/teste/rolamento.jpg';
import teste5 from '@/images/teste/rolamento2.jpg';
import teste6 from '@/images/teste/rolamento5.webp';
import teste7 from '@/images/teste/rolamento21.jpg';
import teste8 from '@/images/teste/rolemanerto.webp';

const imagens = [
  teste1,
  teste2,
  teste3,
  teste4,
  teste5,
  teste6,
  teste7,
  teste8
];
const images = [
  { src: um, alt: 'Usinagem' },
  { src: dois, alt: 'Manutenção' },
  { src: quatro, alt: 'Usinagem' },
  { src: seis, alt: 'Manutenção' },
  { src: sete, alt: 'Usinagem' },
  { src: oito, alt: 'Manutenção' }
];

export function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-200 h-[160px] shadow-lg">
        <div className="flex justify-between items-center max-w-screen-lg mx-auto">
          <motion.h1
            className="text-2xl font-bold flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={logo}
              alt="Logo RTL Rolamentos"
              className="w-56 h-auto object-cover "
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
            <Link to="quem-somos" smooth={true} duration={500}>
              <Button variant="ghost" className="text-[16px]">
                Quem Somos
              </Button>
            </Link>
            <Link to="contato" smooth={true} duration={500}>
              <Button variant="ghost" className="text-[16px]">
                Contato
              </Button>
            </Link>
          </nav>
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
              Serviços
            </Button>
          </Link>
          <Link
            to="quem-somos"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            <Button variant="ghost" className="text-white text-2xl mb-4">
              Quem Somos
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
        id="home"
        className="pt-[200px] sm:pt-[180px] md:pt-[200px] space-y-8 gap-10 mx-auto p-4 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ background: 'linear-gradient(to bottom, #2893B3, white)' }}
      >
        <Card className="relative overflow-hidden w-full">
          {' '}
          {/* Adicione w-full aqui */}
          <CardContent className=" flex flex-col md:flex-row items-stretch relative z-10 h-full">
            <div className="md:w-1/2 w-full flex-1 h-[350px] relative z-20 p-4 sm:p-6 bg-white rounded-lg flex flex-col justify-between">
              <div>
                <span className="text-[22px] sm:text-[25px]">
                  Experiência e Inovação em um só lugar:
                  <br />
                  <br />
                </span>
                <span className="text-base sm:text-lg">
                  Na CM Manutenção Industrial, somos especialistas em fornecer
                  soluções completas e inovadoras para a manutenção industrial e
                  usinagem. Com anos de experiência no mercado, nossa missão é
                  garantir a máxima eficiência e desempenho dos equipamentos
                  industriais de nossos clientes.
                </span>
              </div>
              <Button
                variant="default"
                className="mt-10 md:mt-3 w-full sm:w-40"
              >
                Solicite seu orçamento
              </Button>
            </div>
            <div className="md:w-1/2 w-full flex-1 relative z-20 block">
              <Carousel className="w-full">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem
                      key={index}
                      className={`h-full ${index === currentIndex ? 'block' : 'hidden'}`}
                    >
                      <div className="w-full h-[250px] sm:h-[350px]">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        id="servicos"
        className="max-w-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Card>
          <CardContent>
            {/* <CardTitle className="text-[#2893B3] text-center mb-14 text-[25px]">
              Lista de Peças disponíveis
            </CardTitle> */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-[1600px] mx-auto">
              {imagens.map((item, index) => (
                <Card
                  key={index}
                  className="transform transition-transform duration-300 hover:scale-105"
                >
                  <CardContent className="flex justify-center items-center">
                    <img
                      src={item}
                      alt={`Imagem ${index + 1}`}
                      className="w-[60%] h-[60%] object-cover rounded-lg"
                    />
                  </CardContent>
                  <CardFooter>Nomes das peças</CardFooter>
                </Card>
              ))}
            </div>
            <div className="md:hidden">
              <Carousel
                opts={{ align: 'start', perPage: 1 }}
                className="overflow-hidden"
              >
                <CarouselContent>
                  {imagens.map((img, index) => (
                    <CarouselItem key={index} className="flex gap-4">
                      <div className="rounded-lg overflow-hidden w-full h-[90px]:">
                        <img
                          src={img}
                          alt={`Imagem ${index + 1}`}
                          className="w-full h-40 object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      {/* <motion.div
        id="quem-somos"
        className="pt-[100px] space-y-8 gap-10 mx-auto p-6 max-w-[1600px] px-6 min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Card>
          <CardContent className="bg-gray-200 flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 mt-28">
              <span className="text-xl">
                Experiência e Inovação em um só lugar
              </span>
              <span>
                RTL Rolamentos, Mancais e Buchas para sua Indústria! A RTL
                Rolamentos é a escolha certa para suprir suas necessidades em
                rolamentos e mancais. Especializados em importação e
                distribuição, oferecemos uma extensa linha de produtos das
                melhores marcas nacionais e importadas. Conte conosco como seu
                parceiro confiável para alcançar eficiência e desempenho
                excepcionais em sua empresa.
              </span>
              <br />
              <Button variant="destructive" className=" mt-10">
                Contato
              </Button>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <img
                src={logo}
                alt="Logo RTL Rolamentos"
                className="w-full h-auto object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        id="contato"
        className="pt-[100px] space-y-8 gap-10 mx-auto p-6 max-w-[1600px] px-6 min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Card>
          <CardContent className="bg-gray-200 flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 mt-28">
              <span className="text-xl">
                Experiência e Inovação em um só lugar
              </span>
              <span>
                RTL Rolamentos, Mancais e Buchas para sua Indústria! A RTL
                Rolamentos é a escolha certa para suprir suas necessidades em
                rolamentos e mancais. Especializados em importação e
                distribuição, oferecemos uma extensa linha de produtos das
                melhores marcas nacionais e importadas. Conte conosco como seu
                parceiro confiável para alcançar eficiência e desempenho
                excepcionais em sua empresa.
              </span>
              <br />
              <Button variant="destructive" className=" mt-10">
                Contato
              </Button>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <img
                src={logo}
                alt="Logo RTL Rolamentos"
                className="w-full h-auto object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div> */}
    </div>
  );
}
