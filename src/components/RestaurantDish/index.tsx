import { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { addToCart } from '../../store/cartSlice'
import Modal from 'react-modal'
import { useMediaQuery } from 'react-responsive'
import * as S from './styles'
import closeIcon from '../../assets/images/close.png'

interface DishProps {
  id: number
  name: string
  price: string
  description: string
  image: string
  servings?: string
  openCart: () => void
}

Modal.setAppElement('#root')

const RestaurantDish: React.FC<DishProps> = ({
  id,
  name,
  price,
  description,
  image,
  servings,
  openCart
}) => {
  const dispatch = useDispatch()
  const [modalIsOpen, setIsOpen] = useState(false)
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ id, image, name, price, quantity: 1 }))
  }

  return (
    <S.DishCardContainer>
      <S.DishCardImage src={image} alt={name} onClick={openModal} />
      <S.DishCardInfo>
        <h3>{name}</h3>
        <span>R$ {price}</span>
      </S.DishCardInfo>
      <S.DishCardDescription>{description}</S.DishCardDescription>
      <S.DishCardButton onClick={openModal}>Mais detalhes</S.DishCardButton>
      <S.DishCardButton
        onClick={() => {
          openCart()
          handleAddToCart()
        }}
      >
        Adicionar ao carrinho
      </S.DishCardButton>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={`Mais detalhes sobre ${name}`}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
          },
          content: {
            display: isTabletOrMobile ? 'block' : 'flex',
            gap: '1.5em',
            backgroundColor: 'var(--primary)',
            maxWidth: isTabletOrMobile ? '90%' : '1024px',
            height: isTabletOrMobile ? '560px' : '344px',
            margin: '0 auto',
            border: 'none',
            borderRadius: '4px',
            padding: isTabletOrMobile ? '1.5em 1em' : '2em'
          }
        }}
      >
        <S.DishCardImage
          src={image}
          alt={name}
          inModal
          isTabletOrMobile={isTabletOrMobile}
        />
        <S.DishInfoInModal isTabletOrMobile={isTabletOrMobile}>
          <h2>{name}</h2>
          <S.DishCardDescription inModal>
            {description}
            <p>Ideal para {servings}</p>
          </S.DishCardDescription>
          <S.DishCardButton inModal>
            Adicionar ao carrinho - {price}
          </S.DishCardButton>
        </S.DishInfoInModal>

        <S.CloseModalButton onClick={closeModal}>
          <img src={closeIcon} alt="Fechar" />
        </S.CloseModalButton>
      </Modal>
    </S.DishCardContainer>
  )
}

export default RestaurantDish
