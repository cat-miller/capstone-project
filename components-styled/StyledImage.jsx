import styled from 'styled-components';
import StyledDetailedCard from './StyledDetailedCard';

const StyledImage = styled.img`
  width: auto;
  height: 100%;
  border-radius: 50%;

  ${StyledDetailedCard} & {
    justify-self: center;
    align-self: center;
    width: 100%;
    height: auto;
    border-radius: var(--border-radius-inner);
  }
`;

export default StyledImage;
