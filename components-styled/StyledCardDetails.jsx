import styled from 'styled-components';

const StyledCardDetails = styled.div`
  padding-top: 1rem;
  width: 100%;
  display: grid;
  grid-template-rows: min-content min-content 1fr;
  gap: 0.5rem;
  & ul {
    margin: 0;
  }
`;
export default StyledCardDetails;
