import { useNavigate } from 'react-router-dom'
import { RestaurantProps } from '../Types'

import * as S from './styles'

import star from '@/assets/images/star.svg'
import { titleToSlug } from '@/utils/slug'

const Restaurant: React.FC<RestaurantProps> = ({
  name,
  description,
  image,
  foodType,
  rating
}) => {
  const navigate = useNavigate()

  const goToRestaurant = () => {
    const restaurantName = titleToSlug(name)
    navigate(`/${restaurantName}`)
  }

  return (
    <S.RestaurantCardContainer>
      <S.RestaurantCardTags>{foodType}</S.RestaurantCardTags>
      <S.RestaurantCardImage src={image} alt={name} loading="lazy" />
      <S.RestaurantCardInfo>
        <h3>{name}</h3>
        <S.RestaurantCardRating>
          <span>{rating}</span>
          <img src={star} alt="avaliação" />
        </S.RestaurantCardRating>
      </S.RestaurantCardInfo>
      <S.RestaurantCardDescription>{description}</S.RestaurantCardDescription>
      <S.RestaurantCardButton onClick={goToRestaurant}>
        Saiba mais
      </S.RestaurantCardButton>
    </S.RestaurantCardContainer>
  )
}

export default Restaurant
