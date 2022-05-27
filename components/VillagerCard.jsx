import StyledImage from '../components-styled/StyledImage';
import StyledCard from '../components-styled/StyledCard';
import { useState } from 'react';
import StyledOverlay from '../components-styled/StyledOverlay';
import VillagerDetailedCard from './VillagerDetailedCard';

export default function VillagerCard({
  name,
  personality,
  species,
  gender,
  imageUri,
  index,
}) {
  const hue = (index % 360) * 18;
  const [detailedCard, setDetailedCard] = useState(false);

  function showDetailedCard() {
    return (
      <StyledOverlay>
        <VillagerDetailedCard
          name={name}
          personality={personality}
          species={species}
          gender={gender}
          imageUri={imageUri}
          index={index}
        />
      </StyledOverlay>
    );
  }

  return (
    <StyledCard hue={hue} onClick={() => setDetailedCard(true)}>
      <StyledImage hue={hue} src={imageUri} alt="" />
      <div>
        <h2>{name['name-EUen']}</h2>
        <ul>
          <li>{personality}</li>
          <li>{gender}</li>
          <li>{species}</li>
        </ul>
        {detailedCard && showDetailedCard()}
      </div>
    </StyledCard>
  );
}
