import './App.css'
import { Login, Profile } from './components'
import UserContextProvider from './context/UserContextProvider'

function App() {

  

  return (
    <UserContextProvider>
      <h1 className="text-pink-400">Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
