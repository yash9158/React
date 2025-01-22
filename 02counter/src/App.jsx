import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [cntr , setCounter ] = useState(15)

  // let counter = 15;

  const addValue = () => {
    console.log("value added", Math.random());
    // setCounter(cntr + 1) ;
    if( cntr + 1 > 20 ) return;
    cntr += 1;
    setCounter(cntr);
  }

  const decreaseValue = () => {
    if( cntr - 1 < 0 ) return;
    cntr--;
    setCounter(cntr);
  }

  return (
    <>
     <h1> Chai aur chai </h1>
     <h2> Counter value : 5 </h2>

     <button onClick = {addValue}> Add value : {cntr} </button>
     <br />
     <button onClick = {decreaseValue}> remove value : {cntr} </button>
    </>
  )
}

export default App
