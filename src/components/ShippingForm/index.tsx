import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { ShippingFormProps, ShippingValuesProps } from '../Types'
import * as S from './styles'

export const ShippingForm: React.FC<ShippingFormProps> = ({
  handleFormSubmit,
  payment
}) => {
  const ShippingSchema = Yup.object().shape({
    receiver: Yup.string()
      .min(3, 'O nome deve ter pelo menos 3 caracteres')
      .required('Campo obrigatório'),
    address: Yup.object().shape({
      description: Yup.string()
        .min(5, 'O endereço deve ter pelo menos 5 caracteres')
        .required('Campo obrigatório'),
      city: Yup.string()
        .min(3, 'A cidade deve ter pelo menos 3 caracteres')
        .required('Campo obrigatório'),
      zipCode: Yup.string()
        .min(9, 'O CEP deve seguir o formato 12345-678')
        .max(9, 'O CEP deve seguir o formato 12345-678')
        .required('Campo obrigatório'),
      houseNumber: Yup.string()
        .matches(/^\d{3}$/, 'O CVV deve ser numérico')
        .required('Campo obrigatório'),
      complement: Yup.string()
    })
  })

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
        touched
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
          />
          {errors.receiver && touched.receiver ? (
            <S.ShippingFormErrors>{errors.receiver}</S.ShippingFormErrors>
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
            <S.ShippingFormErrors>
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
          />
          {errors.address?.city && touched.address?.city ? (
            <S.ShippingFormErrors>{errors.address.city}</S.ShippingFormErrors>
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
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address.zipCode}
              />
              {errors.address?.zipCode && touched.address?.zipCode ? (
                <S.ShippingFormErrors>
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
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address.houseNumber}
              />
              {errors.address?.houseNumber && touched.address?.houseNumber ? (
                <S.ShippingFormErrors>
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
