import React from 'react';
import { Container } from '../components/ui/Container';
import { SEOHead } from '../components/seo/SEOHead';
import { siteConfig } from '../data/posts';

export const PrivacyPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Política de Privacidade" 
        description={`Política de Privacidade do ${siteConfig.name}`} 
      />
      
      <Container className="py-16">
        <div className="max-w-3xl mx-auto prose prose-blue prose-lg">
          <h1>Política de Privacidade</h1>
          <p className="lead">
            A sua privacidade é importante para nós. É política do {siteConfig.name} respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site {siteConfig.name}, e outros sites que possuímos e operamos.
          </p>

          <h2>1. Informações que coletamos</h2>
          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
          </p>
          <p>
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
          </p>

          <h2>2. Compartilhamento de dados</h2>
          <p>
            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
          </p>

          <h2>3. Cookies</h2>
          <p>
            O nosso site usa cookies para melhorar a experiência do usuário. Ao continuar navegando, você concorda com o uso de cookies.
          </p>

          <h2>4. Links para sites externos</h2>
          <p>
            O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
          </p>

          <h2>5. Compromisso do Usuário</h2>
          <p>
            O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o {siteConfig.name} oferece no site e com caráter enunciativo, mas não limitativo:
          </p>
          <ul>
            <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
            <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
            <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do {siteConfig.name}, de seus fornecedores ou terceiros.</li>
          </ul>

          <h2>6. Mais informações</h2>
          <p>
            Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
          </p>
          <p>
            Esta política é efetiva a partir de <strong>Janeiro de 2024</strong>.
          </p>
        </div>
      </Container>
    </>
  );
};