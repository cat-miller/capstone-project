import styled from 'styled-components';
import StyledDetailedCard from './StyledDetailedCard';

const StyledButton = styled.button`
  background-color: var(--background-color-button);
  color: var(--color-button);
  border-radius: 999px;
  border: 2px solid var(--color-button);
  padding: 0.25rem 0.6rem;
  height: 1.8rem;
  width: 3.5rem;

  ${StyledDetailedCard} & {
    position: absolute;
    top: -1rem;
    right: 2rem;
  }
`;

export default StyledButton;
