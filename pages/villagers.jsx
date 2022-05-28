import useFetch from '../hooks/useFetch';
import { useState, useEffect } from 'react';
import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import VillagerCard from '../components/VillagerCard';
import StyledPageWrapper from '../components-styled/StyledPageWrapper';

export default function VillagersPage() {
  const { data } = useFetch('https://acnhapi.com/v1/villagers');
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    if (!data) return;
    setVillagers(Object.values(data));
  }, [data]);

  return (
    <StyledPageWrapper>
      <StyledCardsWrapper>
        {villagers?.map(
          (
            {
              id,
              name,
              personality,
              species,
              gender,
              image_uri: imageUri,
              birthday,
              'catch-phrase': catchPhrase,
              'bubble-color': bubbleColor,
              'text-color': textColor,
            },
            index
          ) => (
            <VillagerCard
              index={index}
              key={id}
              name={name}
              personality={personality}
              species={species}
              gender={gender}
              imageUri={imageUri}
              birthday={birthday}
              catchPhrase={catchPhrase}
              bubbleColor={bubbleColor}
              textColor={textColor}
            />
          )
        )}
      </StyledCardsWrapper>
    </StyledPageWrapper>
  );
}
