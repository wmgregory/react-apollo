import React from 'react';

import './App.css';

import { Header } from './components';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header title='React Apollo demo' />
    </div>
  );
};

export default App;
