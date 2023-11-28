import { useSelector } from 'react-redux'
import { selectTotalPrice } from '../../store/cartSlice'
import * as S from './styles'

export const PaymentForm: React.FC = () => {
  const totalPrice = useSelector(selectTotalPrice)

  return (
    <S.PaymentFormContainer>
      <h3>Pagamento - Valor a pagar: R$ {totalPrice}</h3>

      <label htmlFor="cardName">Nome no cartão</label>
      <S.PaymentFormInput id="cardName" type="text" placeholder="João Batista" />


      <div className='inputGroup'>
        <div>
          <label htmlFor="cardNumber">Número do cartão</label>
          <S.PaymentFormInput id="cardNumber" type="text" placeholder="1234 1234 1234 1234" />
        </div>

        <div>
          <label htmlFor="cardCVV">CVV</label>
          <S.PaymentFormInput id="cardCVV" type="text" placeholder="123" />
        </div>
      </div>

      <div className="inputGroup">
        <div>
          <label htmlFor="cardExpirationMonth">Mês de vencimento</label>
          <S.PaymentFormInput id="cardExpirationMonth" type="text" placeholder="MM" />
        </div>

        <div>
          <label htmlFor="cardExpirationYear">Ano de vencimento</label>
          <S.PaymentFormInput id="cardExpirationYear" type="text" placeholder="YYYY" />
        </div>
      </div>
    </S.PaymentFormContainer>
  )
}
