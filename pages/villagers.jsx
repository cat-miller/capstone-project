import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import VillagerCard from '../components/VillagerCard';
import PageWrapper from '../components/PageWrapper';
import StyledHeader from '../components-styled/StyledHeader';
import { useSelector } from 'react-redux';
import { selectVillagers } from '../features/villagers/villagerSlice';
import StyledButton from '../components-styled/StyledButton';
import { useEffect, useState } from 'react';
import StyledDetailFlexWrapper from '../components-styled/StyledDetailFlexWrapper';
import StyledSelection from '../components-styled/StyledSelection';

export default function VillagersPage() {
  const {
    favorites,
    neighbors,
    data: villagers,
  } = useSelector(selectVillagers);
  const [showNeighbors, setShowNeighbors] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [villagersToShow, setVillagersToShow] = useState([]);
  const [isAsc, setIsAsc] = useState(true);

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

  const sortName = () => {
    setVillagersToShow(
      [...villagersToShow].sort((villagerA, villagerB) => {
        const nameA = villagerA.name.toUpperCase();
        const nameB = villagerB.name.toUpperCase();
        if (isAsc) {
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        } else {
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
        }
      })
    );
    setIsAsc(!isAsc);
  };

  const selectPersonality = e => {
    const personality = e.target.value;
    console.log(personality);
    setVillagersToShow(
      [...villagers].filter(villager => {
        console.log(villager.personality);
        return villager.personality === personality || personality === 'all';
      })
    );
  };

  return (
    <PageWrapper>
      <StyledHeader>
        <StyledDetailFlexWrapper>
          <StyledButton
            className="favorite"
            isActive={showFavorites}
            onClick={toggleFavoriteCards}
          >
            {favorites.length}/{villagers.length}
          </StyledButton>
          <h1>Villagers</h1>
          <StyledButton
            className="neighbor"
            isActive={showNeighbors}
            onClick={toggleNeighborCards}
          >
            {neighbors.length}/10
          </StyledButton>
        </StyledDetailFlexWrapper>
        <StyledDetailFlexWrapper>
          <StyledButton onClick={sortName} className="sort">
            {isAsc ? 'A - Z' : 'Z - A'}
          </StyledButton>
          <StyledSelection name="species" id="species-select">
            <option value="">Select species</option>
            <option value="bear">Bear</option>
          </StyledSelection>
          <StyledSelection
            onChange={selectPersonality}
            name="personality"
            id="personality-select"
          >
            <option value="all">Select personality</option>
            <option value="Cranky">cranky</option>
            <option value="Jock">jock</option>
            <option value="Peppy">peppy</option>
            <option value="Snooty">snooty</option>
            <option value="Smug">smug</option>
            <option value="Normal">normal</option>
          </StyledSelection>
        </StyledDetailFlexWrapper>
      </StyledHeader>
      <StyledCardsWrapper>
        {villagersToShow?.map(villager => (
          <VillagerCard key={villager.id} villager={villager} />
        ))}
      </StyledCardsWrapper>
    </PageWrapper>
  );
}
