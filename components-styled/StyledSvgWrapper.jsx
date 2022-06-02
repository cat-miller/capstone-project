import styled from 'styled-components';
import StyledIconButton from './StyledIconButton';

const StyledSvgWrapper = styled.div`
  height: auto;
  width: 36px;
  fill: var(--color-navigation-icon);

  ${StyledIconButton} & {
    width: 16px;
    fill: var(--color-button);
  }
`;

export default StyledSvgWrapper;
