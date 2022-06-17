import styled from 'styled-components';
import StyledIconButton from './StyledIconButton';
import StyledShowMore from './StyledShowMore';

const StyledSvgWrapper = styled.div`
  height: auto;
  width: 36px;
  fill: var(--color-navigation-icon);

  ${StyledIconButton} & {
    width: 24px;
    fill: inherit;
  }

  ${StyledShowMore} & {
    fill: white;
  }
`;

export default StyledSvgWrapper;
