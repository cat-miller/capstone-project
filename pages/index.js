import PageWrapper from '../components/PageWrapper';
import StyledHeader from '../components-styled/StyledHeader';
import StyledButton from '../components-styled/StyledButton';

export default function Home({ toggleTheme }) {
  return (
    <PageWrapper>
      <StyledHeader>Animal Crossing Journal</StyledHeader>
      <StyledButton className="themebutton" onClick={toggleTheme}>
        Switch Theme
      </StyledButton>
    </PageWrapper>
  );
}
