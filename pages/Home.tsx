import React from 'react';
import { ArrowRight, Activity, Heart, ShieldCheck } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { PostList } from '../components/blog/PostList';
import { SEOHead } from '../components/seo/SEOHead';
import { WebsiteSchema, LocalBusinessSchema } from '../components/seo/SchemaOrg';
import { posts, siteConfig } from '../data/posts';

export const Home: React.FC = () => {
  return (
    <>
      <SEOHead title="Início" />
      <WebsiteSchema 
        name={siteConfig.name}
        url={siteConfig.url}
        description={siteConfig.description}
      />
      <LocalBusinessSchema 
        name={`Consultório ${siteConfig.author.name}`}
        image={`${siteConfig.url}/logo.png`}
        telephone="(11) 99999-9999"
        address={{
          streetAddress: "Av. Paulista, 1000 - Conj 50",
          addressLocality: "São Paulo",
          addressRegion: "SP",
          postalCode: "01310-100",
          addressCountry: "BR"
        }}
        geo={{
          latitude: -23.564,
          longitude: -46.654
        }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-800/50 border border-blue-400/30 text-blue-100 text-sm font-medium mb-6">
              Cardiologia Integrada & Humanizada
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Cuide do seu coração com quem entende do assunto
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
              Informação de qualidade, prevenção e tratamentos modernos para garantir que seu coração bata forte por muito mais tempo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Ler Artigos
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" to="/contato">
                Agendar Consulta
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Features / Services Preview */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Check-up Cardiológico</h3>
              <p className="text-gray-600">Avaliação completa para detectar precocemente qualquer alteração na saúde do seu coração.</p>
            </div>
            <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                <Activity size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Controle de Hipertensão</h3>
              <p className="text-gray-600">Acompanhamento contínuo e personalizado para manter sua pressão arterial sob controle.</p>
            </div>
            <div className="p-6 rounded-2xl bg-purple-50 border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Medicina Preventiva</h3>
              <p className="text-gray-600">Orientações sobre estilo de vida, nutrição e exercícios para prevenir doenças cardiovasculares.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Últimas do Blog</h2>
              <p className="text-gray-600 max-w-xl">
                Artigos baseados em evidências científicas para ajudar você a tomar melhores decisões sobre sua saúde.
              </p>
            </div>
            <Button variant="ghost" className="hidden md:inline-flex" to="/artigos">
              Ver todos <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>

          <div className="space-y-12">
            {/* Recent Posts Grid */}
            <PostList posts={posts} />
            
            <div className="md:hidden text-center mt-8">
              <Button variant="outline" className="w-full" to="/artigos">
                Ver todos os artigos
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <Container>
          <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-center text-white overflow-hidden relative">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Receba dicas de saúde no seu e-mail</h2>
              <p className="text-blue-100 mb-8">
                Junte-se a mais de 5.000 pessoas que recebem semanalmente conteúdos exclusivos do Dr. João.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button variant="secondary" className="whitespace-nowrap">
                  Inscrever-se
                </Button>
              </form>
              <p className="text-xs text-blue-200 mt-4">
                Respeitamos sua privacidade. Cancele a inscrição a qualquer momento.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};