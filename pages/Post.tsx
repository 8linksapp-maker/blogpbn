import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Facebook, Twitter, Linkedin, Share2 } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { CategoryBadge } from '../components/blog/CategoryBadge';
import { SEOHead } from '../components/seo/SEOHead';
import { ArticleSchema } from '../components/seo/SchemaOrg';
import { getPostBySlug, posts, siteConfig } from '../data/posts';
import { Button } from '../components/ui/Button';

export const PostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Artigo não encontrado</h1>
        <p className="text-gray-600 mb-8">O artigo que você procura não existe ou foi removido.</p>
        <Button to="/">Voltar para o início</Button>
      </Container>
    );
  }

  // Simulating related posts (just taking others excluding current)
  const relatedPosts = posts.filter(p => p.id !== post.id).slice(0, 2);
  const postUrl = `${siteConfig.url}/post/${post.slug}`;

  return (
    <>
      <SEOHead 
        title={post.title} 
        description={post.excerpt}
        image={post.coverImage}
        slug={`/post/${post.slug}`}
        type="article"
        publishedTime={post.date}
        author={post.author.name}
        keywords={[post.category, 'Cardiologia', 'Saúde']}
      />
      <ArticleSchema 
        title={post.title}
        description={post.excerpt}
        image={post.coverImage}
        datePublished={post.date}
        authorName={post.author.name}
        url={postUrl}
        publisherName={siteConfig.name}
        publisherLogo={`${siteConfig.url}/logo.png`}
      />
      
      <article className="pb-20">
        {/* Post Header */}
        <div className="bg-gray-50 pt-12 pb-16 border-b border-gray-100">
          <Container className="max-w-4xl">
            <Link to="/artigos" className="inline-flex items-center text-sm text-gray-500 hover:text-primary-600 mb-8 transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Voltar para Artigos
            </Link>
            
            <div className="mb-6">
              <CategoryBadge category={post.category} />
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center text-gray-500 text-sm md:text-base space-x-6 border-t border-gray-200 pt-6 mt-6">
              <div className="flex items-center">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="w-10 h-10 rounded-full mr-3 border-2 border-white shadow-sm" 
                />
                <div>
                  <span className="block font-medium text-gray-900">{post.author.name}</span>
                  <span className="text-xs">{post.author.role}</span>
                </div>
              </div>
              <div className="hidden sm:flex items-center">
                <Calendar size={18} className="mr-2" />
                <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </Container>
        </div>

        {/* Post Content */}
        <Container className="max-w-4xl -mt-8">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg mb-12"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Social Share (Desktop) */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 flex flex-col space-y-4">
                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                  <Facebook size={20} />
                </button>
                <button className="p-2 text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter size={20} />
                </button>
                <button className="p-2 text-gray-400 hover:text-blue-700 transition-colors">
                  <Linkedin size={20} />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-11">
              <div 
                className="prose prose-lg prose-blue max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Author Bio Box */}
              <div className="mt-16 p-8 bg-blue-50 rounded-xl border border-blue-100 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="w-20 h-20 rounded-full mb-4 sm:mb-0 sm:mr-6 border-4 border-white"
                />
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Sobre {post.author.name}</h3>
                  <p className="text-gray-600 mb-4">{post.author.bio}</p>
                  <Button size="sm" variant="outline" to="/sobre">Ver Perfil Completo</Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </article>

      {/* Related Posts */}
      <section className="bg-gray-50 py-16">
        <Container>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Continue Lendo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {relatedPosts.map(p => (
               <div key={p.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <CategoryBadge category={p.category} />
                  <Link to={`/post/${p.slug}`} className="block mt-3">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary-600">{p.title}</h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{p.excerpt}</p>
                  <Link to={`/post/${p.slug}`} className="text-primary-600 font-medium text-sm hover:underline">
                    Ler mais
                  </Link>
               </div>
             ))}
          </div>
        </Container>
      </section>
    </>
  );
};