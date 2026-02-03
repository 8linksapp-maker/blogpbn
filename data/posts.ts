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
    excerpt: "",
    content: "",
    coverImage: "/placeholder.svg",
    category: "",
    date: "",
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
    excerpt: "",
    content: "",
    coverImage: "/placeholder.svg",
    category: "",
    date: "",
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
    excerpt: "",
    content: "",
    coverImage: "/placeholder.svg",
    category: "",
    date: "",
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
    excerpt: "",
    content: "",
    coverImage: "/placeholder.svg",
    category: "",
    date: "",
    readTime: "5 min",
    author: {
      name: "Admin",
      role: "Editor",
      avatar: "/placeholder.svg",
    },
  },
  {
    id: "post-1770160861777",
    title: "segundo post",
    slug: "segundo-post",
    excerpt: "segundo post",
    content: "segundo post",
    coverImage: "/placeholder.svg",
    category: "Saude",
    date: "2026-02-03",
    readTime: "5 min",
    author: {
      name: "Admin",
      role: "Editor",
      avatar: "/placeholder.svg",
    },
  }
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter(post => post.category === category);
}

export function getCategories(): string[] {
  return [...new Set(posts.map(post => post.category))];
}
