import styled from 'styled-components'

import headerBackground from '../../assets/images/header-bg.svg'

/**
 * Home Page Header
 */
export const HomeHeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 384px;
  background-color: var(--background-dark);
  background-image: url(${headerBackground});
  padding: 2.5em 0;

  @media (max-width: 768px) {
    padding: 2.5em 2.5em;
  }

  @media (max-width: 575px) {
    height: 300px;
  }
`

export const HomeHeaderTitle = styled.h2`
  color: var(--primary);
  text-align: center;
  font-size: 2.25rem;
  font-weight: 900;
  line-height: 1.2;
  max-width: 540px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 575px) {
    font-size: 1.75rem;
  }

  @media (max-width: 425px) {
    font-size: 1.5rem;
  }
`

/**
 * Restaurant Page Header
 */
export const RestaurantPageHeader = styled.header`
  height: 186px;
  background-image: url(${headerBackground});
  padding: 4em 2.5em;

  @media (max-width: 875px) {
    padding: 1rem 0;
  }
`

export const RestaurantPageHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 'menu logo cart';
  color: var(--primary);
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: 875px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'logo'
      'menu'
      'cart';
  }

  .logo {
    grid-area: logo;
    margin: 0 auto;
  }

  .menu {
    grid-area: menu;
    align-self: center;

    h3 {
      color: var(--primary);
      font-family: Roboto;
      font-size: 1.25rem;
      font-weight: 900;
    }
  }

  @media (max-width: 875px) {
    .menu {
      text-align: center;
      margin: 1rem 0;
    }
  }
`

export const RestaurantPageHeaderCart = styled.div`
  grid-area: cart;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5em;
  align-self: center;

  @media (max-width: 875px) {
    justify-content: center;
  }

  span {
    font-size: 1.25rem;
    font-weight: 900;
    color: var(--primary);
    text-align: end;
  }

  img {
    width: 28px;
    height: 28px;
  }
`
