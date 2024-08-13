import { useState } from 'react'
import './App.css'
import Pricing from './components/Pricing/Pricing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pricing />
    </>
  )
}

export default App
