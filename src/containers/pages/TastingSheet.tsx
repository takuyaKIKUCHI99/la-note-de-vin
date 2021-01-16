import React, { FC, ChangeEvent, useState } from 'react';
import { Categories } from 'components/organisms/TastingCategory';
import TastingSheet from 'components/pages/TastingSheet';
import {
  appearanceDefault,
  conclusionDefault,
  nodeDefault,
  palateDefault,
  CategoryItems,
} from 'data/tastingCateogries';

type Props = {
  type: 'red' | 'white';
};

const EnhancedTastingSheet: FC<Props> = ({ type }) => {
  const [wineName, setWineName] = useState('');
  const [vintage, setVintage] = useState('');
  const [appearance, setAppearance] = useState<CategoryItems>(
    appearanceDefault,
  );
  const [nose, setNose] = useState<CategoryItems>(nodeDefault);
  const [palate, setPalate] = useState<CategoryItems>(palateDefault);
  const [conclusion, setConclusion] = useState<CategoryItems>(
    conclusionDefault,
  );

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
    if (title === '総合評価') setConclusion(attributes);
  };

  return (
    <TastingSheet
      appearance={appearance}
      conclusion={conclusion}
      nose={nose}
      palate={palate}
      type={type}
      vintage={vintage}
      wineName={wineName}
      handleCategoryChange={handleCategoryChange}
      handleInputChange={handleInputChange}
    />
  );
};

export default EnhancedTastingSheet;
