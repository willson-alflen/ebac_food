import { useState } from 'react'
import './App.css'
import { GlobalStyles } from './GlobalStyles'
import {Header} from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {RestaurantPage} from './pages/RestaurantPage'

function App() {
  const [cartOpen, setCartOpen] = useState<boolean>(false)

  const toggleCart = () => {
    setCartOpen(!cartOpen)
  }

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header cartOpen={cartOpen} toggleCart={toggleCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:restaurantName" element={<RestaurantPage toggleCart={toggleCart} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
