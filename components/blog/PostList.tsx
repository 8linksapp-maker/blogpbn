import React from 'react';
import { Post } from '../../types';
import { PostCard } from './PostCard';

interface PostListProps {
  posts: Post[];
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Nenhum artigo encontrado.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <PostCard 
          key={post.id} 
          slug={post.slug}
          title={post.title}
          excerpt={post.excerpt}
          category={post.category}
          date={new Date(post.date).toLocaleDateString('pt-BR')}
          image={post.coverImage}
        />
      ))}
    </div>
  );
};