import styled from 'styled-components';

const StyledDetailedCard = styled.section`
  display: grid;
  justify-content: center;
  width: 17rem;
  height: 28rem;
  gap: 1rem;
  border-radius: var(--border-radius);
  color: var(--color);
  padding: 0.4rem;
  position: relative;

  &.fish {
    padding: 0.75rem;
    width: 16rem;
    height: 28rem;
  }
`;

export default StyledDetailedCard;
