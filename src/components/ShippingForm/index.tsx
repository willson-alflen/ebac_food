import { Formik, Field, Form } from 'formik'
import { ShippingFormProps, ShippingValuesProps } from '../Types'
import * as S from './styles'
import { ShippingSchema } from './schema'

export const ShippingForm: React.FC<ShippingFormProps> = ({
  handleFormSubmit,
  payment
}) => {

  return (
    <Formik
      initialValues={{
        receiver: '',
        address: {
          description: '',
          city: '',
          zipCode: '',
          houseNumber: '',
          complement: ''
        }
      }}
      validationSchema={ShippingSchema}
      onSubmit={async (values: ShippingValuesProps, { setSubmitting }) => {
        setSubmitting(false)

        handleFormSubmit(values)
        payment()
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
        <S.ShippingFormContainer as={Form} onSubmit={handleSubmit}>
          <h3>Entrega</h3>

          {/* input field for name */}
          <label htmlFor="receiver">Quem irá receber</label>
          <S.ShippingFormInput
            as={Field}
            id="receiver"
            name="receiver"
            type="text"
            placeholder="João Batista"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.receiver}
            aria-invalid={Boolean(errors.receiver && touched.receiver)}
          />
          {errors.receiver && touched.receiver ? (
            <S.ShippingFormErrors role="alert">
              {errors.receiver}
            </S.ShippingFormErrors>
          ) : null}

          {/* input field for address */}
          <label htmlFor="address">Endereço</label>
          <S.ShippingFormInput
            as={Field}
            id="address"
            name="address.description"
            type="text"
            placeholder="B. dos Insetos, Rua dos Gafanhotos"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address.description}
          />
          {errors.address?.description && touched.address?.description ? (
            <S.ShippingFormErrors role="alert">
              {errors.address.description}
            </S.ShippingFormErrors>
          ) : null}

          {/* input field for city */}
          <label htmlFor="city">Cidade</label>
          <S.ShippingFormInput
            as={Field}
            id="city"
            name="address.city"
            type="text"
            placeholder="Arenópolis"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address.city}
            aria-invalid={Boolean(errors.address?.city && touched.address?.city)}
          />
          {errors.address?.city && touched.address?.city ? (
            <S.ShippingFormErrors role="alert">
              {errors.address.city}
            </S.ShippingFormErrors>
          ) : null}

          {/* input fields for zipCode and houseNumber */}
          <div className="inputGroup">
            <div>
              <label htmlFor="zipCode">CEP</label>
              <S.ShippingFormInput
                as={Field}
                id="zipCode"
                name="address.zipCode"
                type="text"
                placeholder="12345-678"
                inputMode="numeric"
                maxLength={9}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const digits = e.target.value.replace(/\D/g, '').slice(0, 8)
                  const formatted =
                    digits.length > 5
                      ? `${digits.slice(0, 5)}-${digits.slice(5)}`
                      : digits
                  setFieldValue('address.zipCode', formatted)
                }}
                onBlur={handleBlur}
                value={values.address.zipCode}
                aria-invalid={Boolean(
                  errors.address?.zipCode && touched.address?.zipCode
                )}
              />
              {errors.address?.zipCode && touched.address?.zipCode ? (
                <S.ShippingFormErrors role="alert">
                  {errors.address.zipCode}
                </S.ShippingFormErrors>
              ) : null}
            </div>

            <div>
              <label htmlFor="houseNumber">Número</label>
              <S.ShippingFormInput
                as={Field}
                id="houseNumber"
                name="address.houseNumber"
                type="text"
                placeholder="123"
                inputMode="numeric"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const digits = e.target.value.replace(/\D/g, '')
                  setFieldValue('address.houseNumber', digits)
                }}
                onBlur={handleBlur}
                value={values.address.houseNumber}
                aria-invalid={Boolean(
                  errors.address?.houseNumber && touched.address?.houseNumber
                )}
              />
              {errors.address?.houseNumber && touched.address?.houseNumber ? (
                <S.ShippingFormErrors role="alert">
                  {errors.address.houseNumber}
                </S.ShippingFormErrors>
              ) : null}
            </div>
          </div>

          {/* input field for complement */}
          <label htmlFor="complement">Complemento (opcional)</label>
          <S.ShippingFormInput
            as={Field}
            id="complement"
            name="address.complement"
            type="text"
            placeholder="Casa"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address.complement}
          />
          {errors.address?.complement && touched.address?.complement ? (
            <S.ShippingFormErrors>
              {errors.address.complement}
            </S.ShippingFormErrors>
          ) : null}

          {/* button to submit the form */}
          <S.ShippingFormButton type="submit" disabled={isSubmitting}>
            Continuar com o pagamento
          </S.ShippingFormButton>
        </S.ShippingFormContainer>
      )}
    </Formik>
  )
}
