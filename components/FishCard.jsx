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
  const [showDetailedCard, setShowDetailedCard] = useState(false);

  function detailedCard() {
    return (
      <StyledOverlay>
        <FishDetailedCard
          name={name}
          imageUri={imageUri}
          catchPhrase={catchPhrase}
          shadow={shadow}
          price={price}
          priceCJ={priceCJ}
          rarity={rarity}
          location={location}
          hue={hue}
          onClick={setShowDetailedCard}
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
      onClick={() => setShowDetailedCard(true)}
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
        <h2>{name.toUpperCase()}</h2>
        <ul>
          <li>{rarity}</li>
          <li>{location}</li>
        </ul>
        {showDetailedCard && detailedCard()}
      </div>
    </StyledFishCard>
  );
}
