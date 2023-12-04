import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import { selectTotalPrice } from '../../store/cartSlice'
import * as S from './styles'

interface PaymentFormProps {
  completePayment: () => void;
}

export const PaymentForm: React.FC<PaymentFormProps> = ({ completePayment }) => {
  const totalPrice = useSelector(selectTotalPrice)

  const PaymentSchema = Yup.object().shape({
    cardName: Yup.string()
      .min(3, 'O nome deve ter pelo menos 3 caracteres')
      .required('Campo obrigatório'),
    cardNumber: Yup.string()
      .min(19, 'O número do cartão deve ter pelo menos 19 caracteres')
      .max(19, 'O número do cartão deve ter no máximo 19 caracteres')
      .required('Campo obrigatório'),
    cardCVV: Yup.string()
      .min(3, 'O CVV deve ter pelo menos 3 caracteres')
      .max(3, 'O CVV deve ter no máximo 3 caracteres')
      .required('Campo obrigatório'),
    cardExpirationMonth: Yup.string()
      .min(2, 'O mês de vencimento deve ter pelo menos 2 caracteres')
      .max(2, 'O mês de vencimento deve ter no máximo 2 caracteres')
      .required('Campo obrigatório'),
    cardExpirationYear: Yup.string()
      .min(4, 'O ano de vencimento deve ter pelo menos 4 caracteres')
      .max(4, 'O ano de vencimento deve ter no máximo 4 caracteres')
      .required('Campo obrigatório')
  })

  return (
    <Formik
      initialValues={{
        cardName: '',
        cardNumber: '',
        cardCVV: '',
        cardExpirationMonth: '',
        cardExpirationYear: ''
      }}
      validationSchema={PaymentSchema}
      onSubmit={async (values, { setSubmitting }) => {
        // handle form submission
        console.log(values);

        await new Promise((resolve) => setTimeout(resolve, 500));

        setSubmitting(false);

        completePayment()
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting, errors, touched }) => (
        <S.PaymentFormContainer as={Form} onSubmit={handleSubmit}>
          <h3>Pagamento - Valor a pagar: R$ {totalPrice}</h3>

          {/* input field for name */}
          <label htmlFor="cardName">Nome no cartão</label>
          <S.PaymentFormInput as={Field}
            id="cardName"
            name="cardName"
            type="text"
            placeholder="João Batista"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.cardName}
            hasError={errors.cardName && touched.cardName}
          />
          {errors.cardName && touched.cardName ? (
            <S.PaymentFormErrors>{errors.cardName}</S.PaymentFormErrors>
          ) : null}

          {/* input field for address */}
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
                hasError={errors.cardNumber && touched.cardNumber}
              />
              {errors.cardNumber && touched.cardNumber ? (
              <S.PaymentFormErrors>{errors.cardNumber}</S.PaymentFormErrors>
            ) : null}
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
                hasError={errors.cardCVV && touched.cardCVV}
              />
              {errors.cardCVV && touched.cardCVV ? (
                <S.PaymentFormErrors>{errors.cardCVV}</S.PaymentFormErrors>
              ) : null}
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
                hasError={errors.cardExpirationMonth && touched.cardExpirationMonth}
              />
              {errors.cardExpirationMonth && touched.cardExpirationMonth ? (
                <S.PaymentFormErrors>{errors.cardExpirationMonth}</S.PaymentFormErrors>
              ) : null}
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
                hasError={errors.cardExpirationYear && touched.cardExpirationYear}
              />
              {errors.cardExpirationYear && touched.cardExpirationYear ? (
                <S.PaymentFormErrors>{errors.cardExpirationYear}</S.PaymentFormErrors>
              ) : null}
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
