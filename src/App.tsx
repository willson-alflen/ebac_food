import { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '@/components/Header'
import Footer from '@/components/Footer'
import { GlobalStyles } from '@/GlobalStyles'
import '@/App.css'

const Home = lazy(() => import('@/pages/Home'))
const RestaurantPage = lazy(() =>
  import('@/pages/RestaurantPage').then((m) => ({ default: m.RestaurantPage }))
)

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
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/:restaurantName"
            element={<RestaurantPage openCart={openCart} />}
          />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default App
