import { useState } from 'react'
import Totem from './pages/Totem'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Totem />
    </>
  )
}

export default App
