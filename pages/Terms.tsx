import React from 'react';
import { Container } from '../components/ui/Container';
import { SEOHead } from '../components/seo/SEOHead';
import { siteConfig } from '../data/posts';

export const TermsPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Termos de Uso" 
        description={`Termos de Uso do ${siteConfig.name}`} 
      />
      
      <Container className="py-16">
        <div className="max-w-3xl mx-auto prose prose-blue prose-lg">
          <h1>Termos de Uso</h1>
          
          <h2>1. Termos</h2>
          <p>
            Ao acessar ao site <a href={siteConfig.url}>{siteConfig.name}</a>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
          </p>

          <h2>2. Uso de Licença</h2>
          <p>
            É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site {siteConfig.name} , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
          </p>
          <ul>
            <li>modificar ou copiar os materiais;</li>
            <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
            <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site {siteConfig.name};</li>
            <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
            <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
          </ul>
          <p>
            Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por {siteConfig.name} a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.
          </p>

          <h2>3. Isenção de responsabilidade</h2>
          <p>
            Os materiais no site da {siteConfig.name} são fornecidos 'como estão'. {siteConfig.name} não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
          </p>
          <p>
            Além disso, o {siteConfig.name} não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
          </p>
          <p><strong>Atenção:</strong> O conteúdo deste site tem caráter meramente informativo e educacional e não substitui, em hipótese alguma, a orientação de um profissional médico qualificado. Sempre consulte seu médico.</p>

          <h2>4. Limitações</h2>
          <p>
            Em nenhum caso o {siteConfig.name} ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em {siteConfig.name}, mesmo que {siteConfig.name} ou um representante autorizado da {siteConfig.name} tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.
          </p>

          <h2>5. Precisão dos materiais</h2>
          <p>
            Os materiais exibidos no site da {siteConfig.name} podem incluir erros técnicos, tipográficos ou fotográficos. {siteConfig.name} não garante que qualquer material em seu site seja preciso, completo ou atual. {siteConfig.name} pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, {siteConfig.name} não se compromete a atualizar os materiais.
          </p>

          <h2>6. Links</h2>
          <p>
            O {siteConfig.name} não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por {siteConfig.name} do site. O uso de qualquer site vinculado é por conta e risco do usuário.
          </p>

          <h2>Modificações</h2>
          <p>
            O {siteConfig.name} pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
          </p>

          <h2>Lei aplicável</h2>
          <p>
            Estes termos e condições são regidos e interpretados de acordo com as leis do {siteConfig.name} e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
          </p>
        </div>
      </Container>
    </>
  );
};