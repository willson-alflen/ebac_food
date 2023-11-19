import styled from 'styled-components'

export const DishCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: calc(33.333% - 1.5em);
  flex-grow: 1;
  background-color: var(--background-dark-alt);
  max-width: calc(33.333% - 1.5em);
  height: 440px;
  position: relative;
  padding: 8px;
  margin-bottom: 2em;

  @media (max-width: 1099px) {
    flex-basis: calc(50% - 1.5em);
    max-width: calc(50% - 1.5em);
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
    max-width: 100%;
  }
`

export const DishCardImage = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
`

export const DishCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0 16px;

  h3 {
    max-width: 75%;
  }

  h3,
  span {
    color: var(--secondary);
    font-size: 1rem;
    font-weight: 700;
  }
`

export const DishCardDescription = styled.p`
  color: var(--secondary);
  font-size: 14px;
  line-height: 22px;
  height: fit-content;
  margin-bottom: 8px;
`

export const DishCardButton = styled.button`
  color: var(--primary);
  background-color: var(--background-dark);
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  padding: 8px 0;
  border: none;
  margin-top: auto;
  cursor: pointer;
`
