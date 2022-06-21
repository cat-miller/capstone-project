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

  &.favorites {
    background-color: hsl(343, 100%, 88%);
    border: 2px solid hsl(343, 100%, 75%);
  }

  &.neighbors {
    background-color: hsl(263, 100%, 88%);
    border: 2px solid hsl(263, 100%, 80%);
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
    font-size: 0.9rem;
    text-align: center;
  }

  &.museum {
    background-color: hsl(193, 100%, 80%);
    border: 2px solid hsl(193, 100%, 75%);
  }

  &.collection {
    background-color: hsl(163, 90%, 68%);
    border: 2px solid hsl(163, 100%, 45%);
  }
`;
export default StyledShowMore;
