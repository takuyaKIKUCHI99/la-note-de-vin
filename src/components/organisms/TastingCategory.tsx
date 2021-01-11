import React, { FC } from 'react';
import CategoryTitle from 'components/atoms/CategoryTitle';
import CategoryItems, {
  Items,
  Attributes,
} from 'components/molecules/CategoryItems';

export type Categories = '外観' | '香り' | '味わい' | '総合評価';
export type CategoryItems = {
  [key: string]: Items;
};
type Props = {
  title: Categories;
  category: CategoryItems;
  handleCategoryChange: (attributes: CategoryItems, title: Categories) => void;
};

const TastingCategory: FC<Props> = ({
  title,
  category,
  handleCategoryChange,
}) => {
  const subCategories = Object.keys(category);

  const updateCategory = (attributes: Attributes) => {
    const { subCategory, items } = attributes;
    const updatedCategory = { ...category, [subCategory]: { ...items } };
    handleCategoryChange(updatedCategory, title);
  };

  return (
    <div>
      <CategoryTitle title={title} as="h2" />
      {subCategories.map((subCategory) => (
        <div key={subCategory}>
          <CategoryTitle title={subCategory} as="h3" />
          <CategoryItems
            subCategory={subCategory}
            items={category[subCategory]}
            updateCategory={updateCategory}
          />
        </div>
      ))}
    </div>
  );
};

export default TastingCategory;
