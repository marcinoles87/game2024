import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [cordinatesX , setCordinatesX] = useState('')
  const [cordinatesY , setCordinatesY] = useState('')

  document.addEventListener( 'click' , (e) =>{
    setCordinatesX(e.clientX)
    setCordinatesY(e.clientY)

        const player = document.querySelector('.player')
        player.style.cssText = `transform:translate(${cordinatesX}px,${cordinatesY}px)`

  })

  const change = (e) =>{
    
    const player = document.querySelector('.player')

    console.log(e)
    console.log(player)

    const x = e.clientX;
    const y = e.clientY;
    const move = 10;
    const newX = x+move;
    console.log(newX)
    player.style.backgroundColor = 'green'
    player.style.cssText = `transform(translate(${cordinatesX}px,${cordinatesY})) ; color = red`

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
