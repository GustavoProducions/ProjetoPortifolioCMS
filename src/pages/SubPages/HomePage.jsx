import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel';
import Typical from 'react-typical';
import um from '@/images/1.jpeg';
import manutencao from '@/images/manutencao.webp';
import usinagem from '@/images/usinagem.jpg';

const images = [
  {
    src: usinagem,
    alt: 'Usinagem',
    title: 'Usinagem',
    text: 'A Cezar Mendes possui procedimentos e ações que norteiam e capacitam seus serviços.',
    buttonText: 'Saiba mais'
  },
  {
    src: um,
    alt: 'Manutenção',
    title: 'Manutenção',
    text: 'A manutenção industrial é essencial para garantir a eficiência e segurança das operações, prevenindo falhas e minimizando o tempo de inatividade.',
    buttonText: 'Saiba mais'
  },
  {
    src: manutencao,
    alt: 'Serviços',
    title: 'Usinagem',
    text: 'Texto para Usinagem 2',
    buttonText: 'Saiba mais'
  }
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Card className="relative w-full border-none">
      <CardContent className="flex flex-col relative z-10 h-full p-0">
        <div className="w-full flex-1 relative z-20 block">
          <Carousel className="w-full" interval={10000}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className={`h-full ${index === currentIndex ? 'block' : 'hidden'}`}
                >
                  <div className="w-full h-[650px] sm:h-[500px] md:h-[700px]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full opacity-80"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white text-center">
                    <h5 className="text-[30px] font-bold">{image.title}</h5>
                    <h2 className="text-lg font-bold">
                      <Typical
                        steps={[image.text, 1000]}
                        loop={1}
                        wrapper="span"
                      />
                    </h2>
                    <Button className="mt-2 px-4 py-2 text-white rounded">
                      {image.buttonText}
                    </Button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </CardContent>
    </Card>
  );
};

export default HomePage;
