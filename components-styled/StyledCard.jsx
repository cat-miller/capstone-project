import styled from 'styled-components';

const StyledCard = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 290px;
  height: 155px;
  border: 2px solid hsl(${({ hue = '1' }) => hue}, 100%, 80%);
  border-radius: var(--border-radius);
  background-color: hsl(${({ hue = '1' }) => hue}, 100%, 95%);
  color: var(--color);
  box-shadow: 0px 4px 15px hsla(${({ hue = '1' }) => hue}, 100%, 73%, 0.53);
  padding-left: 0.6rem;
`;

export default StyledCard;
