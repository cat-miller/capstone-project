import styled from 'styled-components';

const StyledDetailedCard = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  width: 17rem;
  height: 28rem;
  gap: 1.5rem;
  border: 2px solid hsl(${({ hue = '1' }) => hue}, 100%, 80%);
  border-radius: var(--border-radius);
  background-color: hsl(${({ hue = '1' }) => hue}, 100%, 95%);
  color: var(--color);
  box-shadow: 0px 4px 15px hsla(${({ hue = '1' }) => hue}, 100%, 73%, 0.53);
  padding: 0.5rem;
  position: relative;
`;

export default StyledDetailedCard;
