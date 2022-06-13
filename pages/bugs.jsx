import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import BugCard from '../components/BugCard';
import PageWrapper from '../components/PageWrapper';
import StyledHeader from '../components-styled/StyledHeader';
import { useSelector } from 'react-redux';
import { selectBugs } from '../features/bugs/bugSlice';
import StyledButton from '../components-styled/StyledButton';
import { useEffect, useState } from 'react';

export default function BugsPage() {
  const { caught, donated, data: bugs } = useSelector(selectBugs);
  const [showCaught, setShowCaught] = useState(false);
  const [showDonated, setShowDonated] = useState(false);
  const [crittersToShow, setCrittersToShow] = useState([]);

  useEffect(() => {
    switch (true) {
      case showCaught:
        setCrittersToShow(
          caught.map(caughtID => bugs.find(({ id }) => id === caughtID))
        );
        break;

      case showDonated:
        setCrittersToShow(
          donated.map(donatedID => bugs.find(({ id }) => id === donatedID))
        );
        break;

      default:
        setCrittersToShow(bugs);
    }
  }, [bugs, donated, caught, showDonated, showCaught]);

  function toggleCaughtCards() {
    setShowDonated(false);
    setShowCaught(!showCaught);
  }

  function toggleDonatedCards() {
    setShowCaught(false);
    setShowDonated(!showDonated);
  }

  return (
    <PageWrapper>
      <StyledHeader>
        <StyledButton
          className="donated"
          isActive={showDonated}
          onClick={toggleDonatedCards}
        >
          {donated.length}/{bugs.length}
        </StyledButton>
        Bugs
        <StyledButton
          className="caught"
          isActive={showCaught}
          onClick={toggleCaughtCards}
        >
          {caught.length}/{bugs.length}
        </StyledButton>
      </StyledHeader>
      <StyledCardsWrapper>
        {crittersToShow?.map(bug => (
          <BugCard key={bug.id} bug={bug} />
        ))}
      </StyledCardsWrapper>
    </PageWrapper>
  );
}
