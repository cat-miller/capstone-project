import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import VillagerCard from '../components/VillagerCard';
import PageWrapper from '../components/PageWrapper';
import StyledHeader from '../components-styled/StyledHeader';
import { useSelector, useDispatch } from 'react-redux';
import { selectVillagers } from '../features/villagers/villagerSlice';
import StyledButton from '../components-styled/StyledButton';
import { useEffect, useState } from 'react';

export default function VillagersPage() {
  const {
    favorites,
    neighbors,
    data: villagers,
  } = useSelector(selectVillagers);
  const [showNeighbors, setShowNeighbors] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [villagersToShow, setVillagersToShow] = useState([]);

  useEffect(() => {
    switch (true) {
      case showNeighbors:
        setVillagersToShow(
          neighbors.map(neighborID =>
            villagers.find(({ id }) => id === neighborID)
          )
        );
        break;

      case showFavorites:
        setVillagersToShow(
          favorites.map(favoriteID =>
            villagers.find(({ id }) => id === favoriteID)
          )
        );
        break;

      default:
        setVillagersToShow(villagers);
    }
  }, [villagers, favorites, neighbors, showNeighbors, showFavorites]);

  function toggleNeighborCards() {
    setShowFavorites(false);
    setShowNeighbors(!showNeighbors);
  }

  function toggleFavoriteCards() {
    setShowNeighbors(false);
    setShowFavorites(!showFavorites);
  }

  return (
    <PageWrapper>
      <StyledHeader>
        <StyledButton
          className="favorite"
          isActive={showFavorites}
          onClick={toggleFavoriteCards}
        >
          {favorites.length}/{villagers.length}
        </StyledButton>
        Villagers
        <StyledButton
          className="neighbor"
          isActive={showNeighbors}
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
