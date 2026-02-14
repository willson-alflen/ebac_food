import * as Yup from 'yup'
import { isValid as isValidCreditCard } from 'creditcard.js'

export const PaymentSchema = Yup.object().shape({
  card: Yup.object().shape({
    name: Yup.string()
      .min(3, 'O nome deve ter pelo menos 3 caracteres')
      .required('Campo obrigatório'),
    number: Yup.string()
      .min(16, 'O número do cartão deve ter pelo menos 16 caracteres')
      .max(16, 'O número do cartão deve ter no máximo 16 caracteres')
      .test('is-credit-card', 'O número do cartão é inválido', isValidCreditCard)
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
