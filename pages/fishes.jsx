import useFetch from '../hooks/useFetch';
import { useState, useEffect } from 'react';
import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import FishCard from '../components/FishCard';
import StyledPageWrapper from '../components-styled/StyledPageWrapper';
import Navigation from '../components/Navigation';
import StyledHeader from '../components-styled/StyledHeader';

export default function FishesPage() {
  const { data } = useFetch('https://acnhapi.com/v1/fish');
  const [fishes, setFishes] = useState([]);

  useEffect(() => {
    if (!data) return;
    setFishes(Object.values(data));
  }, [data]);

  return (
    <StyledPageWrapper>
      <StyledHeader>Fishes</StyledHeader>
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
              name={name['name-EUen']}
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
