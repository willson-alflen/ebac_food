import { useLocation } from 'react-router-dom'
import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/cart.svg'

export default function Header() {
  const location = useLocation()

  if (location.pathname === '/') {
    return (
      <S.HomeHeaderContainer>
        <h1>
          <img src={logo} alt="EFOOD" />
        </h1>
        <S.HomeHeaderTitle>
          Viva experiências gastronômicas no conforto da sua casa
        </S.HomeHeaderTitle>
      </S.HomeHeaderContainer>
    )
  } else {
    return (
      <S.RestaurantPageHeader>
        <S.RestaurantPageHeaderContainer>
          <h3>Restaurants</h3>
          <h1>
            <img src={logo} alt="EFOOD" />
          </h1>
          <S.RestaurantPageHeaderCart>
            <img src={cart} alt="shopping cart" />
            <span>0 produto(s) no carrinho</span>
          </S.RestaurantPageHeaderCart>
        </S.RestaurantPageHeaderContainer>
      </S.RestaurantPageHeader>
    )
  }
}
