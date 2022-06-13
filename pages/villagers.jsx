import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import VillagerCard from '../components/VillagerCard';
import PageWrapper from '../components/PageWrapper';
import StyledHeader from '../components-styled/StyledHeader';
import { useSelector, useDispatch } from 'react-redux';
import { selectVillagers } from '../features/villagers/villagerSlice';
import StyledButton from '../components-styled/StyledButton';
import { useState } from 'react';

export default function VillagersPage() {
  const {
    favorites,
    neighbors,
    data: villagers,
  } = useSelector(selectVillagers);
  const [showNeighbors, setShowNeighbors] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [villagersToShow, setVillagersToShow] = useState(villagers);

  const dispatch = useDispatch();

  function toggleNeighborCards() {
    setShowNeighbors(!showNeighbors);
    if (showNeighbors) {
      setVillagersToShow(
        neighbors.map(neighborID =>
          villagers.find(({ id }) => id === neighborID)
        )
      );
    } else {
      setVillagersToShow(villagers);
    }
  }

  return (
    <PageWrapper>
      <StyledHeader>
        <StyledButton className="favorite" isActive={showFavorites}>
          {favorites.length}/{villagers.length}
        </StyledButton>
        Villagers
        <StyledButton
          isActive={showNeighbors}
          className="neighbor"
          onClick={toggleNeighborCards}
        >
          {neighbors.length}/10
        </StyledButton>
      </StyledHeader>
      <StyledCardsWrapper>
        {villagersToShow?.map(villager => (
          <VillagerCard key={villager.id} villager={villager} />
        ))}
      </StyledCardsWrapper>
    </PageWrapper>
  );
}
