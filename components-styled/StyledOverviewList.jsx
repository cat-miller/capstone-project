import styled from 'styled-components';

const StyledOverviewList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  max-width: 19.5rem;
  padding: 0.6rem;
  border-radius: var(--border-radius);

  &.neighbors {
    background-color: hsl(263, 100%, 95%);
    border: 2px solid hsl(263, 100%, 80%);
    box-shadow: 0 4px 15px hsla(263, 100%, 73%, 0.53);
  }

  &.favorites {
    background-color: hsl(334, 100%, 95%);
    border: 2px solid hsl(334, 100%, 80%);
    box-shadow: 0 4px 15px hsla(334, 100%, 73%, 0.53);
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
    background-color: hsl(278, 100%, 95%);
    border: 2px solid hsl(278, 100%, 80%);
    box-shadow: 0 4px 15px hsla(278, 100%, 73%, 0.53);
  }

  &.passport {
    justify-content: space-around;
    background-color: hsl(137, 60%, 95%);
    border: 2px solid hsl(153, 70%, 50%);
    box-shadow: 0 4px 15px hsla(153, 100%, 73%, 0.53);
  }
`;

export default StyledOverviewList;
