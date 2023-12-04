import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import * as S from './styles'

interface ShippingFormProps {
  payment: () => void
}

export const ShippingForm: React.FC<ShippingFormProps> = ({ payment }) => {
  const ShippingSchema = Yup.object().shape({
    name: Yup.string()
          .min(3, 'O nome deve ter pelo menos 3 caracteres')
          .required('Campo obrigatório'),
    address: Yup.string()
      .min(5, 'O endereço deve ter pelo menos 5 caracteres')
      .required('Campo obrigatório'),
    location: Yup.string()
      .min(3, 'A cidade deve ter pelo menos 3 caracteres')
      .required('Campo obrigatório'),
    zipCode: Yup.string()
      .min(9, 'O cep deve ter pelo menos 9 caracteres')
      .max(9, 'O cep deve ter no máximo 9 caracteres')
      .required('Campo obrigatório'),
    houseNumber: Yup.string().required('Campo obrigatório'),
    complement: Yup.string()
  })

  return (
    <Formik
      initialValues={{
        name: '',
        address: '',
        location: '',
        zipCode: '',
        houseNumber: '',
        complement: ''
      }}
      validationSchema={ShippingSchema}
      onSubmit={async (values, { setSubmitting }) => {
        // handle form submission
        console.log(values);

        await new Promise((resolve) => setTimeout(resolve, 500));

        setSubmitting(false);

        payment();
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting, errors, touched }) => (
        <S.ShippingFormContainer as={Form} onSubmit={handleSubmit} >
          <h3>Entrega</h3>

          {/* input field for name */}
          <label htmlFor="name">Quem irá receber</label>
          <S.ShippingFormInput as={Field}
            id="name"
            name="name"
            type="text"
            placeholder="João Batista"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            hasError={errors.name && touched.name}
          />
          {errors.name && touched.name ? (
            <S.ShippingFormErrors>{errors.name}</S.ShippingFormErrors>
          ) : null}

          {/* input field for address */}
          <label htmlFor="address">Endereço</label>
          <S.ShippingFormInput as={Field}
            id="address"
            name="address"
            type="text"
            placeholder="B. dos Insetos, Rua dos Gafanhotos"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
            hasError={errors.address && touched.address}
          />
          {errors.address && touched.address ? (
            <S.ShippingFormErrors>{errors.address}</S.ShippingFormErrors>
          ) : null}

          {/* input field for location */}
          <label htmlFor="location">Cidade</label>
          <S.ShippingFormInput as={Field}
            id="location"
            name="location"
            type="text"
            placeholder="Pindamonhangaba"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.location}
            hasError={errors.location && touched.location}
          />
          {errors.location && touched.location ? (
            <S.ShippingFormErrors>{errors.location}</S.ShippingFormErrors>
          ) : null}

          {/* input fields for zipCode and houseNumber */}
          <div className='inputGroup'>
            <div>
              <label htmlFor="zipCode">CEP</label>
              <S.ShippingFormInput as={Field}
                id="zipCode"
                name="zipCode"
                type="text"
                placeholder="12345678"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.zipCode}
                hasError={errors.zipCode && touched.zipCode}
              />
              {errors.zipCode && touched.zipCode ? (
                <S.ShippingFormErrors>{errors.zipCode}</S.ShippingFormErrors>
              ) : null}
            </div>

            <div>
              <label htmlFor="houseNumber">Número</label>
              <S.ShippingFormInput as={Field}
                id="houseNumber"
                name="houseNumber"
                type="text"
                placeholder="123"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.houseNumber}
                hasError={errors.houseNumber && touched.houseNumber}
              />
              {errors.houseNumber && touched.houseNumber ? (
                <S.ShippingFormErrors>{errors.houseNumber}</S.ShippingFormErrors>
              ) : null}
            </div>
          </div>

          {/* input field for complement */}
          <label htmlFor="complement">Complemento (opcional)</label>
          <S.ShippingFormInput as={Field}
            id="complement"
            name="complement"
            type="text"
            placeholder="Casa"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.complement}
            hasError={errors.complement && touched.complement}
          />
          {errors.complement && touched.complement ? (
            <S.ShippingFormErrors>{errors.complement}</S.ShippingFormErrors>
          ) : null}

          {/* button to submit the form */}
          <S.ShippingFormButton
            type='submit'
            disabled={isSubmitting}
          >Continuar com o pagamento
          </S.ShippingFormButton>
        </S.ShippingFormContainer>
      )}
    </Formik>
  )
}
