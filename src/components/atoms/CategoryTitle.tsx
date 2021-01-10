import React, { FC } from 'react';
import { Header } from 'semantic-ui-react';

type Props = {
  title: string;
  as: string;
};

const CategoryTitle: FC<Props> = ({ title, as }) => (
  <Header as={as}>{title}</Header>
);

export default CategoryTitle;
