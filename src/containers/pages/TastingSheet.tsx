import React, { FC, ChangeEvent, useState } from 'react';
import { Button, Form, Header } from 'semantic-ui-react';
import TextInput from 'components/molecules/TextInput';
import TastingCategory, {
  Categories,
  CategoryItems,
} from 'containers/organisms/TastingCategory';
import { APPEARANCE, NOSE } from 'constants/index';

type Props = {
  type: 'red' | 'white';
};

const TastingSheet: FC<Props> = ({ type }) => {
  const [wineName, setWineName] = useState('');
  const [vintage, setVintage] = useState('');
  const [appearance, setAppearance] = useState<CategoryItems>(APPEARANCE);
  const [nose, setNose] = useState<CategoryItems>(NOSE);
  // const [palate, setPalate] = useState<CategoryItems>(PALATE);
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
        <Button type="submit">保存</Button>
      </Form>
    </>
  );
};

export default TastingSheet;
