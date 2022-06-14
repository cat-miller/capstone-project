import styled from 'styled-components';
import StyledHeader from './StyledHeader';

const StyledDetailFlexWrapper = styled.div`
  display: flex;

  ${StyledHeader} & {
    justify-content: space-around;
  }
`;

export default StyledDetailFlexWrapper;
