import styled from "styled-components";

export const ShippingFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  color: var(--secondary);
  background: var(--background-dark-alt);
  width: 100%;
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  label {
    font-size: 0.875rem;
    font-weight: 700;
  }

  .inputGroup {
    display: flex;
    column-gap: 1rem;
  }
`;

export const ShippingFormInput = styled.input`
  width: 100%;
  height: 2rem;
  margin: 0.5rem 0;
  padding: 0.25rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--dark);
  background: var(--background-dark);
  border: none;
  outline: none;

  &:focus::placeholder {
    color: transparent;
  }
`;
