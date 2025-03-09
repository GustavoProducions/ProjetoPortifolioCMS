import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

import um from '@/images/1.jpeg';
import dois from '@/images/2.jpeg';
import quatro from '@/images/4.jpeg';
import seis from '@/images/6.jpeg';
import sete from '@/images/7.jpeg';
import oito from '@/images/8.jpeg';
import logo from '@/images/logoCM.png';
import manutencao from '@/images/manutencao.webp';
import usinagem from '@/images/usinagem.jpg';
const imagens = [um, dois, quatro, seis, sete, oito];
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
        <div className="bg-gray-200">
            <header className="fixed top-0 left-0 w-full z-50 bg-white h-[160px] shadow-lg">
                <div className="flex justify-between items-center p-4 mt-5 max-w-screen-lg mx-auto px-6">
                    <motion.h1
                        className="text-2xl font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <img
                            src={logo}
                            alt="Logo RTL Rolamentos"
                            className="w-40 h-auto object-cover"
                        />
                    </motion.h1>
                    <nav className="hidden md:flex space-x-6 mb-5">
                        <Link to="home" smooth={true} duration={500}>
                            <Button variant="ghost">Home</Button>
                        </Link>
                        <Link to="servicos" smooth={true} duration={500}>
                            <Button variant="ghost">Serviços</Button>
                        </Link>
                        <Link to="quem-somos" smooth={true} duration={500}>
                            <Button variant="ghost">Quem Somos</Button>
                        </Link>
                        <Link to="contato" smooth={true} duration={500}>
                            <Button variant="ghost">Contato</Button>
                        </Link>
                    </nav>
                    <div className="md:hidden">
                        <Button variant="outline" onClick={toggleMenu}>
                            Menu
                        </Button>
                    </div>
                </div>
            </header>
            <div
                className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40  ${isMenuOpen ? 'block' : 'hidden'}`}
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
                className="pt-[250px] space-y-8 gap-10 mx-auto p-6 max-w-[1600px] px-6 h-[80vh]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Card className="relative overflow-hidden">
                    <CardContent className="bg-gray-200 flex flex-col md:flex-row items-stretch relative z-10 h-full">
                        <div className="md:w-1/2 w-full flex-1 h-full relative z-20 shadow-lg p-6 bg-white rounded-lg flex flex-col justify-between">
                            <div>
                                <span className="text-xl">
                                    Experiência e Inovação em um só lugar <br />
                                </span>
                                <span>
                                    Na CM Manutenção Industrial, somos especialistas em fornecer
                                    soluções completas e inovadoras para a manutenção industrial e
                                    usinagem. Com anos de experiência no mercado, nossa missão é
                                    garantir a máxima eficiência e desempenho dos equipamentos
                                    industriais de nossos clientes.
                                </span>
                            </div>
                            <Button variant="destructive" className="mt-36 w-20">
                                Contato
                            </Button>
                        </div>
                        <div className="md:w-1/2 w-full flex-1 h-full relative z-20 hidden md:block">
                            <Carousel className="w-full h-full">
                                <CarouselContent className="h-full">
                                    {images.map((image, index) => (
                                        <CarouselItem
                                            key={index}
                                            className={`h-full ${index === currentIndex ? 'block' : 'hidden'}`}
                                        >
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-full object-cover"
                                            />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious
                                    onClick={() =>
                                        setCurrentIndex(
                                            (prev) => (prev - 1 + images.length) % images.length
                                        )
                                    }
                                />
                                <CarouselNext
                                    onClick={() =>
                                        setCurrentIndex((prev) => (prev + 1) % images.length)
                                    }
                                />
                            </Carousel>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
            <motion.div
                id="servicos"
                className="max-w-auto min-h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Card>
                    <CardContent className="bg-sky-600">
                        <CardTitle className="text-white text-center mb-6">
                            Lista de Peças disponíveis
                        </CardTitle>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1600px] mx-auto">
                            {imagens.map((item, index) => (
                                <Card
                                    key={index}
                                    className="transform transition-transform duration-300 hover:scale-105"
                                >
                                    <CardContent>
                                        <img
                                            src={item}
                                            alt={`Imagem ${index + 1}`}
                                            className="w-full h-60 object-cover rounded-lg"
                                        />
                                    </CardContent>
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
                                                    className="w-full h-60 object-cover"
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
            <motion.div
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
            </motion.div>
        </div>
    );
}
