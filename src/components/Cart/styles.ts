import styled from 'styled-components'
import Modal from 'react-modal'

export const CartContainer = styled(Modal)<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 0;
  width: 400px;
  height: 100%;
  overflow-y: auto;
  color: var(--secondary);
  background: var(--primary);
  padding: 20px;
  border: none;
  outline: none;
  box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.5);
  transform: translateX(${(props) => (props.isOpen ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
  z-index: 10;

  @media (max-width: 400px) {
    width: 100%;
  }
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
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--primary);
  background: var(--background-dark);
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0 0 1rem;
`

export const CartBackCloseButton = styled.button`
  width: fit-content;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--primary);
  background: var(--background-dark);
  align-self: flex-end;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0 0 1rem;
`
