import styled from 'styled-components';
import StyledCard from './StyledCard';

const StyledIconButton = styled.button`
  border-radius: 999px;
  padding: 0.3rem 0.4rem;
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
`;

export default StyledIconButton;
