import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTotalItems } from '../../store/cartSlice'
import Cart from '../Cart'
import * as S from './styles'
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/cart.svg'

interface HeaderProps {
  cartOpen: boolean
  toggleCart: () => void
}

export const Header: React.FC<HeaderProps> = ({ cartOpen, toggleCart }) => {
  const location = useLocation()
  const totalItems = useSelector(selectTotalItems)

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
            <img src={cart} alt="carrinho de compras" onClick={toggleCart} />
            <span>{totalItems} produto(s) no carrinho</span>
            <Cart isOpen={cartOpen} toggleCart={toggleCart} />
          </S.RestaurantPageHeaderCart>
        </S.RestaurantPageHeaderContainer>
      </S.RestaurantPageHeader>
    )
  }
}
