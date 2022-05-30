import StyledImage from '../components-styled/StyledImage';
import StyledCard from '../components-styled/StyledCard';
import { useState } from 'react';
import StyledOverlay from '../components-styled/StyledOverlay';
import BugDetailedCard from './BugDetailedCard';

export default function BugCard({
  name,
  imageUri,
  index,
  catchPhrase,
  location,
  rarity,
  price,
  priceFlick,
}) {
  const hue = index + 100;
  const [showDetailedCard, setShowDetailedCard] = useState(false);

  function detailedCard() {
    return (
      <StyledOverlay>
        <BugDetailedCard
          name={name}
          imageUri={imageUri}
          catchPhrase={catchPhrase}
          price={price}
          priceFlick={priceFlick}
          rarity={rarity}
          location={location}
          hue={hue}
          onClick={setShowDetailedCard}
        />
      </StyledOverlay>
    );
  }

  return (
    <StyledCard
      className="bug"
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
        <h2>{name}</h2>
        <ul>
          <li>Rarity: {rarity}</li>
          <li>Location: {location}</li>
        </ul>
        {showDetailedCard && detailedCard()}
      </div>
    </StyledCard>
  );
}
