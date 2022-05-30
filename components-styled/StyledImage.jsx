import styled from 'styled-components';
import StyledDetailedCard from './StyledDetailedCard';
import StyledFishCard from './StyledFishCard';
import StyledCard from './StyledCard';

const StyledImage = styled.img`
  width: auto;
  height: 100%;
  border-radius: 50%;

  ${StyledDetailedCard} & {
    justify-self: center;
    width: 100%;
    height: auto;
    border-radius: var(--border-radius-inner);
  }

  ${StyledDetailedCard}, .fish & {
    justify-self: center;
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

  ${StyledCard}, .bug & {
    border-radius: var(--border-radius-inner);
  }

  ${StyledCard}, .seacreature & {
    border-radius: var(--border-radius-inner);
  }
`;

export default StyledImage;
