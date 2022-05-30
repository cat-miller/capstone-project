import styled from 'styled-components';

const StyledOverlay = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsla(0, 0%, 100%, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
`;

export default StyledOverlay;
