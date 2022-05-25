import styled from 'styled-components';

const StyledImage = styled.img`
  height: 127px;
  width: 127px;
  border: 2px solid hsl(${({ hue = '1' }) => hue}, 100%, 80%);
  border-radius: 50%;
`;

export default StyledImage;
