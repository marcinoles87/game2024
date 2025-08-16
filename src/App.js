import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [cordinatesX , setCordinatesX] = useState('')
  const [cordinatesY , setCordinatesY] = useState('')
  const [file , setFileImg] = useState(null);

  const [brightness , setBrightness] = useState('100')
  const [contrast , setContrast] = useState('100')
  const [blur , setBlur] = useState('0')
  const [grayScale , setGrayscale] = useState('50');

  const imageUpload = document.querySelector('.imageUpload');
  const jasnosc = document.querySelector('#jasnosc');
  const kontrast = document.querySelector('#kontrast');
  const blurS = document.querySelector('#blur');
  const borderRadius = document.querySelector('#border-radius');
  const grayscale = document.querySelector('#skala-szarosci');

 

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
    setBlur(blurS.value)
    setBrightness(jasnosc.value)
    setContrast(kontrast.value)
    setGrayscale(grayscale.value)
    imageUpload.style.filter= `blur(${blur}px) contrast(${contrast}%) brightness(${brightness}%) grayscale(0.${grayScale})`
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
     

    <div className='header'>
      <h1>PROJECT</h1>
      <h2>YOUR OWN</h2>
      <h1>AVATAR</h1>
      <p>INSTA x FACEBOOK x AVATARMODE</p>
    </div>

    <div className='inputs-container'>

      
      
      <label htmlFor="jasnosc">Brightness</label>
      <input type="range" min={0} max={99} id='jasnosc'  onChange={changeBrightness}/>

      <label htmlFor="skala-szarosci">Grayscale</label>
     <input type="range" min={0} max={99} id='skala-szarosci' onChange={changeBrightness}/>
     
     
     
     <label htmlFor="kontrast">Contrast</label>
          <input type="range" min={0} max={200} id='kontrast'  onChange={changeBrightness}/>


     <label htmlFor="blur">Blur</label>
          <input type="range" min={0} max={10} id='blur' value={blur}  onChange={changeBrightness}/>


     <label htmlFor="radius">Radius</label>
          <input type="range" min={0} max={200}  id='border-radius' onChange={changeBrightness}/>


    </div>
    
   
    <div className='image-container'>

     
     <img className='imageUpload' src={file} alt="" ></img>
      <input type="file" onChange={handleUploadFile}></input>

    </div>

     

    </div>
  );
}

export default App;
