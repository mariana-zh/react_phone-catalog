import React from 'react';
import { Category } from '../../types';

const TITLES: Record<Category, string> = {
  phones: 'Phones',
  tablets: 'Tablets',
  accessories: 'Accessories',
};

type Props = {
  category: Category;
};

export const ProductPage = ({ category }: Props) => <h1>{TITLES[category]}</h1>;
