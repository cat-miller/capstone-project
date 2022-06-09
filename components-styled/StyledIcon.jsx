import styled from 'styled-components';

const StyledIcon = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  padding: 0.4rem;

  &.villager {
    background-color: hsl(313, 100%, 88%);
    border: 2px solid hsl(313, 100%, 80%);
  }

  &.seaCreature {
    background-color: hsl(250, 100%, 88%);
    border: 2px solid hsl(250, 100%, 80%);
  }

  &.fish {
    background-color: hsl(200, 100%, 88%);
    border: 2px solid hsl(200, 100%, 80%);
  }

  &.bug {
    background-color: hsl(100, 100%, 88%);
    border: 2px solid hsl(100, 100%, 80%);
  }
`;
export default StyledIcon;
