import styled from 'styled-components';

export default function CardsWrapper({ children }) {
  return <StyledCardsWrapper>{children}</StyledCardsWrapper>;
}

const StyledCardsWrapper = styled.div`
  max-width: 325px;
  display: grid;
  gap: 2rem;
`;
