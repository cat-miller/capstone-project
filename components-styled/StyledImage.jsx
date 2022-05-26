import styled from 'styled-components';

const StyledImage = styled.img`
  height: 130px;
  width: 130px;
  border: 2px solid hsl(${({ hue = '1' }) => hue}, 100%, 80%);
  border-radius: 50%;
`;

export default StyledImage;
