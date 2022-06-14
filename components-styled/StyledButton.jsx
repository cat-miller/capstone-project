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

  &.caught {
    ${({ isActive }) => {
      if (isActive) {
        return `
        background-color: var(--background-color-button-caught-active);
        border: 2px solid var(--color-button-caught-active);
        color: var(--color-button-caught-active);
        `;
      } else {
        return `
        background-color: var(--background-color-button-caught);
        border: 2px solid var(--color-button-caught);
        color: var(--color-button-caught);
        `;
      }
    }}
  }

  &.donated {
    ${({ isActive }) => {
      if (isActive) {
        return `
        background-color: var(--background-color-button-donated-active);
        border: 2px solid var(--color-button-donated-active);
        color: var(--color-button-donated-active);
        `;
      } else {
        return `
        background-color: var(--background-color-button-donated);
        border: 2px solid var(--color-button-donated);
        color: var(--color-button-donated);
        `;
      }
    }}
  }

  &.favorite {
    ${({ isActive }) => {
      if (isActive) {
        return `
        background-color: var(--background-color-button-favorite-active);
        border: 2px solid var(--color-button-favorite-active);
        color: var(--color-button-favorite-active);`;
      } else {
        return `
        background-color: var(--background-color-button-favorite);
        border: 2px solid var(--color-button-favorite);
        color: var(--color-button-favorite);
        `;
      }
    }}
  }

  &.neighbor {
    ${({ isActive }) => {
      if (isActive) {
        return `
        background-color: var(--background-color-button-neighbor-active);
        border: 2px solid var(--color-button-neighbor-active);
        color: var(--color-button-neighbor-active);
        `;
      } else {
        return `
        background-color: var(--background-color-button-neighbor);
        border: 2px solid var(--color-button-neighbor);
        color: var(--color-button-neighbor);
        `;
      }
    }}
  }

  &.themebutton {
    height: 2rem;
    width: 7.5rem;
    justify-self: center;
    background-color: var(--background-color-button-theme);
    color: var(--color-button-theme);
    border: 2px solid var(--color-button-theme);
  }

  &.sort {
    background-color: var(--background-color-button-theme);
    color: var(--color-button-theme);
    border: 2px solid var(--color-button-theme);
  }
`;

export default StyledButton;
