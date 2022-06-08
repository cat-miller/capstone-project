import useFetch from '../hooks/useFetch';
import { useState, useEffect } from 'react';
import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import VillagerCard from '../components/VillagerCard';
import StyledPageWrapper from '../components-styled/StyledPageWrapper';
import Navigation from '../components/Navigation';
import StyledHeader from '../components-styled/StyledHeader';
import { useSelector } from 'react-redux';
import { selectVillagers } from '../features/villagers/villagerSlice';
import StyledButton from '../components-styled/StyledButton';

export default function VillagersPage() {
  const { data } = useFetch('https://acnhapi.com/v1/villagers');
  const [villagers, setVillagers] = useState([]);
  const { favorites, neighbors } = useSelector(selectVillagers);

  useEffect(() => {
    if (!data) return;
    setVillagers(Object.values(data));
  }, [data]);

  return (
    <StyledPageWrapper>
      <StyledHeader>
        <StyledButton className="favorite">
          {favorites.length}/{villagers.length}
        </StyledButton>
        Villagers
        <StyledButton className="neighbor">{neighbors.length}/10</StyledButton>
      </StyledHeader>
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
              id={id}
              name={name['name-EUen'].toUpperCase()}
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
      <Navigation />
    </StyledPageWrapper>
  );
}
