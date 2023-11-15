import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

export default function Footer() {
  return (
    <S.Footer>
      <a href="#home">
        <img src={logo} alt="EFOOD" />
      </a>
      <S.FooterSocial>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <img src={twitter} alt="twitter" />
        </a>
      </S.FooterSocial>
      <S.FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos. A
        responsabilidade pela entrega e pela qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.FooterText>
    </S.Footer>
  )
}
