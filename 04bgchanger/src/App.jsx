import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className = "w-full h-screen duration-200" 
    style = {{backgroundColor: color }}>

      <div className = "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" > 
         <div className = "flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button onClick = {() => setColor("red")} className = "outline-none px-4 rounded-xl bg-red-700 text-white shadow-lg"
              > Red </button>
            
            <button onClick = {() => setColor("green")} className = "outline-none px-4 rounded-xl bg-green-600 text-white shadow-lg"
              > Green </button>
            
            <button onClick = {() => setColor("white")} className = "outline-none px-4 rounded-xl bg-white-300 text-black shadow-lg"
              > White </button>
            
            <button onClick = {() => setColor("yellow")}className = "outline-none px-4 rounded-xl bg-yellow-500 text-white shadow-lg"
              > Yellow </button>
            
            <button onClick = {() => setColor("pink")} className = "outline-none px-4 rounded-xl bg-pink-500 text-white shadow-lg"
              > Pink </button>
         </div>
      </div>
      
    </div>

   
  )
}

export default App
