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
  birthday,
  catchPhrase,
  bubbleColor,
  textColor,
}) {
  const { ['name-EUen']: characterName } = name;
  const hue = (index % 360) * 18;
  const [detailedCard, setDetailedCard] = useState(false);

  function showDetailedCard() {
    return (
      <StyledOverlay>
        <VillagerDetailedCard
          name={characterName}
          personality={personality}
          species={species}
          gender={gender}
          imageUri={imageUri}
          index={index}
          hue={hue}
          birthday={birthday}
          catchPhrase={catchPhrase}
          bubbleColor={bubbleColor}
          textColor={textColor}
          onClick={setDetailedCard}
        />
      </StyledOverlay>
    );
  }

  return (
    <StyledCard
      style={{
        backgroundColor: `hsl(${hue}, 100%, 95%)`,
        border: `2px solid hsl(${hue}, 100%, 80%)`,
        boxShadow: `0px 4px 15px hsla(${hue}, 100%, 73%, 0.53)`,
      }}
      onClick={() => setDetailedCard(true)}
    >
      <StyledImage
        style={{ border: `2px solid hsl(${hue}, 100%, 80%)` }}
        src={imageUri}
        alt=""
      />
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
