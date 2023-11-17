import styled from 'styled-components'

export const RestaurantMenuSection = styled.section`
  padding: 5em 2.5em 7.5em;

  @media (max-width: 768px) {
    padding: 5em;
  }

  @media (max-width: 575px) {
    padding: 3em;
  }

  @media (max-width: 375px) {
    padding: 2em;
  }
`

export const RestaurantMenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;
`
