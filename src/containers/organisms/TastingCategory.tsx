import React, { FC } from 'react';
import { Header } from 'semantic-ui-react';
import CategoryItems, {
  Items,
  Attributes,
} from 'containers/molecules/CategoryItems';

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
    <div style={{ marginBottom: '2rem' }}>
      <Header as="h2">{title}</Header>
      {subCategories.map((subCategory) => (
        <div key={subCategory}>
          <Header as="h2">{subCategory}</Header>
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
