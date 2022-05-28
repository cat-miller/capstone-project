import StyledImage from '../components-styled/StyledImage';
import StyledCard from '../components-styled/StyledCard';
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
  const hue = (index % 360) * 18;
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
        <h2>{name}</h2>
        <ul>
          <li>Rarity: {rarity}</li>
          <li>Location: {location}</li>
          <li>Price: {price}</li>
          <li>Price-CJ: {priceCJ}</li>
        </ul>
        {detailedCard && showDetailedCard()}
      </div>
    </StyledCard>
  );
}
