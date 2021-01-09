import React, { FC } from 'react';
import CategoryTitle from 'components/CategoryTitle';
import CategoryItems, { CheckboxType } from 'components/CategoryItems';

type Props = {
  title: string;
  items: CheckboxType;
};

const TastingCategory: FC<Props> = ({ title, items }) => (
  <div>
    <CategoryTitle title={title} />
    <CategoryItems items={items} />
  </div>
);

export default TastingCategory;
