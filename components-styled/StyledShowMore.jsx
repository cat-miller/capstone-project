import styled from 'styled-components';

const StyledShowMore = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  padding: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color);

  &.villagers {
    background-color: hsl(313, 100%, 88%);
    border: 2px solid hsl(313, 100%, 80%);
  }

  &.seacreatures {
    background-color: hsl(250, 100%, 88%);
    border: 2px solid hsl(250, 100%, 80%);
  }

  &.fishes {
    background-color: hsl(200, 100%, 88%);
    border: 2px solid hsl(200, 100%, 80%);
  }

  &.bugs {
    background-color: hsl(100, 100%, 88%);
    border: 2px solid hsl(100, 100%, 80%);
  }
`;
export default StyledShowMore;
