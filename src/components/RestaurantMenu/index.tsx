import RestaurantDish from '../RestaurantDish'
import { RestaurantMenuProps } from '../Types'
import * as S from './styles'

const RestaurantMenu: React.FC<RestaurantMenuProps> = ({
  restaurantId,
  dishes,
  openCart
}) => {
  return (
    <S.RestaurantMenuSection>
      <S.RestaurantMenuContainer>
        {dishes.map((dish) => (
          <RestaurantDish
            restaurantId={restaurantId}
            key={dish.id}
            id={dish.id}
            name={dish.name}
            price={dish.price}
            description={dish.description}
            image={dish.image}
            servings={dish.servings}
            openCart={openCart}
          />
        ))}
      </S.RestaurantMenuContainer>
    </S.RestaurantMenuSection>
  )
}

export default RestaurantMenu
