import './App.css'
import { GlobalStyles } from './GlobalStyles'
import Header from './components/Header'
import RestaurantsList from './components/RestaurantsList'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [restaurants, setRestaurants] = useState([])

  fetch('/data/db.json')
    .then((response) => response.json())
    .then((data) => setRestaurants(data.restaurants))

  return (
    <>
      <GlobalStyles />
      <Header />
      <RestaurantsList restaurants={restaurants} />
      <Footer />
    </>
  )
}

export default App
