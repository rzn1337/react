import { useState } from 'react'


function App() {
 const [color, setColor] = useState("white")

  return (
    <div className="w-full h-screen duration-500" style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl">
          <button 
          onClick={() => setColor("magenta")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "magenta"}}>Magenta</button>
          <button 
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "pink"}}>Pink</button>
          <button 
          onClick={() => setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "purple"}}>Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
