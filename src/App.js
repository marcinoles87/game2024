import logo from './logo.svg';
import './App.css';

function App() {

  const handleMove = (e) =>{

    const player = document.querySelector('.player')
    
    console.log(e.clientX)
    console.log(player)
    console.log(e)


    // const playerX = e.clientX
    // const playerY = e.clientY

    player.classList.add('.newPosition')

    // console.log(playerX , playerY)

    
  }

  


  
  return (
    <div className="App" >
     <div className="player" onClick={handleMove}></div>
    </div>
  );
}

export default App;
