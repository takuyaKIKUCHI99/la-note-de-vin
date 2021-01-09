import React, { FC, ChangeEvent, useState } from 'react';
import { Button, Form, Header } from 'semantic-ui-react';
import TextInput from 'components/TextInput';
import TastingCategory from 'components/TastingCategory';
import { APPEARANCE, NOSE, PALATE, CONCLUSION } from 'constants/index';

type Props = {
  type: 'red' | 'white';
};

const TastingSheet: FC<Props> = ({ type }) => {
  const [wineName, setWineName] = useState('');
  const [vintage, setVintage] = useState('');
  const [appearance, setAppearance] = useState(APPEARANCE);
  const [nose, setNose] = useState(NOSE);
  const [palate, setPalate] = useState(PALATE);
  const [conclusion, setConclusion] = useState(CONCLUSION);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const { id } = e.target;
    switch (id) {
      case 'ワイン名':
        setWineName(value);
        break;
      case 'ヴィンテージ':
        setVintage(value);
        break;
      case '外観':
        setAppearance({ test: false, test2: true });
        break;
      case '香り':
        setNose({ test: false, test2: true });
        break;
      case '味わい':
        setPalate({ test: false, test2: true });
        break;
      case '総合評価':
        setConclusion({ test: false, test2: true });
        break;
      default:
        console.log('something went wrong');
    }
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
          handleChange={handleChange}
        />
        <TextInput
          label="ヴィンテージ"
          value={vintage}
          handleChange={handleChange}
        />
        <TastingCategory title="外観" items={appearance} />
        <TastingCategory title="香り" items={nose} />
        <TastingCategory title="味わい" items={palate} />
        <TastingCategory title="総合評価" items={conclusion} />
        <Button type="submit">保存</Button>
      </Form>
    </>
  );
};

export default TastingSheet;
