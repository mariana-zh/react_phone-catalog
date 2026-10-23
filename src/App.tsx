import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Header } from './modules/shared/components/Header';
import { Footer } from './modules/shared/components/Footer';
import { HomePage } from './modules/HomePage';
import { ProductPage } from './modules/ProductPage';
import { ProductDetailsPage } from './modules/ProductDetailsPage';
import { ShoppingCartPage } from './modules/ShoppingCartPage';
import { FavoritesPage } from './modules/FavoritesPage';
import { NotFoundPage } from './modules/NotFoundPage';
import { Product } from './types';
import { loadProducts } from './api/products';
import { ProductsSlider } from './modules/shared/components/ProductsSlider';

export const App = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    loadProducts().then(setProduct);
  }, []);

  return (
    <div className="App">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/phones" element={<ProductPage category="phones" />} />
          <Route path="/tablets" element={<ProductPage category="tablets" />} />
          <Route
            path="/accessories"
            element={<ProductPage category="accessories" />}
          />
          <Route path="/product/:productId" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {product.length > 0 && (
          <ProductsSlider title="new Brand" products={product.slice(0, 10)} />
        )}
      </main>

      <Footer />
    </div>
  );
};
