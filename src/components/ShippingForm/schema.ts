import * as Yup from 'yup'

export const ShippingSchema = Yup.object().shape({
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
      .matches(/^\d{5}-\d{3}$/, 'O CEP deve seguir o formato 12345-678')
      .required('Campo obrigatório'),
    houseNumber: Yup.string()
      .matches(/^\d+$/, 'O número deve ser numérico')
      .required('Campo obrigatório'),
    complement: Yup.string()
  })
})
