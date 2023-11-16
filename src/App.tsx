import './App.css'
import { GlobalStyles } from './GlobalStyles'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RestaurantPage from './pages/RestaurantPage'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:restaurantName" element={<RestaurantPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
