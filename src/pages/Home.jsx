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


import first from "@/images/1.jpeg";
import three from "@/images/3.jpeg";
import quatro from "@/images/4.jpeg";
import cinco from "@/images/5.jpeg";
import seis from "@/images/6.jpeg";
import sete from "@/images/7.jpeg";

const imagens = [first, three, quatro, cinco, seis, sete];

const divideImagesInGroups = (images, groupSize) => {
    const groups = [];
    for (let i = 0; i < images.length; i += groupSize) {
        groups.push(images.slice(i, i + groupSize));
    }
    return groups;
};

export function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const imageGroups = divideImagesInGroups(imagens, 4);

    return (
        <div className="bg-gradient-to-b from-gray-700 to-blue-900 min-h-screen text-white">
            <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-lg h-[100px]">
                <div className="flex justify-between items-center p-4 mt-5">
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

            <div className="pt-[100px] space-y-8 gap-10 mx-14 p-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                    </CardHeader>
                    <CardContent className="w-[10%] flex flex-row gap-10">
                        {imagens.map((item) => (
                            <img src={item} />
                        ))}
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((item, index) => (
                        <Card key={index}>
                            <CardContent>
                                <div className="bg-gray-800 h-40 rounded-lg mb-4"></div>
                                <h3 className="text-xl font-semibold text-center">Serviço {index + 1}</h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Card>
                    <CardContent>
                        <h2 className="text-3xl font-semibold text-center mb-6">Contato</h2>
                        <form className="space-y-6">
                            <Input placeholder="Seu nome" className="bg-gray-800 border-none" />
                            <Input type="email" placeholder="Seu email" className="bg-gray-800 border-none" />
                            <Textarea placeholder="Sua mensagem" className="bg-gray-800 border-none" />
                            <div className="text-center">
                                <Button type="submit" className="w-full md:w-auto">Enviar</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>

            <footer className="bg-gray-900 text-center p-6 mt-12">
                <p>Entre em contato: contato@maestro.com | (11) 91558-8914</p>
            </footer>
        </div>
    );
}