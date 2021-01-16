import React, { FC, ChangeEvent } from 'react';
import { Button, Form, Header } from 'semantic-ui-react';
import TextInput from 'components/molecules/TextInput';
import { Categories } from 'components/organisms/TastingCategory';
import TastingCategory from 'containers/organisms/TastingCategory';
import { CategoryItems } from 'data/tastingCateogries';

type Props = {
  appearance: CategoryItems;
  conclusion: CategoryItems;
  nose: CategoryItems;
  palate: CategoryItems;
  type: 'red' | 'white';
  vintage: string;
  wineName: string;
  handleCategoryChange: (attributes: CategoryItems, title: Categories) => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TastingSheet: FC<Props> = ({
  appearance,
  conclusion,
  nose,
  palate,
  type,
  vintage,
  wineName,
  handleCategoryChange,
  handleInputChange,
}) => (
  <>
    <Header as="h1">
      {type === 'red' ? '赤' : '白'}ワイン・テイスティングシート
    </Header>
    <Form>
      <TextInput
        label="ワイン名"
        value={wineName}
        handleChange={handleInputChange}
      />
      <TextInput
        label="ヴィンテージ"
        value={vintage}
        handleChange={handleInputChange}
      />
      <TastingCategory
        title="外観"
        category={appearance}
        handleCategoryChange={handleCategoryChange}
      />
      <TastingCategory
        title="香り"
        category={nose}
        handleCategoryChange={handleCategoryChange}
      />
      <TastingCategory
        title="味わい"
        category={palate}
        handleCategoryChange={handleCategoryChange}
      />
      <TastingCategory
        title="総合評価"
        category={conclusion}
        handleCategoryChange={handleCategoryChange}
      />
      <Button type="submit">保存</Button>
    </Form>
  </>
);

export default TastingSheet;
