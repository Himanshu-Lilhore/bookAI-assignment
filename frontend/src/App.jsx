import { useState } from 'react'
import './App.css'
import Pricing from './components/Pricing/Pricing'
import Watermark from './components/Watermark/Watermark'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Watermark >BookAI</Watermark>
      <Pricing />
    </div>
  )
}

export default App
