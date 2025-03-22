import { Card, CardContent, CardTitle, CardFooter } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import teste1 from '@/images/teste/engrenagem3.webp';
import teste2 from '@/images/teste/engrenbagem.webp';
import teste3 from '@/images/teste/rol,amento3.jpg';

const imagens = [teste1, teste2, teste3];

const PecasDisponiveis = () => {
  return (
    <Card className="border-none">
      <CardContent>
        <CardTitle className="text-[#2893B3] text-center mb-20 text-[33px]">
          Lista de Peças disponíveis
          <hr />
        </CardTitle>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-[1600px] mx-auto">
          {imagens.map((item, index) => (
            <Card
              key={index}
              className="relative transform transition-transform duration-300 hover:scale-105 hover:-translate-y-5"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#2893B3] scale-x-0 transition-transform duration-300 hover:scale-x-100"></div>
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
  );
};

export default PecasDisponiveis;
