import { useState } from 'react'
import './index.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200 " 
      style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button 
              onClick={() => setColor("#FF8343")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"#FF8343"}}
            >Orange
            </button>
            <button 
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"green"}}
            >Green
            </button>
            <button 
              onClick={() => setColor("#836FFF")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"#836FFF"}}
            >Navy
            </button>
            <button 
              onClick={() => setColor("#ECDFCC")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"#ECDFCC", color:"black"}}
            >Beige
            </button>
            <button 
              onClick={() => setColor("#15F5BA")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"#15F5BA"}}
            >Mint
            </button>
            <button 
              onClick={() => setColor("#B4D6CD")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"#B4D6CD" , color:"black"}}
            >Teal
            </button>
            <button 
              onClick={() => setColor("#FF4E88")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"#FF4E88"}}
            >Pink
            </button>
            <button 
              onClick={() => setColor("#973131")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"#973131"}}
            >Maroon
            </button>
          </div>
        </div>
    </div>
  )
}

export default App
