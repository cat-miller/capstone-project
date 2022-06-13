import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import FishCard from '../components/FishCard';
import PageWrapper from '../components/PageWrapper';
import StyledHeader from '../components-styled/StyledHeader';
import { useSelector } from 'react-redux';
import { selectFishes } from '../features/fishes/fishSlice';
import StyledButton from '../components-styled/StyledButton';
import { useEffect, useState } from 'react';

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
        <StyledButton
          className="donated"
          isActive={showDonated}
          onClick={toggleDonatedCards}
        >
          {donated.length}/{fishes.length}
        </StyledButton>
        Fishes
        <StyledButton
          className="caught"
          isActive={showCaught}
          onClick={toggleCaughtCards}
        >
          {caught.length}/{fishes.length}
        </StyledButton>
      </StyledHeader>
      <StyledCardsWrapper>
        {crittersToShow?.map(fish => (
          <FishCard key={fish.id} fish={fish} />
        ))}
      </StyledCardsWrapper>
    </PageWrapper>
  );
}
