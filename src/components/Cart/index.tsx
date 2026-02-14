import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTotalPrice, resetCart, selectTotalItems } from '@/store/cartSlice'
import { RootState } from '@/store'
import CartItems from '@/components/CartItems'
import { ShippingForm } from '@/components/ShippingForm'
import { PaymentForm } from '@/components/PaymentForm'
import { PaymentValuesProps, ShippingValuesProps } from '../Types'
import { ConfirmationCard } from '@/components/ConfirmationCard'
import { v4 as uuidv4 } from 'uuid'
import * as S from './styles'
import { formatCurrencyBRL } from '@/utils/format'

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
  const [orderDetailsId, setOrderDetailsId] = useState('')

  const dispatch = useDispatch()

  const goToShippingDetails = () => {
    setCartDetails(false)
    setShippingDetails(true)
  }

  const handleShippingFormSubmit = (values: ShippingValuesProps) => {
    void values
  }

  const goToPayment = () => {
    setShippingDetails(false)
    setPaymentDetails(true)
  }

  const handlePaymentFormSubmit = (values: PaymentValuesProps) => {
    void values
  }

  const completePayment = async () => {
    const orderDetailsId = uuidv4()
    setOrderDetailsId(orderDetailsId)
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

            {totalItems !== 0 && (
              <>
                <S.CartInfo>
                  <span>Total:</span>
                  <span>{formatCurrencyBRL(totalPrice)}</span>
                </S.CartInfo>
                <S.CartBuyButton type="submit" onClick={goToShippingDetails}>
                  Continuar com a entrega
                </S.CartBuyButton>
              </>
            )}
            <S.CartBackCloseButton type="button" onClick={toggleCart}>
              Fechar carrinho
            </S.CartBackCloseButton>
          </>
        )}
        {shippingDetails && (
          <>
            <ShippingForm
              payment={goToPayment}
              handleFormSubmit={handleShippingFormSubmit}
            />
            <S.CartBackCloseButton type="button" onClick={backToCartDetails}>
              Voltar para o carrinho
            </S.CartBackCloseButton>
          </>
        )}
        {paymentDetails && (
          <>
            <PaymentForm
              handleFormSubmit={handlePaymentFormSubmit}
              completePayment={completePayment}
            />
            <S.CartBackCloseButton
              type="button"
              onClick={backToShippingDetails}
            >
              Voltar para edição do endereço
            </S.CartBackCloseButton>
          </>
        )}
        {orderCompleted && (
          <>
            <ConfirmationCard orderId={orderDetailsId} />
            <S.CartBuyButton type="submit" onClick={finishOrder}>
              Concluir
            </S.CartBuyButton>
          </>
        )}
      </S.CartContainer>
    </>
  )
}

export default Cart
