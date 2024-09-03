import Count from './components/Count'
import Card from './components/Card'

function App() {

  return (
    <div className=' grid grid-cols-1 md:grid-cols-4 gap-4 '>
      <Card name={"Rahul 12"} address={"Nepal"} />
      <Card name={"Rahul 12"} address={"Nepal"} />
      <Card name={"Rahul 12"} address={"Nepal"} />
      <Card name={"Rahul 12"} address={"Nepal"} />
    </div>
  )
}

export default App
