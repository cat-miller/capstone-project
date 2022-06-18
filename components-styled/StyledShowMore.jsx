import styled from 'styled-components';

const StyledShowMore = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  padding: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color);

  //TODO pass hue instead of all those classes

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

  &.bookmark {
    width: 65px;
    height: 65px;
  }

  &.museum {
    background-color: hsl(333, 100%, 80%);
    border: 2px solid hsl(333, 100%, 75%);
  }

  &.collection {
    background-color: hsl(163, 90%, 68%);
    border: 2px solid hsl(163, 100%, 45%);
  }

  &.themes {
    width: 48px;
    height: 48px;
    background-color: hsl(273, 100%, 88%);
    border: 2px solid hsl(273, 100%, 80%);
    font-size: 0.6rem;
    text-align: center;
  }
`;
export default StyledShowMore;
