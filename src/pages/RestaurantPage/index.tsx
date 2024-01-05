import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  DishProps,
  RestaurantProps,
  RestaurantPageProps
} from '../../components/Types'
import { useGetRestaurantQuery } from '../../services/api'
import RestaurantMenu from '../../components/RestaurantMenu'
import RestaurantBanner from '../../components/RestaurantBanner'
import BackToTopBtn from '../../components/BackToTopBtn'

export const RestaurantPage: React.FC<RestaurantPageProps> = ({ openCart }) => {
  const { restaurantName } = useParams()
  const restaurantNameToConvert = restaurantName
  let capitalizedRestaurantName = ''
  const [restaurantId, setRestaurantId] = useState<string>()
  const [dishes, setDishes] = useState<DishProps[]>([])
  const [restaurantBanner, setRestaurantBanner] = useState<string>()
  const [foodType, setFoodType] = useState<string>()
  const { data } = useGetRestaurantQuery()

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
    if (data && data.restaurants) {
      const restaurant = data.restaurants.find(
        (restaurant: RestaurantProps) =>
          restaurant.name.toLowerCase().replace(/\s+/g, '-') === restaurantName
      )
      if (restaurant) {
        setRestaurantId(restaurant.id)
        setDishes(restaurant.menu)
        setRestaurantBanner(restaurant.image)
        setFoodType(restaurant.foodType)
      }
    }
  }, [data, restaurantName])

  if (!restaurantName) {
    return <p>restaurante não encontrado</p>
  }

  if (!data) {
    return <p>Couldn't fetch...</p>
  }

  return (
    <>
      {capitalizedRestaurantName && restaurantBanner && foodType && (
        <RestaurantBanner
          bgImage={restaurantBanner}
          foodType={foodType}
          restaurantName={capitalizedRestaurantName}
        />
      )}
      {restaurantId && dishes && (
        <RestaurantMenu
          restaurantId={restaurantId}
          dishes={dishes}
          openCart={openCart}
        />
      )}
      <BackToTopBtn />
    </>
  )
}
