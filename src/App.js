import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [cordinatesX , setCordinatesX] = useState('')
  const [cordinatesY , setCordinatesY] = useState('')
  const [file , setFileImg] = useState('');

  const [brightness , setBrightness] = useState('')
  const [contrast , setContrast] = useState('')
  const [blur , setBlur] = useState('')

  const imageUpload = document.querySelector('.imageUpload')

  // document.addEventListener( 'click' , (e) =>{
  //   setCordinatesX(e.clientX)
  //   setCordinatesY(e.clientY)

  //   const player = document.querySelector('.player')
  //   player.style.cssText = `transform:translate(${cordinatesX}px,${cordinatesY}px)`

  // })

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

    setBrightness(e.target.value)
    imageUpload.setAttribute('style' , `filter: brightness(0.${brightness})`)
  }

  const changeContrast = (e) =>{
    setContrast(e.target.value)
    imageUpload.style.cssText += `filter: contrast(0.${contrast})`
  }

   const changeBlur = (e) =>{
    setBlur(e.target.value)
    imageUpload.style.cssText += `filter: blur(${blur}px)`
  }

    
   

  return (
    <div className="App" >
     {/* <div className="player" ></div> */}
     <p>{cordinatesX}</p>
     <p>{cordinatesY}</p>

    
     <input type="range" min={0} max={99} id='jasnosc'  onChange={changeBrightnes}></input>
     <label for="jasnosc">Jasność</label>
     
     
     <input type="range" min={0} max={99} id='kontrast'  onChange={changeContrast}></input>
     <label for="kontrast">Kontrast</label>

     <input type="range" min={0} max={10} id='blur'  onChange={changeBlur}></input>
     <label for="blur">Rozmycie</label>
    

     <input type="file" onChange={handleUploadFile}></input>
     <img className='imageUpload' src={file} alt="" ></img>

    </div>
  );
}

export default App;
