import React, { useState } from 'react';
import './App.css';


function App() {

  const createNullArray = (size) => {
    const arr = [];
    for (let i = 0; i < size; i++) {
      arr.push(null);
    }

    return arr;
  }

  const [hover, setHover] = useState('white');
  const [colors, setColors] = useState(createNullArray(256));

  const resetBoard = (size) => setColors(createNullArray(size))

  const changeSize = () => {
    let promptValue;
    do {
       promptValue = prompt("What size of board dou you want? Please choose number between 16 and 100!")
      if (promptValue > 15 && promptValue < 101  ) {
        resetBoard(promptValue * promptValue)
        setHover(null)
      }
    } while(promptValue < 16 || promptValue > 100 || isNaN(promptValue) || promptValue % 1 !== 0);
  }


const divStyle = {
  gridTemplateColumns: `repeat(${Math.sqrt(colors.length)}, 1fr)`,
}


const getRandomColor = () => {
  const c1 =  Math.floor(Math.random() * 256).toString(16);
  const c2 = Math.floor(Math.random() * 256).toString(16);
  const c3 = Math.floor(Math.random() * 256).toString(16);
  return `#${c1}${c2}${c3}`;
}

const colorTile = (index) => {
  setColors(colors.map((e, j) => {
    if (index === j) {
      if (hover === 'random') {
        return getRandomColor();
      } else {
        return hover;
      }
    } else {
      return e;
    }
  }))
};


const createDivs = () => colors.map((col, i) => (
  <div
    key={i}
    onMouseEnter={() => colorTile(i)}
    style={{ background: colors[i] }}
  />
));

  return (
    <div className="App">
      <div className='options'>
        <button onClick={changeSize}>Reset Board</button>
        <button onClick={() => setHover('black')}>Black</button>
        <button onClick={() => setHover('random')}>Random Color</button>
        <button onClick={() => resetBoard(colors.length)}>Clear Board</button>
      </div>
      <div className="bam" style={divStyle}>
      { createDivs()}
      </div>
       
      
    </div>
  );
}

export default App;
