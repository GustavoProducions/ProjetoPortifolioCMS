import { useEffect, useState } from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import Footer from '../components/Footer';
import Navbar from '../components/navbar';
import usinagem from '../../images/pega-usinagem.avif';
import usinagem2 from '../../images/page-usinagem2.jpg';
import video1 from '../../images/usinagem_video.mp4';
import video2 from '../../images/usinagem2_video.mp4';
import video3 from '../../images/usinagem3_video.mp4';
import video4 from '../../images/usinagem4_video.mp4';

const Usinagem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videos = [video1, video2, video3, video4]; // Array de vídeos.
  const [activeIndex, setActiveIndex] = useState(0); // Slide atualmente ativo.

  const handleVideoInteraction = (video, event) => {
    event.preventDefault(); // Impede o comportamento padrão
    if (video.paused) {
      video.play(); // Reproduz o vídeo se estiver pausado
    } else {
      video.pause(); // Pausa o vídeo se estiver tocando
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Desativa autoplay para evitar reprodução automática
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex) // Atualiza o índice ativo
  };

  return (
    <div>
      <Navbar />
      <motion.div
        id="a"
        className="pt-[90px] sm:pt-[180px] md:pt-[160px] mt-10 flex flex-col gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Seção de Usinagem */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Card className="border-none w-full md:w-2/5">
            <CardContent>
              <CardTitle className="text-gray-600 text-center mb-16 text-[33px]">
                Usinagem
                <hr className="w-1/3 border-t-4 border-blue-500 mt-2 mx-auto" />
              </CardTitle>
              <div>
                <span className="text-[25px]">
                  Saiba mais sobre nossos serviços de Usinagem
                </span>
                <div>
                  <br />
                  <span className="text-lg text-[D3D3D3]">
                    A Cezar Mendes possui procedimentos e ações que norteiam e
                    capacitam seus serviços, contando com parceiros e
                    colaboradores qualificados e comprometidos. Desta forma,
                    permite oferecer aos clientes trabalhos com excelência em
                    qualidade.
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="w-full md:w-2/5 mt-10 md:mt-0">
            <img src={usinagem} alt="Usinagem" className="w-full h-auto" />
          </div>
        </div>

        {/* Seção de Máquinas e Dispositivos */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
          <Card className="border-none w-full md:w-2/5 order-1 md:order-2">
            <CardContent>
              <div>
                <span className="text-[25px]">Máquinas e Dispositivos</span>
                <div>
                  <br />
                  <span className="text-lg text-[D3D3D3]">
                    Construção de dispositivos, subconjuntos e partes de
                    máquinas (inclusive montados) conforme desenhos de projeto
                    enviados pelo cliente e ou desenvolvidos pela Cezar Mendes.
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="w-full md:w-2/5 mt-10 md:mt-0 order-1 md:order-1">
            <img src={usinagem2} alt="Usinagem" className="w-full h-auto" />
          </div>
        </div>

        {/* Carrossel de Vídeos */}
        <div className="flex flex-col items-center justify-center gap-6 mt-10">
          <h3 className="text-[25px] font-bold mb-6">Galeria de Vídeos</h3>
          <div className="w-full md:w-3/5">
            <Slider {...sliderSettings}>
              {videos.map((videoSrc, index) => (
                <div key={index} className="flex justify-center">
                  {activeIndex === index && ( // Renderiza apenas o slide ativo
                    <video
                      src={videoSrc}
                      controls
                      className="w-full h-[500px] rounded-lg shadow-lg cursor-pointer"
                      onClick={(e) => handleVideoInteraction(e.target, e)} // Clique para pausar/despausar
                      onTouchStart={(e) => handleVideoInteraction(e.target, e)} // Toque para pausar/despausar no mobile
                    />
                  )}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        id="footer"
        className="pt-[100px] mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Usinagem;
