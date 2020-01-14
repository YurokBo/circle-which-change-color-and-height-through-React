import React from 'react';
import './App.css';
import Circle from "./components/Circle/Circle";
import InputColor from "./components/InputColor/InputColor";
import InputHeight from "./components/InputHeight/InputHeight";
import store from "./Script/Script";


function App() {
  return (
    <div id='app' className="App">
      <Circle store={store.changeColorHeight}/>

      <hr/>

      <InputColor />
      <InputHeight />

    </div>
  );
}

export default App;
