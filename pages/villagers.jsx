import useFetch from '../useFetch';
import { useState, useEffect } from 'react';
import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import VillagersCard from '../components/VillagerCard';

export default function VillagersPage() {
  const { data } = useFetch('https://acnhapi.com/v1/villagers');
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    if (!data) return;
    setVillagers(Object.values(data));
  }, [data]);

  return (
    <StyledCardsWrapper>
      {villagers?.map(
        (
          { id, name, personality, species, gender, image_uri: imageUri },
          index
        ) => (
          <VillagersCard
            index={index}
            key={id}
            name={name}
            personality={personality}
            species={species}
            gender={gender}
            imageUri={imageUri}
          />
        )
      )}
    </StyledCardsWrapper>
  );
}
