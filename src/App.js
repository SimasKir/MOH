import React from 'react';
import './App.scss';
import TextBox from './components/atoms/home/text/textBox';

function App() {
  return (
    <div className="App">
      <TextBox text="yolo" textStyle='Parisienne' textSize='60px'/>
      < TextBox text = 'jim' textStyle='Roboto' textSize='20px'/ >
    </div>
  );
}

export default App;
