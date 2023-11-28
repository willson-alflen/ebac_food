import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectTotalPrice } from '../../store/cartSlice'
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
  const totalPrice = useSelector(selectTotalPrice)

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
    toggleCart()
  }

  return (
    <>
      {cartDetails && (
        <S.CartContainer isOpen={isOpen} onRequestClose={toggleCart}>
          <CartItems items={cartItems} />
          <S.CartInfo>
            <span>Total:</span>
            <span>R$ {totalPrice}</span>
          </S.CartInfo>
          <S.CartBuyButton onClick={handleShipping}>Continuar com a entrega</S.CartBuyButton>
          <S.CartBackCloseButton onClick={toggleCart}>
            Fechar carrinho
          </S.CartBackCloseButton>
        </S.CartContainer>
      )}
      {shippingDetails && (
        <S.CartContainer isOpen={isOpen} onRequestClose={toggleCart}>
          <ShippingForm />
          <S.CartBuyButton onClick={handlePayment}>Continuar com o pagamento</S.CartBuyButton>
          <S.CartBackCloseButton onClick={backToCartDetails}>
            Voltar para o carrinho
          </S.CartBackCloseButton>
        </S.CartContainer>
      )}
      {paymentDetails && (
        <S.CartContainer isOpen={isOpen} onRequestClose={toggleCart}>
          <PaymentForm />
          <S.CartBuyButton onClick={completePayment}>Finalizar pagamento</S.CartBuyButton>
          <S.CartBackCloseButton onClick={backToShippingDetails}>
            Voltar para edição do endereço
          </S.CartBackCloseButton>
        </S.CartContainer>
      )}
      {orderCompleted && (
        <S.CartContainer isOpen={isOpen} onRequestClose={toggleCart}>
          <ConfirmationCard />
          <S.CartBuyButton onClick={finishOrder}>Concluir</S.CartBuyButton>
        </S.CartContainer>
      )}
    </>
  )
}

export default Cart
