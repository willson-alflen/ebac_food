import * as S from './styles'
import arrowUp from '../../assets/images/arrow-up.png'

const BackToTopBtn = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <S.BackToTopBtn onClick={scrollToTop}>
      <img src={arrowUp} alt="" />
    </S.BackToTopBtn>
  )
}

export default BackToTopBtn
