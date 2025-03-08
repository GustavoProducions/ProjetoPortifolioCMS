import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import um from "@/images/1.jpeg";
import dois from "@/images/2.jpeg";
import quatro from "@/images/4.jpeg";
import seis from "@/images/6.jpeg";
import sete from "@/images/7.jpeg";
import oito from "@/images/8.jpeg";
import nove from "@/images/9.jpeg";
import logo from "@/images/logoCM.png";
import empresa1 from "@/images/empresa1.jpeg";
import empresa2 from "@/images/empresa2.jpeg";

const imagens = [um, dois, quatro, seis, sete, oito];

export function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className='bg-gray-200'>
            <header className="fixed top-0 left-0 w-full z-50 bg-sky-600 h-[100px]">
                <div className="flex justify-between items-center p-4 mt-5 max-w-screen-lg mx-auto px-6">
                    <h1 className="text-2xl font-bold">Logo</h1>
                    <nav className={`space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
                        <Button variant="ghost" asChild>
                            <a href="#home">Home</a>
                        </Button>
                        <Button variant="ghost" asChild>
                            <a href="#servicos">Serviços</a>
                        </Button>
                        <Button variant="ghost" asChild>
                            <a href="#quem-somos">Quem Somos</a>
                        </Button>
                        <Button variant="ghost" asChild>
                            <a href="#contato">Contato</a>
                        </Button>
                    </nav>
                    <div className="md:hidden">
                        <Button variant="outline" onClick={toggleMenu}>Menu</Button>
                    </div>
                </div>
            </header>

            <div className="pt-[100px] space-y-8 gap-10 mx-auto p-6 max-w-[1224px] px-6">
                <Card>
                    <CardContent className="bg-gray-200 flex flex-col md:flex-row items-center md:items-start">
                        <div className="md:w-1/2 mt-28">
                            <span className='text-xl'>
                                Experiência e Inovação em um só lugar
                            </span>
                            <span>
                                RTL Rolamentos, Mancais e Buchas para sua Indústria!
                                A RTL Rolamentos é a escolha certa para suprir suas necessidades em rolamentos e mancais. Especializados em importação e distribuição, oferecemos uma extensa linha de produtos das melhores marcas nacionais e importadas. Conte conosco como seu parceiro confiável para alcançar eficiência e desempenho excepcionais em sua empresa.
                            </span>
                            <br />
                            <Button variant="destructive" className=" mt-10">Contato</Button>
                        </div>
                        <div className="md:w-1/2 mt-4 md:mt-0">
                            <img src={logo} alt="Logo RTL Rolamentos" className="w-full h-auto object-cover" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="max-w-auto">
                <Card>
                    <CardContent className="bg-sky-600">
                        <CardTitle className="text-white text-center mb-6">Lista de Peças disponíveis</CardTitle>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1224px] mx-auto">
                            {imagens.map((item, index) => (
                                <Card key={index} className="transform transition-transform duration-300 hover:scale-105">
                                    <CardContent>
                                        <img src={item} alt={`Imagem ${index + 1}`} className="w-full h-60 object-cover rounded-lg" />
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}