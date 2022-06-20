import styled from 'styled-components';

const StyledCard = styled.section`
  display: flex;

  gap: 1.5rem;
  height: 10rem;
  max-width: 19.5rem;
  border-radius: var(--border-radius);
  color: var(--color);
  padding: 0.6rem;
  position: relative;

  &:last-child {
    margin-bottom: 3rem;
  }

  & img {
    align-self: center;
  }
`;

export default StyledCard;
