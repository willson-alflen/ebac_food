import RestaurantDish from '../RestaurantDish'
import * as S from './styles'

interface Dish {
  id: number
  name: string
  price: string
  description: string
  image: string
  servings?: string
}

interface RestaurantMenuProps {
  dishes: Dish[]
}

const RestaurantMenu: React.FC<RestaurantMenuProps> = ({ dishes }) => {
  return (
    <S.RestaurantMenuSection>
      <S.RestaurantMenuContainer>
        {dishes.map((dish) => (
          <RestaurantDish
            key={dish.id}
            name={dish.name}
            price={dish.price}
            description={dish.description}
            image={dish.image}
            servings={dish.servings}
          />
        ))}
      </S.RestaurantMenuContainer>
    </S.RestaurantMenuSection>
  )
}

export default RestaurantMenu
