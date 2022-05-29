import useFetch from '../hooks/useFetch';
import { useState, useEffect } from 'react';
import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import FishCard from '../components/FishCard';
import StyledPageWrapper from '../components-styled/StyledPageWrapper';

export default function VillagersPage() {
  const { data } = useFetch('https://acnhapi.com/v1/fish');
  const [fish, setFish] = useState([]);

  useEffect(() => {
    if (!data) return;
    setFish(Object.values(data));
  }, [data]);

  return (
    <StyledPageWrapper>
      <StyledCardsWrapper>
        {fish?.map(
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
    </StyledPageWrapper>
  );
}
