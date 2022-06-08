import useFetch from '../hooks/useFetch';
import { useEffect } from 'react';
import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import VillagerCard from '../components/VillagerCard';
import StyledPageWrapper from '../components-styled/StyledPageWrapper';
import Navigation from '../components/Navigation';
import StyledHeader from '../components-styled/StyledHeader';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectVillagers,
  setVillagers,
} from '../features/villagers/villagerSlice';
import StyledButton from '../components-styled/StyledButton';
import parseVillagers from '../services/parseVillagers';

export default function VillagersPage() {
  const { data } = useFetch('https://acnhapi.com/v1/villagers');

  const {
    favorites,
    neighbors,
    data: villagers,
  } = useSelector(selectVillagers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) return;
    dispatch(setVillagers(parseVillagers(data)));
  }, [data, dispatch]);

  return (
    <StyledPageWrapper>
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
      <Navigation />
    </StyledPageWrapper>
  );
}
