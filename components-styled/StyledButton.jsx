import styled from 'styled-components';
import StyledDetailedCard from './StyledDetailedCard';
import StyledHeader from './StyledHeader';

const StyledButton = styled.button`
  border-radius: 999px;
  padding: 0.25rem 0.6rem;

  ${StyledDetailedCard} & {
    position: absolute;
    top: -1rem;
    right: 2rem;
    background-color: var(--background-color-button);
    color: var(--color-button);
    border: 2px solid var(--color-button);
  }

  ${StyledHeader} & {
    background-color: var(--background-color-button-caught);
    color: var(--color-button-caught);
    border: 2px solid var(--color-button-caught);
  }

  &.themebutton {
    height: 2rem;
    background-color: var(--background-color-button-theme);
    color: var(--color-button-theme);
    border: 2px solid var(--color-button-theme);
  }
`;

export default StyledButton;
