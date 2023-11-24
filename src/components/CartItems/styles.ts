import styled from 'styled-components'

export const CartItem = styled.li`
  background-color: var(--secondary);
  width: 100%;
  height: 100px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  position: relative;
`

export const CartItemContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  img {
    height: 100% !important;
    width: 100px !important;
    object-fit: cover;
    cursor: default;
  }

  .cartItemInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: var(--primary);
    margin-left: 1rem;

    h3 {
      font-size: 1.1rem;
      font-weight: 900;
    }

    span {
      font-size: 14px;
      font-weight: 400;
    }
  }
`

export const CartItemActions = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  line-height: 0;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    line-height: 0;
    margin-left: 0.5rem;
    transition: all 0.3s ease-in-out;

    img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`
