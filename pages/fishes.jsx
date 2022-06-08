import useFetch from '../hooks/useFetch';
import { useEffect } from 'react';
import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import FishCard from '../components/FishCard';
import StyledPageWrapper from '../components-styled/StyledPageWrapper';
import Navigation from '../components/Navigation';
import StyledHeader from '../components-styled/StyledHeader';
import { useSelector, useDispatch } from 'react-redux';
import { selectFishes, setFishes } from '../features/fishes/fishSlice';
import StyledButton from '../components-styled/StyledButton';
import parseFishes from '../services/parseFishes';

export default function FishesPage() {
  const { data } = useFetch('https://acnhapi.com/v1/fish');

  const { caught, donated, data: fishes } = useSelector(selectFishes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) return;
    dispatch(setFishes(parseFishes(Object.values(data))));
  }, [data, dispatch]);

  return (
    <StyledPageWrapper>
      <StyledHeader>
        <StyledButton className="donated">
          {donated.length}/{fishes.length}
        </StyledButton>
        Fishes
        <StyledButton className="caught">
          {caught.length}/{fishes.length}
        </StyledButton>
      </StyledHeader>
      <StyledCardsWrapper>
        {fishes?.map((fish, index) => (
          <FishCard index={index} key={fish.id} fish={fish} />
        ))}
      </StyledCardsWrapper>
      <Navigation />
    </StyledPageWrapper>
  );
}
