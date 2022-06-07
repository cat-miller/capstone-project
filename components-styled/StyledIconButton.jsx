import styled from 'styled-components';

const StyledIconButton = styled.button`
  border-radius: 999px;
  padding: 0.3rem 0.4rem;

  &.caught {
    background-color: ${({ isActive }) =>
      isActive
        ? 'var(--background-color-button-caught-active)'
        : 'var(--background-color-button-caught)'};
    border: 2px solid
      ${({ isActive }) =>
        isActive
          ? 'var(--color-button-caught-active)'
          : 'var(--color-button-caught)'};
    justify-self: end;
    align-self: end;
    fill: ${({ isActive }) =>
      isActive
        ? 'var(--color-button-caught-active)'
        : 'var(--color-button-caught)'};
  }
  &.donated {
    background-color: ${({ isActive }) =>
      isActive
        ? 'var(--background-color-button-donated-active)'
        : 'var(--background-color-button-donated)'};
    border: 2px solid
      ${({ isActive }) =>
        isActive
          ? 'var(--color-button-donated-active)'
          : 'var(--color-button-donated)'};
    justify-self: end;
    align-self: end;
    fill: ${({ isActive }) =>
      isActive
        ? 'var(--color-button-donated-active)'
        : 'var(--color-button-donated)'};
  }
`;

export default StyledIconButton;
