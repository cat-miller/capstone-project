import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import BugCard from '../components/BugCard';
import PageWrapper from '../components/PageWrapper';
import StyledHeader from '../components-styled/StyledHeader';
import { useSelector } from 'react-redux';
import { selectBugs } from '../features/bugs/bugSlice';
import StyledButton from '../components-styled/StyledButton';

export default function BugsPage() {
  const { caught, donated, data: bugs } = useSelector(selectBugs);

  return (
    <PageWrapper>
      <StyledHeader>
        <StyledButton className="donated">
          {donated.length}/{bugs.length}
        </StyledButton>
        Bugs
        <StyledButton className="caught">
          {caught.length}/{bugs.length}
        </StyledButton>
      </StyledHeader>
      <StyledCardsWrapper>
        {bugs?.map((bug, index) => (
          <BugCard index={index} key={bug.id} bug={bug} />
        ))}
      </StyledCardsWrapper>
    </PageWrapper>
  );
}
