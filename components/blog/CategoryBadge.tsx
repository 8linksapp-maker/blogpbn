import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryBadgeProps {
  category: string;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category }) => {
  return (
    <Link 
      to={`/categoria/${category.toLowerCase()}`}
      className="inline-block px-3 py-1 text-xs font-semibold tracking-wide text-primary-700 bg-primary-50 rounded-full hover:bg-primary-100 transition-colors"
    >
      {category}
    </Link>
  );
};