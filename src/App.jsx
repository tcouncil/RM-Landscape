import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Landing } from './common/Landing'
import Navbar from './common/Navbar'
import About from './common/About'
import Resources from './common/Resources'
import Contact from './common/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Resources />
      <Contact />
    </>
  )
}

export default App
