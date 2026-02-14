import { ShippingSchema } from '@/components/ShippingForm/schema'
import { PaymentSchema } from '@/components/PaymentForm/schema'

describe('ShippingSchema', () => {
  it('validates valid shipping data', async () => {
    const valid = {
      receiver: 'João Silva',
      address: {
        description: 'Rua A, 123',
        city: 'São Paulo',
        zipCode: '12345-678',
        houseNumber: '123',
        complement: ''
      }
    }
    await expect(ShippingSchema.validate(valid)).resolves.toBeTruthy()
  })

  it('fails on invalid CEP', async () => {
    const invalid = {
      receiver: 'João',
      address: {
        description: 'Rua X',
        city: 'SP',
        zipCode: '12345678',
        houseNumber: 'abc',
        complement: ''
      }
    }
    await expect(ShippingSchema.validate(invalid)).rejects.toBeTruthy()
  })
})

describe('PaymentSchema', () => {
  it('validates minimal valid payment', async () => {
    const currentYear = new Date().getFullYear()
    const valid = {
      card: {
        name: 'João',
        number: '4111111111111111',
        code: '123',
        expiresAt: {
          month: 12,
          year: currentYear
        }
      }
    }
    await expect(PaymentSchema.validate(valid)).resolves.toBeTruthy()
  })

  it('fails on invalid cvv and month', async () => {
    const invalid = {
      card: {
        name: 'J',
        number: '1234',
        code: '12x',
        expiresAt: {
          month: 13,
          year: 1999
        }
      }
    }
    await expect(PaymentSchema.validate(invalid)).rejects.toBeTruthy()
  })
})
