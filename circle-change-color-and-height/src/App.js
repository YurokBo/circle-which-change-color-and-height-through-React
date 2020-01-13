import React from 'react';
import './App.css';
import Circle from "./components/Circle/Circle";
import InputColor from "./components/InputColor/InputColor";
import InputHeight from "./components/InputHeight/InputHeight";


function App() {
  return (
    <div className="App">
      <Circle />

      <hr/>

      <InputColor />
      <InputHeight />

    </div>
  );
}

export default App;
