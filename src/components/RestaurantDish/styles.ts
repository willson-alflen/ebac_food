import styled from 'styled-components'

export const DishCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 440px;
  background-color: var(--background-dark-alt);
  flex-grow: 1;
  flex-basis: calc(50% - 5em);
  position: relative;
  padding: 8px;

  @media (max-width: 768px) {
    flex-basis: 472px;
  }
`

export const DishCardImage = styled.img`
  width: 100%;
  max-height: 224px;
  object-fit: cover;
`

export const DishCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;

  h3,
  span {
    color: var(--secondary);
    font-size: 18px;
    font-weight: 700;
  }
`

export const DishCardDescription = styled.p`
  color: var(--secondary);
  font-size: 14px;
  line-height: 22px;
  padding: 8px 0;
`

export const DishCardButton = styled.button`
  color: var(--primary);
  background-color: var(--background-dark);
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  padding: 8px 0;
  border: none;
  align-self: flex-end;
`
