import React from 'react'
import Restaurant from '../Restaurant'

import * as S from './styles'

interface RestaurantData {
  id: number
  name: string
  description: string
  image: string
  foodType: string
  rating: string
}

interface RestaurantsListProps {
  restaurants: RestaurantData[]
}

const RestaurantsList: React.FC<RestaurantsListProps> = ({ restaurants }) => {
  return (
    <S.RestaurantsListSection>
      <S.RestaurantsListContainer>
        {restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant.id}
            name={restaurant.name}
            description={restaurant.description}
            image={restaurant.image}
            foodType={restaurant.foodType}
            rating={restaurant.rating}
          />
        ))}
      </S.RestaurantsListContainer>
    </S.RestaurantsListSection>
  )
}

export default RestaurantsList
