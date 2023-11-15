import styled from 'styled-components'

import headerBackground from '../../assets/images/header-bg.svg'

export const HeaderContainer = styled.header`
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

export const HeaderTitle = styled.h2`
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
