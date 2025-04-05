import { Card, CardContent, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import pecas1 from '../../images/pecas/pecas1.png';
import pecas2 from '../../images/pecas/pecas2.png';
import pecas3 from '../../images/pecas/pecas3.png';
import pecas4 from '../../images/pecas/pecas4.png';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Autoplay from 'embla-carousel-autoplay';

const imagens = [pecas1, pecas2, pecas3, pecas4];

const PecasDisponiveis = () => {
  return (
    <Card className="border-none h-500">
      <CardContent>
        <CardTitle className="text-gray-600 text-center mb-20 text-[33px]">
          Peças Disponíveis
          <hr className="w-1/4 border-t-4 border-blue-500 mt-2 mx-auto" />
        </CardTitle>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-6 max-w-[1600px] mx-auto">
          {imagens.map((item, index) => (
            <Card
              key={index}
              className="relative transform transition-transform duration-300 hover:scale-105 hover:-translate-y-5 group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#2893B3] scale-x-0 transition-transform duration-300 hover:scale-x-100"></div>
              <CardContent className="flex flex-col items-center p-4">
                <img
                  src={item}
                  alt={`Imagem ${index + 1}`}
                  className="w-[60%] h-[60%] object-cover rounded-lg mb-4"
                />
                <p className="mb-5 text-[23px] h-16 flex items-center justify-center">
                  Imagem {index + 1}
                </p>
                <Link to="/pecas/disponiveis" smooth={true} duration={500}>
                  <Button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
                    Saiba mais
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="md:hidden">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false
              })
            ]}
            className="overflow-hidden"
          >
            <CarouselContent>
              {imagens.map((img, index) => (
                <CarouselItem
                  key={index}
                  className="flex flex-col items-center gap-4 h-96 group"
                >
                  <div className="rounded-lg overflow-hidden w-full h-full relative flex flex-col items-center">
                    <img
                      src={img}
                      alt={`Imagem ${index + 1}`}
                      className="w-[50%] h-[65%] object-cover mb-4"
                    />
                    <p className="mb-5 text-[23px] h-16 flex items-center justify-center">
                      Imagem {index + 1}
                    </p>
                    <Link to="/pecas/disponiveis" smooth={true} duration={500}>
                      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded transition-opacity duration-300 z-50">
                        Saiba Mais
                      </button>
                    </Link>
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
  );
};

export default PecasDisponiveis;
