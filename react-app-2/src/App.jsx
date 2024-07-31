import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-pink-400 text-black p-5 rounded-2xl'>Tailwind</h1>
      <Card name="M1" btnText="Read"/>
      <Card name="M2"/>
    </>
  )
}

export default App
