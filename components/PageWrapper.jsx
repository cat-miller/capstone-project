import StyledPageWrapper from '../components-styled/StyledPageWrapper';
import Navigation from '../components/Navigation';

export default function PageWrapper({ children }) {
  return (
    <StyledPageWrapper>
      {children}
      <Navigation />
    </StyledPageWrapper>
  );
}
