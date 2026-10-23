import React from 'react';
import { Category } from '../../types';
import { CATEGORY_TITLES } from '../../utils/categoryTitles';

type Props = {
  category: Category;
};

export const ProductPage = ({ category }: Props) => (
  <h1>{CATEGORY_TITLES[category]}</h1>
);
