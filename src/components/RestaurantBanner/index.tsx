import * as S from './styles.ts'

interface RestaurantBannerProps {
  restaurantName: string
  bgImage: string
  foodType: string
}

const RestaurantBanner: React.FC<RestaurantBannerProps> = ({
  restaurantName,
  bgImage,
  foodType
}) => {
  return (
    <S.RestaurantBannerSection $bgImage={bgImage}>
      <S.RestaurantBannerTextContent>
        <span className="tag">{foodType}</span>
        <h2 className="title">{restaurantName}</h2>
      </S.RestaurantBannerTextContent>
    </S.RestaurantBannerSection>
  )
}

export default RestaurantBanner
