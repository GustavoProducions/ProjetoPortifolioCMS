import { useEffect } from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Navbar from '../components/navbar';
import usinagem from '../../images/pega-usinagem.avif';
import usinagem2 from '../../images/page-usinagem2.jpg';
import video1 from '../../images/usinagem_video.mp4';

const Usinagem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
          <Card className="border-none w-full md:w-2/5 order-1 md:order-1">
            <CardContent>
              <div>
                <span className="text-[25px]">Vídeos nossos de usinagem!</span>
                <div>
                  <br />
                  <span>nosso videos mostrando nosso trabalho</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="w-full md:w-2/5 mt-10 md:mt-0 order-1 md:order-2">
            <video
              src={video1}
              autoPlay
              loop
              muted
              className="w-full h-[500px]"
            ></video>
          </div>
        </div>
      </motion.div>
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
