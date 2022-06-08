import useFetch from '../hooks/useFetch';
import { useState, useEffect } from 'react';
import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import FishCard from '../components/FishCard';
import StyledPageWrapper from '../components-styled/StyledPageWrapper';
import Navigation from '../components/Navigation';
import StyledHeader from '../components-styled/StyledHeader';
import { useSelector } from 'react-redux';
import { selectFishes } from '../features/fishes/fishSlice';
import StyledButton from '../components-styled/StyledButton';

export default function FishesPage() {
  const { data } = useFetch('https://acnhapi.com/v1/fish');
  const [fishes, setFishes] = useState([]);
  const { caught, donated } = useSelector(selectFishes);

  useEffect(() => {
    if (!data) return;
    setFishes(Object.values(data));
  }, [data]);

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
