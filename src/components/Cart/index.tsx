import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectRestaurantId,
  selectTotalPrice,
  resetCart,
  selectTotalItems
} from '../../store/cartSlice'
import { RootState } from '../../store'
import CartItems from '../CartItems'
import { ShippingForm } from '../ShippingForm'
import { PaymentForm } from '../PaymentForm'
import {
  CartItemProps,
  PaymentValuesProps,
  ShippingValuesProps
} from '../Types'
import { ConfirmationCard } from '../ConfirmationCard'
import { v4 as uuidv4 } from 'uuid'
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
  const restaurantId = useSelector(selectRestaurantId)
  const [shippingDetailsValues, setShippingDetailsValues] =
    useState<ShippingValuesProps | null>(null)
  const [paymentDetailsValues, setPaymentDetailsValues] =
    useState<PaymentValuesProps | null>(null)
  const [orderDetailsId, setOrderDetailsId] = useState('')

  const dispatch = useDispatch()

  const goToShippingDetails = () => {
    setCartDetails(false)
    setShippingDetails(true)
  }

  const handleShippingFormSubmit = (values: ShippingValuesProps) => {
    setShippingDetailsValues(values)
  }

  const goToPayment = () => {
    setShippingDetails(false)
    setPaymentDetails(true)
  }

  const handlePaymentFormSubmit = (values: PaymentValuesProps) => {
    setPaymentDetailsValues(values)
  }

  const completePayment = async () => {
    const orderDetails = {
      id: uuidv4(),
      restaurant: {
        id: restaurantId,
        products: cartItems.map((item: CartItemProps) => ({
          productId: item.id,
          productName: item.name,
          quantity: item.quantity,
          unitPrice: item.price,
          totalPrice: item.quantity * Number(item.price)
        }))
      },
      delivery: shippingDetailsValues,
      payment: paymentDetailsValues
    }

    setOrderDetailsId(orderDetails.id)

    try {
      const response = await fetch('http://localhost:8000/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderDetails)
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      console.log(data)

      setPaymentDetails(false)
      setOrderCompleted(true)
    } catch (error) {
      console.error('There was a problem with the fetch operation: ', error)
    }
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
                  <span>R$ {totalPrice}</span>
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
            <S.CartBackCloseButton type="submit" onClick={backToCartDetails}>
              Voltar para o carrinho
            </S.CartBackCloseButton>
          </>
        )}
        {paymentDetails && (
          <>
            <PaymentForm
              handleFormSubmit={handlePaymentFormSubmit}
              paymentDetailsValues={paymentDetailsValues}
              completePayment={completePayment}
            />
            <S.CartBackCloseButton
              type="submit"
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
