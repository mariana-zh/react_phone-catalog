import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../../../types';
import { CartContext } from '../../../../context/CartContext';
import { FavoritesContext } from '../../../../context/FavoritesContext';
import styles from './ProductCard.module.scss';

type Props = { product: Product };

export const ProductCard = ({ product }: Props) => {
  const productLink = `/product/${product.itemId}`;

  const { cart, addToCart } = useContext(CartContext);
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const isFavorite = favorites.some(fav => fav.itemId === product.itemId);
  const isInCart = cart.some(item => item.id === product.itemId);

  return (
    <div className={styles.card}>
      <Link to={productLink} className={styles.imageLink}>
        <img src={product.image} alt={product.name} className={styles.image} />
      </Link>
      <Link to={productLink} className={styles.name}>
        {product.name}
      </Link>
      <div className={styles.price}>
        <span className={styles.newPrice}>{`$${product.price}`}</span>
        {product.fullPrice !== product.price && (
          <span className={styles.oldPrice}>{`$${product.fullPrice}`}</span>
        )}
      </div>
      <dl className={styles.specs}>
        <div className={styles.spec}>
          <dt>Screen</dt>
          <dd>{product.screen}</dd>
        </div>
        <div className={styles.spec}>
          <dt>Capacity</dt>
          <dd>{product.capacity}</dd>
        </div>
        <div className={styles.spec}>
          <dt>RAM</dt>
          <dd>{product.ram}</dd>
        </div>
      </dl>

      <div className={styles.buttons}>
        <button
          type="button"
          className={
            isInCart ? `${styles.addButton} ${styles.added}` : styles.addButton
          }
          onClick={() => addToCart(product)}
        >
          {isInCart ? 'Added to cart' : 'Add to cart'}
        </button>
        <button
          type="button"
          className={styles.favButton}
          onClick={() => toggleFavorite(product)}
        >
          <img
            src={isFavorite ? 'icons/filled-heart.svg' : 'icons/heaer.svg'}
            alt="add to fav"
          />
        </button>
      </div>
    </div>
  );
};
