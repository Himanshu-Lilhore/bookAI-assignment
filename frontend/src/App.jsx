import './App.css'
import Pricing from './components/Pricing/Pricing'

function App() {

  return (
    <div className='w-screen flex justify-center'>
      <img className="absolute top-0 left-0 w-full h-full object-cover dark:hidden" src="BG-light.png" />
      <img className="absolute top-0 left-0 w-full h-full object-cover hidden dark:block" src="BG-dark.png" />
      <Pricing />
    </div>
  )
}

export default App
