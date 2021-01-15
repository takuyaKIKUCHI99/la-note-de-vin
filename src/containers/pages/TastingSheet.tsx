import React, { FC, ChangeEvent, useState } from 'react';
import { Button, Form, Header } from 'semantic-ui-react';
import TextInput from 'components/molecules/TextInput';
import TastingCategory from 'containers/organisms/TastingCategory';
import {
  appearanceDefault,
  nodeDefault,
  palateDefault,
  Categories,
  CategoryItems,
} from 'data/tastingCateogries';

type Props = {
  type: 'red' | 'white';
};

const TastingSheet: FC<Props> = ({ type }) => {
  const [wineName, setWineName] = useState('');
  const [vintage, setVintage] = useState('');
  const [appearance, setAppearance] = useState<CategoryItems>(
    appearanceDefault,
  );
  const [nose, setNose] = useState<CategoryItems>(nodeDefault);
  const [palate, setPalate] = useState<CategoryItems>(palateDefault);
  // const [conclusion, setConclusion] = useState<CategoryItems>(CONCLUSION);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const { id } = e.target;
    if (id === 'ワイン名') setWineName(value);
    if (id === 'ヴィンテージ') setVintage(value);
  };

  const handleCategoryChange = (
    attributes: CategoryItems,
    title: Categories,
  ) => {
    if (title === '外観') setAppearance(attributes);
    if (title === '香り') setNose(attributes);
    if (title === '味わい') setPalate(attributes);
  };

  return (
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
        <Button type="submit">保存</Button>
      </Form>
    </>
  );
};

export default TastingSheet;
