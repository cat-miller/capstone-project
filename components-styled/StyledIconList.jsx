import styled from 'styled-components';

const StyledIconList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0.8rem;
  max-width: 19.5rem;
  height: 7.5rem;
  padding: 0.6rem;
  border-radius: var(--border-radius);

  &.villager {
    background-color: hsl(334, 100%, 95%);
    border: 2px solid hsl(334, 100%, 80%);
    box-shadow: 0px 4px 15px hsla(334, 100%, 73%, 0.53);
  }

  &.seaCreature {
    background-color: hsl(250, 100%, 95%);
    border: 2px solid hsl(250, 100%, 80%);
    box-shadow: 0px 4px 15px hsla(250, 100%, 73%, 0.53);
  }
  &.fish {
    background-color: hsl(200, 100%, 95%);
    border: 2px solid hsl(200, 100%, 80%);
    box-shadow: 0px 4px 15px hsla(200, 100%, 73%, 0.53);
  }
  &.bug {
    background-color: hsl(100, 100%, 95%);
    border: 2px solid hsl(100, 100%, 80%);
    box-shadow: 0px 4px 15px hsla(100, 100%, 73%, 0.53);
  }
`;

export default StyledIconList;
