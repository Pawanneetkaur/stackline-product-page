// src/components/Sidebar.tsx
import React from 'react';
import { Product } from '../types';
import './Sidebar.css';

interface SidebarProps {
  product: Product | null;
  logoUrl: string;
}

const Sidebar: React.FC<SidebarProps> = ({ product, logoUrl }) => {
  if (!product) {
    return <div className="sidebar">No product available</div>;
  }

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logoUrl} alt="Stackline Logo" className="logo" />
      </div>
      <div className="product-details">
        <img src={product.image} alt={product.title} className="product-image" />
        <h2>{product.title}</h2>
        <p>{product.subtitle}</p>
        <div className="tags">
          {product.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
