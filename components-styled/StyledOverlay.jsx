import styled from 'styled-components';

const StyledOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsla(0, 0%, 100%, 0.7);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
`;

export default StyledOverlay;