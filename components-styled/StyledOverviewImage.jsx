import styled from 'styled-components';

const StyledOverviewImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  padding: 0.4rem;

  &.neighbors {
    background-color: hsl(273, 100%, 88%);
    border: 2px solid hsl(273, 100%, 80%);
  }

  &.favorites {
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
export default StyledOverviewImage;
