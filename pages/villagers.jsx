import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import VillagerCard from '../components/VillagerCard';
import PageWrapper from '../components/PageWrapper';
import StyledHeader from '../components-styled/StyledHeader';
import { useSelector } from 'react-redux';
import { selectVillagers } from '../features/villagers/villagerSlice';
import StyledButton from '../components-styled/StyledButton';

export default function VillagersPage() {
  const {
    favorites,
    neighbors,
    data: villagers,
  } = useSelector(selectVillagers);

  return (
    <PageWrapper>
      <StyledHeader>
        <StyledButton className="favorite">
          {favorites.length}/{villagers.length}
        </StyledButton>
        Villagers
        <StyledButton className="neighbor">{neighbors.length}/10</StyledButton>
      </StyledHeader>
      <StyledCardsWrapper>
        {villagers?.map((villager, index) => (
          <VillagerCard index={index} key={villager.id} villager={villager} />
        ))}
      </StyledCardsWrapper>
    </PageWrapper>
  );
}
