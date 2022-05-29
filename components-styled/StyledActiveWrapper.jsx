import styled from 'styled-components';

const StyledActiveWrapper = styled.div`
  background-color: ${({ isActive }) =>
    isActive ? 'hsl(248, 89%, 60%)' : 'transparent'};
  border-top-left-radius: var(--border-radius-inner);
  border-top-right-radius: var(--border-radius-inner);
  padding: 0.2rem 0.7rem;
`;

export default StyledActiveWrapper;
