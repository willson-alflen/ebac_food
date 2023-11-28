import * as S from './styles'

export const ShippingForm: React.FC = () => {
  return (
      <S.ShippingFormContainer>
        <h3>Entrega</h3>

        <label htmlFor="name">Quem irá receber</label>
        <S.ShippingFormInput id="name" type="text" placeholder="João Batista" />

        <label htmlFor="address">Endereço</label>
        <S.ShippingFormInput id="address" type="text" placeholder="B. dos Insetos, Rua dos Caracóis" />

        <label htmlFor="location">Cidade</label>
        <S.ShippingFormInput id="location" type="text" placeholder="Pindamonhangaba" />

        <div className='inputGroup'>
          <div>
            <label htmlFor="zipCode">CEP</label>
            <S.ShippingFormInput id="zipCode" type="text" placeholder="12400-000" />
          </div>

          <div>
            <label htmlFor="houseNumber">Número</label>
            <S.ShippingFormInput id="houseNumber" type="text" placeholder="123" />
          </div>
        </div>

        <label htmlFor="complement">Complemento (opcional)</label>
        <S.ShippingFormInput id="complement" type="text" placeholder="Casa" />
      </S.ShippingFormContainer>
  )
}
