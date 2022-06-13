import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import SeaCreatureCard from '../components/SeaCreatureCard';
import PageWrapper from '../components/PageWrapper';
import StyledHeader from '../components-styled/StyledHeader';
import StyledButton from '../components-styled/StyledButton';
import { useSelector } from 'react-redux';
import { selectSeaCreatures } from '../features/seaCreatures/seaCreatureSlice';
import { useEffect, useState } from 'react';

export default function SeaCreaturesPage() {
  const {
    caught,
    donated,
    data: seaCreatures,
  } = useSelector(selectSeaCreatures);

  const [showCaught, setShowCaught] = useState(false);
  const [showDonated, setShowDonated] = useState(false);
  const [crittersToShow, setCrittersToShow] = useState([]);

  useEffect(() => {
    switch (true) {
      case showCaught:
        setCrittersToShow(
          caught.map(caughtID => seaCreatures.find(({ id }) => id === caughtID))
        );
        break;

      case showDonated:
        setCrittersToShow(
          donated.map(donatedID =>
            seaCreatures.find(({ id }) => id === donatedID)
          )
        );
        break;

      default:
        setCrittersToShow(seaCreatures);
    }
  }, [seaCreatures, donated, caught, showDonated, showCaught]);

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
          {donated.length}/{seaCreatures.length}
        </StyledButton>
        Sea Creatures
        <StyledButton
          className="caught"
          isActive={showCaught}
          onClick={toggleCaughtCards}
        >
          {caught.length}/{seaCreatures.length}
        </StyledButton>
      </StyledHeader>
      <StyledCardsWrapper>
        {crittersToShow?.map(seaCreature => (
          <SeaCreatureCard key={seaCreature.id} seaCreature={seaCreature} />
        ))}
      </StyledCardsWrapper>
    </PageWrapper>
  );
}
