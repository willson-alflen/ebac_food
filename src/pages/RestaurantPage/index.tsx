import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantPageProps, RestaurantProps, DishProps } from '@/components/Types'
import { useGetRestaurantQuery } from '@/services/api'
import RestaurantMenu from '@/components/RestaurantMenu'
import RestaurantBanner from '@/components/RestaurantBanner'
import BackToTopBtn from '@/components/BackToTopBtn'
import StatusMessage from '@/components/StatusMessage'
import { slugToTitle } from '@/utils/slug'

export const RestaurantPage: React.FC<RestaurantPageProps> = ({ openCart }) => {
  const { restaurantName } = useParams()
  const restaurantNameToConvert = restaurantName
  let capitalizedRestaurantName = ''
  const [restaurantId, setRestaurantId] = useState<string>()
  const [dishes, setDishes] = useState<DishProps[]>([])
  const [restaurantBanner, setRestaurantBanner] = useState<string>()
  const [foodType, setFoodType] = useState<string>()
  const { data } = useGetRestaurantQuery()

  if (restaurantNameToConvert) {
    capitalizedRestaurantName = slugToTitle(restaurantNameToConvert)
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
    return <StatusMessage>Restaurante não encontrado.</StatusMessage>
  }

  if (!data) {
    return <StatusMessage>Carregando informações do restaurante...</StatusMessage>
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
