import styled from 'styled-components'

export const BackToTopBtn = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid var(--primary);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    outline: none;
  }
  img {
    width: 30px;
    height: 30px;
  }
`
