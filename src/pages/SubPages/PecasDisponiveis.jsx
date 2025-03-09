import { motion } from 'framer-motion';
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
const PecasDisponiveis = () => {
  return (
    <motion.div
      id="servicos"
      className="max-w-auto mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Card className="border-none">
        <CardContent>
          <CardTitle className="text-[#2893B3] text-center mb-14 text-[25px]">
            Lista de Peças disponíveis
          </CardTitle>
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
  );
};

export default PecasDisponiveis;
