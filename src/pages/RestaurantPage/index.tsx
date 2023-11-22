import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantMenu from '../../components/RestaurantMenu'
import RestaurantBanner from '../../components/RestaurantBanner'
import BackToTopBtn from '../../components/BackToTopBtn'

interface RestaurantPageProps {
  toggleCart: () => void;
}

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

export const RestaurantPage: React.FC<RestaurantPageProps> = ({ toggleCart}) => {
  const { restaurantName } = useParams()
  const restaurantNameToConvert = restaurantName
  let capitalizedRestaurantName = ''
  const [dishes, setDishes] = useState<Dish[]>([])
  const [restaurantBanner, setRestaurantBanner] = useState<string>()
  const [foodType, setFoodType] = useState<string>()

  const convertName = (name: string) => {
    const words = name.split('-')
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    )
    return capitalizedWords.join(' ')
  }

  if (restaurantNameToConvert) {
    capitalizedRestaurantName = convertName(restaurantNameToConvert)
  }

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
          setRestaurantBanner(restaurant.image)
          setFoodType(restaurant.foodType)
        }
      })
  }, [restaurantName])

  return (
    <>
      {capitalizedRestaurantName && restaurantBanner && foodType && (
        <RestaurantBanner
          bgImage={restaurantBanner}
          foodType={foodType}
          restaurantName={capitalizedRestaurantName}
        />
      )}
      <RestaurantMenu dishes={dishes} toggleCart={toggleCart}/>
      <BackToTopBtn />
    </>
  )
}
