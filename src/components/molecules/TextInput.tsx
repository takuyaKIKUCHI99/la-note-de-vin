import React, { FC, ChangeEvent } from 'react';
import { Form } from 'semantic-ui-react';

type Props = {
  label: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: FC<Props> = ({ label, value, handleChange }) => (
  <Form.Field>
    <label htmlFor={label}>
      {label}
      <input id={label} value={value} onChange={handleChange} />
    </label>
  </Form.Field>
);

export default TextInput;
