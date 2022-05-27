import styled from 'styled-components';

const StyledSpan = styled.span`
  background-color: ${({ bubbleColor }) => bubbleColor};
  color: ${({ textColor }) => textColor};
  border-radius: 999px;
  padding: 0.25rem 0.6rem;
  position: absolute;
  top: 16rem;
  right: 4rem;
`;

export default StyledSpan;
