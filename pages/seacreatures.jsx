import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import SeaCreatureCard from '../components/SeaCreatureCard';
import PageWrapper from '../components/PageWrapper';
import StyledHeader from '../components-styled/StyledHeader';
import StyledButton from '../components-styled/StyledButton';
import { useSelector } from 'react-redux';
import { selectSeaCreatures } from '../features/seaCreatures/seaCreatureSlice';

export default function SeaCreaturesPage() {
  const {
    caught,
    donated,
    data: seaCreatures,
  } = useSelector(selectSeaCreatures);

  return (
    <PageWrapper>
      <StyledHeader>
        <StyledButton className="donated">
          {donated.length}/{seaCreatures.length}
        </StyledButton>
        Sea Creatures
        <StyledButton className="caught">
          {caught.length}/{seaCreatures.length}
        </StyledButton>
      </StyledHeader>
      <StyledCardsWrapper>
        {seaCreatures?.map((seaCreature, index) => (
          <SeaCreatureCard
            index={index}
            key={seaCreature.id}
            seaCreature={seaCreature}
          />
        ))}
      </StyledCardsWrapper>
    </PageWrapper>
  );
}
