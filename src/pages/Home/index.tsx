import { useEffect, useState } from 'react'
import RestaurantsList from '../../components/RestaurantsList'
import BackToTopBtn from '../../components/BackToTopBtn'

export default function Home() {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch('/data/db.json')
      .then((response) => response.json())
      .then((data) => setRestaurants(data.restaurants))
  }, [])

  return (
    <>
      <RestaurantsList restaurants={restaurants} />
      <BackToTopBtn />
    </>
  )
}
