import React from 'react';
import './App.css';
import Circle from "./components/Circle/Circle";
import InputColor from "./components/InputColor/InputColor";
import InputHeight from "./components/InputHeight/InputHeight";
import s from './components/Circle/Circle.module.css'


let state = {
    color: 'blue',
    height: '455px'

}

const circle = document.querySelector('.circle');

const changeColor = () => {
    const inputColor = document.querySelector('input[placeholder ="color"]');
    circle.style.backgroundColor = inputColor.value;
};

const changeHeight = () => {
    const inputHeight = document.querySelector('input[placeholder ="height"]');

    inputHeight.value === '' ?
        circle.style.height = 100 + 'px' :
        circle.style.height = inputHeight.value + 'px';
        circle.style.width = circle.style.height;
};

function App(props) {
  return (
    <div id='app' className="App">
      <Circle className={s.circle} backgroundColor={props.state._circle.backgroundColor}/>

      <hr/>

      <InputColor />
      <InputHeight />

    </div>
  );
}

export default App;
