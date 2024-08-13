import { useState } from 'react'
import './App.css'
import Pricing from './components/Pricing/Pricing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Pricing />
    </div>
  )
}

export default App
