import StyledImage from '../components-styled/StyledImage';
import StyledCard from '../components-styled/StyledCard';
import { useState } from 'react';
import StyledOverlay from '../components-styled/StyledOverlay';
import VillagerDetailedCard from './VillagerDetailedCard';
import StyledDetails from '../components-styled/StyledDetails';

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
  const hue = (index % 360) * 18;
  const [showDetailedCard, setShowDetailedCard] = useState(false);

  function detailedCard() {
    return (
      <StyledOverlay>
        <VillagerDetailedCard
          name={name}
          personality={personality}
          species={species}
          gender={gender}
          imageUri={imageUri}
          hue={hue}
          birthday={birthday}
          catchPhrase={catchPhrase}
          bubbleColor={bubbleColor}
          textColor={textColor}
          onClick={setShowDetailedCard}
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
      onClick={() => setShowDetailedCard(true)}
    >
      <StyledImage
        style={{ border: `2px solid hsl(${hue}, 100%, 80%)` }}
        src={imageUri}
        alt=""
      />
      <StyledDetails>
        <h2>{name.toUpperCase()}</h2>
        <ul>
          <li>{personality}</li>
          <li>{gender}</li>
          <li>{species}</li>
        </ul>
        {showDetailedCard && detailedCard()}
      </StyledDetails>
    </StyledCard>
  );
}
