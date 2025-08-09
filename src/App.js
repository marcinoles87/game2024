import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [cordinatesX , setCordinatesX] = useState('')
  const [cordinatesY , setCordinatesY] = useState('')
  const [file , setFileImg] = useState('');

  const imageUpload = document.querySelector('.imageUpload')

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

  const handleUploadFile = (e) =>{
        setFileImg(URL.createObjectURL(e.target.files[0]))

  }

  const changeBrightnes = (e) =>{
    imageUpload.style.cssText = `filter: brightness(0.${e.target.value})`
  }

  const changeContrast = (e) =>{
    imageUpload.style.cssText = `filter: contrast(0.${e.target.value})`
  }

    
   

  return (
    <div className="App" onClick={change}>
     <div className="player" ></div>
     <p>{cordinatesX}</p>
     <p>{cordinatesY}</p>

     <input type="range" min={0} max={99} id='jasnosc'  onChange={changeBrightnes}></input>
     <input type="range" min={0} max={99} id='jasnosc'  onChange={changeContrast}></input>
    

     <input type="file" onChange={handleUploadFile}></input>
     <img className='imageUpload' src={file} alt="" ></img>

    </div>
  );
}

export default App;
