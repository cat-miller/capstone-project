import styled from 'styled-components';

const StyledCardsWrapper = styled.div`
  padding: 0 1rem 1rem;
  display: grid;
  gap: 1.5rem;
  overflow-y: auto;

  &.slug {
    align-items: center;
  }
`;

export default StyledCardsWrapper;
