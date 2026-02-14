export const formatCurrencyBRL = (value: number | string) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(typeof value === 'string' ? Number(value) : value)
