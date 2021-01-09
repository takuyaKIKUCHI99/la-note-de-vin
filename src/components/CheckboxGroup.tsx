import React, { FC } from 'react';
import { Checkbox } from 'semantic-ui-react';

type Checkbox = {
  [key: string]: boolean;
};

type Props = {
  items: Checkbox;
};

const CheckboxGroup: FC<Props> = ({ items }) => {
  const keys = Object.keys(items);

  return (
    <>
      {keys.map((key) => (
        <Checkbox label={key} defaultChecked={items[key]} key={key} />
      ))}
    </>
  );
};

export default CheckboxGroup;
