import React from 'react';
import { Link } from 'react-router-dom';

interface PostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image?: string;
  key?: string | number;
}

export function PostCard({ slug, title, excerpt, category, date, image }: PostCardProps) {
  return (
    <Link to={`/post/${slug}`} className="group h-full block">
      <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden h-full flex flex-col">
        {image && (
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-5 flex flex-col flex-grow">
          <div className="mb-3">
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
              {category}
            </span>
          </div>
          <h2 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors mb-2">
            {title}
          </h2>
          <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-grow">{excerpt}</p>
          <time className="block text-xs text-gray-400 mt-auto">{date}</time>
        </div>
      </article>
    </Link>
  );
}