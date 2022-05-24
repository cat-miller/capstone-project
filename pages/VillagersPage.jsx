import useFetch from '../useFetch';
import { useState, useEffect } from 'react';
import CardsWrapper from '../components/CardsWrapper';
import VillagersCard from '../components/VillagerCard';

export default function VillagersPage() {
  const { data } = useFetch('https://acnhapi.com/v1/villagers');
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    if (!data) return;
    setVillagers(Object.values(data));
  }, [data]);

  return (
    <CardsWrapper>
      {villagers?.map(
        ({ id, name, personality, species, gender, image_uri: imageUri }) => (
          <VillagersCard
            key={id}
            name={name}
            personality={personality}
            species={species}
            gender={gender}
            imageUri={imageUri}
          />
        )
      )}
    </CardsWrapper>
  );
}
