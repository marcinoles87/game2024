import logo from './logo.svg';
import './App.css';

function App() {

  const change = (e) =>{
   
    console.log(e)
    player.style.backgroundColor = 'green'
  }

    
   const player = document.querySelector('.player')
    player.addEventListener('click' , () => {
      change()
    })



    
  

  


  
  return (
    <div className="App" >
     <div className="player"></div>
    </div>
  );
}

export default App;
