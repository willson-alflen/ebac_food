import * as S from './styles'

import logo from '../assets/images/logo.svg'

export default function Header() {
  return (
    <S.HeaderContainer>
      <h1>
        <img src={logo} alt="EFOOD" />
      </h1>
      <S.HeaderTitle>
        Viva experiências gastronômicas no conforto da sua casa
      </S.HeaderTitle>
    </S.HeaderContainer>
  )
}
