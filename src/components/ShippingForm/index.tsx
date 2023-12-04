import { Formik, Field, Form } from 'formik'
import * as S from './styles'

interface ShippingFormProps {
  payment: () => void
}

export const ShippingForm: React.FC<ShippingFormProps> = ({ payment }) => {
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
      onSubmit={async (values, { setSubmitting }) => {
        // handle form submission
        console.log(values);

        await new Promise((resolve) => setTimeout(resolve, 500));

        setSubmitting(false);

        payment();
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <S.ShippingFormContainer as={Form} onSubmit={handleSubmit} >
          <h3>Entrega</h3>

          <label htmlFor="name">Quem irá receber</label>
          <S.ShippingFormInput as={Field}
            id="name"
            name="name"
            type="text"
            placeholder="João Batista"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />

          <label htmlFor="address">Endereço</label>
          <S.ShippingFormInput as={Field}
            id="address"
            name="address"
            type="text"
            placeholder="B. dos Insetos, Rua dos Gafanhotos"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
          />

          <label htmlFor="location">Cidade</label>
          <S.ShippingFormInput as={Field}
            id="location"
            name="location"
            type="text"
            placeholder="Pindamonhangaba"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.location}
          />

          <div className='inputGroup'>
            <div>
              <label htmlFor="zipCode">CEP</label>
              <S.ShippingFormInput as={Field}
                id="zipCode"
                name="zipCode"
                type="text"
                placeholder="12400-000"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.zipCode}
              />
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
              />
            </div>
          </div>

          <label htmlFor="complement">Complemento (opcional)</label>
          <S.ShippingFormInput as={Field}
            id="complement"
            name="complement"
            type="text"
            placeholder="Casa"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.complement}
          />
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
