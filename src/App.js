import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [cordinatesX , setCordinatesX] = useState('')
  const [cordinatesY , setCordinatesY] = useState('')

  document.addEventListener( 'mousemove' , (e) =>{
    setCordinatesX(e.clientX)
    setCordinatesY(e.clientY)
  })

  const change = (e) =>{
    
    const player = document.querySelector('.player')

    console.log(e)

    const x = e.clientX;
    const y = e.clientY;
    const move = 10;
    const newX = x+move;
    console.log(newX)
    player.style.backgroundColor = 'green'
    player.movementX = `${newX}`

  }

    
   

  return (
    <div className="App" onClick={change}>
     <div className="player" ></div>
     <p>{cordinatesX}</p>
     <p>{cordinatesY}</p>
    </div>
  );
}

export default App;
