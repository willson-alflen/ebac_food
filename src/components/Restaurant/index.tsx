import * as S from './styles'

import star from '../../assets/images/star.svg'

interface restaurantProps {
  name: string
  description: string
  image: string
  foodType: string
  rating: string
}

const Restaurant: React.FC<restaurantProps> = ({
  name,
  description,
  image,
  foodType,
  rating
}) => {
  return (
    <S.RestaurantCardContainer>
      <S.RestaurantCardTags>{foodType}</S.RestaurantCardTags>
      <S.RestaurantCardImage src={image} alt={name} />
      <S.RestaurantCardInfo>
        <h3>{name}</h3>
        <S.RestaurantCardRating>
          <span>{rating}</span>
          <img src={star} />
        </S.RestaurantCardRating>
      </S.RestaurantCardInfo>
      <S.RestaurantCardDescription>
        <p>{description}</p>
      </S.RestaurantCardDescription>
      <S.RestaurantCardButton>Saiba mais</S.RestaurantCardButton>
    </S.RestaurantCardContainer>
  )
}

export default Restaurant
