import Hello from "./Hello"
import { useState } from "react"


function App() {

  let [counter, setCounter] = useState(5)

  const title = 'React App'

  //let counter = 10

  const add = () => {
    if (counter < 10) {
      //counter = counter + 1
      setCounter(counter + 1)  
    }        
  }

  const sub = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
    
  }

  return (
    <>
    <h1>{title}</h1>
    <h2>Value: {counter}</h2>

    <button onClick={add}
    >+ {counter}</button>
    <button onClick={sub}
    >- {counter}</button>
    </>
  )
}

export default App
