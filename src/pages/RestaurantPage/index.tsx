import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantMenu from '../../components/RestaurantMenu'

interface Dish {
  id: number
  name: string
  price: string
  description: string
  image: string
}

interface RestaurantData {
  id: number
  name: string
  description: string
  image: string
  foodType: string
  rating: string
  menu: Dish[]
}

export default function RestaurantPage() {
  const { restaurantName } = useParams()
  const [dishes, setDishes] = useState<Dish[]>([])

  useEffect(() => {
    fetch('/data/db.json')
      .then((response) => response.json())
      .then((data) => {
        const restaurant = data.restaurants.find(
          (restaurant: RestaurantData) =>
            restaurant.name.toLowerCase().replace(/\s+/g, '-') ===
            restaurantName
        )
        if (restaurant) {
          setDishes(restaurant.menu)
        }
      })
  }, [restaurantName])

  return <RestaurantMenu dishes={dishes} />
}
