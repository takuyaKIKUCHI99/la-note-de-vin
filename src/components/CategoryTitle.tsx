import React, { FC } from 'react';
import { Header } from 'semantic-ui-react';

type Props = {
  title: string;
};

const CategoryTitle: FC<Props> = ({ title }) => (
  <Header as="h2">{title}</Header>
);

export default CategoryTitle;
