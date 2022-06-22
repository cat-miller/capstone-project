import styled from 'styled-components';

const StyledCard = styled.section`
  display: flex;

  gap: 1.5rem;
  height: 10rem;
  width: 18rem;
  max-width: 18rem;
  border-radius: var(--border-radius);
  color: var(--color);
  padding: 0.6rem;
  position: relative;
  margin: 0 1rem;

  &:last-child {
    margin-bottom: 3rem;
  }

  & img {
    align-self: center;
  }
`;

export default StyledCard;
