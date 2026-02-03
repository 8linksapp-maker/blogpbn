export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter?: string;
    github?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Blog pbn final",
  description: "Blog pbn final",
  url: "https://blogpbnfinal.vercel.app",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "",
  },
};

export const posts: Post[] = [
  {
    id: "1",
    title: "5 Sinais Silenciosos de Problemas Cardíacos",
    slug: "5-sinais-silenciosos-problemas-cardiacos",
    excerpt: "Muitas vezes o coração dá sinais sutis antes de um evento maior. Aprenda a identificá-los.",
    content: `
      <p>As doenças cardiovasculares continuam sendo a principal causa de morte no mundo. O mais alarmante é que, em muitos casos, o coração dá sinais que são ignorados ou confundidos com outras condições menos graves.</p>
      
      <h2>1. Fadiga Extrema</h2>
      <p>Sentir-se cansado após um dia longo é normal. Porém, uma fadiga inexplicável, que não melhora com o repouso, pode indicar que seu coração está trabalhando mais do que deveria para bombear sangue.</p>

      <h2>2. Inchaço nas Pernas e Pés</h2>
      <p>Quando o coração não bombeia sangue eficientemente, o fluido pode se acumular nas extremidades inferiores, causando edema.</p>

      <h2>3. Falta de Ar ao Deitar</h2>
      <p>Se você precisa de mais travesseiros para respirar confortavelmente à noite, isso pode ser um sinal de acúmulo de fluido nos pulmões devido à insuficiência cardíaca.</p>

      <p>Fique atento a estes sinais e procure um cardiologista regularmente.</p>
    `,
    coverImage: "https://picsum.photos/seed/heart1/800/400",
    category: "Dicas",
    date: "2023-10-15",
    readTime: "5 min",
    author: {
      name: "Admin",
      role: "Editor",
      avatar: "/placeholder.svg",
    },
  },
  {
    id: "2",
    title: "A Importância da Atividade Física para Hipertensos",
    slug: "importancia-atividade-fisica-hipertensos",
    excerpt: "Exercícios físicos regulares são fundamentais para o controle da pressão arterial. Veja como começar.",
    content: `
      <p>A hipertensão arterial é um fator de risco majoritário para AVCs e infartos. A boa notícia é que o exercício físico atua como um remédio natural.</p>
      
      <h2>Benefícios Comprovados</h2>
      <ul>
        <li>Fortalecimento do músculo cardíaco</li>
        <li>Melhora da circulação sanguínea</li>
        <li>Redução do estresse</li>
        <li>Controle de peso</li>
      </ul>

      <h2>Por onde começar?</h2>
      <p>Caminhadas leves de 30 minutos, 3 a 5 vezes por semana, já mostram resultados significativos na redução da pressão arterial sistólica.</p>
    `,
    coverImage: "https://picsum.photos/seed/run/800/400",
    category: "Notícias",
    date: "2023-10-20",
    readTime: "5 min",
    author: {
      name: "Admin",
      role: "Editor",
      avatar: "/placeholder.svg",
    },
  },
  {
    id: "3",
    title: "Colesterol: O Bom, o Ruim e a Dieta",
    slug: "colesterol-bom-ruim-dieta",
    excerpt: "Entenda a diferença entre HDL e LDL e como sua alimentação impacta esses números.",
    content: `
      <p>O colesterol não é um vilão absoluto; ele é essencial para a produção de hormônios. O problema reside no desequilíbrio.</p>
      
      <h3>LDL (Low Density Lipoprotein)</h3>
      <p>Conhecido como "colesterol ruim", pode se depositar nas artérias e formar placas.</p>

      <h3>HDL (High Density Lipoprotein)</h3>
      <p>O "colesterol bom", que ajuda a remover o excesso de colesterol do sangue.</p>

      <p>Inclua aveia, azeite de oliva extra virgem, abacate e peixes ricos em ômega-3 na sua dieta para equilibrar esses níveis.</p>
    `,
    coverImage: "https://picsum.photos/seed/food/800/400",
    category: "Dicas",
    date: "2023-11-01",
    readTime: "5 min",
    author: {
      name: "Admin",
      role: "Editor",
      avatar: "/placeholder.svg",
    },
  },
  {
    id: "4",
    title: "Exames de Rotina: Quando Fazer?",
    slug: "exames-rotina-quando-fazer",
    excerpt: "Um guia completo sobre a periodicidade dos check-ups cardiológicos por faixa etária.",
    content: `
      <p>A prevenção é o melhor remédio. Consultas regulares podem detectar problemas antes que se tornem graves.</p>
      <p>Para adultos saudáveis acima de 30 anos, recomenda-se um check-up anual incluindo eletrocardiograma e exames de sangue.</p>
    `,
    coverImage: "https://picsum.photos/seed/exam/800/400",
    category: "Notícias",
    date: "2023-11-10",
    readTime: "5 min",
    author: {
      name: "Admin",
      role: "Editor",
      avatar: "/placeholder.svg",
    },
  }
];
