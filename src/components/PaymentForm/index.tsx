import { Formik, Form, Field } from 'formik'
import { useSelector } from 'react-redux'
import { selectTotalPrice } from '../../store/cartSlice'
import * as S from './styles'

interface PaymentFormProps {
  completePayment: () => void;
}

export const PaymentForm: React.FC<PaymentFormProps> = ({ completePayment }) => {
  const totalPrice = useSelector(selectTotalPrice)

  return (
    <Formik
      initialValues={{
        cardName: '',
        cardNumber: '',
        cardCVV: '',
        cardExpirationMonth: '',
        cardExpirationYear: ''
      }}
      onSubmit={async (values, { setSubmitting }) => {
        // handle form submission
        console.log(values);

        await new Promise((resolve) => setTimeout(resolve, 500));

        setSubmitting(false);

        completePayment()
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <S.PaymentFormContainer as={Form} onSubmit={handleSubmit}>
          <h3>Pagamento - Valor a pagar: R$ {totalPrice}</h3>

          <label htmlFor="cardName">Nome no cartão</label>
          <S.PaymentFormInput as={Field}
            id="cardName"
            name="cardName"
            type="text"
            placeholder="João Batista"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.cardName}
          />

          <div className='inputGroup'>
            <div>
              <label htmlFor="cardNumber">Número do cartão</label>
              <S.PaymentFormInput as={Field}
                id="cardNumber"
                name="cardNumber"
                type="text"
                placeholder="1234 1234 1234 1234"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cardNumber}
              />
            </div>

            <div>
              <label htmlFor="cardCVV">CVV</label>
              <S.PaymentFormInput as={Field}
                id="cardCVV"
                name="cardCVV"
                type="text"
                placeholder="123"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cardCVV}
              />
            </div>
          </div>

          <div className="inputGroup">
            <div>
              <label htmlFor="cardExpirationMonth">Mês de vencimento</label>
              <S.PaymentFormInput as={Field}
                id="cardExpirationMonth"
                name="cardExpirationMonth"
                type="text"
                placeholder="MM"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cardExpirationMonth}
              />
            </div>

            <div>
              <label htmlFor="cardExpirationYear">Ano de vencimento</label>
              <S.PaymentFormInput as={Field}
                id="cardExpirationYear"
                name="cardExpirationYear"
                type="text"
                placeholder="YYYY"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cardExpirationYear}
              />
            </div>
          </div>

          <S.PaymentFormButton
            type='submit'
            disabled={isSubmitting}
          >Finalizar compra
          </S.PaymentFormButton>
        </S.PaymentFormContainer>
      )}
    </Formik>
  )
}
