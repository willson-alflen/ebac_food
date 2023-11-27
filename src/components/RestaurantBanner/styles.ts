import styled from 'styled-components'

interface RestaurantBannerSectionProps {
  $bgImage: string
}

export const RestaurantBannerSection = styled.section<RestaurantBannerSectionProps>`
  background-image: url(${(props) => props.$bgImage});
  background-size: cover;
  background-position: center;
  height: 280px;
  padding: 1.5em 2.5em 2em;
`

export const RestaurantBannerTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;
  color: var(--tertiary);

  .tag {
    font-size: 2rem;
    font-weight: 100;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .title {
    font-size: 2rem;
    font-weight: 900;
    margin-top: auto;
  }
`
