import styled from 'styled-components';

export default function CardsWrapper({ children }) {
  return <StyledCardsWrapper>{children}</StyledCardsWrapper>;
}

const StyledCardsWrapper = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  gap: 1.5rem;
`;
