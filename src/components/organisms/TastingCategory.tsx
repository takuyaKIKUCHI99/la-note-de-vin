import React, { FC } from 'react';
import { Header, Grid } from 'semantic-ui-react';
import TastingItems, { Attributes } from 'containers/molecules/TastingItems';
import { CategoryItems } from 'data/tastingCateogries';

export type Categories = '外観' | '香り' | '味わい' | '総合評価';
type Props = {
  category: CategoryItems;
  subCategories: string[];
  title: Categories;
  updateCategory: (attributes: Attributes) => void;
};

const TastingCategory: FC<Props> = ({
  category,
  subCategories,
  title,
  updateCategory,
}) => (
  <Grid celled>
    <Grid.Column width={2} verticalAlign="middle" textAlign="center">
      <Header as="h2">{title}</Header>
    </Grid.Column>
    <Grid.Column width={14} style={{ padding: 0 }}>
      {subCategories.map((subCategory) => (
        <Grid
          celled
          key={subCategory}
          style={{ margin: 0, boxShadow: '0px 0px 0px 0.5px #D4D4D5' }}
        >
          <Grid.Column width={2} verticalAlign="middle" textAlign="center">
            <Header as="h3">{subCategory}</Header>
          </Grid.Column>
          <Grid.Column width={14} verticalAlign="middle">
            <TastingItems
              subCategory={subCategory}
              items={category[subCategory]}
              updateCategory={updateCategory}
            />
          </Grid.Column>
        </Grid>
      ))}
    </Grid.Column>
  </Grid>
);

export default TastingCategory;
