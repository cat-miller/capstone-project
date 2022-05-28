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
`;

export default StyledSpan;
