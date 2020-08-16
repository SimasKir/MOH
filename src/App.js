import React from 'react';
import './App.scss';

import Home from '../src/components/pages/Home/Home';
import About from '../src/components/pages/About/About';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
    </div>
  );
}

export default App;
