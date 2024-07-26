import { useState } from "react"

function App() {

  const [count,setCount] = useState(0);
  const [message, setMessage] = useState("");
  function increase(){
    setCount(count+1);
    setMessage("");
  }
  function decrease(){
    if(count > 0) {
      setCount(count - 1);
      setMessage("");
    }else{
      setMessage("This is minimum");
    }
  }
  return (
    <>
      <div className="container">
      <h1>{count}</h1>
      <p>{message}</p>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
    </>
  )
}

export default App
