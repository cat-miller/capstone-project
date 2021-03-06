import styled from 'styled-components';

const StyledOverlay = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color-overlay);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
`;

export default StyledOverlay;
