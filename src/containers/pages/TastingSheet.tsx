import React, { FC } from 'react';
import { Button, Form } from 'semantic-ui-react';
import CheckboxGroup from 'components/CheckboxGroup';
import Input from 'components/Input';

const TastingSheet: FC = () => (
  <Form>
    <Form.Field>
      <Input label="Wine Name" />
    </Form.Field>
    <Form.Field>
      <Input label="Vintage" />
    </Form.Field>
    {/* Appearance component */}
    <CheckboxGroup items={{ test: false, test2: true }} />
    {/* Nose component */}
    {/* Palate component */}
    {/* /Conclusion component */}
    <Button type="submit">Submit</Button>
  </Form>
);

export default TastingSheet;
