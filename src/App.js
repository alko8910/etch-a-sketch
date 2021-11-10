import React, { useState, useEffect } from 'react';
import './App.css';


function App() {

  const [size, setSize] = useState(16);
  //const [hoverToBlack, setHoverToBlack] = useState();

  const changeSize = () => {
    let promptValue = prompt("What size of board dou you want?")
    if(promptValue > 15 & promptValue < 101 || !promptValue){
    setSize(promptValue)
    setHover('#fafafa')
  } else {

    promptValue = prompt("You must choose number between 1 and 100!")
  }
  }

  // useEffect(changeSize, [])

const [hover, setHover] = useState('#fafafa');
//const [randomColor, setRadnomColor] = useState('');
//const [hoverColor, setHoverColor] = ('')



const style = {
  background: `${hover}` 
}
const divStyle = {
  gridTemplateColumns: `repeat(${size}, 1fr)`,
  
}


const createDivs = () => {
  const divs = [];

  for (let i =0; i < (size * size); i++){
    divs.push(
     <div key={i} onMouseEnter={() => setHover('blue')} style={style} >
         
      </div>
    
    )
    console.log(hover)
  }

 return divs;
}
/*
const hoverToBlackk = () => {
  setHoverToBlack('black')
}
*/
const clearBoard = () => {
  setHover('white');
}

const randomColor = () => {
  let c1 =  Math.floor(Math.random() * 256).toString(16);
  var c2 = Math.floor(Math.random() * 256).toString(16);
  var c3 = Math.floor(Math.random() * 256).toString(16);
  setHover(`#${c1}${c2}${c3}`)
  console.log(hover)
}

  return (
    <div className="App">
      <div className='options'>
        <button onClick={changeSize}>Reset Board</button>
        <button onClick={() => setHover('black')}>Black</button>
        <button onClick={randomColor}>Random Color</button>
        <button onClick={clearBoard}>Clear Board</button>
      </div>
      <div className="bam" style={divStyle}>
      { createDivs()}
      </div>
       
      
    </div>
  );
}

export default App;
