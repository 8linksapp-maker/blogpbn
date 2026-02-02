import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { PostPage } from './pages/Post';
import { CategoryPage } from './pages/Category';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';
import { PrivacyPage } from './pages/Privacy';
import { TermsPage } from './pages/Terms';
import { PostList } from './components/blog/PostList';
import { posts } from './data/posts';
import { Container } from './components/ui/Container';
import { SEOHead } from './components/seo/SEOHead';

// Wrapper for all articles page
const ArticlesPage: React.FC = () => (
  <>
    <SEOHead title="Todos os Artigos" />
    <Container className="py-16">
       <h1 className="text-4xl font-bold mb-8 text-gray-900">Todos os Artigos</h1>
       <PostList posts={posts} />
    </Container>
  </>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="artigos" element={<ArticlesPage />} />
          <Route path="post/:slug" element={<PostPage />} />
          <Route path="categoria/:category" element={<CategoryPage />} />
          <Route path="sobre" element={<AboutPage />} />
          <Route path="contato" element={<ContactPage />} />
          <Route path="politica-privacidade" element={<PrivacyPage />} />
          <Route path="termos-de-uso" element={<TermsPage />} />
          {/* Fallback routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;