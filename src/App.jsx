import { useState } from 'react'
import '../src/style/style.css'
import Navbar from './components/navbar'
import Meme from './components/meme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Meme/>
    </>
  )
}

export default App
