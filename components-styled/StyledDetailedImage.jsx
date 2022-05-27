import styled from 'styled-components';

const StyledDetailedImage = styled.img`
  justify-self: center;
  width: 100%;
  border: 2px solid hsl(${({ hue = '1' }) => hue}, 100%, 80%);
  border-radius: var(--border-radius);
`;

export default StyledDetailedImage;
