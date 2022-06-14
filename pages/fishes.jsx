import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import FishCard from '../components/FishCard';
import PageWrapper from '../components/PageWrapper';
import StyledHeader from '../components-styled/StyledHeader';
import { useSelector } from 'react-redux';
import { selectFishes } from '../features/fishes/fishSlice';
import StyledButton from '../components-styled/StyledButton';
import { useEffect, useState } from 'react';
import StyledDetailFlexWrapper from '../components-styled/StyledDetailFlexWrapper';

export default function FishesPage() {
  const { caught, donated, data: fishes } = useSelector(selectFishes);

  const [showCaught, setShowCaught] = useState(false);
  const [showDonated, setShowDonated] = useState(false);
  const [crittersToShow, setCrittersToShow] = useState([]);

  useEffect(() => {
    switch (true) {
      case showCaught:
        setCrittersToShow(
          caught.map(caughtID => fishes.find(({ id }) => id === caughtID))
        );
        break;

      case showDonated:
        setCrittersToShow(
          donated.map(donatedID => fishes.find(({ id }) => id === donatedID))
        );
        break;

      default:
        setCrittersToShow(fishes);
    }
  }, [fishes, donated, caught, showDonated, showCaught]);

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
        <StyledDetailFlexWrapper>
          <StyledButton
            className="donated"
            isActive={showDonated}
            onClick={toggleDonatedCards}
          >
            {donated.length}/{fishes.length}
          </StyledButton>
          <h1>Fishes</h1>
          <StyledButton
            className="caught"
            isActive={showCaught}
            onClick={toggleCaughtCards}
          >
            {caught.length}/{fishes.length}
          </StyledButton>
        </StyledDetailFlexWrapper>
      </StyledHeader>
      <StyledCardsWrapper>
        {crittersToShow?.map(fish => (
          <FishCard key={fish.id} fish={fish} />
        ))}
      </StyledCardsWrapper>
    </PageWrapper>
  );
}
