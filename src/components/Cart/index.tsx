import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTotalPrice, resetCart, selectTotalItems } from '../../store/cartSlice'
import { RootState } from '../../store'
import CartItems from '../CartItems'
import { ShippingForm } from '../ShippingForm'
import { PaymentForm } from '../PaymentForm'
import { ConfirmationCard } from '../ConfirmationCard'
import * as S from './styles'

interface CartProps {
  isOpen: boolean
  toggleCart: () => void
}

const Cart: React.FC<CartProps> = ({ isOpen, toggleCart }) => {
  const [cartDetails, setCartDetails] = useState(true)
  const [shippingDetails, setShippingDetails] = useState(false)
  const [paymentDetails, setPaymentDetails] = useState(false)
  const [orderCompleted, setOrderCompleted] = useState(false)
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const totalItems = useSelector(selectTotalItems)
  const totalPrice = useSelector(selectTotalPrice)

  const dispatch = useDispatch()

  const handleShipping = () => {
    setCartDetails(false)
    setShippingDetails(true)
  }

  const handlePayment = () => {
    setShippingDetails(false)
    setPaymentDetails(true)
  }

  const completePayment = () => {
    setPaymentDetails(false)
    setOrderCompleted(true)
  }

  const backToCartDetails = () => {
    setCartDetails(true)
    setShippingDetails(false)
  }

  const backToShippingDetails = () => {
    setShippingDetails(true)
    setPaymentDetails(false)
  }

  const finishOrder = () => {
    setOrderCompleted(false)
    dispatch(resetCart())
    setCartDetails(true)
    toggleCart()
  }

  return (
    <>
      <S.CartContainer isOpen={isOpen} onRequestClose={toggleCart}>
        {cartDetails && (
          <>
            <CartItems items={cartItems} />

            {totalItems !== 0 &&
            <>
              <S.CartInfo>
                <span>Total:</span>
                <span>R$ {totalPrice}</span>
              </S.CartInfo>
              <S.CartBuyButton type='submit' onClick={handleShipping}>
                Continuar com a entrega
              </S.CartBuyButton>
            </>
            }
            <S.CartBackCloseButton type='button' onClick={toggleCart}>
              Fechar carrinho
            </S.CartBackCloseButton>
          </>
        )}
        {shippingDetails && (
          <>
            <ShippingForm payment={handlePayment} />
            <S.CartBackCloseButton type='submit' onClick={backToCartDetails}>
              Voltar para o carrinho
            </S.CartBackCloseButton>
          </>
        )}
        {paymentDetails && (
          <>
            <PaymentForm completePayment={completePayment} />
            <S.CartBackCloseButton type='submit' onClick={backToShippingDetails}>
              Voltar para edição do endereço
            </S.CartBackCloseButton>
          </>
        )}
        {orderCompleted && (
          <>
            <ConfirmationCard />
            <S.CartBuyButton type='submit' onClick={finishOrder}>Concluir</S.CartBuyButton>
          </>
        )}
      </S.CartContainer>
    </>
  )
}

export default Cart
