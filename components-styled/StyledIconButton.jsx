import styled from 'styled-components';

const StyledIconButton = styled.button`
  border-radius: 999px;
  padding: 0.3rem 0.4rem;

  &.caught {
    justify-self: end;
    align-self: end;

    ${({ isActive }) => {
      if (isActive) {
        return `
        background-color: var(--background-color-button-caught-active);
        border: 2px solid var(--color-button-caught-active);
        fill: var(--color-button-caught-active);
        `;
      } else {
        return `
        background-color: var(--background-color-button-caught);
        border: 2px solid var(--color-button-caught);
        fill: var(--color-button-caught);
        `;
      }
    }}
  }

  &.donated {
    justify-self: end;
    align-self: end;

    ${({ isActive }) => {
      if (isActive) {
        return `
        background-color: var(--background-color-button-donated-active);
        border: 2px solid var(--color-button-donated-active);
        fill: var(--color-button-donated-active);
        `;
      } else {
        return `
        background-color: var(--background-color-button-donated);
        border: 2px solid var(--color-button-donated);
        fill: var(--color-button-donated);
        `;
      }
    }}
  }

  &.neighbor {
    justify-self: end;
    align-self: end;

    ${({ isActive }) => {
      if (isActive) {
        return `
        background-color: var(--background-color-button-neighbor-active);
        border: 2px solid var(--color-button-neighbor-active);
        fill: var(--color-button-neighbor-active);
        `;
      } else {
        return `
        background-color: var(--background-color-button-neighbor);
        border: 2px solid var(--color-button-neighbor);
        fill: var(--color-button-neighbor);
        `;
      }
    }}
  }

  &.favorite {
    justify-self: end;
    align-self: end;

    ${({ isActive }) => {
      if (isActive) {
        return `
        background-color: var(--background-color-button-favorite-active);
        border: 2px solid var(--color-button-favorite-active);
        fill: var(--color-button-favorite-active);`;
      } else {
        return `
        background-color: var(--background-color-button-favorite);
        border: 2px solid var(--color-button-favorite);
        fill: var(--color-button-favorite);
        `;
      }
    }}
  }
`;

export default StyledIconButton;
