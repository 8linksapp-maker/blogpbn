import React from 'react';
import { Container } from '../components/ui/Container';
import { SEOHead } from '../components/seo/SEOHead';
import { siteConfig } from '../data/posts';
import { Award, BookOpen, GraduationCap } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEOHead title="Sobre Dr. João" description="Conheça a trajetória do Dr. João, cardiologista." />
      
      <Container className="py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://picsum.photos/seed/doctor_full/600/800" 
              alt="Dr. João Cardiologista" 
              className="rounded-2xl shadow-xl w-full object-cover h-[500px] lg:h-[600px]"
            />
          </div>
          
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Olá, eu sou o Dr. João</h1>
            <h2 className="text-xl text-primary-600 font-medium mb-6">Cardiologista • CRM/SP 12345</h2>
            
            <div className="prose text-gray-600 mb-8">
              <p>
                Minha missão é democratizar o acesso à informação sobre saúde cardiovascular. 
                Acredito que a prevenção é a chave para uma vida longa e plena.
              </p>
              <p>
                Com mais de 15 anos de prática clínica em grandes hospitais de São Paulo, 
                decidi criar este espaço para compartilhar conhecimento de forma acessível, 
                desmistificando termos médicos e aproximando você dos cuidados que seu coração merece.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex">
                <div className="bg-blue-100 p-3 rounded-lg h-fit text-blue-600 mr-4">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Formação Acadêmica</h3>
                  <p className="text-sm text-gray-600">Graduado em Medicina pela USP e Especialização em Cardiologia pelo InCor.</p>
                </div>
              </div>

              <div className="flex">
                <div className="bg-blue-100 p-3 rounded-lg h-fit text-blue-600 mr-4">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Certificações</h3>
                  <p className="text-sm text-gray-600">Membro Titular da Sociedade Brasileira de Cardiologia.</p>
                </div>
              </div>

              <div className="flex">
                <div className="bg-blue-100 p-3 rounded-lg h-fit text-blue-600 mr-4">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Pesquisa</h3>
                  <p className="text-sm text-gray-600">Autor de diversos artigos sobre prevenção de infarto e hipertensão.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};