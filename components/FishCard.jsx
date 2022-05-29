import StyledImage from '../components-styled/StyledImage';
import StyledFishCard from '../components-styled/StyledFishCard';
import { useState } from 'react';
import StyledOverlay from '../components-styled/StyledOverlay';
import FishDetailedCard from './FishDetailedCard';

export default function FishCard({
  name,
  imageUri,
  index,
  catchPhrase,
  shadow,
  price,
  location,
  rarity,
  priceCJ,
}) {
  const hue = index + 200;
  const [detailedCard, setDetailedCard] = useState(false);

  function showDetailedCard() {
    return (
      <StyledOverlay>
        <FishDetailedCard
          name={name}
          imageUri={imageUri}
          index={index}
          catchPhrase={catchPhrase}
          shadow={shadow}
          price={price}
          priceCJ={priceCJ}
          rarity={rarity}
          location={location}
          hue={hue}
          onClick={setDetailedCard}
        />
      </StyledOverlay>
    );
  }

  return (
    <StyledFishCard
      style={{
        backgroundColor: `hsl(${hue}, 100%, 95%)`,
        border: `2px solid hsl(${hue}, 100%, 80%)`,
        boxShadow: `0px 4px 15px hsla(${hue}, 100%, 73%, 0.53)`,
      }}
      onClick={() => setDetailedCard(true)}
    >
      <StyledImage
        style={{
          border: `2px solid hsl(${hue}, 100%, 80%)`,
          backgroundColor: `hsl(${hue}, 100%, 88%)`,
        }}
        src={imageUri}
        alt=""
      />
      <div>
        <h2>{name}</h2>
        <ul>
          <li>Rarity: {rarity}</li>
          <li>Location: {location}</li>
        </ul>
        {detailedCard && showDetailedCard()}
      </div>
    </StyledFishCard>
  );
}
