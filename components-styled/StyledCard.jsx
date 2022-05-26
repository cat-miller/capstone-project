import styled from 'styled-components';

const StyledCard = styled.section`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  height: 10rem;
  border: 2px solid hsl(${({ hue = '1' }) => hue}, 100%, 80%);
  border-radius: var(--border-radius);
  background-color: hsl(${({ hue = '1' }) => hue}, 100%, 95%);
  color: var(--color);
  box-shadow: 0px 4px 15px hsla(${({ hue = '1' }) => hue}, 100%, 73%, 0.53);
  padding: 0.6rem;
`;

export default StyledCard;
