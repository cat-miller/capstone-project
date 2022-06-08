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

export default function FishesPage() {
  const { data } = useFetch('https://acnhapi.com/v1/fish');

  const { caught, donated, data: fishes } = useSelector(selectFishes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) return;
    dispatch(setFishes(Object.values(data)));
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
        {fishes?.map(
          (
            {
              id,
              name,
              image_uri: imageUri,
              'catch-phrase': catchPhrase,
              shadow,
              price,
              availability,
              'price-cj': priceCJ,
            },
            index
          ) => (
            <FishCard
              index={index}
              key={id}
              id={id}
              name={name['name-EUen'].toUpperCase()}
              imageUri={imageUri}
              catchPhrase={catchPhrase}
              shadow={shadow}
              price={price}
              priceCJ={priceCJ}
              location={availability['location']}
              rarity={availability['rarity']}
            />
          )
        )}
      </StyledCardsWrapper>
      <Navigation />
    </StyledPageWrapper>
  );
}
