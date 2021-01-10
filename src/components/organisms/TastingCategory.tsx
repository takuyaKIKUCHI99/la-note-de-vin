import React, { FC } from 'react';
import CategoryTitle from 'components/atoms/CategoryTitle';
import CategoryItems, { Items } from 'components/molecules/CategoryItems';

export type Categories = {
  [key: string]: Items;
};

type Props = {
  title: string;
  category: Categories;
};

const TastingCategory: FC<Props> = ({ title, category }) => {
  const subCategories = Object.keys(category);

  return (
    <div>
      <CategoryTitle title={title} as="h2" />
      {subCategories.map((subCategory) => (
        <>
          <CategoryTitle title={subCategory} as="h3" />
          <CategoryItems items={category[subCategory]} />
        </>
      ))}
    </div>
  );
};

export default TastingCategory;
