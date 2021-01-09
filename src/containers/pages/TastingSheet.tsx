import React, { FC } from 'react';
import { Button, Form, Header } from 'semantic-ui-react';
import TextInput from 'components/TextInput';
import TastingCategory from 'components/TastingCategory';

type Props = {
  type: 'red' | 'white';
};

const TastingSheet: FC<Props> = ({ type }) => (
  <>
    <Header as="h1">
      {type === 'red' ? '赤' : '白'}ワイン・テイスティングシート
    </Header>
    <Form>
      <Form.Field>
        <TextInput label="ワイン名" />
      </Form.Field>
      <Form.Field>
        <TextInput label="ヴィンテージ" />
      </Form.Field>
      <TastingCategory title="外観" items={{ test: false, test2: true }} />
      <TastingCategory title="香り" items={{ test: false, test2: true }} />
      <TastingCategory title="味わい" items={{ test: false, test2: true }} />
      <TastingCategory title="総合評価" items={{ test: false, test2: true }} />
      <Button type="submit">保存</Button>
    </Form>
  </>
);

export default TastingSheet;
