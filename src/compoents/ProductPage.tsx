// src/components/ProductPage.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchProducts,
  selectAllProducts,
  selectLoading,
  selectError,
} from '../features/productSlice';
import { AppDispatch } from '../app/store';
import Sidebar from './Sidebar';
import SalesChart from './SalesChart';
import SalesTable from './SalesTable';
import './ProductPage.css';

const ProductPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectAllProducts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Assume the first product is the one we display
  const product = products && products.length > 0 ? products[0] : null;

  if (loading) {
    return <div className="loading">Loading product data...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="product-page">
      <Sidebar product={product} logoUrl="/stackline-logo.svg" />
      <div className="main-content">
        {product && product.sales && (
          <>
            <SalesChart sales={product.sales} />
            <SalesTable sales={product.sales} />
          </>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
