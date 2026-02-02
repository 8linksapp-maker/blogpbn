export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // Markdown or HTML string
  coverImage: string;
  category: string;
  author: Author;
  date: string;
  readTime: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  author: Author;
  social: {
    instagram: string;
    linkedin: string;
    email: string;
  };
}