import React, { FC } from 'react';
import { Checkbox } from 'semantic-ui-react';

export type Items = {
  [key: string]: boolean;
};
export type Attributes = {
  subCategory: string;
  items: Items;
};
type Props = {
  subCategory: string;
  items: Items;
  updateCategory: (attributes: Attributes) => void;
};

const CategoryItems: FC<Props> = ({ subCategory, items, updateCategory }) => {
  const keys = Object.keys(items);

  const updateSubCategory = (item: string) => {
    const prev = items[item];
    const updatedItems = { ...items, [item]: !prev };
    updateCategory({ subCategory, items: updatedItems });
  };

  return (
    <>
      {keys.map((key) => (
        <Checkbox
          key={key}
          label={key}
          defaultChecked={items[key]}
          onChange={() => updateSubCategory(key)}
        />
      ))}
    </>
  );
};

export default CategoryItems;
