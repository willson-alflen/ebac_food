import styled from 'styled-components'

export const RestaurantCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 300px;
  flex-grow: 1;
  background-color: var(--background-light);
  height: 440px;
  position: relative;
`

export const RestaurantCardImage = styled.img`
  width: 100%;
  max-height: 50%;
  object-fit: cover;
`

export const RestaurantCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 8px 16px;

  h3 {
    color: var(--primary);
    font-size: 18px;
    font-weight: 700;
  }
`

export const RestaurantCardRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25em;
`

export const RestaurantCardDescription = styled.p`
  color: var(--primary);
  font-size: 14px;
  line-height: 22px;
  padding: 8px;
`

export const RestaurantCardTags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: var(--background-dark-alt);
  color: var(--secondary);
  font-size: 14px;
  font-weight: 400;
  padding: 4px 8px;
`

export const RestaurantCardButton = styled.button`
  background-color: var(--background-dark-alt);
  color: var(--secondary);
  font-size: 14px;
  font-weight: 700;
  width: fit-content;
  padding: 6px 10px;
  border: none;
  margin: auto 8px 8px;
  cursor: pointer;
`
