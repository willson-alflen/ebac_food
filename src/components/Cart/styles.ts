import styled from 'styled-components'

export const CartContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 0;
  max-width: 360px;
  height: 100%;
  color: var(--secondary);
  background: var(--primary);
  padding: 20px;
  box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.5);
  transform: translateX(${(props) => (props.isOpen ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
  z-index: 10;
`

export const CartInfo = styled.div`
  display: flex;
  justify-content: space-between;
  background: transparent;
  margin: 1.5rem 0 1rem;

  span {
    color: var(--secondary) !important;
    font-size: 0.875rem;
    font-weight: 700;
  }
`

export const CartBuyButton = styled.button`
  width: 100%;
  padding: 0.25rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--primary);
  background: var(--background-dark);
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0 0 1rem;
`

export const CartCloseButton = styled(CartBuyButton)`
  width: fit-content;
  padding: 0.25rem 0.5rem;
  align-self: flex-end;
`
