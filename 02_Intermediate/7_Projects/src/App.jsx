import { useState } from 'react'
import './App.css'
import Accordian from './components/accordian'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}

      <StarRating  noOfStars={10}/>
    </>
  )
}

export default App
