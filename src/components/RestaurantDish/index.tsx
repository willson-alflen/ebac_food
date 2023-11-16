import * as S from './styles'

interface DishProps {
  name: string
  price: string
  description: string
  image: string
}

const RestaurantDish: React.FC<DishProps> = ({
  name,
  price,
  description,
  image
}) => {
  return (
    <S.DishCardContainer>
      <S.DishCardImage src={image} alt={name} />
      <S.DishCardInfo>
        <h3>{name}</h3>
        <span>{price}</span>
      </S.DishCardInfo>
      <S.DishCardDescription>{description}</S.DishCardDescription>
      <S.DishCardButton>Adicionar ao carrinho</S.DishCardButton>
    </S.DishCardContainer>
  )
}

export default RestaurantDish
