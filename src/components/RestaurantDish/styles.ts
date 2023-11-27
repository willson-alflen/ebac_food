import styled from 'styled-components'

export const DishCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: calc(33.333% - 1.5em);
  flex-grow: 1;
  background-color: var(--background-dark-alt);
  max-width: calc(33.333% - 1.5em);
  height: 440px;
  position: relative;
  padding: 8px;
  margin-bottom: 2em;

  @media (max-width: 1099px) {
    flex-basis: calc(50% - 1.5em);
    max-width: calc(50% - 1.5em);
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
    max-width: 100%;
  }
`

export const DishCardImage = styled.img<{ $inModal?: boolean, $isTabletOrMobile?: boolean }>`
  width: 100%;
  height: ${props => {
    if (props.$inModal && props.$isTabletOrMobile) return '320px';
    if (props.$inModal && !props.$isTabletOrMobile) return '100%';
    return '50%';
  }};
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: ${props => props.$isTabletOrMobile ? '1em' : '0'};
  cursor: pointer;
`

export const DishCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0 16px;

  h3 {
    max-width: 75%;
  }

  h3,
  span {
    color: var(--secondary);
    font-size: 1rem;
    font-weight: 700;
  }
`

export const DishInfoInModal = styled.div<{ $isTabletOrMobile?: boolean }>`
  display: flex;
  flex-direction: column;
  height: ${props => props.$isTabletOrMobile ? 'fit-content' : '100%'};

  h2 {
    color: var(--tertiary);
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 1rem;
  }
`

export const DishCardDescription = styled.div<{ $inModal?: boolean }>`
  color: var(--secondary);
  font-size: 14px;
  line-height: 22px;
  height: fit-content;
  width: 100%;
  margin-bottom: ${props => props.$inModal ? '0' : '8px'};
  ${props => !props.$inModal && `
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `}

  p {
    margin: 2em 0;
  }
`

export const DishCardButton = styled.button<{ $inModal?: boolean}>`
  color: var(--primary);
  background-color: var(--background-dark);
  font-size: 14px;
  font-weight: 700;
  width: ${props => props.$inModal ? 'fit-content' : '100%'};
  padding: ${props => props.$inModal ? '8px 16px' : '8px 0'};
  border: none;
  margin-top: auto;
  cursor: pointer;
`

export const CloseModalButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: transparent;
  width: fit-content;
  border: none;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
  }
`
