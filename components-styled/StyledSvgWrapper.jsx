import styled from 'styled-components';
import StyledIconButton from './StyledIconButton';
import StyledShowMore from './StyledShowMore';

const StyledSvgWrapper = styled.div`
  height: auto;
  width: 36px;
  // fill: var(--color-navigation-icon);
  display: flex;
  justify-content: center;
  align-items: center;

  ${StyledIconButton} & > svg {
    width: 24px;
    // fill: inherit;
  }

  ${StyledShowMore} & {
    display: block;
    fill: white;
  }

  & > svg {
    width: 36px;
  }

  &.navigation > svg {
    fill: var(--color-navigation-icon);
  }
`;

export default StyledSvgWrapper;
