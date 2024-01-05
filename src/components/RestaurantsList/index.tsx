import React from 'react'
import Restaurant from '../Restaurant'
import { RestaurantsListProps } from '../Types'

import * as S from './styles'

const RestaurantsList: React.FC<RestaurantsListProps> = ({ restaurants }) => {
  return (
    <S.RestaurantsListSection>
      <S.RestaurantsListContainer>
        {restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant.id}
            id={restaurant.id}
            name={restaurant.name}
            description={restaurant.description}
            image={restaurant.image}
            foodType={restaurant.foodType}
            rating={restaurant.rating}
            menu={restaurant.menu}
          />
        ))}
      </S.RestaurantsListContainer>
    </S.RestaurantsListSection>
  )
}

export default RestaurantsList
