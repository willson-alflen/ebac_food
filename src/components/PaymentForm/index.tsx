import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import { selectTotalPrice } from '../../store/cartSlice'
import { PaymentFormProps, PaymentValuesProps } from '../Types'
import { isValid as isValidCreditCard } from 'creditcard.js'
import * as S from './styles'

export const PaymentForm: React.FC<PaymentFormProps> = ({
  handleFormSubmit,
  paymentDetailsValues,
  completePayment
}) => {
  const totalPrice = useSelector(selectTotalPrice)

  const PaymentSchema = Yup.object().shape({
    card: Yup.object().shape({
      name: Yup.string()
        .min(3, 'O nome deve ter pelo menos 3 caracteres')
        .required('Campo obrigatório'),
      number: Yup.string()
        .min(16, 'O número do cartão deve ter pelo menos 16 caracteres')
        .max(16, 'O número do cartão deve ter no máximo 16 caracteres')
        .test(
          'is-credit-card',
          'O número do cartão é inválido',
          isValidCreditCard
        )
        .required('Campo obrigatório'),
      code: Yup.string()
        .min(3, 'O CVV deve ter pelo menos 3 caracteres')
        .max(3, 'O CVV deve ter no máximo 3 caracteres')
        .matches(/^\d{3}$/, 'O CVV deve ser numérico')
        .required('Campo obrigatório'),
      expiresAt: Yup.object().shape({
        month: Yup.number()
          .min(1, 'O mês deve estar entre 01 e 12')
          .max(12, 'O mês deve estar entre 01 e 12')
          .required('Campo obrigatório'),
        year: Yup.number()
          .min(new Date().getFullYear(), 'O ano não pode estar no passado')
          .required('Campo obrigatório')
      })
    })
  })

  return (
    <Formik
      initialValues={{
        card: {
          name: '',
          number: '',
          code: '',
          expiresAt: {
            month: '',
            year: ''
          }
        }
      }}
      validationSchema={PaymentSchema}
      onSubmit={async (values: PaymentValuesProps, { setSubmitting }) => {
        setSubmitting(false)

        handleFormSubmit(values)

        if (paymentDetailsValues) {
          completePayment()
        }
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        errors,
        touched
      }) => (
        <S.PaymentFormContainer as={Form} onSubmit={handleSubmit}>
          <h3>Pagamento - Valor a pagar: R$ {totalPrice}</h3>

          {/* input field for name */}
          <label htmlFor="cardName">Nome no cartão</label>
          <S.PaymentFormInput
            as={Field}
            id="cardName"
            name="card.name"
            type="text"
            placeholder="João Batista"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.card.name}
          />
          {errors.card?.name && touched.card?.name ? (
            <S.PaymentFormErrors>{errors.card.name}</S.PaymentFormErrors>
          ) : null}

          {/* input field for card number */}
          <div className="inputGroup">
            <div>
              <label htmlFor="cardNumber">Número do cartão</label>
              <S.PaymentFormInput
                as={Field}
                id="cardNumber"
                name="card.number"
                type="text"
                placeholder="1234123412341234"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.card.number}
              />
              {errors.card?.number && touched.card?.number ? (
                <S.PaymentFormErrors>{errors.card.number}</S.PaymentFormErrors>
              ) : null}
            </div>

            {/* input field for card cvv */}
            <div>
              <label htmlFor="cardCode">CVV</label>
              <S.PaymentFormInput
                as={Field}
                id="cardCode"
                name="card.code"
                type="text"
                placeholder="123"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.card.code}
              />
              {errors.card?.code && touched.card?.code ? (
                <S.PaymentFormErrors>{errors.card.code}</S.PaymentFormErrors>
              ) : null}
            </div>
          </div>

          {/* input field for card expiration month */}
          <div className="inputGroup">
            <div>
              <label htmlFor="cardExpirationMonth">Mês de vencimento</label>
              <S.PaymentFormInput
                as={Field}
                id="cardExpirationMonth"
                name="card.expiresAt.month"
                type="number"
                placeholder="01"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.card.expiresAt.month}
              />
              {errors.card?.expiresAt?.month &&
              touched.card?.expiresAt?.month ? (
                <S.PaymentFormErrors>
                  {errors.card.expiresAt.month}
                </S.PaymentFormErrors>
              ) : null}
            </div>

            {/* input field for card expiration year */}
            <div>
              <label htmlFor="cardExpirationYear">Ano de vencimento</label>
              <S.PaymentFormInput
                as={Field}
                id="cardExpirationYear"
                name="card.expiresAt.year"
                type="number"
                placeholder="2024"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.card.expiresAt.year}
              />
              {errors.card?.expiresAt?.year && touched.card?.expiresAt?.year ? (
                <S.PaymentFormErrors>
                  {errors.card.expiresAt.year}
                </S.PaymentFormErrors>
              ) : null}
            </div>
          </div>

          <S.PaymentFormButton type="submit" disabled={isSubmitting}>
            Finalizar compra
          </S.PaymentFormButton>
        </S.PaymentFormContainer>
      )}
    </Formik>
  )
}
