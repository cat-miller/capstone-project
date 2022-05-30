import styled from 'styled-components';
import StyledDetailedCard from './StyledDetailedCard';

const StyledSpan = styled.span`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  border-radius: 999px;
  padding: 0.25rem 0.6rem;
  letter-spacing: 0.7px;

  ${StyledDetailedCard} & {
    position: absolute;
    top: 2rem;
    left: 2rem;
  }

  ${StyledDetailedCard}, .fish & {
    position: absolute;
    top: 8.5rem;
    left: 1.5rem;
    right: 1.5rem;
    background-color: hsl(50, 100%, 65%);
    border-radius: 10px;
  }

  ${StyledDetailedCard}, .seacreature & {
    position: absolute;
    top: 15.2rem;
    left: 1.5rem;
    right: 1.5rem;
    background-color: hsl(140, 100%, 65%);
    border-radius: 10px;
  }

  ${StyledDetailedCard}, .bug & {
    position: absolute;
    top: 14.5rem;
    left: 1.5rem;
    right: 1.5rem;
    background-color: hsl(30, 100%, 65%);
    border-radius: 10px;
  }
`;

export default StyledSpan;
