import styled from 'styled-components';

const StyledOverviewList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  max-width: 19.5rem;
  padding: 0.6rem;
  border-radius: var(--border-radius);

  &.neighbors {
    background-color: hsl(273, 100%, 95%);
    border: 2px solid hsl(273, 100%, 80%);
    box-shadow: 0 4px 15px hsla(273, 100%, 73%, 0.53);
  }

  &.favorites {
    background-color: hsl(334, 100%, 95%);
    border: 2px solid hsl(334, 100%, 80%);
    box-shadow: 0 4px 15px hsla(334, 100%, 73%, 0.53);
  }

  &.seacreatures {
    background-color: hsl(250, 100%, 95%);
    border: 2px solid hsl(250, 100%, 80%);
    box-shadow: 0 4px 15px hsla(250, 100%, 73%, 0.53);
  }

  &.fishes {
    background-color: hsl(200, 100%, 95%);
    border: 2px solid hsl(200, 100%, 80%);
    box-shadow: 0 4px 15px hsla(200, 100%, 73%, 0.53);
  }

  &.bugs {
    background-color: hsl(100, 100%, 95%);
    border: 2px solid hsl(100, 100%, 80%);
    box-shadow: 0 4px 15px hsla(100, 100%, 73%, 0.53);
  }

  &.museum {
    justify-content: space-around;
    background-color: hsl(193, 100%, 95%);
    border: 2px solid hsl(193, 100%, 80%);
    box-shadow: 0 4px 15px hsla(193, 100%, 73%, 0.53);
  }

  &.collection {
    justify-content: space-around;
    background-color: hsl(153, 100%, 95%);
    border: 2px solid hsl(153, 100%, 45%);
    box-shadow: 0 4px 15px hsla(153, 100%, 73%, 0.53);
  }

  &.themes {
    justify-content: space-around;
    background-color: hsl(353, 100%, 95%);
    border: 2px solid hsl(353, 100%, 80%);
    box-shadow: 0 4px 15px hsla(353, 100%, 73%, 0.53);
  }

  &.passport {
    justify-content: space-around;
    background-color: hsl(137, 60%, 95%);
    border: 2px solid hsl(273, 100%, 85%);
    box-shadow: 0 4px 15px hsla(273, 100%, 73%, 0.53);
  }
`;

export default StyledOverviewList;
