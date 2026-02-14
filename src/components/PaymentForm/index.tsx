import { Formik, Form, Field } from 'formik'
import { useSelector } from 'react-redux'
import { selectTotalPrice } from '@/store/cartSlice'
import { PaymentFormProps, PaymentValuesProps } from '../Types'
import * as S from './styles'
import { formatCurrencyBRL } from '@/utils/format'
import { PaymentSchema } from './schema'

export const PaymentForm: React.FC<PaymentFormProps> = ({
  handleFormSubmit,
  completePayment
}) => {
  const totalPrice = useSelector(selectTotalPrice)

  // schema importado de ./schema

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

        completePayment()
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        errors,
        touched,
        setFieldValue
      }) => (
        <S.PaymentFormContainer as={Form} onSubmit={handleSubmit}>
          <h3>Pagamento - Valor a pagar: {formatCurrencyBRL(totalPrice)}</h3>

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
                aria-invalid={Boolean(errors.card?.name && touched.card?.name)}
              />
          {errors.card?.name && touched.card?.name ? (
            <S.PaymentFormErrors role="alert">{errors.card.name}</S.PaymentFormErrors>
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
                inputMode="numeric"
                maxLength={16}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const digits = e.target.value.replace(/\D/g, '').slice(0, 16)
                  setFieldValue('card.number', digits)
                }}
                onBlur={handleBlur}
                value={values.card.number}
                aria-invalid={Boolean(
                  errors.card?.number && touched.card?.number
                )}
              />
              {errors.card?.number && touched.card?.number ? (
                <S.PaymentFormErrors role="alert">{errors.card.number}</S.PaymentFormErrors>
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
                inputMode="numeric"
                maxLength={3}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const digits = e.target.value.replace(/\D/g, '').slice(0, 3)
                  setFieldValue('card.code', digits)
                }}
                onBlur={handleBlur}
                value={values.card.code}
                aria-invalid={Boolean(errors.card?.code && touched.card?.code)}
              />
              {errors.card?.code && touched.card?.code ? (
                <S.PaymentFormErrors role="alert">{errors.card.code}</S.PaymentFormErrors>
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
                type="text"
                placeholder="01"
                inputMode="numeric"
                maxLength={2}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const digits = e.target.value.replace(/\D/g, '').slice(0, 2)
                  setFieldValue('card.expiresAt.month', digits)
                }}
                onBlur={handleBlur}
                value={values.card.expiresAt.month}
                aria-invalid={Boolean(
                  errors.card?.expiresAt?.month && touched.card?.expiresAt?.month
                )}
              />
              {errors.card?.expiresAt?.month &&
              touched.card?.expiresAt?.month ? (
                <S.PaymentFormErrors role="alert">
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
                type="text"
                placeholder="2026"
                inputMode="numeric"
                maxLength={4}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const digits = e.target.value.replace(/\D/g, '').slice(0, 4)
                  setFieldValue('card.expiresAt.year', digits)
                }}
                onBlur={handleBlur}
                value={values.card.expiresAt.year}
                aria-invalid={Boolean(
                  errors.card?.expiresAt?.year && touched.card?.expiresAt?.year
                )}
              />
              {errors.card?.expiresAt?.year && touched.card?.expiresAt?.year ? (
                <S.PaymentFormErrors role="alert">
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
