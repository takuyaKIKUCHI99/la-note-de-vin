import React, { FC } from 'react';
import { Form } from 'semantic-ui-react';

type Props = {
  label: string;
};

const Input: FC<Props> = ({ label }) => (
  <Form.Field>
    <label htmlFor={label}>
      {label}
      <input id={label} />
    </label>
  </Form.Field>
);

export default Input;
