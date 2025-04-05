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
import pecas5 from '../../images/pecas/pecas5.jpg';
import pecas6 from '../../images/pecas/pecas6.png';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Autoplay from 'embla-carousel-autoplay';

const imagens = [pecas1, pecas2, pecas3, pecas4, pecas5, pecas6];

const PecasDisponiveis = () => {
  return (
    <Card className="border-none h-500">
      <CardContent>
        <CardTitle className="text-gray-600 text-center mb-20 text-[33px]">
          Peças Disponíveis
          <hr className="w-1/4 border-t-4 border-blue-500 mt-2 mx-auto" />
        </CardTitle>

        <div className="max-w-[1200px] mx-auto overflow-hidden hidden md:block">
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false
              })
            ]}
            className="w-full flex justify-center overflow-hidden"
          >
            <CarouselContent className="flex flex-nowrap w-full">
              {imagens.map((img, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/3 shrink-0 flex-grow-0 flex flex-col items-center gap-4 h-96 relative transform transition-transform duration-300 hover:scale-105 group"
                  style={{ overflow: 'visible', willChange: 'transform' }}
                >
                  <div className="rounded-lg w-full h-full relative flex flex-col items-center">
                    <img
                      src={img}
                      alt={`Imagem ${index + 1}`}
                      className="max-w-[300px] max-h-[200px] aspect-[4/3] object-contain mb-4"
                    />
                    <p className="mb-5 text-[23px] h-16 flex items-center justify-center">
                      Imagem {index + 1}
                    </p>
                    <Link to="/pecas/disponiveis" smooth={true} duration={500}>
                      <Button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded transition-opacity duration-300 z-50">
                        Saiba Mais
                      </Button>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
                      className="max-w-full h-auto max-h-[180px] object-contain mb-4"
                    />
                    <p className="mb-5 text-[23px] h-16 flex items-center justify-center">
                      Imagem {index + 1}
                    </p>
                    <Link to="/pecas/disponiveis" smooth={true} duration={500}>
                      <Button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded transition-opacity duration-300 z-50">
                        Saiba Mais
                      </Button>
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
