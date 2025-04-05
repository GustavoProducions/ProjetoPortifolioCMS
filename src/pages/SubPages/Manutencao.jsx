import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Navbar from '../components/navbar';
import maquina1 from '../../images/9.jpeg';
import maquina2 from '../../images/8.jpeg';
import maquina3 from '../../images/2.jpeg';
import { useEffect } from 'react';

const Manutencoes = () => {
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
                    com alto desempenho e qualidade!
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="w-full md:w-2/5 mt-10 md:mt-0">
            <img src={maquina2} alt="Usinagem" className="w-full h-auto" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
          <Card className="border-none w-full md:w-2/5 order-1 md:order-2">
            <CardContent>
              <div>
                <span className="text-[25px]">
                  Manutenção industrial com precisão e confiabilidade.
                </span>
                <div>
                  <br />
                  <span className="text-lg text-[D3D3D3]">
                    Na Cezar Mendes, realizamos serviços de manutenção corretiva
                    e preditiva para garantir a operação contínua e eficiente
                    dos seus equipamentos. Nossa equipe técnica utiliza
                    metodologias avançadas para identificar falhas precocemente,
                    reduzindo custos com reparos inesperados e aumentando a vida
                    útil dos seus ativos.
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="w-full md:w-2/5 mt-10 md:mt-0 order-1 md:order-1">
            <img src={maquina1} alt="Usinagem" className="w-full h-auto" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
          <Card className="border-none w-full md:w-2/5 order-1 md:order-1">
            <CardContent>
              <div>
                <span className="text-[25px]">
                  Maximize a eficiência e reduza o tempo de inatividade.
                </span>
                <div>
                  <br />
                  <span>
                    Manter seus equipamentos em perfeito estado é essencial para
                    o sucesso do seu negócio. Na Cezar Mendes, aplicamos
                    estratégias eficazes de manutenção para evitar falhas,
                    corrigir problemas rapidamente e otimizar a produtividade.
                    Com uma equipe altamente qualificada, garantimos soluções
                    ágeis e confiáveis para que sua operação nunca pare.
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="w-full md:w-2/5 mt-10 md:mt-0 order-1 md:order-2">
            <img src={maquina3} alt="Usinagem" className="w-full h-auto" />
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
