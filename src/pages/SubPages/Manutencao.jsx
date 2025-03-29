import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Navbar from '../components/navbar';
import maquina1 from '../../images/maquinapage.jpg';
import maquina2 from '../../images/maquinapage2.jpg';
import { useEffect } from 'react';

const Manutencoes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <motion.div
        id="manutencao"
        className="pt-[200px] sm:pt-[180px] md:pt-[160px] mt-10 flex flex-col gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
          <div className="w-full md:w-2/5 mt-10 md:mt-0">
            <img src={maquina2} alt="Usinagem" className="w-full h-auto" />
          </div>
          <Card className="border-none w-full md:w-2/5">
            <CardContent>
              <CardTitle className="text-gray-600 text-center mb-20 text-[33px]">
                Manutenção
                <hr className="w-1/3 border-t-4 border-blue-500 mt-2 mx-auto" />
              </CardTitle>
              <div>
                <span className="text-[25px]">
                  Manutenção Especializada em Máquinas Gráficas
                </span>
                <div>
                  <br />
                  <span className="text-lg text-[D3D3D3]">
                    Garantimos a máxima eficiência e durabilidade para suas
                    máquinas de acabamento gráfico. Nossa equipe especializada
                    realiza manutenção corretiva e preventiva em equipamentos
                    essenciais para o setor, como coleiros, dobradeiras,
                    trilaterais e outros dispositivos de encadernação e
                    finalização. Trabalhamos com precisão para reduzir paradas
                    inesperadas e otimizar a produtividade do seu negócio.
                    Confie na Cezar Mendes para manter suas máquinas operando
                    com alto desempenho e qualidade!n
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Card className="border-none w-full md:w-2/5">
            <CardContent>
              <div>
                <span className="text-[25px]">
                  Saiba mais sobre nossos serviços de Manutenção
                </span>
                <div>
                  <br />
                  <span className="text-lg text-[D3D3D3]">
                    Na Cezar Mendes, oferecemos soluções eficientes em
                    manutenção, garantindo o perfeito funcionamento de
                    equipamentos e estruturas. Nossa equipe altamente
                    qualificada trabalha com seriedade e compromisso,
                    proporcionando serviços de excelência e resultados
                    confiáveis para nossos clientes.
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="w-full md:w-2/5 mt-10 md:mt-0">
            <img src={maquina1} alt="Usinagem" className="w-full h-auto" />
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

export default Manutencoes;
