import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const [password, setPassword] = useState()

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "`!#$%^&*()_+-./:;<=>?@"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, password.length())
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-xl px-4 py-3 my-8 text-pink-500 bg-black">
      <h1 className="text-4xl text-center p-5">Password Generator</h1>
        <div className="flex shadow rounded-xl overflow-hidden mb-4">
          <input 
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3" 
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button 
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyToClipboard}
          >Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={0}
            max={100}
            value={length}
            className="cursor-pointer" 
            onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={numberAllowed} 
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }} />
            <label htmlFor="charInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={charAllowed} 
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }} />
            <label htmlFor="numberInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
