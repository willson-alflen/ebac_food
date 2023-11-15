import styled from 'styled-components'

export const RestaurantsListSection = styled.section`
  padding: 5em 2.5em 7.5em;

  @media (max-width: 728px) {
    padding: 5em;
  }

  @media (max-width: 499px) {
    padding: 3em;
  }

  @media (max-width: 375px) {
    padding: 2em;
  }
`

export const RestaurantsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1024px;
  column-gap: 5em;
  row-gap: 3em;
  margin: 0 auto;

  @media (max-width: 1024px) {
    column-gap: 3em;
  }
`
