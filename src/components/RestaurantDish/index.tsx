import { useState } from 'react'
import Modal from 'react-modal'
import * as S from './styles'
import closeIcon from '../../assets/images/close.png'

interface DishProps {
  name: string
  price: string
  description: string
  image: string
  servings?: string
}

Modal.setAppElement('#root')

const RestaurantDish: React.FC<DishProps> = ({
  name,
  price,
  description,
  image,
  servings
}) => {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <S.DishCardContainer>
      <S.DishCardImage src={image} alt={name} onClick={openModal} />
      <S.DishCardInfo>
        <h3>{name}</h3>
        <span>{price}</span>
      </S.DishCardInfo>
      <S.DishCardDescription>{description}</S.DishCardDescription>
      <S.DishCardButton onClick={openModal}>Mais detalhes</S.DishCardButton>
      <S.DishCardButton>Adicionar ao carrinho</S.DishCardButton>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={`Mais detalhes sobre ${name}`}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
          },
          content: {
            display: 'flex',
            gap: '1.5em',
            backgroundColor: 'var(--primary)',
            maxWidth: '1024px',
            height: '344px',
            margin: '0 auto',
            border: 'none',
            borderRadius: '4px',
            padding: '2em'
          }
        }}
      >
        <S.DishCardImage src={image} alt={name} inModal />
        <S.DishInfoInModal>
          <h2>{name}</h2>
          <S.DishCardDescription inModal >
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
