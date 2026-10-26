import React from 'react';
import { Link } from 'react-router-dom';
import { ProductDetails } from '../../../../types';
import { COLORS } from '../../../../utils/colors';
import styles from './ProductOptions.module.scss';

type Props = {
  product: ProductDetails;
};

export const ProductOptions = ({ product }: Props) => {
  const getVariantId = (capacity: string, color: string) =>
    `${product.namespaceId}-${capacity}-${color}`
      .toLowerCase()
      .replace(/ /g, '-');

  return (
    <div>
      <p className={styles.label}>Available colors</p>
      <div className={styles.colors}>
        {product.colorsAvailable.map(color => (
          <Link
            key={color}
            aria-label={color}
            style={{ backgroundColor: COLORS[color] }}
            to={`/product/${getVariantId(product.capacity, color)}`}
            className={
              color === product.color
                ? `${styles.color} ${styles.active}`
                : styles.color
            }
          />
        ))}
      </div>

      <p className={styles.label}>Select capacity</p>
      <div className={styles.capacities}>
        {product.capacityAvailable.map(capacity => (
          <Link
            key={capacity}
            to={`/product/${getVariantId(capacity, product.color)}`}
            className={
              capacity === product.capacity
                ? `${styles.capacity} ${styles.active}`
                : styles.capacity
            }
          >
            {capacity}
          </Link>
        ))}
      </div>
    </div>
  );
};
