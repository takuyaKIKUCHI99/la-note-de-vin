import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const TastingSheet: React.FC = () => (
  <Form>
    <Form.Field>
      <label htmlFor="wineName">
        First Name
        <input id="wineName" placeholder="First Name" />
      </label>
    </Form.Field>
    <Form.Field>
      <label htmlFor="vintage">
        Last Name
        <input id="vintage" placeholder="Last Name" />
      </label>
    </Form.Field>
    {/* Appearance component */}
    {/* Nose component */}
    {/* Palate component */}
    {/* /Conclusion component */}
    <Button type="submit">Submit</Button>
  </Form>
);

export default TastingSheet;
