import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import BlackJack from './pages/BlackJack'
import Home from './pages/Home'
import ClassicPoker from './pages/ClassicPoker'
import TexasHoldem from './pages/TexasHoldem'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blackjack" element={<BlackJack />} />
          <Route path="classic-poker" element={<ClassicPoker />} />
          <Route path="texas-holdem" element={<TexasHoldem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
