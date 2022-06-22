import styled from 'styled-components';

const StyledFishCard = styled.section`
  display: grid;
  align-items: center;
  gap: 0.5rem;
  width: 17.8rem;
  height: 17rem;
  border-radius: var(--border-radius);
  color: var(--color);
  padding: 0.7rem;
  margin: 0 1rem;

  &:last-child {
    margin-bottom: 3rem;
  }
`;

export default StyledFishCard;
