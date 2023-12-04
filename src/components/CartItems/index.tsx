import { useDispatch } from 'react-redux'
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart
} from '../../store/cartSlice'
import { CartItemProps } from '../Types'
import * as S from './styles'
import trashCan from '../../assets/images/trash-can.svg'
import arrowUp from '../../assets/images/arrow-up-cart.png'
import arrowDown from '../../assets/images/arrow-down-cart.png'
import brokenHeart from '../../assets/images/broken-heart.png'

interface CartItemsProps {
  items: CartItemProps[]
}

const CartItems: React.FC<CartItemsProps> = ({ items }) => {
  const dispatch = useDispatch()

  const handleIncreaseQuantity = (id: number) => {
    dispatch(increaseQuantity(id))
  }

  const handleDecreaseQuantity = (id: number) => {
    dispatch(decreaseQuantity(id))
  }

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id))
  }

  if (items.length === 0) {
    return (
      <S.EmptyCart>
        <img src={brokenHeart} alt="coração partido" />
        O seu carrinho está vazio.
      </S.EmptyCart>
    )
  }

  return (
    <ul>
      {items.map((item) => (
        <S.CartItem key={item.id}>
          <S.CartItemContainer>
            <img src={item.image} alt={item.name} />

            <div className="cartItemInfo">
              <h3>{item.name}</h3>
              <span>preço: {item.price}</span>
              <span>quantidade: {item.quantity}</span>
            </div>
          </S.CartItemContainer>
          <S.CartItemActions>
            <button onClick={() => handleIncreaseQuantity(item.id)}>
              <img src={arrowUp} alt="aumentar quantidade" />
            </button>
            <button onClick={() => handleDecreaseQuantity(item.id)}>
              <img src={arrowDown} alt="diminuir quantidade" />
            </button>
            <button onClick={() => handleRemoveFromCart(item.id)}>
              <img src={trashCan} alt="remover item" />
            </button>
          </S.CartItemActions>
        </S.CartItem>
      ))}
    </ul>
  )
}

export default CartItems
