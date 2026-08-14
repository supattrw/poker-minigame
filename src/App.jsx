import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import Footer from './sections/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Hero />

      <Footer />
    </>
  )
}

export default App
