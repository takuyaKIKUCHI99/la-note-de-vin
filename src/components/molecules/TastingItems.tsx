import React, { FC } from 'react';
import { Checkbox } from 'semantic-ui-react';
import { Items } from 'data/tastingCategories';

type Props = {
  items: Items;
  keys: string[];
  updateSubCategory: (item: string) => void;
};

const TastingItems: FC<Props> = ({ keys, items, updateSubCategory }) => (
  <>
    {keys.map((key) => (
      <Checkbox
        defaultChecked={items[key]}
        key={key}
        label={key}
        style={{ margin: '0 1rem 1rem 0' }}
        onChange={() => updateSubCategory(key)}
      />
    ))}
  </>
);

export default TastingItems;
