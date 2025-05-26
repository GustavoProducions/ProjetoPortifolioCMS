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
import { Facebook, Instagram, Twitter, MapPin, Mail } from 'lucide-react';

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

export function Usinagem() {
  return <div>teste</div>;
}
