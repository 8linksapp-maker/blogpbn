import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { PostList } from '../components/blog/PostList';
import { SEOHead } from '../components/seo/SEOHead';
import { posts } from '../data/posts';

export const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  
  const categoryName = category 
    ? category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ') 
    : 'Todos os Artigos';

  const filteredPosts = category
    ? posts.filter(p => p.category.toLowerCase() === categoryName.toLowerCase() || p.category.toLowerCase().replace(/\s+/g, '-') === category)
    : posts;
  
  // Fallback broad filter if exact match fails (simple example logic)
  const displayPosts = filteredPosts.length > 0 ? filteredPosts : posts.filter(p => 
    p.category.toLowerCase().includes(category?.replace(/-/g, ' ') || '')
  );

  return (
    <>
      <SEOHead title={`Categoria: ${categoryName}`} description={`Artigos sobre ${categoryName}`} />
      
      <div className="bg-gray-50 py-12 border-b border-gray-200">
        <Container>
          <span className="text-primary-600 font-medium tracking-wide text-sm uppercase mb-2 block">Categoria</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{categoryName}</h1>
        </Container>
      </div>

      <Container className="py-16">
        <PostList posts={displayPosts} />
      </Container>
    </>
  );
};