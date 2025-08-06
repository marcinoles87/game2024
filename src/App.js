import logo from './logo.svg';
import './App.css';

function App() {

  const handleMove = (e) =>{

    
    
    // console.log(e.clientX)

    // const playerX = e.clientX
    // const playerY = e.clientY

    // console.log(playerX , playerY)

    
  }

  const player = document.querySelector('.player')
  player.addEventListener('click' , handleMove )


  
  return (
    <div className="App" >
     <div className="player"></div>
    </div>
  );
}

export default App;
