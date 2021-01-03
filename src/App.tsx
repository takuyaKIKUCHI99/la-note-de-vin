import React from 'react';
import { Button } from 'semantic-ui-react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Button primary>夜空に流れ星</Button>
      <Button secondary>Secondary</Button>
    </div>
  );
};

export default App;
