import styled from 'styled-components';
import StyledDetailedCard from './StyledDetailedCard';
import StyledFishCard from './StyledFishCard';

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

  ${StyledDetailedCard}, .fish & {
    justify-self: center;
    align-self: start;
    width: 100%;
    height: auto;
    border-radius: var(--border-radius-inner);
  }
  ${StyledFishCard} & {
    justify-self: center;
    align-self: start;
    width: 100%;
    height: auto;
    border-radius: var(--border-radius-inner);
  }
`;

export default StyledImage;
