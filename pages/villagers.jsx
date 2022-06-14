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
import addFilter from '../services/addFilter';
import { species } from '../constants/species';
import { personalities } from '../constants/personalities';

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
  const [filter, setFilter] = useState({ personality: null, species: null });

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
    if (personality === 'all') {
      return setFilter({ ...filter, personality: null });
    }
    setFilter({ ...filter, personality });
  };

  const selectSpecies = e => {
    const species = e.target.value;
    if (species === 'all') {
      return setFilter({ ...filter, species: null });
    }
    setFilter({ ...filter, species });
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

          <StyledSelection
            onChange={selectSpecies}
            name="species"
            id="species-select"
          >
            {species.map(specie => (
              <option key={specie.value} value={specie.value}>
                {specie.label}
              </option>
            ))}
          </StyledSelection>

          <StyledSelection
            onChange={selectPersonality}
            name="personality"
            id="personality-select"
          >
            {personalities.map(personality => (
              <option key={personality.value} value={personality.value}>
                {personality.label}
              </option>
            ))}
          </StyledSelection>
        </StyledDetailFlexWrapper>
      </StyledHeader>
      <StyledCardsWrapper>
        {addFilter(villagersToShow, filter).map(villager => (
          <VillagerCard key={villager.id} villager={villager} />
        ))}
      </StyledCardsWrapper>
    </PageWrapper>
  );
}
