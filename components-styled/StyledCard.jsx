import styled from 'styled-components';

const StyledCard = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 2px solid hsl(${({ hue = '1' }) => hue}, 100%, 80%);
  border-radius: 26px;
  background-color: hsl(${({ hue = '1' }) => hue}, 100%, 95%);
  color: #9c37b3;
  box-shadow: 0px 4px 15px hsla(${({ hue = '1' }) => hue}, 100%, 73%, 0.53);
  padding: 0.4rem;
  font-family: 'Roboto';
`;

export default StyledCard;
