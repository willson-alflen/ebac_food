import styled from "styled-components";

export const CartContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  right: 0;
  top: 0;
  width: 320px;
  height: 100%;
  color: var(--secondary);
  background: var(--primary);
  padding: 20px;
  box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.5);
  transform: translateX(${props => props.isOpen ? '0' : '100%'});
  transition: transform 0.3s ease-in-out;
`;
