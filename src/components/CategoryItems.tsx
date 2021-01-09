import React, { FC } from 'react';
import { Checkbox } from 'semantic-ui-react';

export type CheckboxType = {
  [key: string]: boolean;
};

type Props = {
  items: CheckboxType;
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
