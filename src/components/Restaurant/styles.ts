import styled from 'styled-components'

export const RestaurantCardContainer = styled.div`
  background-color: var(--background-light);
  flex-basis: 300px;
  flex-grow: 1;
  position: relative;
`

export const RestaurantCardImage = styled.img`
  width: 100%;
  max-height: 224px;
  object-fit: cover;
`

export const RestaurantCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;

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
  padding: 6px 10px;
  border: none;
  margin: 8px;
`
