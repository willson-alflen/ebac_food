import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { RestaurantPage } from './pages/RestaurantPage'
import { GlobalStyles } from './GlobalStyles'
import './App.css'

function App() {
  const [cartOpen, setCartOpen] = useState<boolean>(false)

  const openCart = () => {
    setCartOpen(true)
  }

  const toggleCart = () => {
    setCartOpen(!cartOpen)
  }

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header cartOpen={cartOpen} toggleCart={toggleCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/:restaurantName"
          element={<RestaurantPage openCart={openCart} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
