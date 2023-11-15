import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background-dark);
  padding: 2.5em;
`

export const FooterSocial = styled.div`
  display: flex;
  gap: 1em;
  margin: 2em 0 5em;
`

export const FooterText = styled.p`
  color: var(--primary);
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  max-width: 480px;
`
