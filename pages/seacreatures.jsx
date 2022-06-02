import useFetch from '../hooks/useFetch';
import { useState, useEffect } from 'react';
import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import SeaCreatureCard from '../components/SeaCreatureCard';
import StyledPageWrapper from '../components-styled/StyledPageWrapper';
import Navigation from '../components/Navigation';
import StyledHeader from '../components-styled/StyledHeader';

export default function SeaCreaturesPage() {
  const { data } = useFetch('https://acnhapi.com/v1/sea');
  const [seaCreatures, setSeaCreatures] = useState([]);

  useEffect(() => {
    if (!data) return;
    setSeaCreatures(Object.values(data));
  }, [data]);

  return (
    <StyledPageWrapper>
      <StyledHeader>Sea Creatures</StyledHeader>
      <StyledCardsWrapper>
        {seaCreatures?.map(
          (
            {
              id,
              name,
              image_uri: imageUri,
              'catch-phrase': catchPhrase,
              shadow,
              price,
              speed,
            },
            index
          ) => (
            <SeaCreatureCard
              index={index}
              key={id}
              name={name['name-EUen']}
              imageUri={imageUri}
              catchPhrase={catchPhrase}
              shadow={shadow}
              price={price}
              speed={speed}
              id={id}
            />
          )
        )}
      </StyledCardsWrapper>
      <Navigation />
    </StyledPageWrapper>
  );
}
