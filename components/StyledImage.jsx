import styled from 'styled-components';

const StyledImage = styled.img`
  height: 127px;
  width: 127px;
  border: 2px solid hsl(${({ hue = '313' }) => hue}, 100%, 75%);
  border-radius: 50%;
`;

export default StyledImage;
