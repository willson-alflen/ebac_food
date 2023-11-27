import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DishProps, RestaurantProps, RestaurantPageProps } from '../../components/Types'
import RestaurantMenu from '../../components/RestaurantMenu'
import RestaurantBanner from '../../components/RestaurantBanner'
import BackToTopBtn from '../../components/BackToTopBtn'

export const RestaurantPage: React.FC<RestaurantPageProps> = ({ openCart }) => {
  const { restaurantName } = useParams()
  const restaurantNameToConvert = restaurantName
  let capitalizedRestaurantName = ''
  const [restaurantId, setRestaurantId] = useState<number>()
  const [dishes, setDishes] = useState<DishProps[]>([])
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
          (restaurant: RestaurantProps) =>
            restaurant.name.toLowerCase().replace(/\s+/g, '-') ===
            restaurantName
        )
        if (restaurant) {
          setRestaurantId(restaurant.id)
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
      {restaurantId && <RestaurantMenu restaurantId={restaurantId} dishes={dishes} openCart={openCart} />}
      <BackToTopBtn />
    </>
  )
}
