import useFetch from '../hooks/useFetch';
import { useEffect } from 'react';
import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import SeaCreatureCard from '../components/SeaCreatureCard';
import StyledPageWrapper from '../components-styled/StyledPageWrapper';
import Navigation from '../components/Navigation';
import StyledHeader from '../components-styled/StyledHeader';
import StyledButton from '../components-styled/StyledButton';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSeaCreatures,
  setSeaCreatures,
} from '../features/seaCreatures/seaCreatureSlice';
import parseSeaCreatures from '../services/parseSeaCreatures';

export default function SeaCreaturesPage() {
  const { data } = useFetch('https://acnhapi.com/v1/sea');

  const {
    caught,
    donated,
    data: seaCreatures,
  } = useSelector(selectSeaCreatures);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) return;
    dispatch(setSeaCreatures(parseSeaCreatures(data)));
  }, [data, dispatch]);

  return (
    <StyledPageWrapper>
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
      <Navigation />
    </StyledPageWrapper>
  );
}
