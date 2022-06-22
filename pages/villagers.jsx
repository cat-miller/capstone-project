import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import VillagerCard from '../components/VillagerCard';
import PageWrapper from '../components/PageWrapper';
import StyledHeader from '../components-styled/StyledHeader';
import { useDispatch, useSelector } from 'react-redux';
import { selectVillagers, setView } from '../features/villagers/villagerSlice';
import StyledButton from '../components-styled/StyledButton';
import { useEffect, useState } from 'react';
import StyledDetailFlexWrapper from '../components-styled/StyledDetailFlexWrapper';
import StyledSelection from '../components-styled/StyledSelection';
import addFilter from '../services/addFilter';
import { species } from '../constants/species';
import { personalities } from '../constants/personalities';
import { sortName } from '../services/sorting';

export default function VillagersPage() {
  const dispatch = useDispatch();
  const {
    favorites,
    neighbors,
    data: villagers,
    view: { showFavorites, showNeighbors },
  } = useSelector(selectVillagers);

  const [villagersToShow, setVillagersToShow] = useState([]);
  const [isAscAlph, setIsAscAlph] = useState(true);
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
    dispatch(setView({ showFavorites: false, showNeighbors: !showNeighbors }));
  }

  function toggleFavoriteCards() {
    dispatch(setView({ showNeighbors: false, showFavorites: !showFavorites }));
  }

  const sortByName = () => {
    setVillagersToShow(
      [...villagersToShow].sort((villagerA, villagerB) =>
        sortName(villagerA.name, villagerB.name, isAscAlph)
      )
    );
    setIsAscAlph(!isAscAlph);
  };

  const selectPersonality = event => {
    const personality = event.target.value;
    personality === 'all'
      ? setFilter({ ...filter, personality: null })
      : setFilter({ ...filter, personality });
  };

  const selectSpecies = event => {
    const species = event.target.value;
    species === 'all'
      ? setFilter({ ...filter, species: null })
      : setFilter({ ...filter, species });
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
          <StyledButton onClick={sortByName} className="sort">
            {isAscAlph ? 'A - Z' : 'Z - A'}
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
