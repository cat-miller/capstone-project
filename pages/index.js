import StyledPageWrapper from '../components-styled/StyledPageWrapper';
import Navigation from '../components/Navigation';
import StyledHeader from '../components-styled/StyledHeader';
import StyledButton from '../components-styled/StyledButton';

export default function Home({ toggleTheme }) {
  return (
    <StyledPageWrapper>
      <StyledHeader>ACNH Journal</StyledHeader>
      <StyledButton className="themebutton" onClick={toggleTheme}>
        Switch Theme
      </StyledButton>
      <Navigation />
    </StyledPageWrapper>
  );
}
