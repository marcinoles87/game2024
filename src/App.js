import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [cordinatesX , setCordinatesX] = useState('')
  const [cordinatesY , setCordinatesY] = useState('')
  const [file , setFileImg] = useState(null);

  const [brightness , setBrightness] = useState('')
  const [contrast , setContrast] = useState('')
  const [blur , setBlur] = useState('')

  const imageUpload = document.querySelector('.imageUpload');
  const jasnosc = document.querySelector('#jasnosc');
  const kontrast = document.querySelector('#kontrast');
  const blurS = document.querySelector('#blur');
  const borderRadius = document.querySelector('#border-radius');

 

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

  const changeBrightness = () =>{
    imageUpload.style.filter= `blur(${blurS.value}px) contrast(${kontrast.value}%) brightness(${jasnosc.value}%)`
    imageUpload.style.borderRadius = `${borderRadius.value}px`
    
     console.log(jasnosc.value)
     console.log(blurS.value)
  }

 

  const changeContrast = (e) =>{
    setContrast(e.target.value)
    //  imageUpload.style.cssText = `filter: brightness(${brightness}px)`
    imageUpload.style.cssText = `filter: contrast(0.${contrast}px)`
    // imageUpload.style.cssText = `filter: blur(${blur}px)`
  }

   const changeBlur = (e) =>{
    setBlur(e.target.value)
    //  imageUpload.style.cssText = `filter: brightness(${brightness}px)`
    // imageUpload.style.cssText = `filter: contrast(${contrast}px)`
    imageUpload.style.cssText = `filter: blur(${blur}px)`
  }

    
   

  return (
    <div className="App" >
     {/* <div className="player" ></div> */}
     <p>{cordinatesX}</p>
     <p>{cordinatesY}</p>

    <div className='inputs-container'>

      <input type="range" min={0} max={99} id='jasnosc'  onChange={changeBrightness}></input>
     <label htmlFor="jasnosc">Jasność</label>
     
     
     <input type="range" min={0} max={200} id='kontrast'  onChange={changeBrightness}></input>
     <label htmlFor="kontrast">Kontrast</label>

     <input type="range" min={0} max={10} id='blur'  onChange={changeBrightness}></input>
     <label htmlFor="blur">Rozmycie</label>

     <input type="range" min={0} max={400} id='border-radius' onChange={changeBrightness}></input>

    </div>
    
   
    <div className='image-container'>

     
     <img className='imageUpload' src={file} alt="" ></img>
      <input type="file" onChange={handleUploadFile}></input>

    </div>

     

    </div>
  );
}

export default App;
