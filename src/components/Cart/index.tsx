import { useSelector } from 'react-redux'
import { selectTotalPrice } from '../../store/cartSlice'
import { RootState } from '../../store'
import CartItems from '../CartItems'
import * as S from './styles'

interface CartProps {
  isOpen: boolean
  toggleCart: () => void
}

const Cart: React.FC<CartProps> = ({ isOpen, toggleCart }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const totalPrice = useSelector(selectTotalPrice)

  return (
    <S.CartContainer isOpen={isOpen}>
      <CartItems items={cartItems} />
      <S.CartInfo>
        <span>Total:</span>
        <span>R$ {totalPrice}</span>
      </S.CartInfo>
      <S.CartBuyButton>Continuar com a entrega</S.CartBuyButton>
      <S.CartCloseButton onClick={toggleCart}>
        Fechar carrinho
      </S.CartCloseButton>
    </S.CartContainer>
  )
}

export default Cart
