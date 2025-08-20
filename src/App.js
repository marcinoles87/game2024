import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [cordinatesX , setCordinatesX] = useState('')
  const [cordinatesY , setCordinatesY] = useState('')
  const [file , setFileImg] = useState(null);
  

  const [brightness , setBrightness] = useState('99')
  const [contrast , setContrast] = useState('99')
  const [blur , setBlur] = useState('0')
  const [grayScale , setGrayscale] = useState('0');
  const [radius , setRadius] = useState('0');


  const imageUpload = document.querySelector('.imageUpload');
  const jasnosc = document.querySelector('#jasnosc');
  const kontrast = document.querySelector('#kontrast');
  const blurS = document.querySelector('#blur');
  const borderRadius = document.querySelector('#border-radius');
  const grayscale = document.querySelector('#skala-szarosci');
  const root = document.documentElement

  

 
 
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
        console.log(imageUpload)
        

  }

  const changeFilter = (e) =>{
    e.preventDefault()
    setBlur(blurS.value)
    setBrightness(jasnosc.value)
    setContrast(kontrast.value)
    setGrayscale(grayscale.value)
    setRadius(borderRadius.value)
    imageUpload.style.filter= `blur(${blur}px) contrast(${contrast}%) brightness(${brightness}%) grayscale(${grayScale}%) `
    imageUpload.style.borderRadius = `${radius}px`
   
    
  }

   

  return (
    <div className="App" >
     {/* <div className="player" ></div> */}
     

    <div className='header'>
      <h1>PROJECT</h1>
      <h2>YOUR OWN</h2>
      <h1>AVATAR</h1>
      <p>INSTA x FACEBOOK x AVATARMODE AND MORE...</p>
    </div>

    <div className='inputs-container'>
      
      <label htmlFor="jasnosc">Brightness</label>
      <input type="range" min={0} max={99} id='jasnosc'  onChange={changeFilter}/>

      <label htmlFor="skala-szarosci">Grayscale</label>
      <input type="range" min={0} max={99} value={grayScale} id='skala-szarosci' onChange={changeFilter}/>
     
     
     
      <label htmlFor="kontrast">Contrast</label>
      <input type="range" min={0} max={100} id='kontrast' value={contrast}  onChange={changeFilter}/>


       <label htmlFor="blur">Blur</label>
       <input type="range" min={0} max={10} value={blur} id='blur'   onChange={changeFilter}/>


       <label htmlFor="radius">Radius</label>
       <input type="range" min={0} max={200} value={radius}  id='border-radius' onChange={changeFilter}/>


    </div>
    
   
    <div className='image-container'>

     
     <img className='imageUpload' src={file} alt="" ></img> 

      <input type="file" onChange={handleUploadFile}></input>

    </div>

     

    </div>
  );
}

export default App;
