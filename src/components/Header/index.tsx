import { Link, useLocation } from 'react-router-dom'
import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/cart.svg'

export default function Header() {
  const location = useLocation()

  if (location.pathname === '/') {
    return (
      <S.HomeHeaderContainer>
        <Link to="/" className="logo">
          <h1>
            <img src={logo} alt="EFOOD" />
          </h1>
        </Link>
        <S.HomeHeaderTitle>
          Viva experiências gastronômicas no conforto da sua casa
        </S.HomeHeaderTitle>
      </S.HomeHeaderContainer>
    )
  } else {
    return (
      <S.RestaurantPageHeader>
        <S.RestaurantPageHeaderContainer>
          <Link to="/" className="menu">
            <h3>Restaurants</h3>
          </Link>
          <Link to="/" className="logo">
            <h1>
              <img src={logo} alt="EFOOD" />
            </h1>
          </Link>
          <S.RestaurantPageHeaderCart>
            <img src={cart} alt="shopping cart" />
            <span>0 produto(s) no carrinho</span>
          </S.RestaurantPageHeaderCart>
        </S.RestaurantPageHeaderContainer>
      </S.RestaurantPageHeader>
    )
  }
}
