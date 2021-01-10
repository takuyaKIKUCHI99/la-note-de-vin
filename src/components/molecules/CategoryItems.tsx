import React, { FC } from 'react';
import { Checkbox } from 'semantic-ui-react';

export type Items = {
  [key: string]: boolean;
};

type Props = {
  items: Items;
};

const CategoryItems: FC<Props> = ({ items }) => {
  const keys = Object.keys(items);

  return (
    <>
      {keys.map((key) => (
        <Checkbox label={key} defaultChecked={items[key]} key={key} />
      ))}
    </>
  );
};

export default CategoryItems;
